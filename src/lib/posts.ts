import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPostFrontMatter {
  title: string;
  description?: string;
  date: string;
  published?: boolean;
  image: string;
  authors: string[];
  toc?: boolean;
}

export interface BlogPostMeta extends BlogPostFrontMatter {
  slug: string; // e.g. /blog/my-post
  slugAsParams: string; // e.g. my-post or nested/path
  headings: string[];
}

function walkDirRecursive(dirPath: string): string[] {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkDirRecursive(fullPath));
    } else if (entry.isFile() && fullPath.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
  return files;
}

function filePathToSlugs(filePath: string): {
  slug: string;
  slugAsParams: string;
} {
  // filePath like: <cwd>/src/content/blog/some/path/post.mdx
  const rel = path.relative(
    path.join(process.cwd(), "src", "content"),
    filePath
  ); // blog/some/path/post.mdx
  const withoutExt = rel.replace(/\\/g, "/").replace(/\.mdx$/, "");
  const slug = `/${withoutExt}`; // /blog/some/path/post
  const slugAsParams = withoutExt.split("/").slice(1).join("/"); // remove leading 'blog'
  return { slug, slugAsParams };
}

function extractHeadingsFromContent(raw: string): string[] {
  const regXHeader = /<TitleATag>([^<]+)<\/TitleATag>/g;
  const titles: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = regXHeader.exec(raw)) !== null) {
    const heading = match[1];
    if (heading) titles.push(heading);
  }
  return titles;
}

export function getAllPosts(): BlogPostMeta[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = walkDirRecursive(CONTENT_DIR);
  const posts: BlogPostMeta[] = files.map((file) => {
    const raw = fs.readFileSync(file, "utf8");
    const { data } = matter(raw);
    const { slug, slugAsParams } = filePathToSlugs(file);
    const headings = extractHeadingsFromContent(raw);
    const fm = data as Partial<BlogPostFrontMatter>;
    return {
      title: fm.title ?? "Untitled",
      description: fm.description,
      date: fm.date as string,
      published: fm.published ?? true,
      image: fm.image as string,
      authors: (fm.authors as string[]) ?? [],
      toc: fm.toc,
      slug,
      slugAsParams,
      headings,
    };
  });
  return posts;
}

export function getPostBySlugAsParams(
  slugAsParams: string
): { meta: BlogPostMeta; content: string } | null {
  if (!fs.existsSync(CONTENT_DIR)) return null;
  const files = walkDirRecursive(CONTENT_DIR);
  for (const file of files) {
    const { slugAsParams: current } = filePathToSlugs(file);
    if (current === slugAsParams) {
      const raw = fs.readFileSync(file, "utf8");
      const { data, content } = matter(raw);
      const { slug } = filePathToSlugs(file);
      const fm = data as Partial<BlogPostFrontMatter>;
      const headings = extractHeadingsFromContent(raw);
      const meta: BlogPostMeta = {
        title: fm.title ?? "Untitled",
        description: fm.description,
        date: fm.date as string,
        published: fm.published ?? true,
        image: fm.image as string,
        authors: (fm.authors as string[]) ?? [],
        toc: fm.toc,
        slug,
        slugAsParams,
        headings,
      };
      return { meta, content };
    }
  }
  return null;
}
