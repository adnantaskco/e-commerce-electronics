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

function TVSlider() {
  

  const tvproducts: Product[] = [
    {
  id: 11,
  name: "Samsung Crystal UHD 4K Smart TV 55”",
  image: "https://myonebd.com/wp-content/uploads/2022/11/357X198-02-01.jpg",
  price: 52000,
  oldPrice: 58000,
  rating: 4.6,
},
{
  id: 12,
  name: "LG NanoCell AI 4K Smart TV 50”",
  image: "https://myonebd.com/wp-content/uploads/2022/11/357X198-01-01.jpg",
  price: 65000,
  oldPrice: 72000,
  rating: 4.7,
},
{
  id: 13,
  name: "Sony Bravia 4K UHD Google TV 55”",
  image: "https://myonebd.com/wp-content/uploads/2022/10/Rose-Gold-24-32.jpg",
  price: 78000,
  oldPrice: 85000,
  rating: 4.8,
},
{
  id: 14,
  name: "TCL QLED 4K Smart Android TV 55”",
  image: "https://myonebd.com/wp-content/uploads/2016/10/mini-banner-02.jpg",
  price: 48000,
  oldPrice: 54000,
  rating: 4.5,
},
{
  id: 15,
  name: "Xiaomi Mi TV P1 4K Android TV 50”",
  image: "https://myonebd.com/wp-content/uploads/2022/10/Rose-Gold-24-32.jpg",
  price: 42000,
  oldPrice: 47000,
  rating: 4.4,
},
{
  id: 16,
  name: "Hisense 4K UHD Smart TV 55”",
  image: "https://images.unsplash.com/photo-1593784991054-cb5e6f2c8d9b",
  price: 45000,
  oldPrice: 50000,
  rating: 4.3,
},
{
  id: 17,
  name: "Panasonic Viera 4K Smart TV 50”",
  image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd",
  price: 60000,
  oldPrice: 67000,
  rating: 4.5,
},
{
  id: 18,
  name: "Walton Android Smart TV 43” 4K",
  image: "https://images.unsplash.com/photo-1616627986213-5f7d9b7b6f8d",
  price: 28000,
  oldPrice: 32000,
  rating: 4.2,
},
{
  id: 19,
  name: "OnePlus Y Series 4K Smart TV 55”",
  image: "https://images.unsplash.com/photo-1593784991110-3f8d3c2b1a77",
  price: 50000,
  oldPrice: 56000,
  rating: 4.4,
},
{
  id: 20,
  name: "Sharp Aquos 4K LED Smart TV 50”",
  image: "https://images.unsplash.com/photo-1601944179130-1a0a5f1d9a1c",
  price: 47000,
  oldPrice: 52000,
  rating: 4.3,
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
              Android Smart TV
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
          {tvproducts.map((p) => (
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


export default TVSlider;