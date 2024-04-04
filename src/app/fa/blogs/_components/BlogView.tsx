import { analytics } from "@/lib/redis/analytics";
import React from "react";

async function BlogView({blogId}: {blogId: string}) {
    await analytics.trackBlog(blogId)
  return <div className="sr-only">Set view blog</div>;
}

export default BlogView;
