import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { SERVER_API_KEY } from "../../apiKey";
import { setAccessToken } from "../Token/accessToken";
import { InputFlash } from "./Flash/InputFlash";
interface Props {
  switchSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  closePopup: () => void;
}
export const LoginForm: React.FC<Props> = ({ switchSubmit, closePopup }) => {
  const [isLoading, setisLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validation = (res: AxiosResponse<any>) => {
    setAccessToken("");
    if (!res.data.ok) {
      if (res.data.valid.find((valid: any) => valid === "信箱?")) {
        setEmailError("信箱?");
      } else {
        // setEmailError("信箱不存在");
      }
      if (res.data.valid.find((valid: any) => valid === "密碼?")) {
        setPasswordError("密碼?");
      } else {
        setPasswordError("密碼錯誤");
      }
    } else {
      window.location.reload();
      if (res && res.data) {
        setAccessToken(res.data.accessToken);
      }
      closePopup();
    }
  };

  const loginSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    setisLoading(true);
    e.preventDefault();
    await axios
      .post(
        `${SERVER_API_KEY}/user/login.php`,
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setisLoading(false);
        console.log(res.data);
        validation(res);
      });
  };

  useEffect(() => {
    return () => setisLoading(false); //unmount this component
  }, []);

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
        {isLoading ? (
          <PulseLoader color={"white"} loading={isLoading} size={6} />
        ) : (
          <h5>登入</h5>
        )}
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
