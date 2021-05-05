import React from "react";
import { RestaurantGrid } from "./RestaurantGrid";
interface Grids {
  name: string;
  review_star: number;
  totalReview: number;
  main_area: string;
  main_pic: string;
  other_pic_1: string;
  other_pic_2: string;
}
interface Props {
  grids: Grids[];
}
export const MainPageRestaurantGrids: React.FC<Props> = ({ grids }) => {
  return (
    <div className="main-page-restaurant-grids-container">
      {grids?.map((grid, i) => (
        <RestaurantGrid
          key={i}
          name={grid.name}
          review_star={grid.review_star}
          totalReview={100}
          main_area={grid.main_area}
          main_pic={grid.main_pic}
          other_pic_1={grid.other_pic_1}
          other_pic_2={grid.other_pic_2}
        />
      ))}
    </div>
  );
};
