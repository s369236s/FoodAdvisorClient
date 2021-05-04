import React from "react";
import "../../styles/RestaurantPage.css";
import ReactStars from "react-rating-stars-component";
import { emptyStar, halfStar, fullStar } from "../../Svg";
interface Props {}

export const RestaurantPageBody: React.FC<Props> = ({}) => {
  return (
    <div className="restaurant-page-body-containter">
      <div className="restaurant-page-body-info">
        <h2 className="restaurant-page-body-info-title">兇兇老闆</h2>
        <section className="restaurant-page-body-info-review">
          <ReactStars
            edit={false}
            activeColor="#819ad1"
            value={4.5}
            count={5}
            size={24}
            isHalf={true}
            emptyIcon={emptyStar}
            halfIcon={halfStar}
            filledIcon={fullStar}
          />
          <h5 className="restaurant-page-body-info-total-review">100則評論</h5>
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
          <p>708 台灣 安平台南 安平区永华路二段129号 台南永華店</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zm10.762.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708z" />
          </svg>
          <p>+886 6 295 0707</p>
        </section>
      </div>
      <div className="restaurant-page-body-image-container">
        <div className="restaurant-page-body-main-image-container">
          <img src="" alt="" className="restaurant-page-body-img" />
        </div>
        <div className="restaurant-page-body-second-image-container">
          <img src="" alt="" className="restaurant-page-body-img" />
          <img src="" alt="" className="restaurant-page-body-img" />
        </div>
      </div>
    </div>
  );
};
