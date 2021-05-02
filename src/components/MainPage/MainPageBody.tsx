import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import { SERVER_API_KEY } from "../../apiKey";
import { getAccessToken } from "../Token/accessToken";
import { CanvasImage } from "./CanvasImage";
import { IntroFeatuer } from "./IntroFeatuer";
import { MainPageRestaurantGrids } from "./MainPageRestaurantGrids";

export const MainPageBody: React.FC = ({}) => {
  const loginSubmit = () => {
    console.log(213);
    axios
      .get(`${SERVER_API_KEY}/user/refresh_token.php`, {
        withCredentials: true,
        headers: { Authorization: `Bearer ${getAccessToken()}` },
      })
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
