import { env } from "@/env";
import { type ClassValue, clsx } from "clsx";
import { format, subDays } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncate(str: string, length: number) {
  return str.length > length ? `${str.substring(0, length)}...` : str;
}
export function absoluteUrl(path: string) {
  return `${env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {}
) {
  return new Intl.DateTimeFormat("en-US", {
    month: options.month ?? "long",
    day: options.day ?? "numeric",
    year: options.year ?? "numeric",
    ...options,
  }).format(new Date(date));
}

export function calculateReadingTime(mdxContent: any) {
  // Define the average reading speed (words per minute)
  const wordsPerMinute = 200;
  // Strip MDX/HTML tags and count the words
  // Basic stripping of HTML tagsl
  const text = mdxContent.replace(/<\/?[^>]+{>|$}/g, "");
  const wordCount = text
    .split(/\s+/)
    .filter((word: any) => word.length > 0).length;

  // Calculate reading time
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  1;
  return readingTime;
}

export const getDate = (sub: number = 0) => {
  const dateXDaysAgo = subDays(new Date(), sub);

  return format(dateXDaysAgo, "dd/MM/yyyy");
};

export function formatDateG(input: string | number | Date): string {
  console.log(input);

  const date = new Date(input);
  const now = new Date();
  const seconds = Math.floor((now - date) / 1000);
  let interval = Math.floor(seconds / 31536000);

  if (interval >= 1) {
    return interval + "  سال پیش";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval >= 1) {
    return interval + " ماه پیش";
  }
  interval = Math.floor(seconds / 86400);
  if (interval >= 1) {
    return interval + "روز پیش";
  }
  interval = Math.floor(seconds / 3600);
  if (interval >= 1) {
    return interval + "ساعت پیش";
  }
  interval = Math.floor(seconds / 60);
  if (interval >= 1) {
    return interval + "دقیقه پیش";
  }
  return Math.floor(seconds) + "ثانیه پیش";
  // const diffInWeeks = Math.floor(diffInDays / 7);
  // return `${diffInWeeks} week${diffInWeeks === 1 ? '' : 's'} ago`;
  // return date.toLocaleDateString("en-US", {
  //   month: "long",
  //   day: "numeric",
  //   year: "numeric",
  // });
}
