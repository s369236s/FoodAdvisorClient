import React, { useEffect, useRef } from "react";
import { Login, Plus } from "../../../Svg";
import { DropLink } from "./DropLink";

interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
}

export const DropDown: React.FC<Props> = ({ setToggle, toggle }) => {
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
  return (
    <div className="nav-right-dropdown" ref={dropdownRef}>
      <DropLink text="評論" needPopup={false} children={Plus} />
      <DropLink text="登入" needPopup={true} children={Login} />
    </div>
  );
};
