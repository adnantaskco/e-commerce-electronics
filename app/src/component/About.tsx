"use client";

import {
  ShieldCheck,
  Truck,
  CreditCard,
  Headphones,
} from "lucide-react";

export default function AboutSection() {
  const features = [
    {
      icon: <ShieldCheck size={22} />,
      title: "100% Original Products",
    },
    {
      icon: <Truck size={22} />,
      title: "Fast Nationwide Delivery",
    },
    {
      icon: <CreditCard size={22} />,
      title: "Easy EMI & Secure Payment",
    },
    {
      icon: <Headphones size={22} />,
      title: "Professional Support",
    },
  ];

  const brands = [
    "Samsung",
    "Sony",
    "Philips",
    "Panasonic",
    "Hitachi",
    "Daikin",
    "Whirlpool",
    "Dell",
    "HP",
    "Walton",
    "Singer",
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-28 md:px-28">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Trusted Electronics Store
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Buy Original Electronic Products
            <span className=" block">
              At Rumaisa <span className="text-primary">Digital</span>
            </span>
          </h2>

          <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
            Transcom Digital is one of the leading online electronics stores
            in Bangladesh, offering authentic products, fast delivery,
            EMI facilities, and professional after-sales support.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">50K+</h3>
            <p className="text-gray-500 text-sm mt-1">
              Happy Customers
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">100+</h3>
            <p className="text-gray-500 text-sm mt-1">
              Premium Brands
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">64</h3>
            <p className="text-gray-500 text-sm mt-1">
              District Delivery
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">24/7</h3>
            <p className="text-gray-500 text-sm mt-1">
              Customer Support
            </p>
          </div>
        </div>

        {/* FEATURES */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="
                bg-white
                border
                rounded-2xl
                p-6
                text-center
                hover:shadow-xl
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary">
                {item.icon}
              </div>

              <h4 className="mt-4 font-semibold text-gray-800">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid lg:grid-cols-2 gap-8 mt-14">
          <div className="bg-white rounded-3xl border shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Why Shop With Us?
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Shopping for electronics should be simple and reliable.
              At Transcom Digital, you can explore a wide range of
              refrigerators, air conditioners, televisions, kitchen
              appliances, laptops, and personal care products from
              globally recognized brands.
            </p>

            <p className="text-gray-600 leading-relaxed mt-4">
              We focus on authenticity, competitive pricing,
              nationwide delivery, EMI facilities, and dedicated
              after-sales support to ensure the best customer experience.
            </p>
          </div>

          <div className="bg-white rounded-3xl border shadow-sm p-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              What We Offer
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {[
                "Kitchen Appliances",
                "Smart TVs",
                "Refrigerators",
                "Air Conditioners",
                "Audio Systems",
                "Laptops & Tablets",
                "Personal Care",
                "EMI Facilities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-50 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BRANDS */}
        <div className="mt-14">
          <h3 className="text-center text-2xl font-bold mb-8">
            Trusted Global Brands
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {brands.map((brand) => (
              <span
                key={brand}
                className="
                  px-5 py-2
                  rounded-full
                  bg-white
                  border
                  shadow-sm
                  hover:shadow-md
                  transition
                  text-sm
                  font-medium
                "
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <div className="rounded-3xl bg-primary text-white p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">
              Shop Electronics With Confidence
            </h3>

            <p className="mt-3 text-white/90 max-w-2xl mx-auto">
              Authentic products, secure payments, EMI facilities,
              nationwide delivery, and dedicated customer support —
              everything you need in one place.
            </p>

            <div className="mt-6 text-lg font-semibold">
              📧 estore@transcomdigital.com | ☎ 16212
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}