import Link from "next/link";
import React from "react";

export default function NavLink({ className, href, children }) {
  return (
    <Link
      href={href}
      className={`${
        className ? className : ""
      } lg:text-base md:text-sm font-medium px-4 py-2 text-gray-300 hover:text-white hover:bg-indigo-400/40 rounded-lg`}
    >
      {children}
    </Link>
  );
}
