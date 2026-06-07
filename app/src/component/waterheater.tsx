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

function WaterHeaterSlider() {
  

  const Heatproducts: Product[] = [
    {
      id: 1,
      name: "RFL Instant Water Heater 3L",
      image: "https://shamimelectronics.com.bd/wp-content/uploads/2024/03/W020240103639293047250_480.jpg",
      price: 8500,
      oldPrice: 10500,
      rating: 4.5,
    },
    {
      id: 2,
      name: "Singer Storage Geyser 25L",
      image: "https://shamimelectronics.com.bd/wp-content/uploads/2024/03/W020240103639293047250_480.jpg",
      price: 18500,
      oldPrice: 22000,
      rating: 4.7,
    },
    {
      id: 3,
      name: "Walton Smart Heater 15L",
      image: "https://starwaygroupbd.com/wp-content/uploads/2024/10/D40-20A_Midea-Brand-Water-Heater-40-Liter-in-Bangladesh_starwaygroupbd.jpg",
      price: 15500,
      oldPrice: 18000,
      rating: 4.3,
    },
    {
      id: 4,
      name: "Panasonic Premium Geyser 30L",
      image: "https://diamu.com.bd/wp-content/uploads/2023/09/Maharaja-Ednis-WH-174-Storage-Water-Heater.jpg",
      price: 24500,
      oldPrice: 28000,
      rating: 4.8,
    },
    {
      id: 5,
      name: "Hitachi Storage Heater 20L",
      image: "https://diamu.com.bd/wp-content/uploads/2023/09/Maharaja-Ednis-WH-174-Storage-Water-Heater.jpg",
      price: 21000,
      oldPrice: 25000,
      rating: 4.6,
    },
    {
      id: 6,
      name: "Sharp Instant Mini Heater",
      image: "https://starwaygroupbd.com/wp-content/uploads/2024/10/D40-20A_Midea-Brand-Water-Heater-40-Liter-in-Bangladesh_starwaygroupbd.jpg",
      price: 7800,
      oldPrice: 9500,
      rating: 4.2,
    },
    {
      id: 7,
      name: "LG Solar Water Heater",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3",
      price: 27000,
      oldPrice: 32000,
      rating: 4.9,
    },
    {
      id: 8,
      name: "Samsung Storage Heater 20L",
      image: "https://images.unsplash.com/photo-1616627986213-5f7d9b7b6f8d",
      price: 22000,
      oldPrice: 24000,
      rating: 4.4,
    },
    {
      id: 9,
      name: "Orient Instant Heater Compact",
      image: "https://images.unsplash.com/photo-1581579185169-8c3b6b7c6d52",
      price: 7200,
      oldPrice: 9000,
      rating: 4.1,
    },
    {
      id: 10,
      name: "Mitsubishi Solar Heater Max",
      image: "https://images.unsplash.com/photo-1610878180933-5f1f1f1f1f1f",
      price: 30000,
      oldPrice: 35000,
      rating: 5.0,
    },
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
              Water Heaters
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose the best for your home
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
          {Heatproducts.map((p) => (
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


export default WaterHeaterSlider;