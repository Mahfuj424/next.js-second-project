import Link from "next/link";
import React from "react";

const blogs = [
  {
    id: 1,
    year: 2023,
    title: "blog 1",
  },
  {
    id: 2,
    year: 2023,
    title: "blog 2",
  },
  {
    id: 3,
    year: 2023,
    title: "blog 3",
  },
  {
    id: 4,
    year: 2023,
    title: "blog 4",
  },
  {
    id: 5,
    year: 2023,
    title: "blog 5",
  },
];

const BlogsPage = () => {
  return (
    <div className="container mt-5">
      {blogs.map(({ id, year, title }) => (
        <Link className="block border border-blue-500 rounded-md p-5 mb-5" key={id} href={{
            pathname: `/blogs/${year}/${id}`,
            query:{
                title: title,
            }
        }}>
          {title}
        </Link>
      ))}
    </div>
  );
};

export default BlogsPage;
