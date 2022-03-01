import React from "react";

export default function Layout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 antialiased font-sans tracking-tighter">
      {children}
    </div>
  );
}
