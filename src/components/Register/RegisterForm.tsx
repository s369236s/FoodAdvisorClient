import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { PulseLoader } from "react-spinners";
import { SERVER_API_KEY } from "../../apiKey";
import { InputFlash } from "../Login/Flash/InputFlash";
interface FlashProps {
  status: string;
  msg: string;
}
interface Props {
  switchSubmit: (e: React.FormEvent<HTMLButtonElement>) => void;
  setIsSwitchRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterSuccessFlash: React.Dispatch<React.SetStateAction<FlashProps[]>>;
  registerSuccessFlash: FlashProps[];
}
export const RegisterForm: React.FC<Props> = ({
  switchSubmit,
  setIsSwitchRegister,
  registerSuccessFlash: registerSuccessFlashMsg,
  setRegisterSuccessFlash: setRegisterFlashMsg,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validation = (res: AxiosResponse<any>) => {
    if (res.data.ok) {
      setIsSwitchRegister(false);
      if (!registerSuccessFlashMsg.find((flash) => flash.msg === "註冊成功!"))
        setRegisterFlashMsg([{ status: "success", msg: "註冊成功!😂" }, ...[]]);
    } else {
      if (isPressed) {
        setEmailError("");
        setUsernameError("");
        setPasswordError("");
        setConfirmPasswordError("");
      } else {
        setIsPressed(true);
      }
      if (res.data.errors.find((valid: any) => valid === "信箱?")) {
        setEmailError("信箱? 👀");
      }
      if (res.data.errors.find((valid: any) => valid === "格式錯誤")) {
        setEmailError("格式錯誤 😩");
      }
      if (res.data.errors.find((valid: any) => valid === "信箱重複")) {
        setEmailError("信箱重複 😜");
      }
      if (res.data.errors.find((valid: any) => valid === "暱稱?")) {
        setUsernameError("暱稱? 🤚");
      }
      if (res.data.errors.find((valid: any) => valid === "密碼?")) {
        setPasswordError("密碼? 🙅‍♂️");
      }
      if (res.data.errors.find((valid: any) => valid === "重複密碼?")) {
        setConfirmPasswordError("重複密碼?🥴");
      }
      if (res.data.errors.find((valid: any) => valid === "密碼錯誤")) {
        setConfirmPasswordError("密碼錯誤 👐");
      }
    }
  };

  const RegisterSubmit = async (e: React.FormEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    e.preventDefault();
    await axios
      .post(`${SERVER_API_KEY}/user/register.php`, {
        email,
        username,
        password,
        confirmPassword,
      })
      .then((res) => {
        validation(res);
        console.log("stop loading");
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    return () => setIsLoading(false); //unmount this component
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
        <h5>會員暱稱</h5>
        <input
          type="text"
          placeholder="會員暱稱"
          name="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        {usernameError === "" ? (
          <></>
        ) : (
          <InputFlash setFlashMsg={setUsernameError} flashMsg={usernameError} />
        )}
      </section>
      <section className="login-popup-input-container">
        <h5>密碼</h5>
        <input
          type="password"
          placeholder="密碼"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError === "" ? (
          <></>
        ) : (
          <InputFlash setFlashMsg={setPasswordError} flashMsg={passwordError} />
        )}
      </section>
      <section className="login-popup-input-container">
        <h5>確認密碼</h5>
        <input
          type="password"
          placeholder="確認密碼"
          name="confirmPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError === "" ? (
          <></>
        ) : (
          <InputFlash
            setFlashMsg={setConfirmPasswordError}
            flashMsg={confirmPasswordError}
          />
        )}
      </section>
      <button
        className="login-popup-button login-popup-login-submit"
        onClick={RegisterSubmit}
      >
        {isLoading ? (
          <PulseLoader color={"white"} loading={isLoading} size={6} />
        ) : (
          <h5>成為會員</h5>
        )}
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
