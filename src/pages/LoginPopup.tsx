import React, { useState } from "react";
import "reactjs-popup/dist/index.css";
import { LoginForm } from "../components/Login/LoginForm";
import { RegisterForm } from "../components/Register/RegisterForm";
import "../styles/Popup.css";
interface Props {
  closePopup: () => void;
}

export const LoginPopup: React.FC<Props> = ({ closePopup }) => {
  const [isSwitchRegister, setIsSwitchRegister] = useState(false);
  const switchSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSwitchRegister(!isSwitchRegister);
  };
  return (
    <div className="login-popup-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="register-popup-switch-login"
        viewBox="0 0 16 16"
        style={{ display: isSwitchRegister ? "flex" : "none" }}
        onClick={() => setIsSwitchRegister(false)}
      >
        <path
          fillRule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <svg
        onClick={closePopup}
        className="login-popup-close"
        height="16"
        viewBox="0 0 329.26933 329"
        width="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
      </svg>
      <div className="login-popup-child-container">
        <img src="logo.png" alt="" />
        <h2>{isSwitchRegister ? "成為我們的會員吧" : "歡迎回來"}</h2>
        {isSwitchRegister ? (
          <RegisterForm switchSubmit={switchSubmit} />
        ) : (
          <LoginForm switchSubmit={switchSubmit} />
        )}
      </div>
      <div style={{ height: "1rem" }}></div>
    </div>
  );
};
