import React, { useEffect, useState } from "react";
import { emptyStar, fullStar, halfStar } from "../../Svg";
import ReactStars from "react-rating-stars-component";
import { Link, useHistory } from "react-router-dom";
import { SERVER_API_KEY } from "../../apiKey";

interface Props {
  gird: RecentVisitGridInterface;
  review_star: string;
}

interface RecentVisitGridInterface {
  name: string;
  review_star: string;
  address: string;
  main_pic: string;
  main_area: string;
  _id: string;
}

export const RecentVisitGrid: React.FC<Props> = ({
  gird: grid,
  review_star,
}) => {
  let history = useHistory();
  const [starKeyForce, setStarKeyForce] = useState(0);

  useEffect(() => {
    setStarKeyForce((prev) => prev + 1);
  }, [review_star]);

  const foo = () => {
    history.push(`/restaurant?id=${grid._id}`);
  };

  return (
    <div onClick={foo} className="account-page-user-recent-visit-gird">
      <img src={`${SERVER_API_KEY}/${grid?.main_pic}`} alt="" />
      <h5>{grid.name}</h5>
      <section>
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
          key={starKeyForce}
        />
        <p>{review_star}分</p>
      </section>
    </div>
  );
};
