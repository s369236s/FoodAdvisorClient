import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { CanvasImage } from "./CanvasImage";
import { IntroFeatuer } from "./IntroFeatuer";
import { MainPageRestaurantGrids } from "./MainPageRestaurantGrids";

export const MainPageBody: React.FC = ({}) => {
  const loginSubmit = () => {
    console.log(213);
    axios
      .get("http://111.185.146.121:80/api/test.php")
      .then((res) => console.log(res));
  };
  return (
    <main className="main-page-body-container">
      <CanvasImage />
      <IntroFeatuer />
      <Link to="/">桃園的美味早餐</Link>
      <MainPageRestaurantGrids />
      <button onClick={loginSubmit}>123</button>
    </main>
  );
};
