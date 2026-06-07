"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Shopbycatagory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const banners = [
    {
      id: 1,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe80b0b05-3b20-4385-99a1-7fa54450172b&w=1500&q=75",
      name: "Water Heater",
    },
    {
      id: 2,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe60a1f09-1e39-4585-9ba5-dfb488f8b3c9&w=1500&q=75",
      name: "TV | AV",
    },
    {
      id: 3,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe60a1f09-2020-4b8f-a10b-f914e46c5340&w=1500&q=75",
      name: "Air Condition",
    },
    {
      id: 4,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe60a1f09-1f34-4d40-88d5-ab2439f7dfee&w=1500&q=75",
      name: "Refrigerator",
    },
    {
      id: 5,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe60a1f09-2106-4356-86f4-773563f86471&w=1500&q=75",
      name: "Home & Kitchen",
    },
    {
      id: 6,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe904060b-1039-4369-9e90-a9a5ff46ace3&w=1500&q=75",
      name: "Dishwashers",
    },
    {
      id: 7,
      image:
        "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe60a1f09-212f-47f2-9bfd-6381faf8b9f1&w=1500&q=75",
      name: "Personal Care",
    },
  ];

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-14 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className=" mx-auto px-4 md:px-28 lg:px-28">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Shop by Categories
            </h2>
            <p className="text-gray-500 mt-2">
              Explore top product categories
            </p>
          </div>

          {/* Desktop arrows */}
          <div className="hidden md:flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-11 h-11 rounded-full bg-white border shadow-md hover:bg-black hover:text-white transition flex items-center justify-center"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={() => scroll("right")}
              className="w-11 h-11 rounded-full bg-white border shadow-md hover:bg-black hover:text-white transition flex items-center justify-center"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar cursor-grab active:cursor-grabbing pb-3"
        >
          {banners.map((item) => (
            <div
              key={item.id}
              className="min-w-[150px] md:min-w-[180px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 flex flex-col items-center justify-center"
            >
              <div className="w-full h-[80px] flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-[70px] object-contain transition-transform duration-300 hover:scale-110"
                />
              </div>

              <p className="text-sm font-bold text-gray-900 mt-3 text-center">
                {item.name}
              </p>
            </div>
          ))}
        </div>

        {/* MOBILE ARROWS */}
        <div className="flex md:hidden justify-center gap-4 mt-6">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border shadow flex items-center justify-center"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shopbycatagory;