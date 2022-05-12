import React from "react";
import MainCarousel from "./Carousel";

function Hero() {
  return (
    <header className="masthead">
      <div className="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
        <MainCarousel />
      </div>
    </header>
  );
}

export default Hero;
