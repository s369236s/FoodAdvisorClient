import React, { useRef, useState } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
interface Props {
  preview: string;
  cropperRef: any;
  onCrop: () => void;
}

export const RegisterRestaurantCrop: React.FC<Props> = ({
  preview,
  cropperRef,
  onCrop,
}) => {
  return (
    <div className="register-restaurant-crop-container">
      <Cropper
        src={preview}
        style={{
          height: 300,
          width: 300,
          alignSelf: "center",
          background: "rgb(179, 179, 179)",
        }}
        ref={cropperRef}
        aspectRatio={1}
        minCropBoxHeight={10}
        minCropBoxWidth={10}
      />
    </div>
  );
};
