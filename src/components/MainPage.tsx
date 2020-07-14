import React, { useEffect } from "react";

import Hero from "./Hero";
import Mission from "./Mission";
import ServiceList from "./ServiceList";
import Clients from "./Clients";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

const Main = ({ setHeaderVisibility }: Props) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Hero setHeaderVisibility={setHeaderVisibility} />
      <Mission />
      <ServiceList />
      <Clients />
      <Contact />
    </>
  );
};

export default Main;
