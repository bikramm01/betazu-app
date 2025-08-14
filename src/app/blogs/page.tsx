// src/app/blogs/page.tsx
import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";

// Type for frontmatter
interface BlogData {
  title: string;
  date: string;
  author: string;
  slug: string;
}

// Server component (no "use client")
export default function BlogsPage() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  const filenames = fs.readdirSync(blogsDir);

  const blogs: BlogData[] = filenames.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title || "No title",
      date: data.date || "No date",
      author: data.author || "Unknown",
      slug: filename.replace(/\.md$/, ""),
    };
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-8">All Blogs</h1>
      <ul className="flex flex-col gap-6">
        {blogs.map((blog) => (
          <li key={blog.slug} className="border-b border-gray-700 pb-4">
            <Link
              href={`/blogs/${blog.slug}`}
              className="text-xl font-semibold text-blue-400 hover:underline"
            >
              {blog.title}
            </Link>
            <p className="text-gray-400 text-sm">
              {blog.date} · {blog.author}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
