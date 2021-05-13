import axios from "axios";
import React, { useState } from "react";
import ReactStar from "react-rating-stars-component";
import { useLocation } from "react-router";
import { PulseLoader } from "react-spinners";
import { SERVER_API_KEY } from "../../apiKey";
import { getUser } from "../Fetch/getUser";
import { RegisterRestaurantUpload } from "../RegisterRestaurant/RegisterRestaurantUpload";
interface Props {
  review: string;
}
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
export const ReviewRestaurantForm: React.FC<Props> = ({ review }) => {
  let query = useQuery();

  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [food, setFood] = useState("");
  const [speed, setSpeed] = useState("");
  const [price, setPrice] = useState("");
  const [cropResult, setCropResult] = useState("");
  const [preview, setPreview] = useState("");

  const handleSubmit = () => {
    const user_id = getUser();
    console.log(user_id);
    const id = query.get("id") as any;
    const formData = new FormData();
    setIsLoading(true);
    formData.append("pic", cropResult);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("food", food);
    formData.append("speed", speed);
    formData.append("review", review);
    formData.append("price", price);
    formData.append("restaurant_id", id);
    formData.append("user_id", user_id);
    axios
      .post(`${SERVER_API_KEY}/restaurant/review_restaurant.php`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        if (res.data.ok) {
          // history.push("/");
        }
      });
  };

  return (
    <div className="review-restaurant-form">
      <section className="review-restaurant-input-container">
        <h5>評論標題</h5>
        <input
          type="text"
          className="review-restaurant-input"
          onChange={(e) => setTitle(e.target.value)}
        />
      </section>
      <section className="review-restaurant-input-container">
        <h5>評論內容</h5>
        <textarea
          className="review-restaurant-textarea"
          onChange={(e) => setContent(e.target.value)}
        />
      </section>

      <div className="review-restaurant-other-rating">
        <h5>評分</h5>
        <section className="review-restaurant-other-rating-star">
          <h3>食物</h3>
          <ReactStar
            activeColor="#819ad1"
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
            onChange={(star: string) => setFood(star)}
          />
        </section>
        <section className="review-restaurant-other-rating-star">
          <h3>速度</h3>
          <ReactStar
            activeColor="#819ad1"
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
            onChange={(star: string) => setSpeed(star)}
          />
        </section>
        <section className="review-restaurant-other-rating-star">
          <h3>價格</h3>
          <ReactStar
            activeColor="#819ad1"
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
            onChange={(star: string) => setPrice(star)}
          />
        </section>
      </div>
      <div className="review-restaurant-crop-img-container">
        <RegisterRestaurantUpload
          name="other_pic_1"
          text={"上傳副照片"}
          setCropResult={setCropResult}
        />
        {cropResult ? (
          <img
            src={cropResult}
            alt="主照片"
            className="register-restaurant-crop-img"
          />
        ) : (
          <ImageChunk />
        )}
      </div>
      <button className="review-restaurant-button" onClick={handleSubmit}>
        {isLoading ? (
          <PulseLoader color={"white"} loading={isLoading} size={6} />
        ) : (
          <p>送出評論</p>
        )}
      </button>
    </div>
  );
};

const halfStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z" />
  </svg>
);
const fullStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
  </svg>
);
const emptyStar = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
  </svg>
);

const ImageChunk = () => {
  return <div className="register-restaurant-crop-img"></div>;
};
