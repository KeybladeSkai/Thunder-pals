import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { IoTrashOutline } from "react-icons/io5";
import { BsPinAngle } from "react-icons/bs";
import { PiStarFourLight } from "react-icons/pi";
import { HiOutlineChatBubbleBottomCenter } from "react-icons/hi2";
import { VscGraphLine } from "react-icons/vsc";
import { FaCode } from "react-icons/fa";
import "./post.css";
import { useState, useEffect, useRef, useContext } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { RiVolumeMuteFill } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";
import { MdOutlineReportProblem } from "react-icons/md";
import AppContext from "../Global/AppContext";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { useSelector } from "react-redux";
import t from "../../assets/img/auth/t.jpeg";
const Post = ({ data }) => {
  const user = useSelector((state) => state.user);
  console.log(user.userName);
  const { deletePost } = useContext(AppContext);

  const specificElement = useRef(null);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const handleMenu = () => {
    setVisibleMenu(true);
  };

  useEffect(() => {
    const handleClick = (event) => {
      if (
        specificElement.current &&
        !specificElement.current.contains(event.target)
      ) {
        setVisibleMenu(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  console.log(visibleMenu);
  return (
    <div>
      <div className="post pt-3 pb-2 pr-2 pl-2 justify-center items-center border-b-[1px] border-[#2F3336] border-opacity-55">
        <div className="flex h-[100%] mr-1">
          <img
            className=" rounded-full w-[40px] h-[38px]"
            src={data.profileImage}
            alt=""
          />
        </div>

        <div className="flex flex-col relative ">
          <div className="flex flex-col justify-between">
            <div className="flex items-center pr-2 justify-between ">
              <div className="flex gap-2 items-center justify-center leading-[1px] text-[--secondary-color] ">
                <h2 className="font-bold text-[15px] text-[--primary-color] ">
                  {data.name}
                </h2>
                <img src={t} className="rounded-2xl w-[12px]"/>
                <p className="text-[13px] text-gray-500 ">{data.userName}</p>

                <p className="text-[13px] text-gray-500 ">. {data.time}</p>
              </div>
              <button
                ref={specificElement}
                style={{ background: " none" }}
                onClick={handleMenu}
              >
                <HiOutlineDotsHorizontal className="text-xl cursor-pointer  text-[--primary-color]" />
              </button>

              <div
                style={{ display: visibleMenu ? "block" : "none" }}
                className="bg-[#ffff] px-4 py-4 rounded-xl w-[20rem] absolute right-0 top-[2px] z-10"
              >
                {data.ownerId !== user.userName ? (
                  <ul className="flex flex-col gap-5 font-bold text-md cursor-pointer text-sm text-black justify-center">
                    <li className="flex gap-2 items-center">
                      <HiOutlineEmojiSad className="text-2xl" />
                      not interested in this post
                    </li>
                    <li className="flex gap-2 items-center">
                      <RiUserUnfollowLine className="text-2xl" />
                      Unfollow
                    </li>

                    <li className="flex gap-2 items-center">
                      <RiVolumeMuteFill className="text-xl" />
                      Mute @{data.name}
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdBlock className="text-xl" />
                      Block @{data.name}
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCode className="text-2xl" />
                      Embed post
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineReportProblem className="text-2xl" />
                      Report @{data.name}
                    </li>
                  </ul>
                ) : (
                  <ul className="flex flex-col gap-5 font-bold text-sm capitalize text-black cursor-pointer">
                    <li className="flex items-center text-red-600 ">
                      <button
                        className="bg-transparent text-red-600 flex gap-2 capitalize px-0"
                        onClick={() => deletePost(data.name)}
                      >
                        <IoTrashOutline className="text-2xl text-black text-red-600" />
                        delete
                      </button>
                    </li>
                    <li className="flex gap-2 items-center ">
                      <BsPinAngle className="text-2xl" />
                      pin post
                    </li>
                    <li className="flex gap-2 items-center">
                      <PiStarFourLight className="text-2xl" />
                      Highlight on your profile
                    </li>
                    <li className="flex gap-2 items-center">
                      <HiOutlineChatBubbleBottomCenter className="text-2xl" />
                      change who can reply
                    </li>
                    <li className="flex gap-2 items-center">
                      view post engagement
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCode className="text-2xl" />
                      Embed post
                    </li>
                    <li className="flex gap-2 items-center">
                      <VscGraphLine className="text-2xl" />
                      view post analytics
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <p className="text-[14px] max-w-[500px] md break-words text-[--primary-color] ">
              {data.desc}
            </p>
          </div>

          <div className="w-[100%] mt-2 rounded-full ">
            <img
              className=" object-cover w-[90%] max-w-[750px] max-h-[500px] rounded-2xl overflow-clip "
              src={data.media}
              alt=""
            />
          </div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center justify-center gap-1 text-gray-500 ">
              <CiHeart className="text-[15px] text-[--primary-color] text-gray-500 " />
              <span className="text-[--primary-color] text-[12px] text-gray-500 ">
                {data.likes}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1">
              <FaRegComment className="text-md text-[--primary-color] text-[15px] text-gray-500 " />
              <span className="text-[--primary-color]  text-[12px] text-gray-500 ">
                {data.comments}
              </span>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <RiShareForwardLine className="text-xl  text-[--primary-color] text-[15px] text-gray-500 " />
              <span className="text-[--primary-color] text-[13px] text-gray-500 ">
                {data.shares}
              </span>
            </div>
            <div className="flex items-center justify-center  gap-1 text-gray-500 ">
              <CiBookmark className="text-[--primary-color] text-[15px]text-gray-500 " />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
