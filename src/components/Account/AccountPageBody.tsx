import axios from "axios";
import React, { useRef, useState } from "react";
import { useEffect } from "react";
import { PulseLoader } from "react-spinners";
import { SERVER_API_KEY } from "../../apiKey";
import "../../styles/AccountPage.css";
import { getUser } from "../Fetch/getUser";
import { useQuery } from "../Fetch/useQuery";
import { setAccessToken } from "../Token/accessToken";
import { AccountPageUploadImage } from "./AccountPageUploadImage";
import { RecentVisitGrid } from "./RecentVisitGrid";
interface Props {}

interface RecentVisitGridInterface {
  name: string;
  review_star: string;
  address: string;
  main_pic: string;
  main_area: string;
  _id: string;
}

interface UserInfo {
  username: string;
  intro: string;
  pic: string;
  address: string;
  comments_count: string;
  recent_visit_1: RecentVisitGridInterface;
  recent_visit_3: RecentVisitGridInterface;
  recent_visit_2: RecentVisitGridInterface;
}

export const AccountPageBody: React.FC<Props> = ({}) => {
  let query = useQuery();
  const [info, setInfo] = useState<UserInfo>({
    username: "",
    intro: "",
    pic: "",
    address: "",
    comments_count: "",
    recent_visit_1: {
      name: "",
      review_star: "5",
      address: "",
      main_pic: "",
      main_area: "",
      _id: "",
    },
    recent_visit_2: {
      name: "",
      review_star: "5",
      address: "",
      main_pic: "",
      main_area: "",
      _id: "",
    },
    recent_visit_3: {
      name: "",
      review_star: "5",
      address: "",
      main_pic: "",
      main_area: "",
      _id: "",
    },
  });
  const [isAuth, setIsAuth] = useState(false);
  const [isOpenEditAddress, setIsOpenEditAddress] = useState(false);
  const [isOpenEditName, setIsOpenEditName] = useState(false);
  const [isOpenEditIntro, setIsOpenEditIntro] = useState(false);
  const [isOpenEditImage, setIsOpenEditImage] = useState(false);
  const [cropResult, setCropResult] = useState("");
  const [Editname, setEditName] = useState("");
  const [EditIntro, setEditIntro] = useState("");
  const [EditAddress, setEditAddress] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isAddressLoading, setIsAddressLoading] = useState(false);
  useEffect(() => {
    const refreshToken = localStorage.getItem("jid");
    axios
      .post(
        `${SERVER_API_KEY}/auth/refresh_token.php`,
        { refreshToken },
        { withCredentials: true }
      )
      .then((res) => {
        if (res.data.ok) {
          if (res.data._id === query.get("user_id")) setIsAuth(true);
          setAccessToken(res.data.accessToken);
        }
      });
    return () => {};
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(
          `${SERVER_API_KEY}/user/getUser.php?user_id=${query.get("user_id")}`
        )
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

  const eraseInfoInput = () => {
    setEditIntro("");
    setEditName("");
    setCropResult("");
  };

  const sendEdit = (type: string, text: string) => {
    let refreshToken = localStorage.getItem("jid");
    if (!refreshToken) {
      refreshToken = "";
    }
    const formData = new FormData();
    if (type !== "editAddress") setIsLoading(true);
    else setIsAddressLoading(true);
    if (!getUser()) {
      console.log("userid error");
      setIsLoading(false);
      return;
    }
    formData.append("type", type);
    formData.append("text", text);
    formData.append("jid", refreshToken);
    axios
      .post(`${SERVER_API_KEY}/user/editInfo.php`, formData, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (type !== "editAddress") setIsLoading(false);
        else setIsAddressLoading(false);
        if (res.data.ok) {
          window.location.reload();
        }
      });
  };
  return (
    <div className="account-page-body">
      <div className="account-page-container">
        <div className="account-page-user-info-container">
          <div className="account-page-user-image-container">
            <img
              src={
                info.pic ? `${SERVER_API_KEY}/${info?.pic}` : "media/user.jpg"
              }
              alt=""
              className="account-page-user-image"
            />
          </div>
          <section className="account-page-user-text-info">
            <h5>{info.username}</h5>
            <p>{info.intro ? info.intro : "這人很懶，什麼都沒留下。"}</p>
          </section>
          {isAuth ? (
            <UserChangeDropdownButton
              eraseInput={eraseInfoInput}
              isOpenEditImage={isOpenEditImage}
              isOpenEditName={isOpenEditName}
              isOpenEditIntro={isOpenEditIntro}
              setIsOpenEditName={setIsOpenEditName}
              setIsOpenEditIntro={setIsOpenEditIntro}
              setIsOpenEditImage={setIsOpenEditImage}
            />
          ) : (
            <></>
          )}
        </div>
        <span className="span-chunk"></span>
        {/* --- */}
        {isOpenEditName ? (
          <div className="account-page-user-address-edit-container">
            <div className="account-page-user-address-edit-input-container">
              <h5>輸入名稱</h5>
              <input
                type="text"
                placeholder="請輸入名稱"
                value={Editname}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="account-page-user-address-edit-button-container">
              <button onClick={() => sendEdit("editName", Editname)}>
                {" "}
                {isLoading ? (
                  <PulseLoader color={"white"} loading={isLoading} size={6} />
                ) : (
                  <>確定</>
                )}
              </button>
              <button
                onClick={() => {
                  setIsOpenEditName(false);
                  eraseInfoInput();
                }}
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* --- */}
        {isOpenEditImage ? (
          <div className="account-page-user-address-edit-container">
            <div className="account-page-user-address-edit-input-container">
              <h5>編輯頭貼</h5>
              <AccountPageUploadImage setCropResult={setCropResult} />
              {cropResult ? (
                <img
                  src={cropResult}
                  alt="主照片"
                  className="account-page-crop-img"
                />
              ) : (
                <div className="account-page-crop-img"></div>
              )}
            </div>
            <div className="account-page-user-address-edit-button-container">
              <button onClick={() => sendEdit("editPic", cropResult)}>
                {" "}
                {isLoading ? (
                  <PulseLoader color={"white"} loading={isLoading} size={6} />
                ) : (
                  <>確定</>
                )}
              </button>
              <button
                onClick={() => {
                  setIsOpenEditImage(false);
                  eraseInfoInput();
                }}
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* --- */}
        {/* --- */}
        {isOpenEditIntro ? (
          <div className="account-page-user-address-edit-container">
            <div className="account-page-user-address-edit-input-container">
              <h5>輸入簡介</h5>
              <input
                type="text"
                value={EditIntro}
                placeholder="請輸入簡介"
                onChange={(e) => setEditIntro(e.target.value)}
              />
            </div>
            <div className="account-page-user-address-edit-button-container">
              <button onClick={() => sendEdit("editIntro", EditIntro)}>
                {" "}
                {isLoading ? (
                  <PulseLoader color={"white"} loading={isLoading} size={6} />
                ) : (
                  <>確定</>
                )}
              </button>
              <button
                onClick={() => {
                  setIsOpenEditIntro(false);
                  eraseInfoInput();
                }}
              >
                取消
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        {/* --- */}
      </div>
      <div className="account-page-user-detail-container">
        <div>
          <h5>詳細資料</h5>
          {isAuth ? (
            <button onClick={() => setIsOpenEditAddress(!isOpenEditAddress)}>
              編輯住址
            </button>
          ) : (
            <></>
          )}
        </div>
        {isOpenEditAddress ? (
          <>
            <span></span>
            <div className="account-page-user-address-edit-container">
              <div className="account-page-user-address-edit-input-container">
                <h5>輸入住址</h5>
                <input
                  value={EditAddress}
                  type="text"
                  placeholder="請輸入地址"
                  onChange={(e) => setEditAddress(e.target.value)}
                />
              </div>
              <div className="account-page-user-address-edit-button-container">
                <button onClick={() => sendEdit("editAddress", EditAddress)}>
                  {" "}
                  {isAddressLoading ? (
                    <PulseLoader
                      color={"white"}
                      loading={isAddressLoading}
                      size={6}
                    />
                  ) : (
                    <>確定</>
                  )}
                </button>
                <button
                  onClick={() => {
                    setIsOpenEditAddress(false);
                    setEditAddress("");
                  }}
                >
                  取消
                </button>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <span></span>
        <div className="account-page-user-detail-section-container">
          <div className="account-page-user-detail-section">
            <div className="account-page-user-detail-section-icon">
              <House />
            </div>
            <section className="account-page-user-detail-section-text">
              <p>住址</p>
              <h5>{info.address ? info.address : "居無定所"}</h5>
            </section>
          </div>
          <div className="account-page-user-detail-section">
            <div className="account-page-user-detail-section-icon-2">
              <ChatSquareText />
            </div>
            <section className="account-page-user-detail-section-text">
              <p>評論次數</p>
              <h5>{info.comments_count}次</h5>
            </section>
          </div>
        </div>
      </div>
      <div className="account-page-user-recent-visit-container">
        <div>
          <h5>近日評論</h5>
        </div>
        <span></span>
        <div className="account-page-user-recent-visit-section-container">
          {info.recent_visit_1 ? (
            <RecentVisitGrid
              review_star={info.recent_visit_1.review_star}
              gird={info.recent_visit_1}
            />
          ) : (
            <></>
          )}
          {info.recent_visit_2 ? (
            <RecentVisitGrid
              review_star={info.recent_visit_2.review_star}
              gird={info.recent_visit_2}
            />
          ) : (
            <></>
          )}{" "}
          {info.recent_visit_3 ? (
            <RecentVisitGrid
              review_star={info.recent_visit_3.review_star}
              gird={info.recent_visit_3}
            />
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

interface UserChangeDropdownButtonProps {
  setIsOpenEditName: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenEditIntro: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenEditImage: React.Dispatch<React.SetStateAction<boolean>>;
  eraseInput: () => void;
  isOpenEditName: boolean;
  isOpenEditIntro: boolean;
  isOpenEditImage: boolean;
}

const UserChangeDropdownButton: React.FC<UserChangeDropdownButtonProps> = ({
  setIsOpenEditIntro,
  setIsOpenEditName,
  setIsOpenEditImage,
  isOpenEditName,
  isOpenEditIntro,
  isOpenEditImage,
  eraseInput,
}) => {
  const [toggle, setToggle] = useState(false);
  const dropdownRef = useRef(null) as any;
  useEffect(() => {
    const pageClickEvent = (e: Event) => {
      if (
        dropdownRef.current !== null &&
        !dropdownRef.current.contains(e.target)
      ) {
        setToggle(!toggle);
      }
    };

    // If the item is active (ie open) then listen for clicks
    if (toggle) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [toggle]);
  return (
    <div
      className="account-page-user-change-dropdown-button-container"
      ref={dropdownRef}
    >
      <button onClick={() => setToggle(!toggle)}>
        <Pen />
        <p>編輯</p>
        {toggle ? <CaretDownFill /> : <CaretUpFill />}
      </button>
      {toggle ? (
        <div className="account-page-user-change-dropdown">
          <button
            onClick={() => {
              setToggle(false);
              setIsOpenEditIntro(false);
              setIsOpenEditName(false);
              setIsOpenEditImage(true);
              eraseInput();
            }}
          >
            <ImagesIcon />
            編輯頭貼
          </button>
          <button
            onClick={() => {
              setToggle(false);
              setIsOpenEditImage(false);
              setIsOpenEditIntro(false);
              setIsOpenEditName(true);
              eraseInput();
            }}
          >
            <InfoIcon />
            更改名稱
          </button>
          <button
            onClick={() => {
              setToggle(false);
              setIsOpenEditImage(false);
              setIsOpenEditName(false);
              setIsOpenEditIntro(true);
              eraseInput();
            }}
          >
            <Pencil />
            更改簡介
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

const Pencil = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 16 16"
  >
    <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
  </svg>
);

const CaretDownFill = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </svg>
  );
};
const CaretUpFill = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="8"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
    </svg>
  );
};
const Pen = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z" />
    </svg>
  );
};
const ImagesIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
    </svg>
  );
};
const InfoIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
      <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
    </svg>
  );
};
const ChatSquareText = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
      <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
    </svg>
  );
};
const House = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
      />
      <path
        fillRule="evenodd"
        d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
      />
    </svg>
  );
};
