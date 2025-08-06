"use client";
import ScrollToTop from "react-scroll-up";

import { IoIosArrowUp } from "react-icons/io";

const ScrollToBottomToTop = () => {
  return (
    <div className="relative  z-10 bg-amber-200 top-[12vh]">
      <ScrollToTop showUnder={160}>
        <p className="bg-primary relative -top-8 left-3  hover:primary/80 duration-300 cursor-pointer p-2 text-xl rounded  text-[#fff]">
          <IoIosArrowUp size={18} />
        </p>
      </ScrollToTop>
    </div>
  );
};

export default ScrollToBottomToTop;
