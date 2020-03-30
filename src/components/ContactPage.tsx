import React, { useEffect } from "react";
import Contact from "./Contact";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

function ContactPage({ setHeaderVisibility }: Props) {
  useEffect(() => {
    setHeaderVisibility(true);
  }, []);
  return <Contact />;
}

export default ContactPage;
