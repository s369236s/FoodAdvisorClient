import React from "react";
import { Link } from "react-router-dom";
import { RestaurantPageUserReview } from "./RestaurantPageUserReview";

interface Props {}

export const RestaurantPageReviews: React.FC<Props> = ({}) => {
  return (
    <div className="restaurant-page-reviews">
      <div className="restaurant-page-header">
        <h2>評論</h2>
        <Link className="restaurant-page-review-button" to="/ReviewRestaurant">
          <p>發表評論</p>
        </Link>
      </div>
      <RestaurantPageUserReview />
    </div>
  );
};
