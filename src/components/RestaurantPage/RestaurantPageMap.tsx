import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { emptyStar, halfStar, fullStar } from "../../Svg";
import ReactStars from "react-rating-stars-component";

interface Props {
  lat: number;
  lng: number;
  name: string;
  address: string;
  review_star: string;
}

export const RestaurantPageMap: React.FC<Props> = ({
  lat,
  lng,
  name,
  address,
  review_star,
}) => {
  const [toggle, setToggle] = useState(false);
  const [starKeyForce, setStarKeyForce] = useState(0);

  useEffect(() => {
    setStarKeyForce((prev) => prev + 1);
  }, [review_star]);

  return (
    <div className="restaurant-map-container restaurant-page-box">
      <h5>位置</h5>
      <div className="restaurant-map-real-container">
        <LoadScript googleMapsApiKey="AIzaSyCy7RNwB5rTG7rkpDq41cpvFwNLh3_Lohk">
          <GoogleMap
            mapContainerClassName="google-map-container"
            center={{ lat, lng }}
            zoom={15}
          >
            <Marker position={{ lat, lng }} onClick={() => setToggle(!toggle)}>
              {toggle ? (
                <InfoWindow
                  position={{ lat, lng }}
                  onCloseClick={() => setToggle(false)}
                >
                  <div
                    className="info-window-container"
                    style={{ width: "180px" }}
                  >
                    <p style={{ fontSize: "16px" }}>{name}</p>
                    <p>{address}</p>
                    <div style={{ display: "flex", alignItems: "center" }}>
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
                        key={starKeyForce}
                      />
                      <p style={{ marginLeft: "4px" }}>{review_star}</p>
                    </div>
                  </div>
                </InfoWindow>
              ) : (
                <></>
              )}
            </Marker>
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
