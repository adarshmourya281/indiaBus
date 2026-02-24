import React, { useState } from "react";

function BookingToggle() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="flex flex-wrap items-center gap-6 font-medium text-sm md:text-base">

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="oneway"
          checked={tripType === "oneway"}
          onChange={() => setTripType("oneway")}
          className="accent-[#ff8a00] w-4 h-4"
        />
        Book Now
      </label>

      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="roundtrip"
          checked={tripType === "roundtrip"}
          onChange={() => setTripType("roundtrip")}
          className="accent-[#ff8a00] w-4 h-4"
        />
        Round Trip
      </label>

    </div>
  );
}

export default BookingToggle;