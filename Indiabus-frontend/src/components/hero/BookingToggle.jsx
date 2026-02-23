import React, { useState } from "react";
import "../../styles/hero/BookingToggle.css";

function BookingToggle() {
  const [tripType, setTripType] = useState("oneway");

  return (
    <div className="booking-toggle">
      <label>
        <input
          type="radio"
          value="oneway"
          checked={tripType === "oneway"}
          onChange={() => setTripType("oneway")}
        />
        Book Now
      </label>

      <label>
        <input
          type="radio"
          value="roundtrip"
          checked={tripType === "roundtrip"}
          onChange={() => setTripType("roundtrip")}
        />
        Round Trip
      </label>
    </div>
  );
}

export default BookingToggle;
