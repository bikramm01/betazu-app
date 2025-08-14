import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { notFound } from "next/navigation";

// Type for frontmatter
interface BlogData {
  title: string;
  date: string;
  author: string;
}

// Next.js 15 compatible props
interface Props {
  params: { slug: string };
}

export default function BlogPage({ params }: Props) {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filePath = path.join(blogsDir, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound(); // Recommended Next.js 15 way for 404
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const matterResult = matter(fileContents);
  const data = matterResult.data as BlogData;
  const content = matterResult.content;

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

// Next.js 15 static params
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filenames = fs.readdirSync(blogsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
