"use client";
import React, { useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { useWindowSize } from "@/hooks/useWindowSize";
import { topCollectionList } from "@/api/collectionApi";
import Image from "next/image";

const TopCollectionSlider = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && topCollectionList.length > 4) ||
    (windowWidth < 1024 && topCollectionList.length > 3);
  return (
    <div className="relative border rounded-[2px] mt-4">
      {showCustomArrows && (
        <>
          <div className="absolute top-1/2  xl:left-[-15px] left-[-8px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white xl:p-1 rounded-full t border border-primary/50 text-primary/50 hover:border-secondary hover:text-secondary transition-colors duration-300 shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 xl:right-[-15px] right-[-8px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white xl:p-1 rounded-full border border-primary/50 text-primary/50 hover:border-secondary hover:text-secondary transition-colors duration-300 shadow cursor-pointer"
            >
              <ChevronRight />
            </button>
          </div>
        </>
      )}

      <Swiper
        slidesPerView={2}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 2 },
          700: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
          1024: { slidesPerView: 7 },
          1280: { slidesPerView: 7 },
          1536: { slidesPerView: 7 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {topCollectionList.map((product) => (
          <SwiperSlide key={product.id} className="group">
            <div className="flex items-center justify-center border border-transparent hover:border-secondary cursor-pointer duration-300 transition-all flex-col  p-4">
              <Image src={product.icon} alt="icon" width={60} height={60} />
              <h2 className="text-sm py-2 font-medium tracking-wider text-primary group-hover:text-secondary duration-300">
                {product.title}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopCollectionSlider;
