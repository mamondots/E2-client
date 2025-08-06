import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/titasweb.png";
import Searchbar from "@/utilits/Searchbar";

import SideCartbar from "@/utilits/SideCartbar";
import Link from "next/link";
const CenterNav = () => {
  return (
    <div className="Container py-3 flex items-center justify-between">
      <div className="hidden lg:block">
        <Link href="/">
          <Image src={logo} alt="Logo" width={160} height={160} />
        </Link>
      </div>

      <div className="flex items-center gap-4 lg:w-auto w-full">
        <div className="lg:w-auto w-full">
          <Searchbar />
        </div>
        <div className="lg:flex hidden  items-center gap-2 cursor-pointer">
          <SideCartbar />
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
