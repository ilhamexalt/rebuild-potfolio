/* eslint-disable react/no-children-prop */
import React from "react";
import App from "../layouts/App";
import Images from "../components/Images";
import imgWork5 from "../public/img/work5.jpg";
import imgWork6 from "../public/img/work6.jpg";
import imgWork7 from "../public/img/work7.jpg";
import imgWork8 from "../public/img/work8.png";
import imgWork9 from "../public/img/work9.png";
import imgWork10 from "../public/img/work10.png";
import imgWork11 from "../public/img/work11.png";
import imgWork12 from "../public/img/work12.png";
import imgWork13 from "../public/img/work13.png";
import imgWork14 from "../public/img/work14.png";
import Hamburger from "../components/Hamburger";
import Navbar from "../components/Navbar";

export default function Project(props) {
  return (
    <div>
      <div className="bg-gradient-to-t from-gray-900 via-slate-800 to-gray-900">
        <Hamburger />
        <Navbar />
        <div className="container">
          <div className="gap-x-5 gap-y-5 justify-center grid grid-cols-1 grid-rows-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <Images image={imgWork5} />
            <Images image={imgWork6} />
            <Images image={imgWork7} />
            <Images image={imgWork8} />
            <Images image={imgWork9} />
            <Images image={imgWork10} />
            <Images image={imgWork11} />
            <Images image={imgWork12} />
            <Images image={imgWork13} />
            <Images image={imgWork14} />
          </div>
        </div>
      </div>
    </div>
  );
}
Project.getLayout = (page) => <App title="Project" children={page} />;
