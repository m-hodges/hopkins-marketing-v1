import React, { useState } from "react";
import { hot } from "react-hot-loader";
import { HashRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Footer from "./Footer";
import Main from "./Main";
import ServiceList from "./ServiceList";

const App = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState<boolean>(false);
  return (
    <>
      <HashRouter>
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
            <About />
          </Route>
          <Route exact path="/">
            <Main setHeaderVisibility={setHeaderVisibility} />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  );
};

export default hot(module)(App);
