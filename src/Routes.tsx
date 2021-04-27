import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { MainPage } from "./pages/MainPage";

export const Routes: React.FC = ({}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/Login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};
