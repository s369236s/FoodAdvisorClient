import axios from "axios";
import React, { FormEvent, useState } from "react";
interface Props {
  switchSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}
export const LoginForm: React.FC<Props> = ({ switchSubmit }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    // console.log(email, password);
    axios
      .post(
        "http://localhost:80/FoodAdvisorServer/test.php",
        { email, password },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        }
      )
      .then((res) => console.log(res));
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
      </section>
      <section className="login-popup-input-container">
        <h5>密碼</h5>
        <input
          type="text"
          placeholder="密碼"
          onChange={(e) => setPassword(e.target.value)}
        />
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
