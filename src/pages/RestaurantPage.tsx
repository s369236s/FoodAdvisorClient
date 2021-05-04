import React from "react";
import { Nav } from "../components/Nav/Nav";
import { RestaurantPageBody } from "../components/RestaurantPage/RestaurantPageBody";
export const RestaurantPage: React.FC = () => {
  return (
    <>
      <Nav />
      <RestaurantPageBody />
    </>
  );
};
