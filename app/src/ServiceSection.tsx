"use client";

import React, { useEffect, useRef } from "react";
import { Truck, Wallet } from "lucide-react";
import { FaExchangeAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";

function ServiceSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 1,
      icon: <Truck />,
      title: "Free Installation",
      desc: "Selective Items",
    },
    {
      id: 2,
      icon: <Truck />,
      title: "Fast Delivery",
      desc: "Nationwide Service",
    },
    {
      id: 3,
      icon: <MdProductionQuantityLimits />,
      title: "Original Product",
      desc: "Guaranteed Authentic",
    },
    {
      id: 4,
      icon: <FaExchangeAlt />,
      title: "Easy Exchange",
      desc: "Hassle Free Policy",
    },
    {
      id: 5,
      icon: <Wallet />,
      title: "Secure Payment",
      desc: "100% Protected",
    },
  ];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrame: number;

    const scroll = () => {
      container.scrollLeft += 1;

      if (
        container.scrollLeft >=
        (container.scrollWidth - container.clientWidth) / 2
      ) {
        container.scrollLeft = 0;
      }

      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section className=" py-10 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className=" mx-auto px-6 md:px-28">
       <div
        ref={scrollRef}
        className=" overflow-x-hidden scrollbar-hide "
      >
        <div className="flex gap-5 w-max">
          {[...services, ...services].map((item, index) => (
            <div
              key={index}
              className="
                min-w-[280px]
                flex items-center gap-4
                p-5 rounded-2xl
                bg-white border border-gray-100
                shadow-sm hover:shadow-xl
                transition-all duration-500
              "
            >
              <div
                className="
                  w-12 h-12
                  flex items-center justify-center
                  rounded-full
                  bg-primary/10 text-primary
                "
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

    </section>
  );
}

export default ServiceSection;