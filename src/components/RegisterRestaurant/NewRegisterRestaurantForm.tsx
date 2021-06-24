import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { PulseLoader } from "react-spinners";
import { SERVER_API_KEY } from "../../apiKey";
import "../../styles/NewRegisterRestaurant.css";
import { CustomizedSelect } from "./FoodadvisorSelect";
import { RegisterRestaurantUpload } from "./RegisterRestaurantUpload";
import { areaTypes, foodTypes, timeTypes } from "./RestaurantTypes";
export interface TypesInterface {
  isSelected: boolean;
  tag: string;
}

const style = "1px rgb(189, 188, 188) solid";

export const NewRestaurantForm: React.FC<{ user_id: string }> = ({
  user_id,
}) => {
  let history = useHistory();
  const [foodType, setFoodType] = useState<string[]>(["類型"]);
  const [timeType, setTimeType] = useState<string[]>(["時段"]);
  const [areaType, setAreaType] = useState<string[]>(["地區"]);
  const [cropResult_1, setCropResult_1] = useState("");
  const [cropResult_2, setCropResult_2] = useState("");
  const [cropResult_3, setCropResult_3] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [intro, setIntro] = useState("");

  const [nameFlash, setNameFlash] = useState(false);
  const [addressFlash, setAddressFlash] = useState(false);
  const [numberFlash, setNumberFlash] = useState(false);
  const [introFlash, setIntroFlash] = useState(false);
  const [foodTypeFlash, setFoodTypeFlash] = useState(false);
  const [timeTypeFlash, setTimeTypeFlash] = useState(false);
  const [areaTypeFlash, setAreaTypeFlash] = useState(false);

  const handleSubmit = () => {
    setNameFlash(false);
    setAddressFlash(false);
    setNumberFlash(false);
    setIntroFlash(false);
    setFoodTypeFlash(false);
    setTimeTypeFlash(false);
    setAreaTypeFlash(false);
    const formData = new FormData();
    setIsLoading(true);
    if (!user_id) {
      console.log("userid error");
      setIsLoading(false);
      return;
    }
    let mainArea = areaType[0];
    if (mainArea === "地區") mainArea = "";
    formData.append("user_id", user_id);
    formData.append("main_pic", cropResult_1);
    formData.append("other_pic_1", cropResult_2);
    formData.append("other_pic_2", cropResult_3);
    formData.append("name", name);
    formData.append("address", address);
    formData.append("time", JSON.stringify(timeType));
    formData.append("food_type", JSON.stringify(foodType));
    formData.append("number", number);
    formData.append("intro", intro);
    formData.append("main_area", mainArea);

    axios
      .post(`${SERVER_API_KEY}/restaurant/register_restaurant.php`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
        if (res.data.ok) {
          history.push("/");
        } else {
          if (res.data.errors) {
            if (res.data.errors.find((valid: any) => valid === "餐廳名稱?")) {
              setNameFlash(true);
            }
            if (
              res.data.errors.find((valid: any) => valid === "餐廳地址?") ||
              res.data.errors.find((valid: any) => valid === "地址找不到")
            ) {
              setAddressFlash(true);
            }

            if (res.data.errors.find((valid: any) => valid === "餐廳電話?")) {
              setNumberFlash(true);
            }
            if (res.data.errors.find((valid: any) => valid === "餐廳介紹?")) {
              setIntroFlash(true);
            }
            if (res.data.errors.find((valid: any) => valid === "餐廳時段?")) {
              setTimeTypeFlash(true);
            }
            if (res.data.errors.find((valid: any) => valid === "餐廳類型?")) {
              setFoodTypeFlash(true);
            }
            if (res.data.errors.find((valid: any) => valid === "餐廳地區?")) {
              setAreaTypeFlash(true);
            }
          }
        }
      });
  };

  return (
    <div className="new-register-restuarant-form">
      <div className="restaurant-input-container">
        <p>餐廳名稱:</p>
        <input
          style={{ border: nameFlash ? "1px red solid" : style }}
          type="text"
          onChange={(e) => setName(e.target.value)}
          className="new-register-restaurant-input"
          placeholder="請輸入名稱"
        />
      </div>
      <div className="restaurant-input-container">
        <p>餐廳地址:</p>
        <input
          style={{ border: addressFlash ? "1px red solid" : style }}
          type="text"
          onChange={(e) => setAddress(e.target.value)}
          className="new-register-restaurant-input"
          placeholder="請輸入地址"
        />
      </div>
      <div className="restaurant-input-container">
        <p>餐廳地區:</p>
        <CustomizedSelect
          typeFlash={areaTypeFlash}
          isMulti={false}
          defaultType="地區"
          types={areaTypes}
          type={areaType}
          setType={setAreaType}
        />
      </div>

      <div className="restaurant-input-container">
        <p>餐廳類型:</p>
        <CustomizedSelect
          isMulti={true}
          typeFlash={foodTypeFlash}
          defaultType="類型"
          types={foodTypes}
          type={foodType}
          setType={setFoodType}
        />
      </div>
      <div className="restaurant-input-container">
        <p>供餐時段:</p>
        <CustomizedSelect
          typeFlash={timeTypeFlash}
          isMulti={true}
          defaultType="時段"
          types={timeTypes}
          type={timeType}
          setType={setTimeType}
        />
      </div>
      <div className="restaurant-input-container">
        <p>餐廳電話:</p>
        <input
          style={{ border: numberFlash ? "1px red solid" : style }}
          type="text"
          className="new-register-restaurant-input"
          placeholder="請輸入電話"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="restaurant-input-container">
        <p>餐廳介紹:</p>
        <textarea
          style={{ border: introFlash ? "1px red solid" : style }}
          className="new-register-restaurant-textarea"
          placeholder="請輸入簡介"
          onChange={(e) => setIntro(e.target.value)}
        />
      </div>
      <div className="restaurant-input-container restaurant-input-upload-image-container">
        <p>商品圖片(最大2MB):</p>
        <div className="register-restaurant-crop-upload-container">
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
          <div className="register-restaurant-crop-img-container ">
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
      </div>
      <button
        className="register-restaurant-submit new-button"
        onClick={handleSubmit}
      >
        {isLoading ? (
          <PulseLoader color={"white"} loading={isLoading} size={6} />
        ) : (
          <h5>登記</h5>
        )}
      </button>
    </div>
  );
};

const ImageChunk = () => {
  return <div className="register-restaurant-crop-img"></div>;
};
