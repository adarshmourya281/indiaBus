import React from "react";

function OfferCard({ title, subtitle, buttonText, bgColor, image }) {
  return (
    <div
      className="
        min-w-[280px]
        sm:min-w-[300px]
        lg:min-w-[320px]
        h-[190px]
        rounded-xl
        p-5
        flex
        justify-between
        items-center
        flex-shrink-0
        overflow-hidden
      "
      style={{ backgroundColor: bgColor }}
    >
      {/* Content */}
      <div className="max-w-[55%]">
        <h3 className="text-sm md:text-base font-semibold mb-1">
          {title}
        </h3>

        <p className="text-xs md:text-sm text-gray-600 mb-4">
          {subtitle}
        </p>

        <button className="bg-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-md transition">
          {buttonText}
        </button>
      </div>

      {/* Image */}
      <div className="w-[45%] h-full flex items-end justify-end">
        <img
          src={image}
          alt="offer"
          className="max-h-[140px] object-contain"
        />
      </div>
    </div>
  );
}

export default OfferCard;