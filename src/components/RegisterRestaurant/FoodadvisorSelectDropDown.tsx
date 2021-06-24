import React, { useEffect, useRef, useState } from "react";
import { useSpring, animated } from "react-spring";
import { TypesInterface } from "./NewRegisterRestaurantForm";

interface Props {
  isMulti: boolean;
  toggle: boolean;
  types: TypesInterface[];
  type: string[];
  defaultType: string;

  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setType: React.Dispatch<React.SetStateAction<string[]>>;
}

function escapeRegex(text: string) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

export const FoodadvisorSelectDropDown: React.FC<Props> = ({
  isMulti,
  types,
  type,
  setType,
  toggle,
  defaultType,
  setToggle,
}) => {
  const [text, setText] = useState("");
  const [newTypes, setNewTypes] = useState<TypesInterface[]>([]);
  const typeHandler = (after_type: TypesInterface) => {
    if (!isMulti) {
      after_type.isSelected = true;
      types.map((t) => {
        if (t.tag !== after_type.tag) t.isSelected = false;
      });
      setType([after_type.tag]);
      setToggle(false);
    } else {
      if (type[0] === defaultType) {
        const arr = type.filter((type) => type !== defaultType);
        setType(arr);
      }
      if (!after_type.isSelected) {
        after_type.isSelected = true;
        setType([...type, after_type.tag]);
      } else {
        after_type.isSelected = false;
        setType(type.filter((type) => type !== after_type.tag));
      }
    }
  };

  useEffect(() => {
    if (type[0] === defaultType && type.length > 1) {
      const arr = type.filter((type) => type !== defaultType);
      setType(arr);
    }
    if (type.length === 0) {
      setType([defaultType]);
    }
    return () => {};
  }, [type]);

  const typeOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    const reg = new RegExp(escapeRegex(e.target.value));
    setNewTypes(types.filter((type) => type.tag.match(reg)));
  };

  const dropdownRef = useRef(null) as any;
  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setToggle(!toggle);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (toggle) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [toggle]);
  const props = useSpring({
    opacity: toggle ? 1 : 0,
    from: {
      opacity: 0,
    },
  });
  return (
    <animated.div
      style={props}
      className="foodadvisor-select-dropdown"
      ref={dropdownRef}
    >
      <div className="foodadvisor-select-dropdown-search">
        <input
          type="text"
          className="foodadvisor-select-input"
          placeholder="請輸入"
          value={text}
          onChange={typeOnChange}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
      {text
        ? newTypes.map((type, i) => (
            <div
              className={`foodadvisor-option ${
                type.isSelected ? "foodadvisor-option-selected" : ""
              }`}
              onClick={() => typeHandler(type)}
              key={i}
            >
              {type.tag}
            </div>
          ))
        : types.map((type, i) => (
            <div
              className={`foodadvisor-option ${
                type.isSelected ? "foodadvisor-option-selected" : ""
              }`}
              onClick={() => typeHandler(type)}
              key={i}
            >
              {type.tag}
            </div>
          ))}
    </animated.div>
  );
};
