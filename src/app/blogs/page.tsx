import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

interface Blog {
  slug: string;
  title: string;
  date: string;
  author: string;
}

export default function BlogPage() {
  const blogsDir = path.join(process.cwd(), "src", "blogs");
  if (!fs.existsSync(blogsDir)) return <div>No blogs found.</div>;

  const filenames = fs.readdirSync(blogsDir);

  const blogs: Blog[] = filenames.map((filename) => {
    const filePath = path.join(blogsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug: filename.replace(/\.md$/, ""),
      title: data.title,
      date: data.date,
      author: data.author,
    };
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 bg-black text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-6">Blogs</h1>
      <p className="text-gray-400 mb-10">
        Insights, tutorials, and stories from Betazu AI.
      </p>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="block p-4 border border-gray-700 rounded-lg hover:bg-gray-900 transition"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500">{blog.date} · {blog.author}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
