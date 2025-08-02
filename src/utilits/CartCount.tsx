import React from "react";
import { BsCartCheck } from "react-icons/bs";

const CartCount = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-secondary rounded-sm">
      <BsCartCheck className="text-xl text-white font-bold" />
    </div>
  );
};

export default CartCount;
