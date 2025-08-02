import type { Metadata } from "next";
import "./globals.css";
import { roboto } from "./font";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Multi Product Ecommerce",
  description: "A multi-product ecommerce application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Toaster />
        {children}
      </body>
    </html>
  );
}
