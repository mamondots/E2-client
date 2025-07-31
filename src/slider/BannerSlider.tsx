"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { bannerList } from "@/api/bannerApi";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
const BannerSlider = () => {
  const swiperRef = useRef<SwiperClass | null>(null);
  return (
    <div className="mt-2 rounded relative">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 left-5  z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="bg-white p-1 rounded border border-[#262626]/40 hover:border-secondary/60 hover:text-secondary duration-300 shadow cursor-pointer"
        >
          <ChevronLeft />
        </button>
      </div>
      <div className="absolute top-1/2 right-5 z-10 transform -translate-y-1/2">
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="bg-white p-1 rounded border border-[#262626]/40 hover:border-secondary/60 hover:text-secondary duration-300 shadow cursor-pointer"
        >
          <ChevronRight />
        </button>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1200}
      >
        {bannerList?.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link href="/">
              <div className="2xl:h-[600px] xl:h-[390px] lg:h-[380px] md:h-[300px] sm:h-[200px] h-[180px] rounded  relative">
                <Image
                  src={banner.image}
                  alt="Banner"
                  width={1600}
                  height={600}
                  objectFit="cover" // Ensures images scale nicely
                  className="w-full h-full rounded"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
