import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center py-4 sm:py-6 px-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <h1 className="font-['League_Spartan'] font-bold text-[26px] sm:text-[34px] lg:text-[52px] leading-none">
          <span className="text-[#313131]">India</span>
          <span className="text-[#FF8A00]">Bus</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 text-[18px] text-[#555] font-medium">
          <li className="hover:text-[#FF8A00] cursor-pointer">Home</li>
          <li className="hover:text-[#FF8A00] cursor-pointer">Ticket</li>
          <li className="hover:text-[#FF8A00] cursor-pointer">Help</li>
          <li className="hover:text-[#FF8A00] cursor-pointer">Login/Signup</li>
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center gap-6 py-6 text-lg text-[#555] font-medium">
            <li>Home</li>
            <li>Ticket</li>
            <li>Help</li>
            <li>Login/Signup</li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;