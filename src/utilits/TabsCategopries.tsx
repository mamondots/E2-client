"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown } from "lucide-react";
import { categoryList } from "./categoryList";

const TabsCategories = () => {
  const [openCategories, setOpenCategories] = useState<Record<number, boolean>>(
    {}
  );
  const [openSubCategories, setOpenSubCategories] = useState<
    Record<number, boolean>
  >({});

  const toggleCategory = (id: number) => {
    setOpenCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSubCategory = (id: number) => {
    setOpenSubCategories((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full max-w-md mx-auto mt-5 border rounded p-4 shadow">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>

      <ul className="space-y-2">
        {categoryList.map((cat) => (
          <li key={cat.id}>
            <div
              className="flex justify-between items-center cursor-pointer font-medium hover:text-primary"
              onClick={() => cat.subCategory.length && toggleCategory(cat.id)}
            >
              <span className="flex items-center gap-2">
                {/* <span>{cat.icon}</span> */}
                {cat.category}
              </span>
              {cat.subCategory.length > 0 &&
                (openCategories[cat.id] ? (
                  <ChevronDown size={16} />
                ) : (
                  <ChevronRight size={16} />
                ))}
            </div>

            {/* Subcategories */}
            {openCategories[cat.id] && cat.subCategory.length > 0 && (
              <ul className="ml-4 mt-2 space-y-1">
                {cat.subCategory.map((sub) => (
                  <li key={sub.id}>
                    <div
                      className="flex justify-between items-center cursor-pointer hover:text-primary"
                      onClick={() =>
                        sub.childCategories.length && toggleSubCategory(sub.id)
                      }
                    >
                      <span>{sub.title}</span>
                      {sub.childCategories.length > 0 &&
                        (openSubCategories[sub.id] ? (
                          <ChevronDown size={14} />
                        ) : (
                          <ChevronRight size={14} />
                        ))}
                    </div>

                    {/* Child Categories */}
                    {openSubCategories[sub.id] &&
                      sub.childCategories.length > 0 && (
                        <ul className="ml-4 mt-1 space-y-1 text-sm">
                          {sub.childCategories.map((child) => (
                            <li key={child.id}>
                              <Link
                                href={`/category/${child.title
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}`}
                                className="hover:underline text-secondary"
                              >
                                {child.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabsCategories;
