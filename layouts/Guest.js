// Belajar Layout dan Komponen Berulang
import Head from "next/head";
import React from "react";

export default function Guest({ title, children, cardClassName, header }) {
  return (
    <div className="antialiased tracking-tighter text-gray-800 flex items-center justify-center md:min-h-screen md:bg-gray-100">
      <Head>
        <title>{title}</title>
      </Head>
      <div
        className={`${
          cardClassName ? cardClassName : "lg:w-1/3"
        } w-full md:w-2/2`}
      >
        <div className="bg-white md:rounded-2xl md:shadow shadow-sm outline-none md:border">
          <div className="px-6 py-3 border-b bg-indigo-200/50">
            <h1 className="font-medium capitalize text-center">{header}</h1>
          </div>
          <div className="p-5">{children}</div>
        </div>
      </div>
    </div>
  );
}
