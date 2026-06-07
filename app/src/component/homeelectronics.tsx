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

function HomeProductSlider() {
  

  const Homeproducts: Product[] = [
    {
  id: 71,
  name: "Philips Air Fryer HD9252",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJAYljDT_aMevz2R-L_YxtOWaZZgXxQBy_pTBJYdToQ&s",
  price: 12000,
  oldPrice: 14000,
  rating: 4.5,
},
{
  id: 72,
  name: "Panasonic Microwave Oven NN-ST34",
  image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fe5081a13-2401-4604-82ce-367acbd3f5f9&w=1500&q=100",
  price: 15500,
  oldPrice: 17500,
  rating: 4.4,
},
{
  id: 73,
  name: "Walton Electric Rice Cooker 2.8L",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoeQUd9Xw9tewddLWRDzSWuHzm7Y6EHhD9M8fH_380g&s=10",
  price: 3500,
  oldPrice: 4200,
  rating: 4.3,
},
{
  id: 74,
  name: "Sharp Electric Kettle 1.7L",
  image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fea041610-3118-44f3-a6e0-642ade6eb20f&w=1500&q=100",
  price: 1800,
  oldPrice: 2200,
  rating: 4.2,
},
{
  id: 75,
  name: "LG Toaster Oven 28L",
  image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe8080c08-0725-4d02-bbd0-14ccdd303d15&w=1500&q=100",
  price: 9800,
  oldPrice: 11500,
  rating: 4.4,
},
{
  id: 76,
  name: "Miyako Blender & Grinder Set",
  image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe905050b-2025-4054-b0e5-b76d515819e9&w=1500&q=100",
  price: 4200,
  oldPrice: 5000,
  rating: 4.3,
},
{
  id: 77,
  name: "Xiaomi Smart Air Fryer 3.5L",
  image: "https://images.unsplash.com/photo-1604908176997-125f25cc5b0a",
  price: 13500,
  oldPrice: 15000,
  rating: 4.6,
},
{
  id: 78,
  name: "Singer Electric Pressure Cooker 6L",
  image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
  price: 8900,
  oldPrice: 10200,
  rating: 4.3,
},
{
  id: 79,
  name: "Hitachi Water Purifier RO System",
  image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97",
  price: 18500,
  oldPrice: 21000,
  rating: 4.5,
},
{
  id: 80,
  name: "Samsung Electric Oven SmartBake",
  image: "https://images.unsplash.com/photo-1585238342070-61b98f2c3f1e",
  price: 22000,
  oldPrice: 25000,
  rating: 4.6,
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
             Kitchen Electronics
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
          {Homeproducts.map((product) => (
            <div
              key={product.id}
              className="min-w-[250px] bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <div className="relative h-[170px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 line-clamp-2">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 text-yellow-500 text-xs mt-1">
                  <Star size={14} fill="currentColor" />
                  {product.rating}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <p className="font-semibold text-gray-900">
                    ৳{product.price}
                  </p>
                  <p className="text-xs text-gray-400 line-through">
                    ৳{product.oldPrice}
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


export default HomeProductSlider;