"use client";

import React, { useState } from "react";
import { ChevronRight, SquarePlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { categoryList } from "./categoryList";

const SideCategories = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredCategoryId, setHoveredCategoryId] = useState<number | null>(
    null
  );

  const visibleCategories = showAll ? categoryList : categoryList.slice(0, 10);

  return (
    <div className="relative border-t-2 border-primary z-20">
      <div className="border py-4 relative ">
        <ul className="space-y-3 ">
          {visibleCategories.map((item) => (
            <li
              key={item.id}
              className="group px-4"
              onMouseEnter={() => setHoveredCategoryId(item.id)}
              onMouseLeave={() => setHoveredCategoryId(null)}
            >
              <div className="flex items-center justify-between gap-3 cursor-pointer hover:text-secondary transition">
                <div className="flex items-center gap-2">
                  <div className="w-[18px] h-[16px] flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.category}
                      width={24}
                      height={24}
                      className="w-full h-full"
                    />
                  </div>
                  <span className="capitalize text-sm">{item.category}</span>
                </div>
                {item.subCategory?.length > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-secondary" />
                )}
              </div>

              {/* Subcategory Dropdown */}
              {hoveredCategoryId === item.id &&
                item.subCategory?.length > 0 && (
                  <div className="absolute top-0 left-full z-10  p-4 bg-white shadow-lg border w-[500px] grid grid-cols-2 gap-4">
                    {item.subCategory.map((sub) => (
                      <div key={sub.id}>
                        <h4 className="font-semibold text-sm mb-2 capitalize">
                          {sub.title}
                        </h4>
                        <ul className="space-y-1 pl-2">
                          {sub.childCategories.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={`/category/${child.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="text-xs text-gray-600 hover:text-secondary capitalize transition"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
            </li>
          ))}
        </ul>

        {/* See More Button */}
        {categoryList.length > 10 && (
          <div className="mt-4 ml-4 text-center border-t pt-4 cursor-pointer">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-primary cursor-pointer hover:text-secondary duration-300 flex items-center justify-center gap-2"
            >
              <SquarePlus size={16} />
              {showAll ? "See Categories" : "More Categories"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideCategories;
