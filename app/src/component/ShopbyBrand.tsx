"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ShopByBrand() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const brands = [
    {
      id: 1,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe60b1108-2d13-4bdf-84fd-6497c0290326&w=767&q=100",
    },
    {
      id: 2,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe7081504-3438-4b5f-bbe3-469d26422103&w=767&q=100",
    },
    {
      id: 3,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe6010805-2f2b-4a6f-b61c-aacbcd34eeea&w=767&q=100",
    },
    {
      id: 4,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe5081413-0c26-4b45-8977-6ca1cbe24227&w=767&q=100",
    },
    {
      id: 5,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe601090b-2820-4216-9f21-cce45f6df3fe&w=767&q=100",
    },
    {
      id: 6,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe5081413-1130-4626-8691-b7a0bc578894&w=767&q=100",
    },
    {
      id: 7,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe50c0804-261c-4d50-906b-3ed44927e9db&w=767&q=100",
    },
    {
      id: 8,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe5081607-0704-4297-92af-667854436ec3&w=767&q=100",
    },
    {
      id: 9,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe6071905-1b27-4ead-837d-bbaaeda5af06&w=767&q=100",
    },
    {
      id: 10,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe6031406-2302-4758-a662-825898e934fd&w=767&q=100",
    },
    {
      id: 11,
      logo: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe6091b04-163a-4793-b68c-c75877cd37cc&w=767&q=100",
    },
  ];

  // Navigation
  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  // Mouse Drag Scroll
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDown.current = true;
    startX.current = e.pageX;
    scrollLeftPos.current = scrollRef.current?.scrollLeft || 0;
  };

  const handleMouseLeave = () => {
    isDown.current = false;
  };

  const handleMouseUp = () => {
    isDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !scrollRef.current) return;

    e.preventDefault();

    const walk = (e.pageX - startX.current) * 2;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="mx-auto px-4 md:px-28">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-primary text-sm font-semibold uppercase tracking-[3px]">
              Trusted Brands
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Shop By Brand
            </h2>

            <p className="text-gray-500 mt-2">
              Discover products from top international brands
            </p>
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full bg-white border shadow-md hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full bg-white border shadow-md hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className="
            flex
            gap-6
            overflow-x-auto
            scroll-smooth
            no-scrollbar
            cursor-grab
            active:cursor-grabbing
            select-none
            pb-4
          "
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="
                group
                flex-shrink-0
                w-[180px]
                h-[110px]
                rounded-3xl
                bg-white
                border
                border-gray-100
                shadow-sm
                hover:shadow-2xl
                hover:border-primary/20
                hover:-translate-y-1
                transition-all
                duration-500
                flex
                items-center
                justify-center
                p-6
              "
            >
              <img
                src={brand.logo}
                alt={`Brand ${brand.id}`}
                draggable={false}
                className="
                  max-h-[60px]
                  w-auto
                  object-contain
                  transition-all
                  duration-500
                  group-hover:scale-110
                "
              />
            </div>
          ))}
        </div>

        {/* Mobile Buttons */}
        <div className="flex md:hidden justify-center gap-3 mt-8">
          <button
            onClick={scrollLeft}
            className="w-11 h-11 rounded-full bg-white border shadow-md flex items-center justify-center"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={scrollRight}
            className="w-11 h-11 rounded-full bg-white border shadow-md flex items-center justify-center"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ShopByBrand;