import React, { useRef } from "react";
import "../../styles/offers/DiscountOffersSection.css";
import OfferCard from "./OfferCard";

function DiscountOffersSection() {

  const scrollRef = useRef();

  const offers = [
    {
      title: "Welcome Offer – FLAT 25% OFF",
      subtitle: "Valid once per user",
      buttonText: "CLAIM NOW",
      bgColor: "#D3E2FF",
      image: "/offers/offer1.png",
      imgStyle: { height: "120px", left: "0px" }
    },
    {
      title: "Daily Travel Saver – UP TO 20% OFF",
      subtitle: "Valid on weekdays",
      buttonText: "TRY NOW",
      bgColor: "#F6E6B4",
      image: "/offers/offer2.png",
       imgStyle: { height: "165px", right: "0px" }
    },
    {
      title: "Pay via UPI – Get ₹75 Cashback",
      subtitle: "Offer valid once per user per week",
      buttonText: "BOOK NOW",
      bgColor: "#CDEEDD",
      image: "/offers/offer3.png",
       imgStyle: { height: "165px", right: "0px" }
    },
    {
      title: "Group Booking Deal",
      subtitle: "Applicable for 5+ travellers",
      buttonText: "BOOK NOW",
      bgColor: "#F6D2D2",
      image: "/offers/offer4.png",
       imgStyle: { height: "165px", right: "0px" }
    },
    {
      title: "Festival Special Offer",
      subtitle: "Limited time deal",
      buttonText: "BOOK NOW",
      bgColor: "#E5D6FF",
      image: "/offers/offer5.png",
       imgStyle: { height: "165px", right: "0px" }
    },
  ];

  const scrollRight = () => {
  const container = scrollRef.current;

  const scrollAmount = 350;
  const maxScrollLeft =
    container.scrollWidth - container.clientWidth;

  // If already at end → go to start
  if (container.scrollLeft >= maxScrollLeft - 10) {
    container.scrollTo({
      left: 0,
      behavior: "smooth",
    });
  } else {
    container.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  }
};

  return (
    <section className="offers-section">
      <div className="offers-container">

        <div className="offers-header">
          <h2>Bus Booking Discount Offers</h2>
          <span className="view-all">View All →</span>
        </div>

        <div className="offers-wrapper">

          <div className="offers-scroll" ref={scrollRef}>
            {offers.map((offer, index) => (
              <OfferCard key={index} {...offer} />
            ))}
          </div>

          {/* Arrow Button */}
          <button className="scroll-btn" onClick={scrollRight}>
            →
          </button>

        </div>

      </div>
    </section>
  );
}

export default DiscountOffersSection;