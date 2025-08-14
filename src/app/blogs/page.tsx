import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

interface BlogData {
  title: string;
  date: string;
  author: string;
  content: string;
  slug: string;
}

export default function BlogsPage() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filenames = fs.readdirSync(blogsDir);

  const blogs: BlogData[] = filenames.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      title: data.title || "No title",
      date: data.date || "No date",
      author: data.author || "Unknown",
      content,
      slug: filename.replace(/\.md$/, ""),
    };
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">All Blogs & Vlogs</h1>
      <ul className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <li key={blog.slug} className="border-b border-gray-700 pb-4">
            <h2 className="text-xl font-semibold text-blue-400">{blog.title}</h2>
            <p className="text-gray-400 text-sm mb-2">{blog.date} · {blog.author}</p>
            <div className="prose prose-invert max-w-none">
              <ReactMarkdown>{blog.content}</ReactMarkdown>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
