import React from "react";
import "../../styles/offers/OfferCard.css";

function OfferCard({ title, subtitle, buttonText, bgColor, image }) {
  return (
    <div className="offer-card" style={{ backgroundColor: bgColor }}>
      
      <div className="offer-content">
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <button>{buttonText}</button>
      </div>

      <div className="offer-image">
       <img src={image} alt="offer" />
      </div>

    </div>
  );
}

export default OfferCard;