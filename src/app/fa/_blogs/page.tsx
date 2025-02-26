// @ts-nocheck
import { allPosts } from "contentlayer/generated";

import BlogCard from "@/components/blogHome/BlogCard";
import { redis } from "@/lib/redis";

export const metadata = {
  title: "Blog",
};
// export const dynamic = 'force-dynamic'
export default async function BlogPage() {
  const posts = allPosts
    .filter((post) => post.published)
    .sort((a, b) => b.date.localeCompare(a.date));

  const views = (
    await redis.mget<number[]>(
      ...posts.map((p) => ["pageviews", "blog", p.slug.split("/")[2]].join(":"))
    )
  ).reduce((acc, v, i) => {
    acc[posts[i].slug] = v ?? 0;
    return acc;
  }, {} as Record<string, number>);
  return (
    <div className="blog-background  min-h-dvh  ">
      <div
        dir="rtl"
        style={{
          minHeight: "100%",
          // background:
          //   "repeating-conic-gradient(#000 0 0.0001%,#0000 0 0.0002%) 60% 60%/3000px 3000px",
        }}
        className=" container max-w-4xl py-6 lg:py-10 blog-text"
      >
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
          <div className="flex-1 space-y-4">
            <h1 className="inline-block font-heading text-brand-foreground text-4xl tracking-tight lg:text-5xl ">
              آخرین مطالب
            </h1>
            {/* <p className='text-xl text-muted-foreground blog-title'>
              A blog built using Contentlayer. Posts are written in MDX.
            </p> */}
          </div>
        </div>
        <hr className="my-8" />
        {posts?.length ? (
          <div className="grid gap-10 sm:grid-cols-2">
            {posts.map((post, index) => (
              <BlogCard post={post} key={index} />
              //  {post.image && (
              //   <Image
              //     src={post.image}
              //     alt={post.title}
              //     width={804}
              //     height={452}
              //     className='rounded-md border bg-muted transition-colors'
              //     priority={index <= 1}
              //   />
              // )}
              // <h2 className='text-2xl font-extrabold'>{post.title}</h2>
              // {post.description && (
              //   <p className='text-muted-foreground'>{post.description}</p>
              // )}
              // {post.date && (
              //   <p className='text-sm text-muted-foreground'>
              //     {formatDate(post.date)}
              //   </p>
              // )}
              // <div className='flex gap-1'>
              //   <View />
              //   <div className='  overflow-hidden   px-2 text-foreground'>
              //     <DigitC value={views[post.slug]} />
              //   </div>
              // </div>
              // <Link href={post.slug} className='absolute inset-0'>
              //   <span className='sr-only'>View Article</span>
              // </Link>
            ))}
          </div>
        ) : (
          <p>No posts published.</p>
        )}
      </div>
    </div>
  );
}
