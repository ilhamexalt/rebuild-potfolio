import { Menu } from "@headlessui/react";
import Link from "next/link";
import React from "react";

export default function NavLinkHamburger({ href, children }) {
  return (
    <Menu.Items>
      <Link
        href={href}
        className="px-4 py-2 text-sm hover:bg-gray-100 text-gray-700 hover:text-black block"
      >
        {children}
      </Link>
    </Menu.Items>
  );
}
