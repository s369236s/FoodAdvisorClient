import axios from "axios";
import React, { useEffect, useRef } from "react";
import { SERVER_API_KEY } from "../../../apiKey";
import { Login, Person, Plus } from "../../../Svg";
import { setAccessToken } from "../../Token/accessToken";
import { DropLink } from "../DropDown/DropLink";
interface Props {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: boolean;
  isMobile?: boolean;
}

export const NavUserDropDown: React.FC<Props> = ({
  isMobile,
  setToggle,
  toggle,
}) => {
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

  const logOutHandler = () => {
    axios
      .post(`${SERVER_API_KEY}/user/logout.php`, {}, { withCredentials: true })
      .then((res) => {
        if (res.data.ok) {
          // console.log(res.data)
          window.location.reload();
        } else {
          console.log("you are not logged in");
        }
        setAccessToken("");
      });
  };

  useEffect(() => {
    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <div className="nav-user-dropdown-container">
      <div className="nav-user-dropdown" ref={dropdownRef}>
        {isMobile ? (
          <DropLink text="評論" needPopup={false} children={Plus} />
        ) : (
          <></>
        )}
        <DropLink text="帳戶" needPopup={false} children={Person} />
        <DropLink
          action={logOutHandler}
          text="登出"
          needPopup={false}
          children={Login}
        />
      </div>
    </div>
  );
};
