import React, { FormEvent } from "react";
interface Props {
  switchSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
}
export const LoginForm: React.FC<Props> = ({ switchSubmit }) => {
  const loginSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <form className="login-popup-login-form">
      <section className="login-popup-input-container">
        <h5>電子信箱</h5>
        <input type="text" placeholder="電子信箱" />
      </section>
      <section className="login-popup-input-container">
        <h5>密碼</h5>
        <input type="text" placeholder="密碼" />
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
