import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white py-10 ">

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row md:justify-between gap-10">

          {/* Column 1 */}
          <div>
          <h2 className="font-spartan font-bold text-[22px] sm:text-[28px] lg:text-[36px] leading-none tracking-[-0.5px]">
  <span className="text-[#313131]">India</span>
  <span className="text-[#FF8A00]">Bus</span>
</h2>

            <h4 className="mt-4 font-semibold text-sm">
              Customer Support
            </h4>

            <div className="mt-2 space-y-1 text-sm text-gray-700">
              <p>Phone: +91-XXXXXXXXXX</p>
              <p>Email: support@indiabus.com</p>
              <p>Support Hours: 24x7</p>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold text-sm mb-3">
              Quick Links
            </h4>

            <ul className="space-y-2 text-sm text-gray-700">
              <li className="hover:text-[#ff7a00] cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-[#ff7a00] cursor-pointer transition">
                Contact Us
              </li>
              <li className="hover:text-[#ff7a00] cursor-pointer transition">
                FAQs
              </li>
              <li className="hover:text-[#ff7a00] cursor-pointer transition">
                Terms & Conditions
              </li>
              <li className="hover:text-[#ff7a00] cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-[#ff7a00] cursor-pointer transition">
                Cancellation & Refund Policy
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              Follow Us
            </h4>

            <div className="flex gap-3">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#ff7a00] hover:text-white transition cursor-pointer">
                <FaFacebookF size={14} />
              </div>

              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#ff7a00] hover:text-white transition cursor-pointer">
                <FaInstagram size={14} />
              </div>

              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#ff7a00] hover:text-white transition cursor-pointer">
                <FaTwitter size={14} />
              </div>

              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md hover:bg-[#ff7a00] hover:text-white transition cursor-pointer">
                <FaLinkedinIn size={14} />
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="text-center mt-12 text-xs text-gray-500 space-y-1">
          <p>© 2025 IndiaBus. All rights reserved.</p>
          <p>Your travel, your way — safe, simple, and smart.</p>
        </div>

      </div>

    </footer>
  );
}

export default Footer;