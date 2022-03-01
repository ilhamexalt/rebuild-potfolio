import React from "react";
import Image from "next/image";

export default function Images(props) {
  return (
    <div className="rounded overflow-hidden focus:outline-none flex justify-center shadow-lg">
      <Image
        className=" hover:scale-125 transition-all duration-300"
        src={props.image}
        alt="My Project"
        width={640}
        height={426}
      />
    </div>
  );
}
