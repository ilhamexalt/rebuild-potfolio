import React from "react";

export default function Checkbox({ label, forInput, ...props }) {
  return (
    <div className="flex items-center gap-x-1">
      <input
        type="checkbox"
        className="text-indigo-500 border-gray-300 rounded focus:ring-0 focus:border-indigo-300"
        {...props}
      />
      <label className="ml-2 select-none focus:outline-none" htmlFor={forInput}>
        {label}
      </label>
    </div>
  );
}
