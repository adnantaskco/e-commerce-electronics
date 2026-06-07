"use client";

import React from "react";
import { Heart, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

/* ================= DATA ================= */
const productCategories = [
  "Smart TV",
  "Refrigerator",
  "Air Conditioner",
  "Smartphone",
  "Washing Machine",
  "Earbuds",
  "Laptop",
  "Bluetooth Speaker",
  "DSLR Camera",
  "Microwave Oven",
];

const brandList = [
  "Walton",
  "Minister Hi-Tech Park",
  "Vision Electronics",
  "Singer Bangladesh",
  "Marcel",
  "Jamuna Electronics",
  "Rangs Electronics",
  "Minister Refrigerator",
  "Walton Smartphone",
  "Vision Smart TV",
];

/* ================= COMPONENT ================= */
function Navbar3() {
  return (
    <section className="w-full">

      {/* ================= CATEGORY NAVBAR ================= */}
      <div className="w-full border-b bg-white hidden md:block">
        <div className="mx-auto flex justify-between px-6 md:px-28 py-3">

          {/* LEFT MENU */}
          <div className="flex gap-6 font-medium items-center">

            {/* PRODUCTS MENU */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold">
                    Products
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="p-3 min-w-[220px] flex flex-col gap-1">
                    {productCategories.map((item) => (
                      <NavigationMenuLink
                        key={item}
                        className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                      >
                        {item}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* BRANDS MENU */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="font-bold">
                    Brands
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="p-3 min-w-[220px] flex flex-col gap-1">
                    {brandList.map((item) => (
                      <NavigationMenuLink
                        key={item}
                        className="hover:bg-gray-100 p-2 rounded-md cursor-pointer text-sm"
                      >
                        {item}
                      </NavigationMenuLink>
                    ))}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* LINKS */}
            <a
              href="#"
              className="font-bold hover:text-primary transition"
            >
              Gift Voucher
            </a>

            <a
              href="#"
              className="font-bold hover:text-primary transition"
            >
              Campaign
            </a>
          </div>

          {/* RIGHT MENU */}
          <div className="flex gap-6 items-center">

            <a
              href="#"
              className="flex items-center gap-1 font-bold hover:text-primary transition"
            >
              <Heart size={18} />
              Wishlist
            </a>

            <a
              href="/loginpage"
              className="flex items-center gap-1 font-bold hover:text-primary transition"
            >
              <User size={18} />
              Log In
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Navbar3;