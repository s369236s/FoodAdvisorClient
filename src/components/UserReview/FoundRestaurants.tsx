import axios from "axios";
import React, { useEffect } from "react";
import { SERVER_API_KEY } from "../../apiKey";
import { FoundRestaurant } from "./FoundRestaurant";

export const FoundRestaurants: React.FC = () => {
  useEffect(() => {
    axios
      .get(`${SERVER_API_KEY}/restaurant/search_restaurant.php`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    return () => {};
  }, []);

  return (
    <div className="found-restaurants-container">
      <h3>找到的餐廳</h3>
      <FoundRestaurant reviewStar={4.5} />
      <FoundRestaurant reviewStar={4.5} />
      <FoundRestaurant reviewStar={4.5} />
    </div>
  );
};
