import React, { useEffect, useRef, useState } from "react";
import "../../styles/CustomizedSelect.css";
import { FoodadvisorSelectDropDown } from "./FoodadvisorSelectDropDown";
import { TypesInterface } from "./NewRegisterRestaurantForm";
interface Props {
  isMulti: boolean;
  types: TypesInterface[];
  type: string[];
  defaultType: string;
  typeFlash: boolean;
  setType: React.Dispatch<React.SetStateAction<string[]>>;
}
const style = "1px rgb(189, 188, 188) solid";

export const CustomizedSelect: React.FC<Props> = ({
  isMulti,
  defaultType,
  types,
  typeFlash,
  type,
  setType,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="foodadvisor-select-container">
      <div
        className="foodadvisor-select"
        style={{
          border: typeFlash ? "1px red solid" : style,
          color: type[0] === defaultType ? "grey" : "black",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {type.length > 1
          ? type.map((t, i) => {
              if (i !== type.length - 1) {
                return t + ",";
              } else return t;
            })
          : type}
        {isOpen ? <ChevronDown /> : <ChevronUp />}
      </div>
      {isOpen ? (
        <FoodadvisorSelectDropDown
          defaultType={defaultType}
          type={type}
          isMulti={isMulti}
          types={types}
          setType={setType}
          toggle={isOpen}
          setToggle={setIsOpen}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

const ChevronDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
    />
  </svg>
);
const ChevronUp = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
    />
  </svg>
);
