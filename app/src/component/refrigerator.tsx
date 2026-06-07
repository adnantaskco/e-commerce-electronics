"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice: number;
  rating: number;
};

function RefrigeSlider() {
  

  const Refregeratorproducts: Product[] = [
  {
  id: 31,
  name: "MyOne 253L Digital Inverter Refrigerator",
  image: "https://myonebd.com/wp-content/uploads/2023/04/Golden-Dahlia2-768x768.png",
  price: 52000,
  oldPrice: 58000,
  rating: 4.7,
},
{
  id: 32,
  name: "MyOne 260L Smart Inverter Refrigerator",
  image: "https://myonebd.com/wp-content/uploads/2023/04/Magnificent-Red2-768x768.png",
  price: 54500,
  oldPrice: 60000,
  rating: 4.6,
},
{
  id: 33,
  name: "Myone 300L Frost Free Double Door Fridge",
  image: "https://myonebd.com/wp-content/uploads/2022/10/Elegant-Mangolia.png",
  price: 39000,
  oldPrice: 44000,
  rating: 4.5,
},
{
  id: 34,
  name: "Singer 220L Direct Cool Refrigerator",
  image: "https://myonebd.com/wp-content/uploads/2022/10/002.jpg",
  price: 32000,
  oldPrice: 36000,
  rating: 4.3,
},
{
  id: 35,
  name: "Hisense 280L Double Door Refrigerator",
  image: "https://myonebd.com/wp-content/uploads/2022/11/357X198-04-01.jpg",
  price: 48000,
  oldPrice: 53000,
  rating: 4.4,
},
{
  id: 36,
  name: "Sharp 270L Energy Saving Refrigerator",
  image: "https://images.unsplash.com/photo-1616627561950-9f4b5c0a7c12",
  price: 50000,
  oldPrice: 56000,
  rating: 4.6,
},
{
  id: 37,
  name: "Panasonic 300L Smart Cooling Refrigerator",
  image: "https://images.unsplash.com/photo-1588854337115-1c67d1c8b8d0",
  price: 61000,
  oldPrice: 68000,
  rating: 4.8,
},
{
  id: 38,
  name: "Haier 258L No Frost Refrigerator",
  image: "https://images.unsplash.com/photo-1616627451230-8c1a9a2b3c55",
  price: 45000,
  oldPrice: 50000,
  rating: 4.4,
},
{
  id: 39,
  name: "Vision 200L Compact Refrigerator",
  image: "https://images.unsplash.com/photo-1585238341987-2a1b3c4d5e66",
  price: 28000,
  oldPrice: 32000,
  rating: 4.2,
},
{
  id: 40,
  name: "Whirlpool 265L IntelliFresh Refrigerator",
  image: "https://images.unsplash.com/photo-1600585152915-dc2c9b1a2f33",
  price: 53000,
  oldPrice: 59000,
  rating: 4.6,
}
  ];

 const scrollRef = useRef<HTMLDivElement>(null);

  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

 

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;

    setIsDown(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;

    e.preventDefault();

    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // scroll speed

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollByBtn = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -280 : 280,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto px-4 md:px-28">

        {/* HEADER */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Refrigerator
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose the best for your daily Life.
            </p>
          </div>

          {/* ARROWS */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scrollByBtn("left")}
              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={() => scrollByBtn("right")}
              className="w-9 h-9 rounded-full border flex items-center justify-center hover:bg-gray-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* SLIDER */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar pb-2 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {Refregeratorproducts.map((p) => (
            <div
              key={p.id}
              className="min-w-[250px] bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-[170px]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2">
                  {p.name}
                </h3>

                <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                  <Star size={14} fill="currentColor" />
                  {p.rating}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <p className="font-semibold text-gray-900">
                    ৳{p.price}
                  </p>
                  <p className="text-xs text-gray-400 line-through">
                    ৳{p.oldPrice}
                  </p>
                </div>

                <button className="w-full mt-3 py-2 text-sm border rounded-lg hover:bg-black hover:text-white transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


export default RefrigeSlider;