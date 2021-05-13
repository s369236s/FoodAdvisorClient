import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_API_KEY } from "../../apiKey";
import "../../styles/RegisterRestaurant.css";
import { setAccessToken } from "../Token/accessToken";
import { RegisterRestaurantForm } from "./RegisterRestaurantForm";
interface Props {}

export const RegisterRestaurantBody: React.FC<Props> = ({}) => {
  const [userId, setUserId] = useState("");

  useEffect(() => {
    axios
      .post(
        `${SERVER_API_KEY}/auth/refresh_token.php`,
        {},
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.ok) {
          setUserId(res.data._id);
          setAccessToken(res.data.accessToken);
        }
      });
  }, []);

  return (
    <div className="register-restaurant-body">
      <h1>登記您的餐廳</h1>
      <RegisterRestaurantForm user_id={userId} />
    </div>
  );
};
