import React from "react";
import "../../styles/RegisterRestaurant.css";
import { RegisterRestaurantForm } from "./RegisterRestaurantForm";
interface Props {}

export const RegisterRestaurantBody: React.FC<Props> = ({}) => {
  return (
    <div className="register-restaurant-body">
      <h1>登記您的餐廳</h1>
      <RegisterRestaurantForm />
    </div>
  );
};
