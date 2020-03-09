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
  // async function getApi() {
  //   const response = await fetch("https://cat-fact.herokuapp.com/facts", {
  //     method: "GET",
  //     mode: "cors",
  //     credentials: "omit",
  //     //   crossdomain: true,
  //     headers: {
  //       "Access-Control-Allow-Origin": "*"
  //     }
  //   });
  //   return await response.json();
  // }
  // const nyaa = getApi();
  // console.log(nyaa);

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
