"use client";

import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white">
      {/* ================= MAIN ================= */}
      <div className="mx-auto px-4 sm:px-6 md:px-10 lg:px-28 xl:px-28 py-12 md:py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-20">

          {/* ================= BRAND ================= */}
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                Rumaisa
              </h1>
              <p className="text-primary font-medium">
                DIGITAL
              </p>
            </div>

            <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
              Premium electronics, fashion and lifestyle products delivered across Bangladesh.
            </p>

            {/* ================= APPS ================= */}
            <div className="space-y-3">
              <h3 className="font-semibold">Download App</h3>

              <div className="flex flex-wrap gap-3">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  width={120}
                  height={40}
                  className="h-auto"
                />

                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  width={120}
                  height={40}
                  className="h-auto"
                />
              </div>
            </div>

            {/* ================= SOCIAL ================= */}
            <div className="flex gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-blue-600 transition flex items-center justify-center cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-sky-500 transition flex items-center justify-center cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600 transition flex items-center justify-center cursor-pointer">
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* ================= COMPANY ================= */}
          <div className="lg:pl-10 ">
            <h3 className="text-lg font-semibold mb-5">Company</h3>
            <ul className="space-y-3 text-zinc-400 text-sm md:text-base">
              <li><a href="#">EMI Bank List</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>

          {/* ================= CUSTOMER SERVICE ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Customer Service</h3>
            <ul className="space-y-3 text-zinc-400 text-sm md:text-base">
              <li><a href="#">Shipping & Delivery</a></li>
              <li><a href="#">Complaints</a></li>
              <li><a href="#">Installation</a></li>
              <li><a href="#">Service Hours</a></li>
            </ul>
          </div>

          {/* ================= AFTER SALES ================= */}
          <div>
            <h3 className="text-lg font-semibold mb-5">After Sales</h3>
            <ul className="space-y-3 text-zinc-400 text-sm md:text-base">
              <li><a href="#">Warranty Policy</a></li>
              <li><a href="#">Service Centers</a></li>
              <li><a href="#">Repair Status</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* ================= BOTTOM ================= */}
      <div className="border-t border-zinc-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm text-center md:text-left">
            © 2026 Rumaisa Digital. All rights reserved.
          </p>

          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX6K_CfAZI4aaJBitG84zXSIRAvYryfLj6aQ&s"
            alt="payment methods"
            width={260}
            height={50}
            className="w-full max-w-[260px] h-auto"
          />

        </div>
      </div>
    </footer>
  );
}