import Image from "next/image";
import React from "react";
import blogImage from "@/assets/blogs/blog1.webp";
const page = () => {
  return (
    <div>
      <div className="w-full h-[60vh]">
        <Image
          src={blogImage}
          alt="blog"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="Container xl:px-40 lg:px-34 md:px-20 sm:px-8 px-2  mt-[-60px] relative z-10">
        <div className="border bg-[#fff] p-6">
          <h2 className="md:text-lg text-base uppercase font-medium text-primary">
            Commodo laoreet semper tincidun sit
          </h2>
          <div className="text-sm flex items-center gap-4 py-2 text-gray-500">
            <p className="hover:text-secondary cursor-pointer duration-300">
              <span>Posted by:</span> <span>Wash upito</span>
            </p>
            <p className="hover:text-secondary cursor-pointer duration-300">
              <span>Created Date:</span> <span>15 Nov</span>
            </p>
          </div>

          <div className="text-sm text-gray-500 flex flex-col gap-2 py-4">
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam
              voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
              dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
              elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
              magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
              takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <p>
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui
              blandit praesent luptatum zzril delenit augue duis dolore te
              feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer
              adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat.
            </p>
            <p>
              Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi.
            </p>
          </div>

          <div className="flex items-center gap-2 mt-8 py-4">
            <p className="text-base font-medium text-primary">Tags : </p>
            <ul className="flex items-center gap-1 text-sm">
              <li className="border px-2 py-1 rounded-[2px] border-primary/20 text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer">
                Fasion
              </li>
              <li className="border px-2 py-1 rounded-[2px] border-primary/20 text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer">
                Woman
              </li>
              <li className="border px-2 py-1 rounded-[2px] border-primary/20 text-primary hover:bg-primary hover:text-white duration-300 cursor-pointer">
                Brand
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
