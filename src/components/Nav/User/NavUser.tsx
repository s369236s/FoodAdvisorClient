import React, { useEffect, useState } from "react";
import { NavUserDropDown } from "./NavUserDropDown";

interface Props {
  isAuth: boolean;
  isMobile?: boolean;
}

export const NavUser: React.FC<Props> = ({ isAuth, isMobile }) => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (isAuth) {
      // axios.get(`${SERVER_API_KEY}/user/user.php`).then((res) => {
      //   // (res.data);
      // });
    }
  }, []);
  return (
    <div className="nav-logined-user">
      <img src="media/user.jpg" alt="" onClick={() => setToggle(!toggle)} />
      {toggle ? (
        <NavUserDropDown
          isMobile={isMobile}
          toggle={toggle}
          setToggle={setToggle}
        />
      ) : (
        <></>
      )}
    </div>
  );
};
