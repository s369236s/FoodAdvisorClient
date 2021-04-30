import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
interface FlashProps {
  status: string;
  msg: string;
}
interface Props {
  switchSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  setIsSwitchRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterSuccessFlashMsg: React.Dispatch<
    React.SetStateAction<FlashProps[]>
  >;
  registerSuccessFlashMsg: FlashProps[];
}
export const RegisterForm: React.FC<Props> = ({
  switchSubmit,
  setIsSwitchRegister,
  registerSuccessFlashMsg,
  setRegisterSuccessFlashMsg: setRegisterFlashMsg,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const RegisterSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:80/FoodAdvisorServer/user/register.php", {
        email,
        username,
        password,
        confirmPassword,
      })
      .then((res) => {
        if (res.data.ok) {
          setIsSwitchRegister(false);
          if (
            !registerSuccessFlashMsg.find((flash) => flash.msg === "註冊成功!")
          )
            setRegisterFlashMsg([
              { status: "success", msg: "註冊成功!" },
              ...[],
            ]);
        } else {
          if (
            !registerSuccessFlashMsg.find((flash) => flash.msg === "註冊失敗!")
          )
            setRegisterFlashMsg([
              { status: "fail", msg: "註冊失敗!" },
              ...registerSuccessFlashMsg,
            ]);
        }
        console.log(res.data);
      })
      .catch((err) => console.log(err));
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
        <h5>會員暱稱</h5>
        <input
          type="text"
          placeholder="會員暱稱"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
      </section>
      <section className="login-popup-input-container">
        <h5>密碼</h5>
        <input
          type="text"
          placeholder="密碼"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </section>
      <section className="login-popup-input-container">
        <h5>確認密碼</h5>
        <input
          type="text"
          placeholder="確認密碼"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </section>
      <button
        className="login-popup-button login-popup-login-submit"
        onClick={RegisterSubmit}
      >
        <h5>成為會員</h5>
      </button>
      <button
        className="login-popup-button login-popup-switch-to-register"
        onClick={switchSubmit}
      >
        <h5>回去登入</h5>
      </button>
      <div style={{ height: "1rem" }}></div>
    </form>
  );
};
