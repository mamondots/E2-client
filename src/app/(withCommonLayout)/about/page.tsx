import React from "react";
import aboutImage from "@/assets/images/about-us.webp";
import Image from "next/image";
import { IoMdCheckboxOutline } from "react-icons/io";
import PageSection from "@/utilits/PageSection";
const page = () => {
  return (
    <div>
      <PageSection second="about us" />
      <div className="Container py-6">
        <div className="flex lg:flex-row flex-col gap-6 py-4">
          <div className="lg:w-4/5">
            <h2 className="border-b text-lg capitalize font-medium text-primary pb-1">
              Welcome To Shop
            </h2>

            <div className="flex lg:flex-row flex-col gap-6 mt-4">
              <div className="lg:w-1/3 w-full">
                <Image
                  src={aboutImage}
                  alt="aboutImage"
                  width={350}
                  height={350}
                  className="w-full"
                />
              </div>
              <div className="lg:w-2/3 text-sm text-gray-500 flex flex-col gap-4">
                <p>
                  Nulla auctor mauris ut dui luctus semper. In hac habitasse
                  platea dictumst. Duis pellentesque ligula a risus suscipit
                  dignissim. Nunc non nisl lacus. Integer pharetra lacinia
                  dapibus. Donec eu dolor dui, vel posuere mauris.
                </p>

                <p>
                  Pellentesque semper congue sodales. In consequat, metus eget
                  con sequat ornare, augue dolor blandit purus, vitae lacinia
                  nisi tellus in erat. Nulla ac justo eget massa aliquet
                  sodales. Maecenas mattis male suada sem, in fringilla massa
                  dapibus quis. Suspendisse aliquam leo id neque auctor
                  molestie. Etiam at nulla tellus.
                </p>

                <p>
                  Nulla auctor mauris ut dui luctus semper. In hac habitasse
                  platea dictumst. Duis pellentesque ligula a risus suscipit
                  dignissim.
                </p>
              </div>
            </div>

            <div className="text-sm text-gray-500 flex flex-col gap-4 mt-4">
              <p>
                Nulla auctor mauris ut dui luctus semper. In hac habitasse
                platea dictumst. Duis pellentesque ligula a risus suscipit
                dignissim. Nunc non nisl lacus. Integer pharetra lacinia
                dapibus. Donec eu dolor dui, vel posuere mauris.
              </p>

              <p>
                Pellentesque semper congue sodales. In consequat, metus eget con
                sequat ornare, augue dolor blandit purus, vitae lacinia nisi
                tellus in erat. Nulla ac justo eget massa aliquet sodales.
                Maecenas mattis male suada sem, in fringilla massa dapibus quis.
                Suspendisse aliquam leo id neque auctor molestie. Etiam at nulla
                tellus.
              </p>

              <p>
                Nulla auctor mauris ut dui luctus semper. In hac habitasse
                platea dictumst. Duis pellentesque ligula a risus suscipit
                dignissim.
              </p>
            </div>
          </div>
          <div className="lg:w-1/5">
            <h2 className="border-b text-lg capitalize font-medium text-primary pb-1">
              Why Choose Us
            </h2>

            <div className="flex flex-col gap-2 mt-4">
              <li className="flex items-center gap-2  border-b border-dashed pb-2">
                <span className="text-secondary text-xl">
                  <IoMdCheckboxOutline />
                </span>{" "}
                <span className="text-sm text-gray-500">
                  Shipping & Returns
                </span>
              </li>
              <li className="flex items-center gap-2  border-b border-dashed pb-2">
                <span className="text-secondary text-xl">
                  <IoMdCheckboxOutline />
                </span>{" "}
                <span className="text-sm text-gray-500">Secure Shopping</span>
              </li>
              <li className="flex items-center gap-2  border-b border-dashed pb-2">
                <span className="text-secondary text-xl">
                  <IoMdCheckboxOutline />
                </span>{" "}
                <span className="text-sm text-gray-500">
                  International Shipping
                </span>
              </li>
              <li className="flex items-center gap-2  border-b border-dashed pb-2">
                <span className="text-secondary text-xl">
                  <IoMdCheckboxOutline />
                </span>{" "}
                <span className="text-sm text-gray-500">Affiliates</span>
              </li>
              <li className="flex items-center gap-2  border-b border-dashed pb-2">
                <span className="text-secondary text-xl">
                  <IoMdCheckboxOutline />
                </span>{" "}
                <span className="text-sm text-gray-500">Group Sales</span>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
