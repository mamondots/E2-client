import { Heart, RotateCcw, ShoppingBag } from "lucide-react";
import React from "react";
import ProductQuickView from "./ProductQuickView";
import Image from "next/image";
import Link from "next/link";
import { TProduct } from "@/types";

interface productProps {
  product: TProduct;
}

const RowProductCard: React.FC<productProps> = ({ product }) => {
  const {
    title,
    price,
    mrpPrice,
    rating,
    thumbelImage,
    backViewImage,
    label,
    id,
  } = product;
  return (
    <div className=" group cursor-pointer flex">
      <div className="relative border">
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

      <div className="p-4 ">
        <h2 className="xl:text-base text-sm font-medium text-primary group-hover:text-secondary duration-300 line-clamp-1 cursor-pointer">
          {title}
        </h2>
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

        <div className="flex items-center  gap-1  w-full mt-2">
          <div className="w-8 h-8 flex items-center justify-center border border-primary/30 text-primary/60 rounded-[2px] hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer">
            <Heart size={16} />
          </div>
          <div className="flex w-40 h-8 items-center justify-center gap-2 border border-primary/30 text-primary/60  rounded-[2px] hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer">
            <p>
              <ShoppingBag size={16} />
            </p>
            <p className="uppercase text-sm font-medium">add to cart</p>
          </div>
          <div className="w-8 h-8 flex items-center justify-center border border-primary/30 text-primary/60 rounded-[2px] hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer">
            <RotateCcw size={16} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RowProductCard;
