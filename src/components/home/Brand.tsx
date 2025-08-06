"use client";
import React, { useRef } from "react";

import { useWindowSize } from "@/hooks/useWindowSize";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { brandList } from "@/api/brandApi";
const Brand = () => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && brandList.length > 7) ||
    (windowWidth < 1024 && brandList.length > 3);
  return (
    <section className="Container py-4 relative">
      <div className="border-l-2 border-secondary">
        <h2 className="font-semibold text-primary text-lg ml-2">OUR BRANDS</h2>
      </div>
      {showCustomArrows && (
        <>
          <div className="absolute  top-1/2 mt-4  xl:left-17 lg:left-6 md:left-6 left-[6px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white xl:p-1 rounded-full border border-[#262626]/40 shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 mt-4 xl:right-17 lg:right-6 md:right-6 right-[6px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="bg-white xl:p-1 rounded-full border border-[#262626]/40 shadow cursor-pointer"
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
          768: { slidesPerView: 6 },
          1024: { slidesPerView: 8 },
          1280: { slidesPerView: 8 },
          1536: { slidesPerView: 8 },
        }}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        // autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {brandList.map((brand) => (
          <SwiperSlide key={brand.id} className="px-1 my-4">
            <div className="border border-primary/40 hover:border-secondary duration-300 cursor-pointer rounded p-6 h-[100px]">
              <Image
                src={brand.brandImage}
                alt="brand"
                width={200}
                height={200}
                className="w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Brand;
