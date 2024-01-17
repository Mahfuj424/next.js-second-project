import Link from "next/link";
import React from "react";

const dashboardItems = [
  {
    path: "/dashboard/manage-products",
    title: "Manage Product",
  },
  {
    path: "/dashboard/add-products",
    title: "Add Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <div className="w-3/12 bg-slate-500 h-screen">
      <h1 className="text-3xl font-bold text-white text-center mt-5">DASHBOARD</h1>
      <ul className="mt-5 ms-10">
        {dashboardItems.map(({ path, title }) => (
          <Link href={path} key={path}>
            <li className="text-white">{title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
