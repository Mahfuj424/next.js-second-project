import Link from "next/link";
import React from "react";

// const blogs = [
//   {
//     id: 1,
//     year: 2023,
//     title: "blog 1",
//   },
//   {
//     id: 2,
//     year: 2023,
//     title: "blog 2",
//   },
//   {
//     id: 3,
//     year: 2023,
//     title: "blog 3",
//   },
//   {
//     id: 4,
//     year: 2023,
//     title: "blog 4",
//   },
//   {
//     id: 5,
//     year: 2023,
//     title: "blog 5",
//   },
// ];

const BlogsPage = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts = await res.json();

  return (
    <div className="container mt-5">
      {posts.map(({ id, body, title }) => (
        <div
          className="block border border-blue-500 rounded-md p-5 mb-5"
          key={id}
        >
          <div>
            <div>
              <h1>{id} Title: {title}</h1>
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
