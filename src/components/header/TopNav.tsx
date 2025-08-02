"use client";
import React, { useState } from "react";
import ukFlags from "@/assets/flags/ukFlag.webp";
import bdFlags from "@/assets/flags/BDFlag.webp";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { LuUser } from "react-icons/lu";
import Link from "next/link";

const languages = [
  { code: "en", label: "English (UK)", flag: ukFlags },
  { code: "bn", label: "বাংলা", flag: bdFlags },
];
const TopNav = () => {
  const [selected, setSelected] = useState(languages[0]);
  const [open, setOpen] = useState(false);
  return (
    <div className="Container border-b border-gray-200 hidden lg:block">
      <div className="flex items-center justify-between">
        <div className="relative inline-block px-2 border border-gray-200 text-sm">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 py-2 "
          >
            <div className="flex items-center">
              <Image
                src={selected.flag}
                alt="flag"
                width={15}
                height={15}
                className="mr-2"
              />
              {selected.label}
            </div>
            <span className="text-lg">
              <MdKeyboardArrowDown />
            </span>
          </button>

          {open && (
            <div className="absolute z-10 text-sm mt-1 ml-[-9px] w-full bg-white border rounded shadow">
              {languages.map((lang) => (
                <div
                  key={lang.code}
                  onClick={() => {
                    setSelected(lang);
                    setOpen(false);
                  }}
                  className="flex items-center px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Image
                    src={lang.flag}
                    alt="flag"
                    width={15}
                    height={15}
                    className="mr-2"
                  />
                  {lang.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1  cursor-pointer">
            <p className="text-lg">
              <BiMap />
            </p>
            <p className="hover:text-secondary duration-300">Store Location</p>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <p className="text-lg">
              <LuUser />
            </p>
            <Link href="/signIn">
              <p className="hover:text-secondary duration-300">Login</p>
            </Link>
            <p>/</p>
            <p className="hover:text-secondary duration-300">Register</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
