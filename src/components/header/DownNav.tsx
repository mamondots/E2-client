"use client";
import { menuList } from "@/utilits/menuList";
import SideCategories from "@/utilits/SideCategories";
import { Menu } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const DownNav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showCategory, setIsshowCategory] = useState(false);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Handle sticky nav and hide category on scroll down
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsSticky(currentScrollY > 80);

      // Hide category if scrolling down
      if (currentScrollY > lastScrollY && showCategory) {
        setIsshowCategory(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showCategory]);

  // Detect outside click to close category
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setIsshowCategory(false);
      }
    };

    if (showCategory) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCategory]);

  return (
    <div
      className={`Container bg-primary lg:flex hidden items-center xl:gap-20 lg:gap-8 duration-300 transition-all ${
        isSticky ? "fixed top-0 shadow-md z-50 w-full" : "relative"
      }`}
    >
      <div
        onClick={() => setIsshowCategory(!showCategory)}
        className="flex text-white items-center cursor-pointer gap-2 uppercase text-sm font-medium bg-secondary px-6 py-4 xl:w-[285px] lg:w-[235px]"
      >
        <p>
          <Menu size={18} />
        </p>
        <p className="tracking-wider">All Categories</p>
      </div>

      <div>
        <ul className="flex text-white xl:gap-6 gap-4">
          {menuList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="uppercase text-sm tracking-wider"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {showCategory && (
        <div
          ref={categoryRef}
          className="top-13 z-20 absolute bg-white xl:w-[285px] lg:w-[235px] shadow"
        >
          <SideCategories />
        </div>
      )}
    </div>
  );
};

export default DownNav;
