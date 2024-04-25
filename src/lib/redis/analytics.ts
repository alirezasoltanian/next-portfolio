import { headers } from "next/headers";
import { parse } from "date-fns";

import { redis } from "@/lib/redis";

import { getDate } from "../utils";
import { rateLimiter } from "./rate-limiter";

type AnalyticsArgs = {
  retention?: number;
};

type TrackOptions = {
  persist?: boolean;
};

interface Event {
  page: string;
  country: string;
}
export class Analytics {
  private retention: number = 60 * 60 * 24 * 7;

  constructor(opts?: AnalyticsArgs) {
    if (opts?.retention) this.retention = opts.retention;
  }
  async track(namespace: string, event: Event, opts?: TrackOptions) {
    try {
      const headersList = headers();

      const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";
      const buf = await crypto.subtle.digest(
        "SHA-256",
        new TextEncoder().encode(ip)
      );
      const hash = Array.from(new Uint8Array(buf))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
      const { success } = await rateLimiter.limit(hash + event.page);
      if (success) {
        let key = `analytics::${namespace}`;

        if (!opts?.persist) {
          key += `::${getDate()}`;
        }

        // db call to persist this event

        await redis.hincrby(key, JSON.stringify(event), 1);
        if (!opts?.persist) await redis.expire(key, this.retention);
      }
    } catch (error) {
      return { error: "something wron" };
    }
  }

  async retrieveDays(namespace: string, nDays: number) {
    type AnalyticsPromise = ReturnType<typeof analytics.retrieve>;
    const promises: AnalyticsPromise[] = [];

    for (let i = 0; i < nDays; i++) {
      const formattedDate = getDate(i);
      const promise = analytics.retrieve(namespace, formattedDate);
      promises.push(promise);
    }

    const fetched = await Promise.all(promises);

    const data = fetched.sort((a, b) => {
      if (
        parse(a.date, "dd/MM/yyyy", new Date()) >
        parse(b.date, "dd/MM/yyyy", new Date())
      ) {
        return 1;
      } else {
        return -1;
      }
    });

    return data;
  }

  async retrieve(namespace: string, date: string) {
    const res = await redis.hgetall<Record<string, string>>(
      `analytics::${namespace}::${date}`
    );

    return {
      date,
      events: Object.entries(res ?? []).map(([key, value]) => ({
        [key]: Number(value),
      })),
    };
  }
  async trackBlog(slug: string) {
    try {
      const headersList = headers();

      const ip = headersList.get("x-forwarded-for") ?? "127.0.0.1";
      if (ip) {
        const buf = await crypto.subtle.digest(
          "SHA-256",
          new TextEncoder().encode(ip)
        );
        const hash = Array.from(new Uint8Array(buf))
          .map((b) => b.toString(16).padStart(2, "0"))
          .join("");
        const isNew = await redis.set(
          ["deduplicate", hash, slug].join(":"),
          true,
          {
            nx: true,
            ex: 24 * 60 * 60,
          }
        );
        if (!isNew) {
          return { success: "duduplicate" };
        }
        console.log(isNew, slug);

        await redis.incr(["pageviews", "blog", slug].join(":"));
        return { success: "increment successfully" };
      }
    } catch (error) {
      return { error: "something wron" };
    }
  }
}

export const analytics = new Analytics();
