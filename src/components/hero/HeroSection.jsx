import React from "react";
import SearchForm from "./SearchForm";

function HeroSection() {
  return (
    <section className="relative w-full bg-[#f5f6fa] pb-24">

      <div className="relative max-w-[1440px] mx-auto">

        {/* Hero Image */}
        <div>
          <img
            src="/hero-image.png"
            alt="hero"
            className="w-full block"
          />
        </div>

        {/* Search Overlap */}
        <div className="
          absolute 
          left-1/2 
          -translate-x-1/2 
          w-[95%] 
          max-w-[1200px] 
          z-10
          bottom-10
          md:bottom-16
          lg:bottom-[155px]
        ">
          <SearchForm />
        </div>

      </div>

    </section>
  );
}

export default HeroSection;