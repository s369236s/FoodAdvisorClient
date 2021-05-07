import React, { FormEvent, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { RegisterRestaurantCrop } from "./RegisterRestaurantCrop";
interface Props {
  setCropResult: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  text: string;
}

export const RegisterRestaurantUpload: React.FC<Props> = ({
  name,
  text,
  setCropResult,
}) => {
  const [file, setFile] = useState<Blob>();
  let [preview, setPreview] = useState("");
  const cropperRef = useRef(null) as any;
  const imageElement = cropperRef?.current;
  const cropper = imageElement?.cropper;
  const onCrop = () => {
    if (preview !== "") {
      setCropResult(cropper.getCroppedCanvas().toDataURL());
      cropper.getCroppedCanvas().toBlob((blob: Blob) => {
        setFile(blob);
      });
    }
    setPreview("");
  };
  return (
    <div className="register-restaurant-upload-input-container">
      <h5>{text}</h5>
      <Popup
        className="register-restaurant-popup-content"
        trigger={
          <button className="register-restaurant-upload-input-trigger">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#0084ff"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
            </svg>
          </button>
        }
        modal
      >
        {(close: () => void) => (
          <div className="register-restaurant-upload-popup">
            <div className="register-restaurant-upload-popup-left">
              <label className="register-restaurant-upload-popup-input-container">
                <input
                  style={{ display: "none" }}
                  type="file"
                  name={name}
                  className="register-restaurant-upload-popup-input"
                  onChange={(e: any) => {
                    setFile(e.target.files[0]);
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#0084ff"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                </svg>
              </label>
              <button
                onClick={() => {
                  onCrop();
                  close();
                }}
              >
                裁剪
              </button>
            </div>
            <div className="register-restaurant-upload-popup-right">
              <RegisterRestaurantCrop
                cropperRef={cropperRef}
                preview={preview}
                onCrop={onCrop}
              />
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
