import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER_API_KEY } from "../../apiKey";
import "../../styles/RegisterRestaurant.css";
import { setAccessToken } from "../Token/accessToken";
import { NewRestaurantForm } from "./NewRegisterRestaurantForm";
import { RegisterRestaurantForm } from "./RegisterRestaurantForm";
interface Props {}

export const RegisterRestaurantBody: React.FC<Props> = ({}) => {
  const [userId, setUserId] = useState("");
  const history = useHistory();

  useEffect(() => {
    const refreshToken = localStorage.getItem("jid");
    axios
      .post(
        `${SERVER_API_KEY}/auth/refresh_token.php`,
        { refreshToken },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.ok) {
          setUserId(res.data._id);
          setAccessToken(res.data.accessToken);
        } else {
          history.push("/");
        }
      });
  }, []);

  return (
    <div className="register-restaurant-body-1">
      <div className="register-resaurant-container">
        <section>
          <h1>登記餐廳</h1>
          <p>選擇餐廳餐點的類別</p>
        </section>
        <NewRestaurantForm user_id={userId} />
      </div>
      {/* <RegisterRestaurantForm user_id={userId} /> */}
    </div>
  );
};
