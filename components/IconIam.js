import React from "react";

export default function IconIam({ href }) {
  return (
    <div className="flex items-center justify-center gap-x-2 mr-5">
      {/* prettier-ignore */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"> <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
      <h1 className="flex items-center text-lg md:text-lg lg:text-2xl font-display tracking-tighter uppercase font-semibold">
        <span className="text-indigo-400 mr-1"> Iam</span>
        <span className="text-black"> Project</span>
      </h1>
    </div>
  );
}
