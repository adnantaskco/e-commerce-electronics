"use client";

import Image from "next/image";

export default function DiscountBanners() {
  return (
    <section className="w-full py-10 bg-gray-50">
      <div className=" mx-auto px-4 md:px-28 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* AC Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="https://www.lg.com/content/dam/channel/wcms/hk_en/lg-experience/air-conditioner-buying-guide/air-conditioner-buying-guide_thumbnail.jpg"
            alt="AC Discount"
            width={600}
            height={400}
            className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-blue-900/10 flex flex-col justify-center p-6 ">
            <h2 className="text-xl font-extrabold">AC Mega Sale</h2>
            <p className="text-sm font-semibold mt-1">Up to 25% Off on Air Conditioners</p>

            <button className="mt-4 w-fit px-4 py-2 bg-white text-blue-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Refrigerator Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="https://www.lg.com/bd/images/plp-b2c/b2c-1/sg-b2c-home-image-2.jpg"
            alt="Refrigerator Discount"
            width={600}
            height={400}
            className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-emerald-900/20 flex flex-col justify-center p-6 text-white">
            <h2 className="text-2xl font-extrabold">Refrigerator Deals</h2>
            <p className="text-sm font-semibold mt-1">Up to 20% Off on Fridges</p>

            <button className="mt-4 w-fit px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>

        {/* Kitchen Electronics Banner */}
        <div className="relative rounded-2xl overflow-hidden shadow-md group">
          <Image
            src="https://www.shutterstock.com/image-photo/different-modern-household-appliances-on-260nw-2726223977.jpg"
            alt="Kitchen Electronics Discount"
            width={600}
            height={400}
            className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 to-orange-900/20 flex flex-col justify-center p-6 text-white">
            <h2 className="text-xl font-bold">Kitchen Electronics</h2>
            <p className="text-sm mt-1">Up to 30% Off Limited Offer</p>

            <button className="mt-4 w-fit px-4 py-2 bg-white text-orange-700 rounded-lg text-sm font-medium hover:bg-gray-200">
              Shop Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}