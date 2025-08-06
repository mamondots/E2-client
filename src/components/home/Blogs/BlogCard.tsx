import Link from "next/link";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";

import React from "react";

import { UserRound } from "lucide-react";
import { TBlog } from "@/types";

interface Props {
  blog: TBlog;
}

const BlogCard: React.FC<Props> = ({ blog }) => {
  return (
    // <Link href={`/blogs/${blog?.id}`} className="block">
    <Link href={`/blogs/${1}`} className="block">
      <div className="rounded cursor-pointer border border-primary/20 overflow-hidden group shadow-sm hover:shadow-md transition duration-300">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100 relative overflow-hidden">
          {blog?.image && (
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              priority
              className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          )}

          <div className="top-5 left-5 absolute">
            {blog.label && (
              <p className="px-3 py-1 bg-secondary text-white uppercase text-sm font-medium rounded-[2px]">
                {blog.label}
              </p>
            )}
          </div>
        </div>

        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary">
              <p className=" flex items-center justify-center rounded-[2px]">
                <UserRound size={14} className="" />
              </p>
              <p className="uppercase font-medium text-xs">{blog.author}</p>
            </div>
            <div className="flex items-center gap-1 text-primary">
              <p className=" flex items-center justify-center rounded-[2px]">
                <CiCalendarDate />
              </p>
              <time className="uppercase font-medium text-xs">
                {" "}
                {blog.date}
              </time>
            </div>
          </div>

          <h2 className="text-base text-semibold text-primary mt-2 group-hover:text-secondary line-clamp-1">
            {blog.title}
          </h2>

          <p className="line-clamp-2 mt-2 text-sm text-[#262626]/70">
            {" "}
            {blog.description}
          </p>
          <div className="mt-3">
            <span className="flex items-center text-primary group-hover:text-secondary duration-300 gap-1 uppercase text-sm font-medium tracking-wider transition-all">
              <span className={`relative z-10 transition-colors duration-300`}>
                Read more
              </span>
              <BsArrowRight className="group-hover:ml-2 duration-300" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
