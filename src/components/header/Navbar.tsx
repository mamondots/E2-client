import React from "react";
import TopNav from "./TopNav";
import CenterNav from "./CenterNav";
import ResponsiveNav from "./ResponsiveNav";
import DownNav from "./DownNav";

const Navbar = () => {
  return (
    <div>
      <ResponsiveNav />
      <TopNav />
      <CenterNav />
      <DownNav />
    </div>
  );
};

export default Navbar;
