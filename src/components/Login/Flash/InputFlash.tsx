import React, { useState } from "react";
interface Props {
  flashMsg: string;
  setFlashMsg: React.Dispatch<React.SetStateAction<string>>;
}
export const InputFlash: React.FC<Props> = ({ flashMsg, setFlashMsg }) => {
  const [showInputFlash, setShowInputFlash] = useState(true);
  return (
    <div
      style={{ display: showInputFlash ? "flex" : "none" }}
      className="login-input-flash"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="login-input-vaild-icon"
        viewBox="0 0 16 16"
      >
        <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zm-6.106 4.5L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z" />
      </svg>
      <p className="login-input-flash-msg">{flashMsg}</p>
      <svg
        onClick={() => {
          setFlashMsg("");
          setShowInputFlash(false);
        }}
        className="login-input-flash-close"
        height="12"
        viewBox="0 0 329.26933 329"
        width="12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
      </svg>
    </div>
  );
};
