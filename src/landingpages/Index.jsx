import React from "react";
import About from "./About";
import Hero from "./Hero";
import Navigation from "./Navigation";
import "./landing.css";
import Footer from "./Footer";

export default function Index() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="parallax1"> </div>
      <About /> <div className="parallax2"> </div>
      <Footer />
    </>
  );
}
