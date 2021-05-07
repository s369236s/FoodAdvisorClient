import React from "react";
import "../../styles/RestaurantGrid.css";
import ReactStars from "react-rating-stars-component";
import { emptyStar, halfStar, fullStar } from "../../Svg";
import { SERVER_API_KEY } from "../../apiKey";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  review_star: any;
  totalReview: number;
  main_area: string;
  main_pic: string;
  _id: string;
}
export const RestaurantGrid: React.FC<Props> = ({
  name,
  main_area,
  review_star,
  totalReview,
  main_pic,
  _id,
}) => {
  return (
    <Link className="restaurant-grid" to={`/Restaurant?id=${_id}`}>
      <div className="restaurant-grid-image">
        <img src={`${SERVER_API_KEY}/${main_pic}`} alt="" />
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
    </Link>
  );
};
