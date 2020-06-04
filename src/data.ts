import { Service, Client } from "./types";
import { MdEmail, MdPhotoCamera, MdVideocam, MdWebAsset } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    id: 1,
    title: "Media Management",
    details: ["Social Media", "Multimedia"],
    icon: BsPeopleFill,
  },
  {
    id: 2,
    title: "Photography",
    details: ["Weddings", "Graduations"],
    icon: MdPhotoCamera,
  },
  {
    id: 3,
    title: "Videography",
    details: ["Music Videos", "Live Events", "Filming and Editing"],
    icon: MdVideocam,
  },
  {
    id: 4,
    title: "Web",
    details: ["Websites", "Server Setup", "Hosting"],
    icon: MdWebAsset,
  },
];

export const clients: Client[] = [
  {
    id: 1,
    name: "",
    businessName: "Plot Collective",
    website: "http://www.example.com",
    image:
      "https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    testimonial: "Enter a testimonial here",
  },
  {
    id: 2,
    name: "",
    businessName: "Ginger & Honey",
    website: "http://www.example.com",
    image:
      "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    testimonial: "Enter a testimonial here",
  },
];
