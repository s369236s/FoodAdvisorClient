import React from "react";

interface Props {
  status: string;
  flashMsg: string;
}

export const LoginFlash: React.FC<Props> = ({ status, flashMsg }) => {
  return (
    <div className="login-popup-flash-container">
      <div
        className="login-popup-flash"
        style={{ backgroundColor: status === "success" ? "#9aff6b" : "red" }}
      >
        <h5>{flashMsg}</h5>
      </div>
    </div>
  );
};
