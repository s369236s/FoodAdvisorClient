import axios from "axios";
import React, { useEffect, useState } from "react";
import { SERVER_API_KEY } from "../../../apiKey";
import { getUser } from "../../Fetch/getUser";
import { NavUserDropDown } from "./NavUserDropDown";

interface Props {
  isAuth: boolean;
  isMobile?: boolean;
}
interface UserInfo {
  username: string;
  intro: string;
  pic: string;
  address: string;
  comments_count: string;
}
export const NavUser: React.FC<Props> = ({ isAuth, isMobile }) => {
  const [toggle, setToggle] = useState(false);
  const [info, setInfo] = useState<UserInfo>({
    username: "",
    intro: "",
    pic: "",
    address: "",
    comments_count: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${SERVER_API_KEY}/user/getUser.php?user_id=${getUser()}`)
        .then((res) => {
          console.log(res.data);
          if (res.data.ok) {
            setInfo(res.data.data);
          }
        })
        .catch((err) => console.log(err));
    };

    fetchData();
    return () => {};
  }, []);
  return (
    <div className="nav-logined-user">
      <img
        src={info.pic ? `${SERVER_API_KEY}/${info?.pic}` : "media/user.jpg"}
        alt=""
        onClick={() => setToggle(!toggle)}
      />
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
