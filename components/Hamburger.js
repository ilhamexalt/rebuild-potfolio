import React, { Fragment } from "react";
import NavLinkHamburger from "./NavLinkHamburger";
import { Menu, Transition } from "@headlessui/react";
import IconIam from "./IconIam";

export default function Hamburger() {
  return (
    <Menu
      as={"div"}
      className="flex md:hidden items-center justify-between py-4 px-4"
    >
      <IconIam />

      <Menu.Button className="focus:outline-none">
        {/* prettier-ignore */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"/>
      </svg>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          as="div"
          className="bg-gray-50 z-10 absolute right-1 mr-4 top-2 mt-10 py-1 rounded-lg w-40 overflow-hidden"
        >
          <NavLinkHamburger href="/">
            <a className="px-4 py-2 text-sm hover:bg-indigo-400 text-gray-700 hover:text-white block">
              Home
            </a>
          </NavLinkHamburger>
          <NavLinkHamburger href="/about">
            <a className="px-4 py-2 text-sm hover:bg-indigo-400 text-gray-700 hover:text-white block">
              About
            </a>
          </NavLinkHamburger>
          <NavLinkHamburger href="/skills">
            <a className="px-4 py-2 text-sm hover:bg-indigo-400 text-gray-700 hover:text-white block">
              Skills
            </a>
          </NavLinkHamburger>
          <NavLinkHamburger href="#">
            <a className="px-4 py-2 text-sm hover:bg-indigo-400 text-gray-700 hover:text-white block">
              Project
            </a>
          </NavLinkHamburger>
          <NavLinkHamburger href="#">
            <a className="px-4 py-2 text-sm hover:bg-indigo-400 text-gray-700 hover:text-white block">
              Contact
            </a>
          </NavLinkHamburger>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
