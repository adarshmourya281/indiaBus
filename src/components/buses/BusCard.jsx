import React from "react";
function BusCard({ bus }) {
  return (
   <div
  className="
    relative
    w-full
    sm:w-[280px]
    lg:w-[300px]
    h-[320px]
    lg:h-[400px]
    rounded-2xl
    overflow-hidden
    cursor-pointer
    flex-shrink-0
    group
  "
>
      {/* Image */}
      <img
        src={bus.image}
        alt={bus.title}
        className="
          w-full
          h-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />

      {/* Overlay */}
      <div
        className="
          absolute
          bottom-0
          w-full
          h-[90px]
          px-5
          flex
          flex-col
          justify-center
          bg-gradient-to-t
          from-black/90
          via-black/60
          to-transparent
          text-white
        "
      >
        <h3 className="text-lg md:text-xl font-semibold">
          {bus.title}
        </h3>
        <p className="text-sm opacity-90">
          {bus.subtitle}
        </p>
      </div>
    </div>
  );
}

export default BusCard;