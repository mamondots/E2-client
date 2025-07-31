import { Mail } from "lucide-react";
import React from "react";

const Subscribe = () => {
  return (
    <div className="Container  relative top-14">
      <div className="bg-secondary rounded flex flex-col items-center justify-center gap-4 w-full py-4">
        <p className="md:text-base text-sm font-medium text-white uppercase tracking-wider">
          Subscribe to our newsletter
        </p>
        <div className="w-full lg:px-50 px-10">
          <form className="bg-white px-4 py-2 rounded  flex items-center justify-between">
            <input
              type="text"
              className="w-full outline-none"
              placeholder="Your Email address.."
            />
            <Mail className="text-primary" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
