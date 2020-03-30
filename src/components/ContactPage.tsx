import React from "react";
import Contact from "./Contact";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

function ContactPage({ setHeaderVisibility }: Props) {
  setHeaderVisibility(true);
  return <Contact />;
}

export default ContactPage;
