import React from "react";
import { RestaurantGrid } from "./RestaurantGrid";

export const MainPageRestaurantGrids: React.FC = () => {
  return (
    <div className="main-page-restaurant-grids-container">
      <RestaurantGrid />
      <RestaurantGrid />
      <RestaurantGrid />
      <RestaurantGrid />
    </div>
  );
};
