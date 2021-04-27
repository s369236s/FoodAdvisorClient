import React from "react";
import { Link } from "react-router-dom";
import { CanvasImage } from "./CanvasImage";
import { IntroFeatuer } from "./IntroFeatuer";
import { MainPageRestaurantGrids } from "./MainPageRestaurantGrids";

export const MainPageBody: React.FC = ({}) => {
  return (
    <main className="main-page-body-container">
      <CanvasImage />
      <IntroFeatuer />
      <Link to="/">桃園的美味早餐</Link>
      <MainPageRestaurantGrids />
    </main>
  );
};
