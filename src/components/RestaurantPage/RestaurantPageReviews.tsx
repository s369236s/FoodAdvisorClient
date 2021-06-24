import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { LoginPopup } from "../../pages/LoginPopup";
import { getUser } from "../Fetch/getUser";
import { RestaurantPageUserReview } from "./RestaurantPageUserReview";

interface Props {
  id: any;
  comments: Comment[];
}
interface Comment {
  user_pic: string;
  pic: string;
  title: string;
  content: string;
  review_star: string;
  comment_date: string;
  username: string;
  user_id: string;
  _id: string;
}

export const RestaurantPageReviews: React.FC<Props> = ({ comments, id }) => {
  return (
    <div className="restaurant-page-reviews restaurant-page-box">
      <div className="restaurant-page-header">
        <h2>評論</h2>
        {!getUser() ? (
          <Popup
            className="login-popup"
            trigger={
              <button className="restaurant-page-review-button">
                <p>登入後發表評論</p>
              </button>
            }
            modal
          >
            {(closePopup: () => void) => <LoginPopup closePopup={closePopup} />}
          </Popup>
        ) : (
          <Link
            className="restaurant-page-review-button"
            to={`/ReviewRestaurant?id=${id}`}
          >
            <p>發表評論</p>
          </Link>
        )}
      </div>
      {comments.map((comment, i) => {
        return (
          <RestaurantPageUserReview
            key={i}
            user_id={comment.user_id}
            user_pic={comment.user_pic}
            comment_date={comment.comment_date}
            title={comment.title}
            content={comment.content}
            review_star={comment.review_star}
            pic={comment.pic}
            username={comment.username}
            _id={comment._id}
          />
        );
      })}
    </div>
  );
};
