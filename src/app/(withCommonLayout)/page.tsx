import Banner from "@/components/home/Banner";
import BestSellingProducts from "@/components/home/BestSellingProducts";
import Blogs from "@/components/home/Blogs/Blogs";
import Brand from "@/components/home/Brand";
import DiscountProducts from "@/components/home/DiscountProducts";
import NewArrivalProducts from "@/components/home/NewArrivalProducts";
import OfferBanner from "@/components/home/OfferBanner";
import Promotion from "@/components/home/Promotion";
import TopCollection from "@/components/home/TopCollection";

export default function Home() {
  return (
    <div>
      <Banner />
      <Promotion />
      <BestSellingProducts />
      <OfferBanner />
      <NewArrivalProducts />
      <TopCollection />
      <DiscountProducts />
      <Brand />
      <Blogs />
    </div>
  );
}
