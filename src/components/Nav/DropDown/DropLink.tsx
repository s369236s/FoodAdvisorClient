import React from "react";
import Popup from "reactjs-popup";
import { LoginPopup } from "../../../pages/LoginPopup";
interface Props {
  text: string;
  needPopup: boolean;
  action?: () => void;
}

export const DropLink: React.FC<Props> = ({
  text,
  needPopup,
  children,
  action,
}) => {
  if (!needPopup)
    return (
      <div onClick={action} className="nav-dropmenu-link">
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
