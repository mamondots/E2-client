import { menuList } from "@/utilits/menuList";
import { Menu } from "lucide-react";
import Link from "next/link";
import React from "react";

const DownNav = () => {
  return (
    <div className="Container bg-primary text-white lg:flex hidden items-center xl:gap-20 lg:gap-8">
      <div className="flex items-center gap-2 uppercase text-sm font-medium bg-secondary px-6 py-4 xl:w-[285px] lg:w-[235px]">
        <p>
          <Menu size={18} />
        </p>
        <p className="tracking-wider">All Categories</p>
      </div>
      <div>
        <ul className="flex xl:gap-6 gap-4">
          {menuList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="uppercase text-sm tracking-wider"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DownNav;
