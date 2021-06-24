import React, { useEffect, useState } from "react";
import { SearchBar } from "./Search-Bar/SearchBar";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";
import { LoginPopup } from "../../pages/LoginPopup";
import Popup from "reactjs-popup";
import { DropDown } from "./DropDown/DropDown";
import axios from "axios";
import { SERVER_API_KEY } from "../../apiKey";
import { setAccessToken } from "../Token/accessToken";
import { NavUser } from "./User/NavUser";
import { setUser } from "../Fetch/getUser";

interface Props {}

export const Nav: React.FC<Props> = ({}) => {
  const [toggle, setToggle] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const refreshToken = localStorage.getItem("jid");
    axios
      .post(
        `${SERVER_API_KEY}/auth/refresh_token.php`,
        { refreshToken },
        { withCredentials: true }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.ok) {
          setIsAuth(true);
          setUser(res.data._id);
          setAccessToken(res.data.accessToken);
        }
      });
    return () => {
      console.log("clean");
    };
  }, []);

  return (
    <nav className="nav-container">
      <div className="nav-left-container center">
        <Link to="/">
          <img src="logo.png" alt="" />
          <h1>FoodAdvisor</h1>
        </Link>

        <SearchBar />
      </div>
      <div className="nav-right-container">
        <Link className="nav-review-button nav-button" to="/UserReview">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="nav-right-dropdown-icon"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>
          <p>評論</p>
        </Link>
        {isAuth ? (
          <NavUser isAuth={isAuth} />
        ) : (
          <Popup
            className="login-popup"
            trigger={
              <button className="nav-login-button nav-button">
                <p>登入</p>
              </button>
            }
            modal
          >
            {(closePopup: () => void) => <LoginPopup closePopup={closePopup} />}
          </Popup>
        )}
      </div>
      <div className="nav-right-container-mobile">
        {isAuth ? (
          <NavUser isAuth={isAuth} isMobile={true} />
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 16 16"
              onClick={() => setToggle(!toggle)}
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
            {toggle ? (
              <DropDown setToggle={setToggle} toggle={toggle} />
            ) : (
              <></>
            )}
          </>
        )}
      </div>
    </nav>
  );
};
