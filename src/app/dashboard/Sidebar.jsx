import Link from "next/link";
import React from "react";
import NavLink from "../components/NavLink";

const dashboardItems = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
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
      <h1 className="text-3xl font-bold text-white text-center mt-5">
        DASHBOARD
      </h1>
      <ul className="mt-5 ms-10">
        {dashboardItems.map(({ path, title }) => (
          <li key={path}>
            <NavLink
              exact
              activeClassName="text-red-500"
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
