import BannerSlider from "@/slider/BannerSlider";
import SideCategories from "@/utilits/SideCategories";
import React from "react";

const Banner = () => {
  return (
    <div className="Container flex gap-4">
      <div className="xl:w-1/3 hidden lg:block">
        <SideCategories />
      </div>
      <div className="lg:w-3/4 w-full">
        <BannerSlider />
      </div>
    </div>
  );
};

export default Banner;
