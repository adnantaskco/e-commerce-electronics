"use client"
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaChevronDown, FaChevronUp  } from "react-icons/fa";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-zinc-950 text-white">
  <div className=" mx-auto px-6 md:px-28 lg:px-28 py-16">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

      {/* Brand */}
      <div className="space-y-2">
        <div>
          <h1 className="text-4xl font-black tracking-tight">
            Rumaisa
          </h1>
          <p className="text-zinc-400 font-medium">
            DIGITAL
          </p>
        </div>

        <p className="text-zinc-400 leading-relaxed">
          Premium electronics, fashion and lifestyle products
          delivered across Bangladesh.
        </p>

        {/* Apps */}
        <div className="space-y-6">
          <h3 className="font-semibold">
            Download App
          </h3>

          <div className="flex gap-3 py-3">
            <Image
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt=""
              width={120}
              height={40}
            />

            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt=""
              width={120}
              height={40}
            />
          </div>
        </div>

        {/* Social */}
        <div className="flex gap-3 ">
          <div className="w-11 h-11 rounded-full bg-zinc-800 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer">
            <FaFacebookF />
          </div>

          <div className="w-11 h-11 rounded-full bg-zinc-800 hover:bg-sky-500 transition flex items-center justify-center cursor-pointer">
            <FaTwitter />
          </div>

          <div className="w-11 h-11 rounded-full bg-zinc-800 hover:bg-red-600 transition flex items-center justify-center cursor-pointer">
            <FaYoutube />
          </div>
        </div>
      </div>

      {/* Links  */}
      <div className="md:pl-20">
        <h3 className="text-lg font-semibold mb-5 ">
          Company
        </h3>

        <ul className="space-y-3 text-zinc-400">
          <li><a href="#">EMI Bank List</a></li>
          <li><a href="#">Terms & Conditions</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Store Locator</a></li>
        </ul>
      </div>

      <div className="md:pl-10">
        <h3 className="text-lg font-semibold  mb-5">
          Customer Service
        </h3>

        <ul className="space-y-3 text-zinc-400">
          <li><a href="#">Shipping & Delivery</a></li>
          <li><a href="#">Complaints</a></li>
          <li><a href="#">Installation</a></li>
          <li><a href="#">Service Hours</a></li>
        </ul>
      </div>

      <div className="md:pl-10">
        <h3 className="text-lg font-semibold mb-5">
          Help Center
        </h3>

        <ul className="space-y-3 text-zinc-400">
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Live Chat</a></li>
          <li><a href="#">Track Order</a></li>
          <li><a href="#">Returns</a></li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-5">
          After Sales
        </h3>

        <ul className="space-y-3 text-zinc-400">
          <li><a href="#">Warranty Policy</a></li>
          <li><a href="#">Service Centers</a></li>
          <li><a href="#">Repair Status</a></li>
          <li><a href="#">Support</a></li>
        </ul>
      </div>

    </div>
  </div>

  {/* Bottom */}
  <div className="border-t border-zinc-800">
    <div className="max-w-[1600px] mx-auto px-6 md:px-20 lg:px-28 py-6 flex flex-col md:flex-row justify-between items-center gap-5">

      <p className="text-zinc-500 text-sm">
        © 2026 Rumaisa Digital. All rights reserved.
      </p>

      <Image
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6K_CfAZI4aaJBitG84zXSIRAvYryfLj6aQ&s"
        alt="payment"
        width={260}
        height={50}
      />
    </div>
  </div>
</footer>
  );
}

     
