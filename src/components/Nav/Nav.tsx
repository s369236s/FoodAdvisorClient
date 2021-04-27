import React from "react";
import { SearchBar } from "./Search-Bar/SearchBar";
import "../../styles/Nav.css";
import { Link } from "react-router-dom";

interface Props {}

export const Nav: React.FC<Props> = ({}) => {
  return (
    <nav className="nav-container">
      <div className="nav-left-container center">
        <img src="logo.png" alt="" />
        <h1>FoodAdvisor</h1>
        <SearchBar />
      </div>
      <div className="nav-right-container center">
        <Link className="nav-review-button nav-button" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <p>評論</p>
        </Link>
        <Link className="nav-login-button nav-button" to="/Login">
          <p>登入</p>
        </Link>
      </div>
    </nav>
  );
};
