import { StaticImageData } from "next/image";

export type TProduct = {
  id: number;
  title: string;
  rating: number;
  price: number | string;
  mrpPrice: number | string;
  description: string;
  size: string[];
  category: string;
  thumbelImage: string | StaticImageData;
  backViewImage: string | StaticImageData;
  images: string[] | StaticImageData[];
  quintity: number;
  sku: string;
  label?: string;
  availability: string;
  categoty: string;
};

export type TBlog = {
  id: number;
  title: string;
  description: string;
  image: string | StaticImageData;
  author: string;
  date: string;
  label: string;
};
