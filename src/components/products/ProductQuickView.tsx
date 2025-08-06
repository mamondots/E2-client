"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { TProduct } from "@/types";
import AddBtn from "@/utilits/AddBtn";
import { Flame, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface productProps {
  product: TProduct;
}

const ProductQuickView: React.FC<productProps> = ({ product }) => {
  const {
    title,
    price,
    mrpPrice,
    thumbelImage,
    description,
    sku,
    availability,
    size,
  } = product;

  return (
    <Dialog>
      <DialogTrigger>
        <div className="absolute uppercase text-sm text-white bottom-5 group-hover:bottom-0  opacity-0 group-hover:opacity-100  w-full  flex items-center justify-center gap-2 bg-secondary p-2   transition-all duration-300 cursor-pointer">
          <p>
            <Search size={16} />
          </p>
          <p>Quick view</p>
        </div>
      </DialogTrigger>
      <DialogContent className="lg:max-w-4xl rounded-[2px]">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className="border border-primary/30">
            <Image
              src={thumbelImage}
              alt="product image"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-2">
            <h1 className="md:text-base text-sm font-medium text-[#262629]/80">
              {title}
            </h1>

            <p className="mt-1 flex items-center gap-1">
              <span className="text-[red]">
                <Flame size={16} fill="currentColor" />
              </span>
              <span className="text-sm text-[red]">
                6 sold in last 25 hours
              </span>
            </p>

            <div className="flex items-center gap-3 mt-2">
              <p className="text-lg font-semibold">৳ {price}</p>
              {mrpPrice && (
                <p className="text-[red] line-through text-sm">৳ {mrpPrice}</p>
              )}
            </div>

            <p className="mt-1 text-sm text-[#262629]/80 line-clamp-2">
              {description}
            </p>
            <p className="mt-2 text-sm text-[#262629]/80">
              <span className="font-semibold">SKU</span> : {sku}
            </p>
            <p className="mt-2 text-sm text-[#262629]/80">
              <span className="font-semibold">Availability</span> :{" "}
              {availability}
            </p>

            <div className="mt-2 text-sm text-[#262629]/80">
              <p className="font-semibold">Size :</p>
              <p className="flex items-center gap-1 mt-1">
                {size.map((item, index) => (
                  <span
                    key={index}
                    className="border border-[#262629]/40 hover:border-secondary hover:bg-secondary px-2 rounded text-sm capitalize cursor-pointer  hover:text-white duration-300"
                  >
                    {item}
                  </span>
                ))}
              </p>
            </div>

            <AddBtn counterMainStyle="mt-6" />

            <Link href="/checkout" className="w-full">
              <div className="bg-primary hover:bg-secondary duration-300 cursor-pointer rounded text-white text-center py-1.5 mt-2">
                <button className="text-sm outline-none cursor-pointer">
                  Buy Now
                </button>
              </div>
            </Link>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProductQuickView;
