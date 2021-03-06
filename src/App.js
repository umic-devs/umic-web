import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Comic from "./pages/Comic";
import Home from "./pages/Home";
import Tickets from "./pages/Tickets";

export default function App() {
  useEffect(() => {
    function handleResize() {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/comic" exact component={Comic} />
        <Route path="/comic/ingressos" component={Tickets} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}
