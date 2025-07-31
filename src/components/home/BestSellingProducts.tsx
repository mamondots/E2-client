"use client";
import { productsList } from "@/api/productsApi";
import React, { useState } from "react";
import ProductSlider from "@/slider/ProductSlider";

const categories = [...new Set(productsList.map((p) => p.categoty))];

const BestSellingProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const filteredProducts = productsList.filter(
    (product) => product.categoty === selectedCategory
  );

  return (
    <div className="Container py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 gap-2">
        <div className="border-l-2 border-secondary">
          <h2 className="font-semibold text-primary text-lg ml-2">
            BEST SELLERS
          </h2>
        </div>

        {/* Categories for Large Screens */}
        <div className="hidden md:flex items-center gap-6">
          {categories.map((category) => (
            <div
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm uppercase cursor-pointer duration-300 ${
                selectedCategory === category
                  ? "text-secondary font-semibold"
                  : "text-primary hover:text-secondary"
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

      {/* Product Slider */}
      <div>
        <ProductSlider filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default BestSellingProducts;
