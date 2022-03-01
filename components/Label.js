import React from "react";

export default function Label({ forInput, children }) {
  return (
    <div>
      <label
        className="block mb-1 font-medium text-sm text-gray-600 capitalize"
        htmlFor={forInput}
      >
        {children}
      </label>
    </div>
  );
}
