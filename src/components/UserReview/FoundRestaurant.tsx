import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { emptyStar, halfStar, fullStar } from "../../Svg";
import { SERVER_API_KEY } from "../../apiKey";
interface Props {
  name: string;
  review_star: number;
  address: string;
  main_pic: string;
  _id: string;
}
export const FoundRestaurant: React.FC<Props> = ({
  review_star,
  name,
  _id,
  address,
  main_pic,
}) => {
  return (
    <Link className="found-restaurant-container" to={`/Restaurant?id=${_id}`}>
      <img
        className="found-restaurant-container-img"
        src={`${SERVER_API_KEY}/${main_pic}`}
        alt=""
      />
      <section className="found-restaurant-info">
        <h2 className="found-restaurant-name">{name}</h2>
        <p className="found-restaurant-location">{address}</p>
        <div className="found-restaurant-review-star">
          <ReactStars
            edit={false}
            activeColor="#819ad1"
            value={review_star}
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
