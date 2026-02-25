import React, { useRef } from "react";
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
    },
    {
      title: "Daily Travel Saver – UP TO 20% OFF",
      subtitle: "Valid on weekdays",
      buttonText: "TRY NOW",
      bgColor: "#FFF8D3",
      image: "/offers/offer2.png",
    },
    {
      title: "Pay via UPI – Get ₹75 Cashback",
      subtitle: "Offer valid once per user per week",
      buttonText: "BOOK NOW",
      bgColor: "#D3FFEA",
      image: "/offers/offer3.png",
    },
    {
      title: "Group Booking Deal",
      subtitle: "Applicable for 5+ travellers",
      buttonText: "BOOK NOW",
      bgColor: "#f8c4c4",
      image: "/offers/offer4.png",
    },
    {
      title: "Festival Special Offer",
      subtitle: "Limited time deal",
      buttonText: "BOOK NOW",
      bgColor: "#E5D6FF",
      image: "/offers/offer5.png",
    },
  ];

  const scrollRight = () => {
    const container = scrollRef.current;
    const scrollAmount = 350;

    if (
      container.scrollLeft >=
      container.scrollWidth - container.clientWidth - 10
    ) {
      container.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Bus Booking Discount Offers
          </h2>

          <span className="text-[#ff8a00] font-medium cursor-pointer">
            View All →
          </span>
        </div>

        {/* Scroll Wrapper */}
        <div className="relative">

          {/* Scroll Container */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {offers.map((offer, index) => (
  <OfferCard
    key={index}
    {...offer}
    isCircle={index === 0}
  />
))}
          </div>

          {/* Arrow Button (Desktop Only) */}
          <button
            onClick={scrollRight}
            className="hidden lg:flex absolute right-[-25px] top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center text-xl"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default DiscountOffersSection;