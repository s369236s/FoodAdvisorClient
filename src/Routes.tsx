import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";

export const Routes: React.FC = ({}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        {/* <Route exact path="/Login" component={LoginPopup} /> */}
      </Switch>
    </BrowserRouter>
  );
};
