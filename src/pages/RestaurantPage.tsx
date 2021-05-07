import React from "react";
import { Nav } from "../components/Nav/Nav";
import { RestaurantPageBody } from "../components/RestaurantPage/RestaurantPageBody";
import { RestaurantPageReviews } from "../components/RestaurantPage/RestaurantPageReviews";
export const RestaurantPage: React.FC = () => {
  return (
    <>
      <Nav />
      <RestaurantPageBody />
    </>
  );
};
