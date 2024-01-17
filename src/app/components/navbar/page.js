import Link from "next/link";
import React from "react";
import NavLink from "../NavLink";

const navItems = [
  {
    path: "/",
    title: "HOME",
  },
  {
    path: "/about",
    title: "ABOUT",
  },
  {
    path: "/projects",
    title: "PROJECTS",
  },
  {
    path: "/blogs",
    title: "BLOGS",
  },
  {
    path: "/dashboard",
    title: "DASHBOARD",
  },
];

const Navbar = () => {
  return (
    <div className="flex items-center justify-between container mt-5">
      <h1 className="text-3xl font-bold text-red-500">NEXT HERO</h1>
      <ul className="flex items-center justify-center gap-8">
        {navItems.map(({ path, title }) => (
          <NavLink exact={path === '/'} activeClassName='text-red-500' href={path} key={path}>
            <li>{title}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
