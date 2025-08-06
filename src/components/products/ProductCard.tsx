"use client";
import { Heart, RotateCcw, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ProductQuickView from "./ProductQuickView";
import Link from "next/link";
import { TProduct } from "@/types";
import toast from "react-hot-toast";

interface productProps {
  product: TProduct;
}

const ProductCard: React.FC<productProps> = ({ product }) => {
  const [isCartLoading, setIsCartLoading] = useState(false);
  const [isWishLoading, setIsWishLoading] = useState(false);
  const {
    title,
    price,
    mrpPrice,
    rating,
    thumbelImage,
    backViewImage,
    label,
    id,
  } = product; // Destructure product properties as needed

  const handleAddToCart = () => {
    if (isCartLoading) return;
    setIsCartLoading(true);
    setTimeout(() => {
      setIsCartLoading(false);
      toast.success("Added to cart!", {
        duration: 4000,
        position: "top-right",
      });
    }, 1000); // Simulate API delay
  };
  const handleAddToWish = () => {
    if (isWishLoading) return;
    setIsWishLoading(true);
    setTimeout(() => {
      setIsWishLoading(false);
      toast.success("Wishlist added!", {
        duration: 4000,
        position: "top-right",
      });
    }, 1000); // Simulate API delay
  };
  return (
    <div className="border rounded-[2px] group cursor-pointer">
      <div className="relative ">
        <Link href={`/product/${id}`}>
          <div className="lg:w-[280px] lg:h-[280px] ">
            <Image
              src={backViewImage}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-[280px] lg:h-[280px]  absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <Image
              src={thumbelImage}
              alt={title}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div>
          {label && (
            <span className="absolute top-2 left-2 bg-secondary text-white text-xs px-2 py-1 rounded-[2px]">
              {label}
            </span>
          )}
        </div>

        <ProductQuickView product={product} />
      </div>

      <div className="p-4 flex flex-col  items-center justify-center text-center ">
        <Link href={`/product/${id}`}>
          <h2 className="xl:text-base text-sm font-medium text-primary group-hover:text-secondary duration-300 line-clamp-1 cursor-pointer">
            {title}
          </h2>
        </Link>
        <div>
          <span className="text-secondary/70 text-xl">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <span key={i}>★</span>
            ))}
            {rating % 1 !== 0 && <span>☆</span>}
          </span>
        </div>
        <div>
          <span className="text-lg font-semibold text-primary group-hover:text-secondary duration-300">
            ৳{price}
          </span>
          {mrpPrice && (
            <span className="line-through text-secondary group-hover:text-primary duration-300 text-sm ml-2">
              ৳{mrpPrice}
            </span>
          )}
        </div>

        <div className="flex items-center  gap-1 justify-center w-full mt-2">
          <div
            onClick={handleAddToWish}
            className="w-8 h-8 flex items-center justify-center border border-primary/30 text-primary/60 rounded-[2px] hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer"
          >
            {isWishLoading ? (
              <div className="h-4 w-4 border-2 border-white  rounded-full animate-spin" />
            ) : (
              <Heart size={16} />
            )}
          </div>
          <div
            onClick={handleAddToCart}
            className="flex w-40 h-8 items-center justify-center gap-2 border border-primary/30 text-primary/60  rounded-[2px] hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer"
          >
            <p>
              <ShoppingBag size={16} />
            </p>

            {isCartLoading ? (
              <span className="text-sm font-medium">cart adding...</span>
            ) : (
              <span className="uppercase text-sm font-medium">add to cart</span>
            )}
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-primary/30 text-primary/60 rounded-[2px] hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer">
            <RotateCcw size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
