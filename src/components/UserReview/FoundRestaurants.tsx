import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SERVER_API_KEY } from "../../apiKey";
import { FoundRestaurant } from "./FoundRestaurant";
export interface Grids {
  name: string;
  review_star: string;
  address: string;
  main_pic: string;
  _id: string;
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const FoundRestaurants: React.FC = () => {
  let query = useQuery();

  const [grids, setGrids] = useState<Grids[]>([]);

  useEffect(() => {
    if (!query.get("name_query")) {
      axios
        .get(`${SERVER_API_KEY}/restaurant/main_page_restaurant.php`)
        .then((res) => {
          console.log(res.data);
          if (res.data.ok) setGrids(res.data.data);
          else setGrids([]);
        });
    } else {
      axios
        .get(
          `${SERVER_API_KEY}/restaurant/search_restaurant.php?name_query=${query.get(
            "name_query"
          )}`
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.ok) setGrids(res.data.data);
          else setGrids([]);
        });
    }
    return () => {};
  }, []);
  return (
    <div className="found-restaurants-container">
      <h3>找到的餐廳</h3>
      {grids.map((resaurant, i) => (
        <FoundRestaurant
          key={i}
          _id={resaurant._id}
          name={resaurant.name}
          review_star={parseFloat(resaurant.review_star)}
          address={resaurant.address}
          main_pic={resaurant.main_pic}
        />
      ))}
      <div className="chunk"></div>
    </div>
  );
};
