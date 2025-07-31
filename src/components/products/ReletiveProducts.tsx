import { productsList } from "@/api/productsApi";
import ProductSlider from "@/slider/ProductSlider";
import React from "react";

const ReletiveProducts = () => {
  const filteredProducts = productsList;
  return (
    <div className="mt-8">
      <div className="border-l-2 border-secondary">
        <h2 className="font-semibold text-primary md:text-lg text-sm ml-2">
          RELETIVE PRODUCTS
        </h2>
      </div>

      <div className="mt-6">
        <ProductSlider filteredProducts={filteredProducts} />
      </div>
    </div>
  );
};

export default ReletiveProducts;
