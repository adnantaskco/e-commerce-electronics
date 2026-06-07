"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Search, Menu, X } from "lucide-react";
import { GoIssueReopened } from "react-icons/go";
import { MdOutlineShoppingBag } from "react-icons/md";

function Navbar2() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    document.body.style.overflow = openMenu ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  return (
    <>
      {/* Navbar */}
      <section className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto px-4 md:px-10 lg:px-20 xl:px-28 py-4 flex items-center justify-between gap-4">

          {/* Mobile Left */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setOpenMenu(true)}
              className="hover:text-primary transition"
            >
              <Menu className="w-7 h-7" />
            </button>

            <Link href="/" className="flex items-center gap-2">
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/020/311/586/small/electric-gear-logo-template-illustration-thunder-and-gear-logo-design-icon-free-vector.jpg"
                alt="logo"
                width={38}
                height={38}
                className="rounded-full"
              />
            </Link>
          </div>

          {/* Desktop Logo */}
          <Link
            href="/"
            className="hidden md:flex items-center gap-3 min-w-fit"
          >
            <Image
              src="https://static.vecteezy.com/system/resources/thumbnails/020/311/586/small/electric-gear-logo-template-illustration-thunder-and-gear-logo-design-icon-free-vector.jpg"
              alt="logo"
              width={48}
              height={48}
              className="rounded-full"
            />

            <div>
              <h2 className="font-bold text-xl text-gray-900">
                Rumaisa
              </h2>

              <p className="text-lg font-bold text-primary">
                Digital
              </p>
            </div>
          </Link>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 items-center gap-3">

            

            <div className="flex-1 flex border-2 border-primary rounded-xl overflow-hidden shadow-sm">

              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-3 outline-none"
              />

              <select className="px-4 outline-none border-l bg-white text-gray-600">
                <option>All Categories</option>
                <option>AC</option>
                <option>Refrigerator</option>
                <option>TV</option>
                <option>Kitchen Appliances</option>
              </select>

              <button className="bg-primary px-5 text-white flex items-center justify-center">
                <Search size={20} />
              </button>
            </div>

          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4 md:gap-6 min-w-fit">

            {/* Mobile Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="md:hidden"
            >
              <Search className="w-6 h-6" />
            </button>

            {/* Wishlist */}
            <Link href="/wishlist">
              <div className="relative cursor-pointer">
                <GoIssueReopened className="text-2xl" />

                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center">
                  3
                </span>
              </div>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <div className="relative cursor-pointer">
                <MdOutlineShoppingBag className="text-2xl" />

                <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary text-white text-[10px] flex items-center justify-center">
                  2
                </span>
              </div>
            </Link>

          </div>
        </div>

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="md:hidden px-4 pb-4 bg-white border-t">
            <div className="flex border-2 border-primary rounded-lg overflow-hidden">

              <input
                type="text"
                placeholder="Search products..."
                className="flex-1 px-4 py-3 outline-none"
              />

              <button className="bg-primary px-4 text-white">
                <Search size={18} />
              </button>

            </div>
          </div>
        )}
      </section>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[280px] bg-white z-[999] shadow-2xl transition-all duration-500 ease-out ${
          openMenu
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b">
          <h2 className="font-bold text-xl">
            Menu
          </h2>

          <button
            onClick={() => setOpenMenu(false)}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* User */}
        <div className="p-5 border-b">
          <div className="flex items-center gap-3">

            <Image
              src="https://img.magnific.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?semt=ais_hybrid&w=740&q=80"
              alt="user"
              width={45}
              height={45}
              className="rounded-full"
            />

            <div>
              <h3 className="font-semibold">
                Welcome
              </h3>

              <p className="text-sm text-gray-500">
                Sign In / Register
              </p>
            </div>

          </div>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col py-3">

          {[
            "Home",
            "Products",
            "Brands",
            "Offers",
            "Gift Cards",
            "Campaign",
            "Wishlist",
            "Orders",
            "Track Order",
            "Contact Us",
          ].map((item) => (
            <Link
              key={item}
              href="/"
              onClick={() => setOpenMenu(false)}
              className="
                px-5
                py-3
                text-gray-700
                hover:bg-primary/10
                hover:text-primary
                transition
              "
            >
              {item}
            </Link>
          ))}

        </div>
      </div>

      {/* Overlay */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[998]"
        />
      )}
    </>
  );
}

export default Navbar2;