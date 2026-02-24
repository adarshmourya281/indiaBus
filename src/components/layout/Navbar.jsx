import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
     <div className="max-w-[1440px] mx-auto flex justify-between items-center h-[74px] px-4 sm:px-6 lg:px-10">
        {/* Logo */}
        <div className="text-3xl sm:text-4xl lg:text-[45px] font-extrabold tracking-wide">
          <span className="text-[#373737]">India</span>
          <span className="text-[#ff8a00]">Bus</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-[35px] text-[18px] text-[#555] font-medium">
          <li className="cursor-pointer hover:text-[#ff8a00] transition duration-300">Home</li>
          <li className="cursor-pointer hover:text-[#ff8a00] transition duration-300">Ticket</li>
          <li className="cursor-pointer hover:text-[#ff8a00] transition duration-300">Help</li>
          <li className="cursor-pointer hover:text-[#ff8a00] transition duration-300">Login/Signup</li>
        </ul>

        {/* Hamburger Button */}
        <button
          className="lg:hidden text-3xl text-[#373737]"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg text-[#555] font-medium">
            <li className="cursor-pointer hover:text-[#ff8a00] transition">Home</li>
            <li className="cursor-pointer hover:text-[#ff8a00] transition">Ticket</li>
            <li className="cursor-pointer hover:text-[#ff8a00] transition">Help</li>
            <li className="cursor-pointer hover:text-[#ff8a00] transition">Login/Signup</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;