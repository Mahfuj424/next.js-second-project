import SingleBlogsData from "@/utils/SingleBlogsData";
import React from "react";

const DynamicPage =async ({ params }) => {
  const { id, title, body } =await SingleBlogsData(params.id);
  console.log(id, title, body);
  return (
    <div className="mt-10 max-w-screen-xl mx-auto">
      <div className="border px-5 mx-3 border-red-500 py-3">
        <h1 className="text-xl font-semibold">
          {id}: {title}
        </h1>
        <p>Description: {body}</p>
      </div>
    </div>
  );
};

export default DynamicPage;
