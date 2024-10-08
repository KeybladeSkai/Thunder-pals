import "../infoCard/infocard.css";
import { HiOutlinePencil } from "react-icons/hi";
import { getAuth, signOut } from "firebase/auth";
import { setLogOut } from "../../context/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { ThreeCircles } from "react-loader-spinner";
import { useState, useEffect } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
const InfoCard = () => {
  const { setOpen } = useContext(AppContext);
  const [userName, setUserName] = useState("");

  const userInfo = useSelector((state) => state.user);
  useEffect(() => {
    setUserName(userInfo);
  }, [userName, userInfo]);
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(setLogOut());
        navigateTo("/");
        setLoading(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="InfoCard shadow-md border-opacity-55  bg-[--bg-color] text-[--primary-color] rounded-none w-[100%] h-[100vh]">
      <div className="flex gap-6 items-center mb-8 ml-2">
        <Link to="/">
          <FaLongArrowAltLeft className="text-2xl" />
        </Link>
        <div className="flex flex-col">
          <span className="text-xl text-[--primary-color]">Settings</span>
          <p className="text-[--primary-color]">@{userInfo.userName}</p>
        </div>
      </div>

      <div className="InfoHead">
        <h4 className="font-bold text-[18px] mb-2">Your Info</h4>
        <HiOutlinePencil className="text-2xl" onClick={() => setOpen(true)} />
      </div>

      <div className="info">
        <span className="text-[--primary-color]">{userInfo.name}</span>
      </div>
      <div className="text-[14px]">
        {userInfo.name ? `@${userInfo.name}` : "add your name"}
      </div>

      <div className="info ">
        <span className="text-[--primary-color]">{userInfo.userDesc}</span>
      </div>

      <button
        onClick={handleLogOut}
        className="rounded-sm py-2 bg-blue-700 hover:opacity-50"
      >
        {!loading ? (
          "Log out"
        ) : (
          <ThreeCircles
            visible={true}
            height="30"
            width="30"
            color="#fff"
            ariaLabel="three-circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </button>
    </div>
  );
};

export default InfoCard;
