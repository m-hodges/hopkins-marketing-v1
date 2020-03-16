import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import MainPage from "./MainPage";
import ServiceList from "./ServiceList";
import AboutPage from "./AboutPage";

const App = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState<boolean>(false);
  return (
    <>
      <BrowserRouter>
        <Header isHeaderVisible={isHeaderVisible} />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/clients">
            <Clients />
          </Route>
          <Route path="/services">
            <ServiceList />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/">
            <MainPage setHeaderVisibility={setHeaderVisibility} />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default hot(module)(App);
