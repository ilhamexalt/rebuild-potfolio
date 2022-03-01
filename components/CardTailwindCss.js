import React from "react";

export default function CardTailwindCss() {
  return (
    <div className="max-w-lg">
      <div className="bg-white shadow-sm border rounded-xl overflow-hidden">
        <header className="border-b px-4 py-2.5 bg-gray-50/50 flex justify-between items-center">
          <div>
            <h1 className="font-medium">Card Title</h1>
            <span className="text-gray-500">Description</span>
          </div>
          <a
            href="#"
            className="bg-blue-500  rounded-xl text-white px-3 py-1 font-semibold text-sm hover:bg-blue-400"
          >
            Push
          </a>
        </header>
        <section className="px-4 py-2.5 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          totam harum eligendi, velit et ducimus maxime sunt mollitia odit. Ab
          labore veritatis eveniet obcaecati voluptatum distinctio accusamus
          impedit tempore?
        </section>
        <footer className="border-t px-4 py-2.5 text-gray-500 bg-gray-50/50 text-right">
          Lorem ipsum dolor sit amet.
        </footer>
      </div>
    </div>
  );
}
