/* eslint-disable react/no-children-prop */
import Hamburger from "../components/Hamburger";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import App from "../layouts/App";
import Footer from "../layouts/Footer";

export default function Home() {
  return (
    <div>
      <Hamburger />
      <Navbar />
      <div className="container mt-8 md:px-24 md:mt-16">
        <Hero />
      </div>
      <div className="flex justify-center mt-24">
        <Footer />
      </div>
    </div>
  );
}

Home.getLayout = (page) => <App title="Home" children={page} />;
