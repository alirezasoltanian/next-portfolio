import { analytics } from "@/lib/redis/analytics";
import React from "react";

async function BlogView({ blogId }: { blogId: string }) {
  try {
    await analytics.trackBlog(blogId);
  } catch (_err) {
    // swallow errors in dev to avoid breaking stream
  }
  return <div className="sr-only">Set view blog</div>;
}

export default BlogView;
