import { IconType } from "react-icons/lib/cjs";

export type Service = {
  id: number;
  title: string;
  details: string[];
  icon: IconType;
};

export type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export type Client = {
  id: number;
  name: string;
  businessName: string;
  website: string;
  image: string;
  testimonial: string;
};
