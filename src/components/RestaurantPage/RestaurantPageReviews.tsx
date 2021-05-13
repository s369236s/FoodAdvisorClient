import React from "react";
import { Link } from "react-router-dom";
import { RestaurantPageUserReview } from "./RestaurantPageUserReview";

interface Props {
  id: any;
}

export const RestaurantPageReviews: React.FC<Props> = ({ id }) => {
  return (
    <div className="restaurant-page-reviews">
      <div className="restaurant-page-header">
        <h2>評論</h2>
        <Link
          className="restaurant-page-review-button"
          to={`/ReviewRestaurant?id=${id}`}
        >
          <p>發表評論</p>
        </Link>
      </div>
      <RestaurantPageUserReview />
    </div>
  );
};
