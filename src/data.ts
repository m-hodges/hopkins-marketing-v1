import { Service, Client } from "./types";
import { MdEmail } from "react-icons/md";

export const services: Service[] = [
  {
    id: 1,
    title: "Service Name",
    details: [
      "Input keywords here",
      "Input keywords here",
      "Input keywords here"
    ],
    icon: MdEmail
  },
  {
    id: 2,
    title: "Service Name",
    details: [
      "Input keywords here",
      "Input keywords here",
      "Input keywords here"
    ],
    icon: MdEmail
  },
  {
    id: 3,
    title: "Service Name",
    details: [
      "Input keywords here",
      "Input keywords here",
      "Input keywords here"
    ],
    icon: MdEmail
  },
  {
    id: 4,
    title: "Service Name",
    details: [
      "Input keywords here",
      "Input keywords here",
      "Input keywords here"
    ],
    icon: MdEmail
  },
  {
    id: 5,
    title: "Service Name",
    details: [
      "Input keywords here",
      "Input keywords here",
      "Input keywords here"
    ],
    icon: MdEmail
  },
  {
    id: 6,
    title: "Service Name",
    details: [
      "Input keywords here",
      "Input keywords here",
      "Input keywords here"
    ],
    icon: MdEmail
  }
];

export const clients: Client[] = [
  {
    id: 1,
    name: "Michael",
    businessName: "The Fruit Shop",
    website: "http://www.example.com",
    image:
      "https://images.unsplash.com/photo-1539666455488-99208279e51e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tincidunt mi."
  },
  {
    id: 2,
    name: "FirstName LastName",
    businessName: "The Car Spraypainting Business",
    website: "http://www.example.com",
    image:
      "https://images.unsplash.com/photo-1561131506-3c48296e2c20?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in tincidunt mi. Duis finibus sodales nisl ac congue. Praesent venenatis massa in pharetra molestie."
  }
];
