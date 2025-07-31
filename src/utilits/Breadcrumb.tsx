import React from "react";

const Breadcrumb = ({ title }) => {
  return (
    <div className="flex items-center flex-wrap gap-2 md:text-base text-sm font-medium text-primary">
      <p className="hover:text-secondary duration-300 cursor-pointer">Home</p>
      <p>/</p>
      <p>{title}</p>
    </div>
  );
};

export default Breadcrumb;
