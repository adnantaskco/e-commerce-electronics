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

function ACSlider() {
  

  const ACproducts: Product[] = [
   {
  id: 21,
  name: "Walton Inverter Split AC 1.5 Ton",
  image: "https://myonebd.com/wp-content/uploads/2016/12/myone-non-inverter-768x768.jpg",
  price: 52000,
  oldPrice: 58000,
  rating: 4.4,
},
{
  id: 22,
  name: "Gree Fairy Series Inverter AC 1.5 Ton",
  image: "https://myonebd.com/wp-content/uploads/2016/12/myone-non-inverter-768x768.jpg",
  price: 65000,
  oldPrice: 72000,
  rating: 4.6,
},
{
  id: 23,
  name: "Samsung Digital Inverter AC 1.5 Ton",
  image: "https://myonebd.com/wp-content/uploads/2016/12/myone-non-inverter-768x768.jpg",
  price: 78000,
  oldPrice: 85000,
  rating: 4.7,
},
{
  id: 24,
  name: "LG Dual Inverter Split AC 1.5 Ton",
  image: "https://myonebd.com/wp-content/uploads/2025/06/myone-inverter-768x768.jpg",
  price: 82000,
  oldPrice: 90000,
  rating: 4.8,
},
{
  id: 25,
  name: "Haier Smart Inverter AC 1.5 Ton",
  image: "https://myonebd.com/wp-content/uploads/2025/06/myone-inverter-768x768.jpg",
  price: 60000,
  oldPrice: 67000,
  rating: 4.5,
},
{
  id: 26,
  name: "Midea Mission II Inverter AC 1.5 Ton",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
  price: 58000,
  oldPrice: 64000,
  rating: 4.4,
},
{
  id: 27,
  name: "Sharp J-Tech Inverter AC 1.5 Ton",
  image: "https://images.unsplash.com/photo-1601944179066-29786cb9d32a",
  price: 69000,
  oldPrice: 75000,
  rating: 4.5,
},
{
  id: 28,
  name: "Panasonic Aero Series Inverter AC 1.5 Ton",
  image: "https://images.unsplash.com/photo-1593784991095-a205069470b6",
  price: 80000,
  oldPrice: 88000,
  rating: 4.7,
},
{
  id: 29,
  name: "General Premium Wall AC 1.5 Ton",
  image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1",
  price: 95000,
  oldPrice: 105000,
  rating: 4.9,
},
{
  id: 30,
  name: "Carrier Crystal Series Inverter AC 1.5 Ton",
  image: "https://images.unsplash.com/photo-1593784991110-3f8d3c2b1a77",
  price: 72000,
  oldPrice: 80000,
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
              Air Conditional 
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose the best re-freshment for your home
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
          {ACproducts.map((p) => (
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


export default ACSlider;