import React, { useEffect, useRef } from "react";
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

const Plus = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    className="nav-dropmenu-icon"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
  </svg>
);

const Login = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    className="nav-dropmenu-icon"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
    />
    <path
      fillRule="evenodd"
      d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
    />
  </svg>
);
