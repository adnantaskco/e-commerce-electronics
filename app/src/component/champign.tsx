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
      "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fea05120c-2c2b-44eb-b06e-0e3cc27df580&w=1500&q=100",
    price: 52000,
    oldPrice: 58000,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 52,
    name: "LG Smart Frost Free Refrigerator",
    image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fea051408-380b-4e0d-b5d5-153543b8de8d&w=1500&q=100",
    price: 54000,
    oldPrice: 61000,
    hasOffer: true,
    discount: 11,
  },
  {
    id: 53,
    name: "Walton Double Door Refrigerator",
    image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fea05120c-2c2b-44eb-b06e-0e3cc27df580&w=1500&q=100",
    price: 39000,
    oldPrice: 44000,
    hasOffer: true,
    discount: 12,
  },
  {
    id: 54,
    name: "Samsung Digital Inverter AC 1.5 Ton",
    image: "https://myonebd.com/wp-content/uploads/2016/12/myone-non-inverter-768x768.jpg",
    price: 78000,
    oldPrice: 85000,
    hasOffer: true,
    discount: 8,
  },
  {
    id: 55,
     name: "Xiaomi Mi TV P1 4K Android TV 50”",
    image: "https://myonebd.com/wp-content/uploads/2022/10/Rose-Gold-24-32.jpg",
    price: 42000,
    oldPrice: 47000,
    hasOffer: true,
    discount: 9,
  },
  {
    id: 56,
   name: "Haier Smart Inverter AC 1.5 Ton",
  image: "https://myonebd.com/wp-content/uploads/2025/06/myone-inverter-768x768.jpg",
  price: 60000,
  oldPrice: 67000,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 57,
    name: "Sharp Electric Kettle 1.7L",
    image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fea041610-3118-44f3-a6e0-642ade6eb20f&w=1500&q=100",
    price: 1800,
    oldPrice: 2200,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 58,
  name: "LG Toaster Oven 28L",
  image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe8080c08-0725-4d02-bbd0-14ccdd303d15&w=1500&q=100",
  price: 9800,
  oldPrice: 11500,
    hasOffer: true,
    discount: 10,
  },
  {
    id: 59,
      name: "Miyako Blender & Grinder Set",
  image: "https://transcomdigital.com/_next/image?url=https%3A%2F%2Ftranscom-storage.s3.amazonaws.com%2F2eb459e3-036e-4c2f-ac2a-2a2039c4a351%2Fddd04b35-531a-4fe0-bc10-d4103d6bf2a6%2Fimages%2Fe905050b-2025-4054-b0e5-b76d515819e9&w=1500&q=100",
  price: 4200,
  oldPrice: 5000,
    hasOffer: true,
    discount: 12,
  },
  {
    id: 60,
  name: "Sony Bravia 4K UHD Google TV 55”",
  image: "https://myonebd.com/wp-content/uploads/2022/10/Rose-Gold-24-32.jpg",
  price: 78000,
  oldPrice: 85000,
    hasOffer: true,
    discount: 10,
  },
];

/* ================= SECTION ================= */
export default function OfferSection() {
  return (
    <section className="py-16 px-4 md:px-28 lg:px-28 bg-gray-50">
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
               alt={product.name} 
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
                <button className="w-full mt-3 py-2 text-sm border rounded-lg hover:bg-black hover:text-white transition">
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