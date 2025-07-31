import React from "react";

const ProductReview = () => {
  return (
    <div>
      <h2 className="text-base capitalize font-medium text-primary">
        Give a Review
      </h2>
      <p className="mt-2 text-[#262626]/80 lg:w-2/3 text-sm">
        How we use your data: We’ll only contact you about the review you left,
        and only if necessary. By submitting your review, you agree to
        Judge.me’s terms, privacy and content policies.
      </p>

      <h1 className="text-base font-medium text-primary mt-2">
        Write a review
      </h1>

      <div className="mt-4 md:w-1/2">
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <input
              className="border outline-none px-2 py-2 rounded text-sm"
              type="text"
              placeholder="Give your review a title"
            />
          </div>

          <div className="flex flex-col gap-2">
            <textarea
              className="border outline-none px-2 py-2 rounded text-sm"
              cols={30}
              rows={6}
              placeholder="Write your review here.."
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <input
              className="border outline-none px-2 py-2 rounded text-sm"
              type="text"
              placeholder="Give your rating 1 to 5.."
            />
          </div>

          <div className="flex">
            <input
              className="px-6 py-2 bg-primary hover:bg-secondary duration-300 cursor-pointer text-white rounded-[2px]"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductReview;
