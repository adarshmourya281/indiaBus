
import React, { useRef, useState } from "react";
import BookingToggle from "./BookingToggle";
import "../../styles/hero/SearchForm.css";

import busIcon from "../../assets/icons/bus.png";
import calendarIcon from "../../assets/icons/calendar.png";
import swapIcon from "../../assets/icons/swap.png";

function SearchForm() {

const [dateType, setDateType] = useState("text");
const dateRef = useRef(null);

const openCalendar = () => {
  setDateType("date");
  setTimeout(() => {
    dateRef.current.showPicker?.();
  }, 0);
};

  return (
    <div className="search-form">

      <div className="toggle-wrapper">
        <BookingToggle />
      </div>

      <div className="search-inputs">

        <div className="input-group">
          <img src={busIcon} alt="bus" className="input-icon" />
          <input type="text" placeholder="From Station" />
        </div>

        <div className="swap-wrapper">
  <div className="swap-circle">
    <img src={swapIcon} alt="swap" />
  </div>
</div>

        <div className="input-group">
          <img src={busIcon} alt="bus" className="input-icon" />
          <input type="text" placeholder="To Station" />
        </div>

        {/* Travel Date */}
        <div className="input-group date-group">
  <img
    src={calendarIcon}
    alt="calendar"
    className="input-icon clickable"
    onClick={openCalendar}
  />

  <input
    ref={dateRef}
    type={dateType}
    placeholder="Travel Date"
    onFocus={() => setDateType("date")}
    onBlur={(e) => {
      if (!e.target.value) {
        setDateType("text");
      }
    }}
  />
</div>

        <button className="search-btn">
          SEARCH
        </button>

      </div>

    </div>
  );
}

export default SearchForm;