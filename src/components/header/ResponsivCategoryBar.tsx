import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { menuList } from "@/utilits/menuList";
import TabsCategopries from "@/utilits/TabsCategopries";
import Image from "next/image";
import Link from "next/link";
import uk from "@/assets/flags/ukFlag.webp";
import bd from "@/assets/flags/BDFlag.webp";

const ResponsivCategoryBar = () => {
  return (
    <Tabs
      defaultValue="categories"
      className="w-full px-4 mt-8 overflow-y-scroll"
    >
      <TabsList className="border-b rounded-none md:gap-8 gap-2">
        <TabsTrigger
          className="bg-transparent shadow-none font-normal uppercase  rounded-none mt-2 cursor-pointer"
          value="categories"
        >
          Categories
        </TabsTrigger>
        <TabsTrigger
          className="bg-transparent shadow-none font-normal uppercase cursor-pointer  rounded-none mt-2"
          value="menu"
        >
          Menu
        </TabsTrigger>
        <TabsTrigger
          className="bg-transparent shadow-none font-normal uppercase cursor-pointer  rounded-none mt-2"
          value="account"
        >
          Account
        </TabsTrigger>
      </TabsList>
      <TabsContent value="categories">
        <TabsCategopries />
      </TabsContent>
      <TabsContent value="menu">
        <ul className="flex flex-col gap-2  border rounded p-4 shadow mt-5">
          {menuList.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className=" text-base capitalize font-medium tracking-wider hover:text-primary transition duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </TabsContent>
      <TabsContent value="account">
        <div className="border rounded p-4 shadow mt-5">
          <div className="flex flex-col gap-2">
            <Link
              href=""
              className="text-gray-600 hover:text-secondary transition duration-300"
            >
              Login
            </Link>
            <Link
              href=""
              className="text-gray-600 hover:text-secondary transition duration-300"
            >
              Register
            </Link>
          </div>

          <div className="mt-4">
            <h2>Language</h2>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-2">
                <Image src={uk} alt="Language Icon" width={20} height={20} />
                <span className="text-gray-600 hover:text-secondary transition duration-300 cursor-pointer">
                  English
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Image src={bd} alt="Language Icon" width={20} height={20} />
                <span className="text-gray-600 hover:text-secondary transition duration-300 cursor-pointer">
                  Bangla
                </span>
              </div>
            </div>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default ResponsivCategoryBar;
