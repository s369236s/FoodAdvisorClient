import React from "react";
import { Link } from "react-router-dom";
import { RestaurantPageUserReview } from "./RestaurantPageUserReview";

interface Props {
  id: any;
  comments: Comment[];
}
interface Comment {
  pic: string;
  title: string;
  content: string;
  review_star: number;
  comment_date: string;
}

export const RestaurantPageReviews: React.FC<Props> = ({ comments, id }) => {
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
      {comments.map((comment, i) => {
        return (
          <RestaurantPageUserReview
            key={i}
            comment_date={comment.comment_date}
            title={comment.title}
            content={comment.content}
            review_star={comment.review_star}
            pic={comment.pic}
          />
        );
      })}
    </div>
  );
};
