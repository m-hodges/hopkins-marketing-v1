import React from "react";

import Hero from "./Hero";
import About from "./About";
import ServiceList from "./ServiceList";
import Clients from "./Clients";
import Contact from "./Contact";

type Props = {
  setHeaderVisibility: (arg: boolean) => void;
};

const Main = ({ setHeaderVisibility }: Props) => {
  return (
    <>
      <Hero setHeaderVisibility={setHeaderVisibility} />
      <About />
      <ServiceList />
      <Clients />
      <Contact />
    </>
  );
};

export default Main;
