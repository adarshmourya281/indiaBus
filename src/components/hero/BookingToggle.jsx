import React, { useState } from "react";
function BookingToggle() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="flex items-center gap-6 font-medium text-sm md:text-base">

      {/* Book Now */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="oneway"
          checked={tripType === "oneway"}
          onChange={() => setTripType("oneway")}
          className="hidden"
        />
        <div
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
          ${tripType === "oneway" ? "border-[#ff8a00]" : "border-gray-400"}`}
        >
          {tripType === "oneway" && (
            <div className="w-2 h-2 bg-[#ff8a00] rounded-full"></div>
          )}
        </div>
        book Now
      </label>

      {/* Round Trip */}
      <label className="flex items-center gap-2 cursor-pointer">
        <input
          type="radio"
          value="roundtrip"
          checked={tripType === "roundtrip"}
          onChange={() => setTripType("roundtrip")}
          className="hidden"
        />
        <div
          className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
          ${tripType === "roundtrip" ? "border-[#ff8a00]" : "border-gray-400"}`}
        >
          {tripType === "roundtrip" && (
            <div className="w-2 h-2 bg-[#ff8a00] rounded-full"></div>
          )}
        </div>
        Round Trip
      </label>

    </div>
  );
}
export default BookingToggle;