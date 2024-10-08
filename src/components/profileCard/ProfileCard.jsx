import sukuna from "../../assets/img/sukuna.jpeg";
import itadori from "../../assets/img/itadori.jpeg";
import { Link } from "react-router-dom";
import "./profileCard.css";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import AppContext from "../Global/AppContext";
import KeybladeSkai from "../../assets/img/auth/KeybladeSkai.jpg"
const ProfileCard = ({ location }) => {
  const [userName, setUserName] = useState("");
  const { setOpen } = useContext(AppContext);
  const userInfo = useSelector((state) => state.user);
  useEffect(() => {
    setUserName(userInfo);
  }, [userName, userInfo]);
  console.log(userInfo);
  console.log("hey");
  return (
    <div
      style={{
        boxShadow: location === "profilePage" ? "none" : "",
        borderRadius: location === "profilePage" ? "0" : "",
        marginBottom: location === "profilePage" ? "" : "",
      }}
      className="profile-card  bg-[--bg-color] text-[--primary-color]"
    >
      <div className="profileImages">
        <img
          style={{
            borderRadius:
              location === "profilePage" ? "0" : "1.5rem 1.5rem 0 0",
          }}
          src={sukuna}
          alt=""
        />

        <img src={KeybladeSkai} alt="" className="border-[1px] border-[#2F3336]" />
      </div>

      <div className="profile-info  bg-[--bg-color] text-[--primary-color]">
        <span className="flex gap-2 items-center justify-center">
          {userName ? (
           
              <span className="font-bold cursor-pointer" onClick={() => setOpen(true)}> {userInfo.userName}</span>
          
          ) : (
            <Link to="/">
              <button className="bg-white text-black">Sign In</button>
            </Link>
          )}

          {location === "profilePage" ? (
            <div className="text-[14px]" onClick={() => setOpen(true)}>
              {userInfo.name ? `@${userInfo.name}` : "@add your name..."}
            </div>
          ) : (
            ""
          )}
        </span>
        <span className="onClick={() => setOpen(true)}">{userInfo.userDesc ? `${userInfo.userDesc}` : "add your Bio..."}</span>
      </div>

      <div className="people-box border-t-[1px] border-b-[1px] border-[#2F3336] border-opacity-80">
        <div className="follow-card py-2">
          <div className="follow">
            <span>6,866</span>
            <span>Followers</span>
          </div>

          <div className=" border-l-[1px] border-[#2F3336] border-opacity-80 "></div>

          <div className="follow">
            <span>1000</span>
            <span>Following</span>
          </div>

          {location === "profilePage" ? (
            <>
              <div className=" border-r-[1px] border-[#2F3336] border-opacity-80 "></div>
              <div className="follow">
                <span>3</span>
                <span>Posts</span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      {location === "profilePage" ? (
        ""
      ) : (
        <div className="footer">
          <Link to="/profile">
            <button>My profile</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileCard;
