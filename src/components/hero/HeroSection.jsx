import React from "react";
import SearchForm from "./SearchForm";

function HeroSection() {
  return (
    <section className="w-full bg-[#f5f6fa]">

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Hero Image */}
        <img
          src="/hero-image.png"
          alt="hero"
          className="w-full h-auto block"
        />

        {/* Search Form */}
        <div className="
  w-full
  -mt-20
  sm:-mt-24
  md:-mt-28
  lg:-mt-72
  xl:-mt-80
  2xl:-mt-[22rem]
  relative
  z-10
">
          <SearchForm />
        </div>

      </div>
    </section>
  );
}

export default HeroSection;