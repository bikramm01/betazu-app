import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Metadata } from "next";

interface BlogData {
  title: string;
  date: string;
  author: string;
}

interface PageParams {
  slug: string;
}

export default function BlogPost({ params }: { params: PageParams }) {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filePath = path.join(blogsDir, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div className="p-10 text-white">Blog not found</div>;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);

  // Type-safe cast of frontmatter
  const data = matterResult.data as BlogData;
  const content = matterResult.content;

  // Optional runtime check
  if (!data.title || !data.date || !data.author) {
    return <div className="p-10 text-white">Invalid blog frontmatter</div>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-2">{data.title}</h1>
      <p className="text-gray-400 mb-8">
        {data.date} · {data.author}
      </p>
      <div className="prose prose-invert max-w-none">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}

// Generate static paths for App Router
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filenames = fs.readdirSync(blogsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
