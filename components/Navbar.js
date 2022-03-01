import React from "react";
import IconIam from "./IconIam";
import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <div className="hidden md:block">
      <nav className="container flex items-center justify-between shadow-sm py-4 px-24">
        <IconIam />
        <div className="flex items-center gap-x-2 text-gray-900">
          <NavLink href="/">
            <a className="lg:text-base md:text-sm font-medium px-4 py-2 hover:bg-indigo-400  hover:text-white rounded-lg">
              Home
            </a>
          </NavLink>
          <NavLink href="/about">
            <a className="lg:text-base md:text-sm font-medium px-4 py-2 hover:bg-indigo-400  hover:text-white rounded-lg">
              About
            </a>
          </NavLink>
          <NavLink href="/skills">
            <a className="lg:text-base md:text-sm font-medium px-4 py-2 hover:bg-indigo-400  hover:text-white rounded-lg">
              Skills
            </a>
          </NavLink>
          <NavLink href="#">
            <a className="lg:text-base md:text-sm font-medium px-4 py-2  hover:bg-indigo-400 hover:text-white rounded-lg">
              Project
            </a>
          </NavLink>
          <NavLink href="#">
            <a className="lg:text-base md:text-sm font-medium px-4 py-2  hover:bg-indigo-400 hover:text-white rounded-lg">
              Contact
            </a>
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
