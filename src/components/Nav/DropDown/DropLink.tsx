import React from "react";
import Popup from "reactjs-popup";
import { LoginPopup } from "../../../pages/LoginPopup";
interface Props {
  text: string;
  needPopup: boolean;
}

export const DropLink: React.FC<Props> = ({ text, needPopup, children }) => {
  if (!needPopup)
    return (
      <div className="nav-dropmenu-link">
        <>{children}</>
        <h3>{text}</h3>
      </div>
    );
  else
    return (
      <Popup
        trigger={
          <div className="nav-dropmenu-link">
            <>{children}</>
            <h3>{text}</h3>
          </div>
        }
        modal
      >
        {(closePopup: () => void) => <LoginPopup closePopup={closePopup} />}
      </Popup>
    );
};
