import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

interface BlogParams {
  slug: string;
}

// Server component: fs is allowed
export default function BlogPost({ params }: { params: BlogParams }) {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filePath = path.join(blogsDir, `${params.slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <div className="p-10 text-white">Blog not found</div>;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

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

// Optional: Generate static params so Next.js knows which slugs exist
export async function generateStaticParams() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filenames = fs.readdirSync(blogsDir);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.md$/, ""),
  }));
}
