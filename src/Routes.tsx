import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainPage } from "./pages/MainPage";
import { RestaurantPage } from "./pages/RestaurantPage";
import { UserReview } from "./pages/UserReview";

export const Routes: React.FC = ({}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/UserReview" component={UserReview} />
        <Route exact path="/Restaurant" component={RestaurantPage} />
      </Switch>
    </BrowserRouter>
  );
};
