import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

import BlogCard from "./BlogCard";
import { ChevronLeft } from "lucide-react";

export default function BlogHome() {
  const posts = getAllPosts()
    .slice(0, 3)
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  // const blogs = await db.post.findMany()
  return (
    <div className="min-h-[100vh] w-[100%]  px-12">
      <div className="mb-5 flex justify-between ">
        <p className="mr-12 text-xl font-bold">بلاگ</p>
        <Link
          href="/blog"
          className={cn(buttonVariants({ variant: "ghost" }), " ml-12 ")}
        >
          موارد بیشتر
          <ChevronLeft />
        </Link>
      </div>
      <div className="light-bg-custom-gradient h-[1px] dark:bg-custom-gradient" />
      <div className="mt-10 flex flex-wrap justify-center  gap-5">
        {posts?.length &&
          posts.map((post, index) => (
            <div key={post.slug}>
              <BlogCard post={post} />
            </div>
          ))}
      </div>
    </div>
  );
}
