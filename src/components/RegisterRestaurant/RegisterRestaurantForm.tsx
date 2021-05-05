import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { SERVER_API_KEY } from "../../apiKey";
import { RegisterRestaurantUpload } from "./RegisterRestaurantUpload";
import { PulseLoader } from "react-spinners";
interface Props {}

export const RegisterRestaurantForm: React.FC<Props> = ({}) => {
  const history = useHistory();
  const [cropResult_1, setCropResult_1] = useState("");
  const [cropResult_2, setCropResult_2] = useState("");
  const [cropResult_3, setCropResult_3] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [mainArea, setMainArea] = useState("台北");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [intro, setIntro] = useState("");

  const handleSubmit = () => {
    const formData = new FormData();
    setIsLoading(true);
    formData.append("main_pic", cropResult_1);
    formData.append("other_pic_1", cropResult_2);
    formData.append("other_pic_2", cropResult_3);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("number", number);
    formData.append("intro", intro);
    formData.append("main_area", mainArea);
    axios
      .post(`${SERVER_API_KEY}/restaurant/register_restaurant.php`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        setIsLoading(false);
        if (res.data.ok) {
          history.push("/");
        }
      });
  };

  return (
    <div className="register-restaurant-form">
      <section className="register-restaurant-input-container">
        <p>餐廳名稱</p>
        <RestaurantInputIcon />
        <input
          type="text"
          className="register-restaurant-input"
          placeholder="餐廳名稱"
          onChange={(e) => setName(e.target.value)}
          name="name"
        />
      </section>
      <section className="register-restaurant-input-container">
        <p>餐廳地區</p>
        <select
          className="register-restaurant-select"
          name="mainArea"
          value={mainArea}
          onChange={(e) => {
            setMainArea(e.target.value);
          }}
        >
          <option value="台北">台北</option>
          <option value="新北">新北</option>
          <option value="桃園">桃園</option>
          <option value="新竹">新竹</option>
          <option value="苗栗">苗栗</option>
          <option value="台中">台中</option>
          <option value="彰化">彰化</option>
          <option value="嘉義">嘉義</option>
          <option value="台南">台南</option>
          <option value="高雄">高雄</option>
          <option value="屏東">屏東</option>
          <option value="宜蘭">宜蘭</option>
          <option value="花蓮">花蓮</option>
          <option value="台東">台東</option>
        </select>
      </section>
      <section className="register-restaurant-input-container">
        <p>餐廳地址</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
        </svg>
        <input
          type="text"
          className="register-restaurant-input"
          placeholder="餐廳地址"
          onChange={(e) => setAddress(e.target.value)}
          name="address"
        />
      </section>
      <section className="register-restaurant-input-container">
        <p>餐廳電話</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
          />
        </svg>
        <input
          type="text"
          className="register-restaurant-input"
          placeholder="餐廳電話"
          onChange={(e) => setNumber(e.target.value)}
          name="number"
        />
      </section>
      <section className="register-restaurant-textarea-container">
        <p>餐廳介紹</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
        </svg>
        <textarea
          name="intro"
          className="register-restaurant-textarea"
          placeholder="寫下餐廳的介紹"
          onChange={(e) => setIntro(e.target.value)}
        ></textarea>
      </section>
      <div className="register-restaurant-upload-img-container">
        <div className="register-restaurant-crop-img-container">
          {" "}
          <RegisterRestaurantUpload
            name="main_pic"
            text={"上傳主照片"}
            setCropResult={setCropResult_1}
          />
          {cropResult_1 ? (
            <img
              src={cropResult_1}
              alt="主照片"
              className="register-restaurant-crop-img"
            />
          ) : (
            <ImageChunk />
          )}
        </div>
        <div className="register-restaurant-crop-img-container">
          <RegisterRestaurantUpload
            name="other_pic_1"
            text={"上傳副照片"}
            setCropResult={setCropResult_2}
          />
          {cropResult_2 ? (
            <img
              src={cropResult_2}
              alt="副照片"
              className="register-restaurant-crop-img"
            />
          ) : (
            <ImageChunk />
          )}
        </div>
        <div className="register-restaurant-crop-img-container">
          {" "}
          <RegisterRestaurantUpload
            name="other_pic_2"
            text={"上傳副照片"}
            setCropResult={setCropResult_3}
          />
          {cropResult_3 ? (
            <img
              src={cropResult_3}
              alt="副照片"
              className="register-restaurant-crop-img"
            />
          ) : (
            <ImageChunk />
          )}
        </div>
      </div>

      <button className="register-restaurant-submit" onClick={handleSubmit}>
        {isLoading ? (
          <PulseLoader color={"white"} loading={isLoading} size={6} />
        ) : (
          <h5>登記</h5>
        )}
      </button>
    </div>
  );
};

const RestaurantInputIcon = () => (
  <svg
    width="24"
    height="24"
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    clipRule="evenodd"
  >
    <path d="M7.008 22.914c-4.134-1.896-7.008-6.072-7.008-10.914 0-6.623 5.377-12 12-12s12 5.377 12 12c0 4.439-2.415 8.318-6.002 10.394.002-5.398.004-12.809-.002-13.685-.003-.412-.3-.709-.673-.709-1.297 0-3.215 5.17-3.883 11 1.079-.003 2.056 0 2.056 0v4.482c-1.107.337-2.28.518-3.496.518-.852 0-1.683-.089-2.484-.258v-6.096c0-.585.36-.765 1.151-1.391.594-.47 1.016-1.212.935-1.963-.231-2.121-.793-6.292-.793-6.292h-.458v5h-.835l-.166-5h-.469l-.201 5h-.836l-.144-5h-.506l-.186 5h-.836v-5h-.5s-.509 4.198-.718 6.312c-.074.741.326 1.469.907 1.935.787.63 1.147.819 1.147 1.395v5.272z" />
  </svg>
);

const ImageChunk = () => {
  return <div className="register-restaurant-crop-img"></div>;
};
