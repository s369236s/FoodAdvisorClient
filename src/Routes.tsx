import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AccountPage } from "./pages/AccountPage";
import { MainPage } from "./pages/MainPage";
import { RegisterRestaurant } from "./pages/RegisterRestaurant";
import { RestaurantPage } from "./pages/RestaurantPage";
import { ReviewRestaurant } from "./pages/ReviewRestaurant";
import { UserReview } from "./pages/UserReview";
import ScrollToTop from "./pages/ScrollTop";
export const Routes: React.FC = ({}) => {
  return (
    <BrowserRouter basename="/">
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/UserReview" component={UserReview} />
        <Route exact path="/Restaurant" component={RestaurantPage} />
        <Route
          exact
          path="/RegisterRestaurant"
          component={RegisterRestaurant}
        />
        <Route exact path="/ReviewRestaurant" component={ReviewRestaurant} />
        <Route exact path="/Account" component={AccountPage} />
      </Switch>
    </BrowserRouter>
  );
};
