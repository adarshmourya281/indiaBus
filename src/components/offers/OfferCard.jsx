import React from "react";
function OfferCard({ title, subtitle, buttonText, bgColor, image , isCircle}) {
  return (
    <div
      className="
        relative
        w-[360px]
        h-[193px]
        rounded-xl
        p-6
        overflow-hidden
        flex-shrink-0
      "
      style={{ backgroundColor: bgColor }}
    >
      {/* TEXT AREA (Fixed Width) */}
      <div className="w-[210px]">
        <h3 className="text-[13px] font-semibold mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-[12px] text-gray-600">
          {subtitle}
        </p>
      </div>

      {/* BUTTON (Fixed Position) */}
      <button
        className="
          absolute
          bottom-6
          left-6
          bg-white
          px-4
          py-2
          rounded-full
          text-[12px]
          font-semibold
        "
      >
        {buttonText}
      </button>

      {/* IMAGE AREA (Completely Independent) */}
      {/* IMAGE AREA */}
<div className="absolute bottom-4 right-4">
  {isCircle ? (
    <div className="w-[120px] h-[120px] rounded-full overflow-hidden flex items-center justify-center">
      <img
        src={image}
        alt="offer"
        className="w-full h-full object-cover"
      />
    </div>
  ) : (
    <img
      src={image}
      alt="offer"
      className="h-[110px] object-contain"
    />
  )}
</div>
    </div>
  );
}
export default OfferCard;