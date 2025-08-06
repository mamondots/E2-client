import Image from "next/image";
import React from "react";
import logo from "../../assets/logo/titaswebWhite.png";
import ResponsiveSidBar from "./ResponsiveSidBar";
import SideCartbar from "@/utilits/SideCartbar";
const ResponsiveNav = () => {
  return (
    <div className="lg:hidden fixed top-0 z-20  w-full bg-primary Container flex items-center justify-between py-3">
      <div className="text-white">
        <ResponsiveSidBar />
      </div>
      <div className="">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </div>
      {/* <div className="flex items-center justify-center w-8 h-8 border border-white rounded">
        <BsCartCheck className="text-lg text-white font-bold" />
      </div> */}
      <SideCartbar />
    </div>
  );
};

export default ResponsiveNav;
