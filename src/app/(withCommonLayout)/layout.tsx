import CopyRight from "@/components/Footer/CopyRight";
import Footer from "@/components/Footer/Footer";
import Subscribe from "@/components/Footer/Subscribe";
import Navbar from "@/components/header/Navbar";
import MessengerBtn from "@/shared/MessengerBtn";
import ScrollToBottomToTop from "@/shared/ScrollToBottomToTop";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      <MessengerBtn />
      <ScrollToBottomToTop />
      <Navbar />
      {children}
      <Subscribe />
      <Footer />
      <CopyRight />
    </div>
  );
}
