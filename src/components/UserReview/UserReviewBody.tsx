import React from "react";
import "../../styles/UserReview.css";
import { FoundRestaurants } from "./FoundRestaurants";
import { UserReviewForm } from "./UserReviewForm";

export const UserReviewBody: React.FC = ({}) => {
  return (
    <div className="user-review-container">
      <h2>評論你曾經用餐過的餐廳</h2>
      <UserReviewForm />
      <FoundRestaurants />
    </div>
  );
};
