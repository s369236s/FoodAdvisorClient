import React from "react";
import { Nav } from "../components/Nav/Nav";
import { ReviewRestaurantBody } from "../components/ReviewRestaurant/ReviewRestaurantBody";
import "../styles/ReviewRestaurant.css";
interface Props {}

export const ReviewRestaurant: React.FC<Props> = ({}) => {
  return (
    <>
      <Nav />
      <ReviewRestaurantBody />
    </>
  );
};
