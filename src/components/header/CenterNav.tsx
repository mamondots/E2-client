import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/titasweb.png";
import Searchbar from "@/utilits/Searchbar";
import { BsCartCheck } from "react-icons/bs";
const CenterNav = () => {
  return (
    <div className="Container py-3 flex items-center justify-between">
      <div className="hidden lg:block">
        <Image src={logo} alt="Logo" width={160} height={160} />
      </div>

      <div className="flex items-center gap-4 lg:w-auto w-full">
        <div className="lg:w-auto w-full">
          <Searchbar />
        </div>
        <div className="lg:flex hidden  items-center gap-2 cursor-pointer">
          <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-sm">
            <BsCartCheck className="text-xl text-white font-bold" />
          </div>
          <div className="flex flex-col items-start">
            <p className="uppercase text-sm font-medium">shipping cart</p>
            <p className="text-sm font-medium text-secondary">
              <span>0 items</span> - <span>৳0.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterNav;
