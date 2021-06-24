import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SERVER_API_KEY } from "../../apiKey";
import { CanvasImage } from "./CanvasImage";
import { IntroFeatuer } from "./IntroFeatuer";
import { MainPageRestaurantGrids } from "./MainPageRestaurantGrids";
export interface Grids {
  name: string;
  review_star: number;
  totalReview: number;
  main_area: string;
  main_pic: string;
  total: string;
  _id: string;
}
export const MainPageBody: React.FC = ({}) => {
  const [grids, setGrids] = useState<Grids[]>([]);
  useEffect(() => {
    axios
      .get(`${SERVER_API_KEY}/restaurant/main_page_restaurant.php`)
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) setGrids(res.data.data);
        else setGrids([]);
      });
    return () => {};
  }, []);
  return (
    <main className="main-page-body-container">
      <CanvasImage />
      <IntroFeatuer />
      <Link to="/">桃園的美味早餐</Link>
      <MainPageRestaurantGrids grids={grids} />
    </main>
  );
};
