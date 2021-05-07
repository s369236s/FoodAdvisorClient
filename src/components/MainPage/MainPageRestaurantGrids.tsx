import React from "react";
import { Grids } from "./MainPageBody";
import { RestaurantGrid } from "./RestaurantGrid";
interface Props {
  grids: Grids[];
}
export const MainPageRestaurantGrids: React.FC<Props> = ({ grids }) => {
  return (
    <div className="main-page-restaurant-grids-container">
      {grids?.map((grid, i) => (
        <RestaurantGrid
          _id={grid._id}
          key={i}
          name={grid.name}
          review_star={grid.review_star}
          totalReview={100}
          main_area={grid.main_area}
          main_pic={grid.main_pic}
        />
      ))}
    </div>
  );
};
