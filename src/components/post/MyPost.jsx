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
import "../post/post.css";
import { useState, useEffect, useRef, useContext } from "react";
import { HiOutlineEmojiSad } from "react-icons/hi";
import { RiVolumeMuteFill } from "react-icons/ri";
import { MdBlock } from "react-icons/md";
import { RiUserUnfollowLine } from "react-icons/ri";
import { MdOutlineReportProblem } from "react-icons/md";
import AppContext from "../Global/AppContext";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

const MyPost = ({ post }) => {
  console.log(post);
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
    <>
      <div className=" post py-3 pr-2 pl-2 justify-center items-center text-[--primary-color] ">
        <div className="flex h-[100%] mr-1">
          <img
            className=" rounded-full w-[40px] h-[38px]"
            src={post.profileImage}
            alt=""
          />
        </div>

        <div className="flex gap-1 flex-col relative">
          <div className="flex flex-col justify-between gap-2">
            <div className="flex items-center pr-2 justify-between">
              <div className="flex gap-2 items-center justify-center leading-[1px]">
                <h2 className="font-bold text-[15px]">{post.name}</h2>
                <p className="text-[13px] text-gray-600">{post.userName}</p>
              </div>
              <button
                ref={specificElement}
                style={{ background: " none" }}
                onClick={handleMenu}
              >
                <HiOutlineDotsHorizontal className="text-xl cursor-pointer text-black" />
              </button>

              <div
                style={{ display: visibleMenu ? "block" : "none" }}
                className="bg-[#ffff] px-4 py-4 rounded-xl w-[20rem] absolute right-0 top-[2px] z-10"
              >
                {post.ownerId === "Skai" ? (
                  <ul className="flex flex-col gap-5 font-bold text-sm capitalize text-black cursor-pointer">
                    <li className="flex items-center text-red-600 ">
                      <button
                        className="bg-transparent text-red-600 flex gap-2 capitalize px-0"
                        onClick={() => deletePost(post.name)}
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
                      <VscGraphLine className="text-2xl" />
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
                ) : (
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
                      Mute @{post.name}
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdBlock className="text-xl" />
                      Block @{post.name}
                    </li>
                    <li className="flex gap-2 items-center">
                      <FaCode className="text-2xl" />
                      Embed post
                    </li>
                    <li className="flex gap-2 items-center">
                      <MdOutlineReportProblem className="text-2xl" />
                      Report @{post.name}
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <p className="text-[15px] max-w-[500px] md break-words">
              {post.desc}
            </p>
          </div>
          <div className="w-[100%] mt-2">
            <img
              className=" rounded-2xl w-[100%]  object-auto "
              src={post.media}
              alt=""
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center justify-center gap-1">
              <CiHeart className="text-xl" />
              <div>{post.likes}</div>
            </div>
            <div className="flex items-center justify-center gap-1">
              <FaRegComment className="text-md" />
              <div>{post.comments}</div>
            </div>
            <div className="flex items-center gap-1 justify-center">
              <RiShareForwardLine className="text-xl" />
              <div>{post.shares}</div>
            </div>
            <div className="flex items-center justify-center  gap-1">
              <CiBookmark className="text-xl" />
            </div>
          </div>
        </div>

        {/* <p>{post.likes}</p>
  
          */}
      </div>
    </>
  );
};

export default MyPost;
