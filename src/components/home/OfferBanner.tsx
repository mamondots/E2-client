import banner1 from "@/assets/banner/offerbannr1.webp";
import banner2 from "@/assets/banner/offerbanner2.webp";
import Image from "next/image";

const OfferBanner = () => {
  return (
    <div className="Container py-6">
      <div className="flex items-center gap-4">
        <div className="w-1/4 bg-amber-300">
          <Image src={banner1} alt="banner" width={500} height={500} />
        </div>
        <div className="w-3/4 bg-amber-800">
          <Image
            src={banner2}
            alt="banner"
            width={800}
            height={800}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferBanner;
