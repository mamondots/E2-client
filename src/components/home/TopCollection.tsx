import TopCollectionSlider from "@/slider/TopCollectionSlider";
import React from "react";

const TopCollection = () => {
  return (
    <div className="Container py-4">
      <div className="border-l-2 border-secondary">
        <h2 className="font-semibold text-primary text-lg ml-2">
          TOP COLLECTIONS
        </h2>
      </div>

      <div>
        <TopCollectionSlider />
      </div>
    </div>
  );
};

export default TopCollection;
