import React, { useRef, useState } from "react";

import busIcon from "../../assets/icons/bus.png";
import calendarIcon from "../../assets/icons/calendar.png";
import swapIcon from "../../assets/icons/swap.png";

function SearchForm() {

  const dateRef = useRef(null);

  const [dateType, setDateType] = useState("text");
  const [travelDate, setTravelDate] = useState("");

  // 👇 merged state from BookingToggle
  const [tripType, setTripType] = useState("oneway");

  const openCalendar = () => {
    setDateType("date");
    setTimeout(() => {
      dateRef.current?.showPicker?.();
    }, 0);
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 md:p-8">

      {/* ✅ Booking Toggle (Merged Here) */}
      <div className="flex items-center gap-6 font-medium text-sm md:text-base mb-6">

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
          Book Now
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

      {/* Inputs Container */}
      <div className="flex flex-col lg:flex-row lg:items-center border border-gray-200 rounded-xl overflow-hidden bg-white">

        {/* From */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200">
          <img src={busIcon} alt="bus" className="w-7 h-7 object-contain" />
          <input
            type="text"
            placeholder="From Station"
            className="w-full outline-none text-sm md:text-base"
          />
        </div>

        {/* Swap */}
        <div className="flex justify-center items-center py-4 lg:py-0 lg:w-[80px] border-b lg:border-b-0 lg:border-r border-gray-200">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
            <img
              src={swapIcon}
              alt="swap"
              className="w-5 h-5 cursor-pointer"
            />
          </div>
        </div>

        {/* To */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200">
          <img src={busIcon} alt="bus" className="w-7 h-7 object-contain" />
          <input
            type="text"
            placeholder="To Station"
            className="w-full outline-none text-sm md:text-base"
          />
        </div>

        {/* Date */}
        <div className="flex items-center gap-3 px-5 py-4 flex-1 border-b lg:border-b-0 lg:border-r border-gray-200 relative">

          <img
            src={calendarIcon}
            alt="calendar"
            className="w-7 h-7 object-contain cursor-pointer"
            onClick={openCalendar}
          />

          <input
            ref={dateRef}
            type={dateType}
            value={travelDate}
            placeholder="Travel Date"
            onFocus={() => setDateType("date")}
            onBlur={() => {
              if (!travelDate) setDateType("text");
            }}
            onChange={(e) => setTravelDate(e.target.value)}
            className="w-full outline-none text-sm md:text-base bg-transparent"
          />

        </div>

        {/* Button */}
        <button className="bg-[#ff8a00] text-white font-semibold px-8 py-4 w-full lg:w-auto">
          SEARCH
        </button>

      </div>

    </div>
  );
}

export default SearchForm; 