import React from "react";

export default function Button({ children, className, ...props }) {
  return (
    <button
      {...props}
      className={`${
        className
          ? className
          : "bg-indigo-400 focus:ring-blue-100 hover:bg-indigo-500"
      } border border-transparent px-4 py-2.5 text-sm font-medium transition duration-300 text-white rounded-md`}
    >
      {children}
    </button>
  );
}
