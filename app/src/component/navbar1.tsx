"use client";

import { FaTruckArrowRight, FaAngleRight } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { Headphones } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full hidden md:block">

      {/* ================= TOP BAR ONLY ================= */}
      <div className="w-full bg-gradient-to-r from-gray-100 to-gray-200 text-sm shadow-sm">
        <div className=" mx-auto flex justify-between items-center px-6 md:px-28 py-2">

          {/* Left */}
          <div className="flex items-center gap-2">
            <Headphones size={18} className="text-primary" />
            <span className="font-semibold text-gray-700">Need help?</span>

            <button className="ml-2 bg-primary hover:bg-primary/90 transition text-white px-3 py-1 flex items-center gap-1 rounded-md text-sm shadow">
              Click Here <FaAngleRight />
            </button>
          </div>

          {/* Right */}
          <div className="flex gap-6 text-gray-600 font-medium">

            <a href="#" className="hover:text-primary transition flex items-center gap-1">
              B2B / Dealership
            </a>

            <a href="#" className="flex items-center gap-1 hover:text-primary transition">
              <CiLocationOn className="text-primary" />
              Store Locator
            </a>

            <a href="#" className="flex items-center gap-1 hover:text-primary transition">
              <FaTruckArrowRight className="text-primary" />
              Track Order
            </a>

            <a href="#" className="flex items-center gap-1 hover:text-primary transition">
              <HiOutlineWrenchScrewdriver className="text-primary" />
              Service
            </a>

          </div>
        </div>
      </div>

    </header>
  );
}