import { notFound } from "next/navigation";

import "@/styles/mdx.css";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { DigitC } from "@/components/Digit";
import { buttonVariants } from "@/components/ui/button";
import { calculateReadingTime, cn, formatDateG } from "@/lib/utils";

import { mdxComponents } from "@/components/mdx/mdx-components";
import { getPostBySlugAsParams } from "@/lib/posts";
import { ChevronLeft, View } from "lucide-react";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogView from "../_components/BlogView";
import { Grain } from "../_components/Grain";
import TableOfContent from "../_components/Table-of-content";
import { redis } from "@/lib/redis";

export const dynamic = "force-dynamic";

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

async function getPostFromParams(params: any) {
  const slug = params?.slug?.join("/");
  const found = getPostBySlugAsParams(slug);

  if (!found) return null;

  const { meta, content } = found;
  const { content: mdxContent } = await compileMDX({
    source: content,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [],
        rehypePlugins: [],
      },
    },
    components: mdxComponents as any,
  });

  return { meta, mdxContent, rawContent: content } as const;
}

// export async function generateMetadata(
//   props: PostPageProps
// ): Promise<Metadata> {
//   const params = await props.params;
//   const post = await getPostFromParams(params);
//   console.log(post);

//   if (!post) {
//     return {};
//   }

//   const baseUrl = env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

//   const ogUrl = new URL("/api/og", baseUrl);
//   ogUrl.searchParams.set("heading", post.meta.title);
//   ogUrl.searchParams.set("type", "Blog Post");
//   ogUrl.searchParams.set("mode", "dark");

//   return {
//     title: post.meta.title,
//     description: post.meta.description,
//     authors: post.meta.authors.map((author) => ({
//       name: author,
//     })),
//     openGraph: {
//       title: post.meta.title,
//       description: post.meta.description,
//       type: "article",
//       url: new URL(post.meta.slug, baseUrl).toString(),
//       images: [
//         {
//           url: ogUrl.toString(),
//           width: 1200,
//           height: 630,
//           alt: post.meta.title,
//         },
//       ],
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.meta.title,
//       description: post.meta.description,
//       images: [ogUrl.toString()],
//     },
//   };
// }

// export async function generateStaticParams(): Promise<
//   PostPageProps["params"][]
// > {
//   return allPosts.map((post) => ({
//     slug: post.slugAsParams.split("/"),
//   }));
// }

export default async function PostPage(props: PostPageProps) {
  const params = await props.params;
  const post = await getPostFromParams(params);
  console.log("getPostBySlugAsParams", post);

  if (!post) {
    notFound();
  }
  const viewKey = ["pageviews", "blog", params?.slug?.join("/")].join(":");

  // let views = 0;
  // try {
  //   views = Number(await redis.get<number>(viewKey)) || 0;
  // } catch {
  //   views = 0; // optional: tolerate missing Redis env locally
  // }

  const authors = post.meta.authors;
  const views =
    (await redis.mget<number[]>(
      ["pageviews[0]", "blog", params?.slug?.join("/")].join(":")
    )) ?? 0;

  console.log(params?.slug?.join("/"), params?.slug, views[0]);

  return (
    <div className="flex justify-between blog-background-sm">
      <div dir="rtl" className=" w-full ">
        <div className=" text-sm sticky w-[80%] top-5 mt-32  xl:inline-flex mr-[25px] ">
          <TableOfContent heading={post.meta.headings} />
        </div>
      </div>

      <article
        dir="rtl"
        className="container relative max-w-3xl py-6 lg:py-10 blog-text "
      >
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute left-[-200px] top-14 hidden xl:inline-flex"
          )}
        >
          دیدن همه پست ها
          <ChevronLeft className="mr-2 size-4" />
        </Link>
        <div>
          <h1 className="my-2 blog-title inline-block font-heading text-xl md:text-4xl  leading-tight lg:text-5xl">
            {post.meta.title}
          </h1>
          <div className="flex  gap-4 mt-2 blog-text">
            {post.meta.date && (
              <time dateTime={post.meta.date}>
                {formatDateG(post.meta.date)}
              </time>
            )}
            <div className="flex gap-1">
              <View />
              <div className="  overflow-hidden   px-2 text-foreground">
                <DigitC value={views[0]} />
              </div>
            </div>
            <p> خواندن {calculateReadingTime(post.rawContent)} دقیقه</p>
          </div>
          {authors?.length ? (
            <div className="mt-4 flex space-x-4">
              {authors.map((author) => (
                <span key={author} className="flex items-center text-sm">
                  {author}
                </span>
              ))}
            </div>
          ) : null}
        </div>
        {post.meta.image && (
          <div className="relative">
            <Grain />

            <Image
              src={post.meta.image}
              alt={post.meta.title}
              width={720}
              height={405}
              className="my-8 rounded-md border bg-muted transition-colors"
              priority
            />
          </div>
        )}
        {post.rawContent}
        <hr className="mt-12" />
        <div className="flex justify-center py-6 lg:py-10">
          <Link
            href="/blog"
            className={cn(buttonVariants({ variant: "ghost" }))}
          >
            See all posts
            <ChevronLeft className="mr-2 size-4" />
          </Link>
        </div>
        <React.Suspense>
          <BlogView blogId={params?.slug?.join("/")} />
        </React.Suspense>
      </article>
      <div className=" w-full "></div>
    </div>
  );
}
