import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../App";
import Photo from "./Photo";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/photo/:id" component={Photo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
