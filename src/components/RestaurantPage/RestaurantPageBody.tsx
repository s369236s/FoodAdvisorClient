import React, { useEffect, useState } from "react";
import "../../styles/RestaurantPage.css";
import ReactStars from "react-rating-stars-component";
import axios from "axios";
import { SERVER_API_KEY } from "../../apiKey";
import { useLocation } from "react-router";
import { RestaurantPageReviews } from "./RestaurantPageReviews";
interface Restaurant {
  name: string;
  review_star: string;
  Introduction: string;
  address: string;
  phone_number: string;
  main_area: string;
  hours: string;
  main_pic: string;
  other_pic_1: string;
  other_pic_2: string;
}
interface Props {}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const RestaurantPageBody: React.FC<Props> = ({}) => {
  let query = useQuery();
  const [id, setId] = useState<any>("");
  const [info, setInfo] = useState<Restaurant>();
  const [star, setStar] = useState(0);
  const [starKeyForce, setStarKeyForce] = useState(0);

  useEffect(() => {
    setStarKeyForce((prev) => prev + 1);
  }, [info?.review_star]);

  useEffect(() => {
    setId(query.get("id"));
    const fetchData = async () => {
      await axios
        .get(`${SERVER_API_KEY}/restaurant/get_restaurant_page.php?id=${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          if (res.data.ok) {
            setInfo(res.data.data);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();

    return () => {};
  }, []);
  return (
    <div className="restaurant-page-body-containter">
      <div className="restaurant-page-body-info">
        <h1 className="restaurant-page-body-info-title">{info?.name}</h1>
        <section className="restaurant-page-body-info-review">
          <ReactStars
            edit={false}
            activeColor="#819ad1"
            value={info?.review_star}
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
            key={starKeyForce}
          />
          <h4 className="restaurant-page-body-info-total-review">100則評論</h4>
        </section>
        <section className="restaurant-page-body-info-location">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg>
          <p>{info?.address}</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
          </svg>
          <p>{info?.phone_number}</p>
        </section>
      </div>

      <div className="restaurant-page-body-main-container">
        <section className="restaurant-page-body-intro-container">
          <p>{info?.Introduction}</p>
        </section>
        <div className="restaurant-page-body-image-container">
          <div className="restaurant-page-body-main-image-container">
            <img
              src={`${SERVER_API_KEY}/${info?.main_pic}`}
              alt=""
              className="restaurant-page-body-img"
            />
          </div>
          <div className="restaurant-page-body-second-image-container">
            <img
              src={`${SERVER_API_KEY}/${info?.other_pic_1}`}
              alt=""
              className="restaurant-page-body-img"
            />
            <img
              src={`${SERVER_API_KEY}/${info?.other_pic_2}`}
              alt=""
              className="restaurant-page-body-img"
            />
          </div>
        </div>
      </div>
      <RestaurantPageReviews id={id} />
    </div>
  );
};

const halfStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
  </svg>
);
const fullStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);
const emptyStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
  </svg>
);
