// src/app/blogs/[slug]/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

// Frontmatter type
interface BlogData {
  title: string;
  date: string;
  author: string;
}

// Props type for App Router dynamic route
interface BlogPageProps {
  params: { slug: string };
}

// Make sure this is a **Server Component** (no "use client")
export default function BlogPage({ params }: BlogPageProps) {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filePath = path.join(blogsDir, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div className="p-10 text-white">Blog not found</div>;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data as BlogData;
  const content = matterResult.content;

  if (!data.title || !data.date || !data.author) {
    return <div className="p-10 text-white">Invalid blog frontmatter</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-400 mb-8">{data.date} · {data.author}</p>
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

// Next.js App Router expects this for static paths
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filenames = fs.readdirSync(blogsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
