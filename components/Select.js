import React from "react";

export default function Select({ children, ...props }) {
  return (
    <div>
      <select
        className="w-full rounded-xl focus:ring focus:ring-indigo-200 focus:border-indigo-200 transition duration-200 shadow-sm"
        {...props}
      >
        {children}
      </select>
    </div>
  );
}
