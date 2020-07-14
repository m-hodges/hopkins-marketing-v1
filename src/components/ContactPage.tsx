import React, { useEffect } from "react";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

function ContactPage({ setHeaderVisibility }: Props) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    setHeaderVisibility(true);
  }, []);
  return <Contact />;
}

export default ContactPage;
