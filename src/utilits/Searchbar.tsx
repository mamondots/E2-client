import React from "react";
import { Search } from "lucide-react"; // You can also use Heroicons or an SVG

const Searchbar = () => {
  return (
    <form>
      <div className="flex items-center gap-2 border border-primary/40 md:rounded-sm xl:w-[720px] lg:w-[600px] w-full">
        <div className="md:px-4 px-2 border-r border-gray-400">
          <select className="md:text-sm text-xs outline-none text-gray-500">
            <option value="">All Categories</option>
            <option value="">Top Brand</option>
            <option value="">Woman clothing</option>
          </select>
        </div>

        <div className="flex items-center justify-between w-full">
          <input
            className="w-full text-sm outline-none"
            type="text"
            placeholder="Enter keywords to search..."
          />
          <button
            type="submit"
            className="px-4 py-2.5 bg-primary text-white text-sm tracking-wider font-semibold md:rounded-l hover:bg-secondary duration-300 cursor-pointer flex items-center justify-center"
          >
            {/* Text for md+ screens */}
            <span className="hidden md:block">SEARCH</span>
            {/* Icon for small screens */}
            <Search className="block md:hidden w-4 h-5" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default Searchbar;
