"use client";
import { productsList } from "@/api/productsApi";
import ProductCard from "@/components/products/ProductCard";
import PageSection from "@/utilits/PageSection";
import React, { useState } from "react";
const categories = [...new Set(productsList.map((p) => p.categoty))];
const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = productsList.filter(
    (product) => product.categoty === selectedCategory
  );
  return (
    <div>
      <PageSection second="new arrivals" />

      <div className="Container py-8">
        <div className="flex flex-col  mb-4 gap-2">
          <div className="border-l-2 border-secondary">
            <h2 className="font-semibold text-primary text-lg ml-2 uppercase">
              new arrivals
            </h2>
          </div>

          {/* Categories for Large Screens */}
          <div className="hidden md:flex items-center mt-4 border-b">
            {categories.map((category) => (
              <div
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`text-sm uppercase cursor-pointer duration-300  ${
                  selectedCategory === category
                    ? "bg-secondary text-white font-semibold border-t border-r border-l px-4 py-2"
                    : "text-primary hover:text-secondary border-t border-r border-l px-4 py-2"
                }`}
              >
                {category}
              </div>
            ))}
          </div>

          {/* Categories Dropdown for Small Screens */}
          <div className="md:hidden">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-[2px] px-2 py-1 text-sm text-primary"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="flex items-center justify-center pt-8">
          <button className="px-8 py-3 bg-primary uppercase tracking-wider rounded-[2px] hover:bg-secondary duration-300 cursor-pointer text-white text-sm font-semibold">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
