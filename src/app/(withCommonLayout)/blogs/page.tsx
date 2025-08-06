import { blogsList } from "@/api/blogsApi";
import BlogCard from "@/components/home/Blogs/BlogCard";
import PageSection from "@/utilits/PageSection";
import PaginationList from "@/utilits/Pagination";
import React from "react";

const page = () => {
  return (
    <div>
      <PageSection second="our blogs" />
      <div className="Container py-6">
        <div className="mt-6">
          <div className="border-l-2 border-secondary">
            <h2 className="font-semibold text-primary text-lg ml-2">
              OUR BLOGS
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-4">
            {blogsList.map((blog) => (
              <div key={blog.id} className="px-1 mt-6">
                <BlogCard blog={blog} />
              </div>
            ))}
          </div>

          <div className="py-6">
            <PaginationList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
