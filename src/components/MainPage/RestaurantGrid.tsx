import React from "react";
import "../../styles/RestaurantGrid.css";
import ReactStars from "react-rating-stars-component";
import { emptyStar, halfStar, fullStar } from "../../Svg";

interface Props {
  name: string;
  review_star: any;
  totalReview: number;
  main_area: string;
}
export const RestaurantGrid: React.FC<Props> = ({
  name,
  main_area,
  review_star,
  totalReview,
}) => {
  return (
    <div className="restaurant-grid">
      <div className="restaurant-grid-image">
        <img src="media/piepieboss.jpg" alt="" />
        <div className="restaurant-grid-star"></div>
      </div>
      <article>
        <h2>{name}</h2>
        <div className="restaurant-review-container">
          <ReactStars
            edit={false}
            activeColor="#819ad1"
            value={parseFloat(review_star)}
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
          />
          <p>{totalReview}則評論</p>
        </div>
        <p>{main_area}</p>
      </article>
    </div>
  );
};
