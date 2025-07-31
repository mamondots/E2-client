import { Lato, Poppins, Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
  display: "swap",
});

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});
