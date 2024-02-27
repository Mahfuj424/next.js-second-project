import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero"
}

const BlogsPage = async () => {
  const blogs = await loadBlogsData();

  return (
    <div className="container mt-5">
      {blogs.map(({ id, body, title }) => (
        <div
          className="block border border-red-500 rounded-md p-5 mb-5"
          key={id}
        >
          <div>
            <div>
              <h1 className="text-xl font-semibold">
                {id} {title}
              </h1>
              <p>Description: {body}</p>
            </div>
            <Link className="inline-block mt-3" href={`/blogs/${id}`}>
              <button className="px-3 py-1 text-white bg-red-500">
                Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
