"use client";
import React, { useState } from "react";
import ProductReview from "./ProductReview";

const ProductInformation = () => {
  const tabs = ["Details", "More Information", "Review"];
  const [activeTab, setActiveTab] = useState("Details");

  return (
    <div className="mt-8">
      {/* Tab Headers */}
      <div className="flex items-center uppercase border-b">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`uppercase md:text-base text-sm font-medium cursor-pointer  px-4 py-2 transition-all duration-300 ${
              activeTab === tab
                ? " text-secondary  border-t border-l border-r border-secondary"
                : "bg-white text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-4 border rounded-[2px] p-4">
        {activeTab === "Details" && (
          <div>
            <h2 className="text-base font-semibold mb-2 text-primary">
              Product Details
            </h2>
            <div className="text-sm flex flex-col gap-4 text-gray-500">
              <p>
                Will you get the answers in time, or is that just WISHFUL
                THINKING? Lets see how quickly you make the connections in this
                fun and challenging board game. You only have 60 seconds to
                figure out three Mystery words on the card. The only thing they
                have in common is that they all begin with the same letter. You
                (and your teammates) are allowed as many guesses as you like
              </p>
              <p>
                INCLUDES 3 FUN PRINTABLES! Along with our learning games for
                kids ages 3-5, you get access to 3 FULL-COLOR, PRINTABLE
                downloads to READ, STORY is a fun illustrated journey through
                sustainable plant harvesting, endangered plants, ecosystems and
                more. The 27-page WILDCRAFT! BOTANICAL COLORING BOOK helps kids
                learn the plants in our educational game. And our POCKET GUIDE
                is the perfect reference to take on family nature outings, hikes
                and camping trips! AT LearningHerbs, WE BELIEVE IN THE POWER OF
                CONNECTING KIDS TO NATURE and appreciating everything OUR GREAT
                EARTH HAS TO OFFER. As parents, we designed Wildcraft! fun
                family games for kids.
              </p>

              <p>
                Wildcraft An Herbal Adventure Game is a fun, thats also easy to
                follow NO READING required. Because our learning board games
                feature clear illustrations and matching icons, even younger
                kids will learn what the different plants look like and can be
                used for.
              </p>
            </div>
          </div>
        )}
        {activeTab === "More Information" && (
          <div>
            <h2 className="text-base font-semibold mb-2 text-primary">
              More Information
            </h2>
            <div className="flex gap-8">
              <div className="font-medium text-sm text-[#262626] flex flex-col gap-2">
                <p>Manufacturer</p>
                <p>Color</p>
                <p>Size</p>
              </div>

              <div className="text-sm text-gray-500 flex flex-col gap-2">
                <p>Agatha Stewart</p>
                <p>Blue</p>
                <p>45cm</p>
              </div>
            </div>
          </div>
        )}
        {activeTab === "Review" && (
          <div>
            <ProductReview />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInformation;
