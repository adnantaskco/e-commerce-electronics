"use client";

import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";

/* ================= PRODUCT TYPE ================= */
type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  hasOffer: boolean;
  discount?: number;
};

/* ================= YOUR FULL DATA (51–60) ================= */
const OfferProducts: Product[] = [
  {
    id: 51,
    name: "Samsung Digital Inverter Refrigerator",
    image:
      "https://myonebd.com/wp-content/uploads/2022/11/357X198-04-01.jpg",
    price: 52000,
    oldPrice: 58000,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 52,
    name: "LG Smart Frost Free Refrigerator",
    image: "https://images.unsplash.com/photo-1616627982291-3f6b6b7c1c11",
    price: 54000,
    oldPrice: 61000,
    hasOffer: true,
    discount: 11,
  },
  {
    id: 53,
    name: "Walton Double Door Refrigerator",
    image: "https://images.unsplash.com/photo-1620812097330-ff2f1a3b2a11",
    price: 39000,
    oldPrice: 44000,
    hasOffer: true,
    discount: 12,
  },
  {
    id: 54,
    name: "Singer Direct Cool Fridge",
    image: "https://images.unsplash.com/photo-1595433707802-0c0c3c9a8a21",
    price: 32000,
    oldPrice: 36000,
    hasOffer: true,
    discount: 8,
  },
  {
    id: 55,
    name: "Hisense Energy Saving Refrigerator",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    price: 47000,
    oldPrice: 52000,
    hasOffer: true,
    discount: 9,
  },
  {
    id: 56,
    name: "Sharp Premium Cooling Fridge",
    image: "https://images.unsplash.com/photo-1616627561950-9f4b5c0a7c12",
    price: 50000,
    oldPrice: 56000,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 57,
    name: "Panasonic Smart Inverter Refrigerator",
    image: "https://images.unsplash.com/photo-1588854337115-1c67d1c8b8d0",
    price: 61000,
    oldPrice: 68000,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 58,
    name: "Haier No Frost Double Door Fridge",
    image: "https://images.unsplash.com/photo-1616627451230-8c1a9a2b3c55",
    price: 45000,
    oldPrice: 50000,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 59,
    name: "Vision Compact Refrigerator",
    image: "https://images.unsplash.com/photo-1585238341987-2a1b3c4d5e66",
    price: 28000,
    oldPrice: 32000,
    hasOffer: true,
    discount: 12,
  },
  {
    id: 60,
    name: "Whirlpool IntelliFresh Refrigerator",
    image: "https://images.unsplash.com/photo-1600585152915-dc2c9b1a2f33",
    price: 53000,
    oldPrice: 59000,
    hasOffer: true,
    discount: 10,
  },
];

/* ================= SECTION ================= */
export default function OfferSection() {
  return (
    <section className="py-16 px-4 md:px-12 lg:px-24 bg-gray-50">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <p className="text-primary text-sm font-semibold uppercase tracking-[3px]">
             Flash Deals
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Special Offer Products
          </h2>
        </div>

        <button className="hidden md:block border border-primary text-primary px-5 py-2 rounded-lg hover:bg-primary hover:text-white transition">
          View All
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {OfferProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* IMAGE */}
            <div className="relative h-60 bg-gray-100 overflow-hidden">
              <Image
                src={product.image}
               
                fill
                className="object-contain p-5 group-hover:scale-110 transition duration-500"
              />

              {/* BADGE */}
              {product.hasOffer && product.discount && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {product.discount}% OFF
                </span>
              )}

             
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="text-gray-800 font-semibold line-clamp-2 min-h-[48px]">
                {product.name}
              </h3>

              <div className="flex items-center gap-3 mt-2">
                <span className="text-xl font-bold text-primary">
                  ৳{product.price.toLocaleString()}
                </span>

                {product.hasOffer && product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    ৳{product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* BUTTON */}
              <button className="w-full mt-4 flex items-center justify-center gap-2  text-white py-2.5 rounded-lg hover:opacity-90 transition">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MOBILE VIEW ALL */}
      <div className="mt-10 text-center md:hidden">
        <button className="border border-primary text-primary px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition">
          View All Products
        </button>
      </div>
    </section>
  );
}