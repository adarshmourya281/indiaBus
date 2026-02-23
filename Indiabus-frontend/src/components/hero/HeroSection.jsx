import React from "react";
import "../../styles/hero/HeroSection.css";
import SearchForm from "./SearchForm";

function HeroSection() {
  return (
    <section className="hero">
  <div className="hero-container">
    
    <div className="hero-image">
      <img src="/hero-image.png" alt="hero" />
    </div>

    <div className="hero-search">
      <SearchForm />
    </div>

  </div>
</section>

  );
}

export default HeroSection;
