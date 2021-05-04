import React from "react";
import { Nav } from "../components/Nav/Nav";
import { RegisterRestaurantBody } from "../components/RegisterRestaurant/RegisterRestaurantBody";

interface Props {}

export const RegisterRestaurant: React.FC<Props> = ({}) => {
  return (
    <>
      <Nav />
      <RegisterRestaurantBody />
    </>
  );
};
