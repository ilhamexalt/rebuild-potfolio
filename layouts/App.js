// Belajar Layout dan Komponen Berulang
import Head from "next/head";
import React from "react";

export default function App({ title = "Home", children }) {
  return (
    <div className="min-h-screen antialiased tracking-tighter text-gray-800">
      <Head>
        <title>{title}</title>
      </Head>
      <div>{children}</div>
    </div>
  );
}
