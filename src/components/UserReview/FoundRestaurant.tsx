import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { emptyStar, halfStar, fullStar } from "../../Svg";
interface Props {
  reviewStar: number;
}
export const FoundRestaurant: React.FC<Props> = ({ reviewStar }) => {
  return (
    <Link className="found-restaurant-container" to="/">
      <img
        className="found-restaurant-container-img"
        src="media/piepieboss.jpg"
        alt=""
      />
      <section className="found-restaurant-info">
        <h2 className="found-restaurant-name">洶洶老闆</h2>
        <p className="found-restaurant-location">地址</p>
        <div className="found-restaurant-review-star">
          <ReactStars
            edit={false}
            activeColor="#819ad1"
            value={reviewStar}
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
          />
        </div>
      </section>
    </Link>
  );
};
