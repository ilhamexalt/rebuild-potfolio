/* eslint-disable react/no-children-prop */
import React from "react";
import Hamburger from "../components/Hamburger";
import Navbar from "../components/Navbar";
import App from "../layouts/App";
import Footer from "../layouts/Footer";

export default function About(children) {
  return (
    <div>
      <Hamburger />
      <Navbar />
      <div className="container mt-8 md:px-24 md:mt-16">
        <h1>About</h1>
      </div>
      <div className="flex justify-center mt-24">
        <Footer />
      </div>
    </div>
  );
}

About.getLayout = (page) => <App title="About" children={page} />;
