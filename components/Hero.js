import React from "react";
import Image from "next/image";
import Me from "../public/img/me.png";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="flex">
      <div className="w-full md:w-4/5 p-4">
        <div className="font-semibold md:text-4xl lg:text-6xl text-2xl tracking-wide md:space-y-4 mb-5 md:mb-10">
          <h1>Hi,</h1>
          <h2>
            I{"'"}am <span className="text-indigo-400">Ilham</span>
          </h2>
          <h2>Frontend Developer</h2>
        </div>
        <Button>Contact</Button>
      </div>
      <div className="flex items-center">
        <Image src={Me} width={236} height={300} alt="My Photo" />
      </div>
    </div>
  );
};

export default Hero;
