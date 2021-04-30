import axios from "axios";
import React, { useState } from "react";
import { InputFlash } from "./Flash/InputFlash";
interface Props {
  switchSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  closePopup: () => void;
}
export const LoginForm: React.FC<Props> = ({ switchSubmit, closePopup }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const loginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    // console.log(email, password);
    axios
      .post("http://localhost:80/FoodAdvisorServer/user/login.php", {
        email,
        password,
      })
      .then((res) => {
        if (!res.data.ok) {
          if (res.data.valid.find((valid: any) => valid === "信箱?")) {
            setEmailError("信箱?");
          } else if (
            res.data.valid.find((valid: any) => valid === "信箱不存在")
          ) {
            setEmailError("信箱不存在");
          } else {
          }
          if (res.data.valid.find((valid: any) => valid === "密碼?")) {
            setPasswordError("密碼?");
          } else if (
            res.data.valid.find((valid: any) => valid === "密碼錯誤")
          ) {
            setPasswordError("密碼錯誤");
          } else {
          }
        } else {
          closePopup();
        }
      });
    e.preventDefault();
  };

  return (
    <form className="login-popup-login-form">
      <section className="login-popup-input-container">
        <h5>電子信箱</h5>
        <input
          type="text"
          placeholder="電子信箱"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />

        {emailError === "" ? (
          <></>
        ) : (
          <InputFlash setFlashMsg={setEmailError} flashMsg={emailError} />
        )}
      </section>
      <section className="login-popup-input-container">
        <h5>密碼</h5>
        <input
          type="text"
          placeholder="密碼"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError === "" ? (
          <></>
        ) : (
          <InputFlash setFlashMsg={setPasswordError} flashMsg={passwordError} />
        )}
      </section>
      <button
        className="login-popup-button login-popup-login-submit"
        onClick={loginSubmit}
      >
        <h5>登入</h5>
      </button>
      <button
        className="login-popup-button login-popup-switch-to-register"
        onClick={switchSubmit}
      >
        <h5>註冊</h5>
      </button>
    </form>
  );
};
