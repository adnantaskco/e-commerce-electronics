"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const gridImages = [
  "https://myonebd.com/wp-content/uploads/2022/11/357X198-5-01.jpg",
  "https://myonebd.com/wp-content/uploads/2022/11/357X198-01-01.jpg",
  "https://www.lg.com/eastafrica/images/split-air-conditioners/md07588244/gallery/medium12.jpg",
  "https://myonebd.com/wp-content/uploads/2022/11/357X198-04-01.jpg",
  
];

const sliderImages = [
  "https://myonebd.com/wp-content/uploads/2022/10/Fridge-450X780-03-01.jpg",
  "https://myonebd.com/wp-content/uploads/2022/10/Television-450X780-01.jpg",
  "https://myonebd.com/wp-content/uploads/2022/10/Fridge-450X780-02-01.jpg",
];

export default function PromoSection() {
  const [active, setActive] = useState(0);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % sliderImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-6 bg-white">
      <div className=" md:px-28 mx-auto px-4">

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* LEFT GRID */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-4">
            {gridImages.map((img, i) => (
              <div
                key={i}
                className="relative h-52 md:h-64 overflow-hidden rounded-xl shadow-md group"
              >
                <Image
                  src={img}
                  alt={`product-${i}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>

          {/* RIGHT SLIDER */}
          <div className="relative md:row-span-3">
            <div className="relative h-[420px] md:h-[520px] rounded-xl overflow-hidden shadow-lg">

              <Image
                src={sliderImages[active]}
                alt="banner"
                fill
                className="object-cover transition-all duration-700"
              />

            
            </div>

            {/* DOTS */}
            <div className="flex justify-center gap-2 mt-4">
              {sliderImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-3 h-3 rounded-full transition ${
                    active === i ? "bg-black" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}