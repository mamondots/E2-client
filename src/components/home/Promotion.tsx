import { promotionCheckList } from "@/api/promotionCheckApi";
import Image from "next/image";
import React from "react";

const Promotion = () => {
  return (
    <div className="Container py-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:gap-4 md:gap-2 gap-2   rounded">
        {promotionCheckList.map((item) => (
          <div key={item.id}>
            <div className="flex items-center xl:gap-3 lg:gap-2 lg:justify-center border px-2 py-6 rounded-sm md:border-r pr-2 group hover:text-secondary hover:border-secondary/40 transition-all duration-300 cursor-pointer">
              <Image src={item.icon} alt={item.title} width={50} height={50} />
              <div>
                <h3 className="text-sm font-semibold text-primary group-hover:text-secondary transition-all duration-300 uppercase">
                  {item.title}
                </h3>
                <p className="text-sm text-primary group-hover:text-secondary transition-all duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Promotion;
