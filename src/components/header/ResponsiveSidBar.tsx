import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import ResponsivCategoryBar from "./ResponsivCategoryBar";

const ResponsiveSidBar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-2xl cursor-pointer" />
      </SheetTrigger>
      <SheetContent side="left">
        <ResponsivCategoryBar />
      </SheetContent>
    </Sheet>
  );
};

export default ResponsiveSidBar;
