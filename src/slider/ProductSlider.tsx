"use client";
import React, { useRef } from "react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProductCard from "@/components/products/ProductCard";
import { useWindowSize } from "@/hooks/useWindowSize";
import { TProduct } from "@/types";

interface Props {
  filteredProducts: TProduct[];
}

const ProductSlider: React.FC<Props> = ({ filteredProducts }) => {
  const windowWidth = useWindowSize();
  const swiperRef = useRef<SwiperClass | null>(null);

  const showCustomArrows =
    (windowWidth >= 1024 && filteredProducts.length > 4) ||
    (windowWidth < 1024 && filteredProducts.length > 3);
  return (
    <div className="relative">
      {showCustomArrows && (
        <>
          <div className="absolute top-1/2  xl:left-[-12px] left-[-8px] z-10 transform -translate-y-1/2">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="bg-white xl:p-1 rounded-full t border border-primary/50 text-primary/50 hover:border-secondary hover:text-secondary transition-colors duration-300 shadow cursor-pointer"
            >
              <ChevronLeft />
            </button>
          </div>
          <div className="absolute top-1/2 xl:right-[-12px] right-[-8px] z-10 transform -translate-y-1/2">
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
        slidesPerView={1}
        loop={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          700: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 4 },
          1536: { slidesPerView: 4 },
        }}
        modules={[Navigation]}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper as SwiperClass)}
        speed={1000}
      >
        {filteredProducts.map((product) => (
          <SwiperSlide key={product.id} className="px-1">
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
