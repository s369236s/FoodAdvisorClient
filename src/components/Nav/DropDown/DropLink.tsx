import React from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { LoginPopup } from "../../../pages/LoginPopup";
interface Props {
  text: string;
  needPopup: boolean;
  isLink: boolean;
  toLink?: any;
  action?: () => void;
}

export const DropLink: React.FC<Props> = ({
  text,
  needPopup,
  children,
  action,
  isLink,
  toLink,
}) => {
  if (!needPopup)
    return (
      <>
        {isLink ? (
          <Link to={toLink} onClick={action} className="nav-dropmenu-link">
            <>{children}</>
            <h3>{text}</h3>
          </Link>
        ) : (
          <div onClick={action} className="nav-dropmenu-link">
            <>{children}</>
            <h3>{text}</h3>
          </div>
        )}
      </>
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
