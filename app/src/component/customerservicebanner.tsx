"use client";
import React from "react";
import { Headphones, Truck, ShieldCheck, RefreshCcw } from "lucide-react";

export default function CustomerServiceBanner() {
  return (
    <section className="w-full py-6 px-4 md:px-28 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* ================= Banner 1 ================= */}
      <div className="bg-gradient-to-r from-primary/10 to-white border border-primary/30 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full">
            <Headphones />
          </div>

          <div>
            <h2 className="text-lg font-bold">24/7 Customer Support</h2>
            <p className="text-sm text-gray-600">
              We are always here to help you anytime
            </p>
          </div>
        </div>

        <button className="text-primary font-semibold hover:underline">
          Contact
        </button>
      </div>

      {/* ================= Banner 2 ================= */}
      <div className="bg-gradient-to-r from-gray-100 to-white border border-gray-300 rounded-xl p-6 flex items-center justify-between shadow-sm hover:shadow-md transition">

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-gray-900 text-white rounded-full">
            <Truck />
          </div>

          <div>
            <h2 className="text-lg font-bold">Fast Delivery Service</h2>
            <p className="text-sm text-gray-600">
              Get your product delivered quickly & safely
            </p>
          </div>
        </div>

        <button className="text-gray-900 font-semibold hover:underline">
          Track
        </button>
      </div>

    </section>
  );
}