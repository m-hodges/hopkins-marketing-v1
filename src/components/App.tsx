import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import MainPage from "./MainPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";

const App = () => {
  const [isHeaderVisible, setHeaderVisibility] = useState<boolean>(false);

  return (
    <>
      <BrowserRouter>
        <Header isHeaderVisible={isHeaderVisible} />
        <Switch>
          <Route path="/contact">
            <ContactPage setHeaderVisibility={setHeaderVisibility} />
          </Route>
          <Route path="/about">
            <AboutPage setHeaderVisibility={setHeaderVisibility} />
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
