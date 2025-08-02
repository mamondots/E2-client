import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

// import Image from "next/image";
import Link from "next/link";
// import cartImg from "@/assets/image/cart-empty.webp";
import CartCount from "./CartCount";
import cartImage from "@/assets/products/p2.webp";
import Image from "next/image";
import AddBtn from "./AddBtn";
import { Trash2 } from "lucide-react";
const SideCartbar = () => {
  return (
    <Sheet>
      <SheetTrigger className="cursor-pointer">
        <CartCount />
      </SheetTrigger>
      <SheetContent className="">
        <div className="px-4 pt-4 relative">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg">Shopping cart</h2>
            <p className="text-sm text-primary">2 items</p>
          </div>

          <div className="mt-4 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="border w-[80px] h-[70px]">
                <Image
                  src={cartImage}
                  alt="cartImage"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              <div className="md:px-1 flex flex-col md:gap-1 w-full">
                <h2 className="text-sm font-medium text-[#262626] line-clamp-1">
                  Steve Madden Womens Dolly Sandal
                </h2>
                <p className="text-sm font-medium text-secondary">1 * ৳ 2540</p>
                <div className="flex items-center gap-2 w-full">
                  <div className="w-full">
                    <AddBtn
                      addcartBtn={false}
                      counterStyle="rounded-[2px] md:w-[40%] w-[60%]"
                      counterMainStyle=""
                    />
                  </div>
                  <div className="bg-secondary p-1.5 text-white rounded-[2px] hover:bg-red-700 cursor-pointer duration-300">
                    <Trash2 size={18} />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="border w-[80px] h-[70px]">
                <Image
                  src={cartImage}
                  alt="cartImage"
                  width={80}
                  height={80}
                  className="w-full h-full"
                />
              </div>
              <div className="md:px-1 flex flex-col md:gap-1 w-full">
                <h2 className="text-sm font-medium text-[#262626] line-clamp-1">
                  Zara Women Leather Bag
                </h2>
                <p className="text-sm font-medium text-secondary">1 * ৳ 2540</p>
                <div className="flex items-center gap-2 w-full">
                  <div className="w-full">
                    <AddBtn
                      addcartBtn={false}
                      counterStyle="rounded-[2px] md:w-[40%] w-[60%]"
                      counterMainStyle=""
                    />
                  </div>
                  <div className="bg-secondary p-1.5 text-white rounded-[2px] hover:bg-red-700 cursor-pointer duration-300">
                    <Trash2 size={18} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 border-t py-2 text-[#262626] flex flex-col gap-2">
            <p className="flex items-center justify-between text-sm font-medium">
              <span>Subtotal:</span> <span>৳ 1,445.97</span>
            </p>
            <p className="flex items-center justify-between text-sm font-medium">
              <span>Total:</span>{" "}
              <span className="text-base text-primary font-semibold">
                ৳ 1,445.97
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Tax included and shipping calculated at checkout
            </p>
          </div>
        </div>
        <SheetFooter className="px-0 py-0">
          <div className="flex items-center">
            <SheetClose asChild>
              <Link href="/cart" className="flex-1">
                <div className="bg-[#262626] text-white text-center capitalize py-2 cursor-pointer">
                  view cart
                </div>
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href="/checkout" className="flex-1">
                <div className=" bg-primary text-white text-center capitalize py-2 cursor-pointer">
                  checkout
                </div>
              </Link>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default SideCartbar;
