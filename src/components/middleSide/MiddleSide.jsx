import PostPanel from "../PostPanel/PostPanel";
import Posts from "../posts/Posts";
import "./middleSide.css";
import AppContext from "../Global/AppContext";
import { useContext } from "react";
import SingleHeader from "../SingleHeader/SingleHeader";
import BottomNav from "../mobileBottomNav/BottomNav";

const MiddleSide = () => {
  const { posts, setPost, thirdResize, setShowPostPanel, showPostPanel } =
    useContext(AppContext);

  return (
    <>
      <div
        className="postSide
          bg-[--bg-color] md:h-[92svh]  lg:h-[98svh]"
      >
        {thirdResize ? <PostPanel setPost={setPost} /> : <SingleHeader />}
        <Posts postData={posts} />
        {!thirdResize && <BottomNav setShow={setShowPostPanel} />}
      </div>
    </>
  );
};

export default MiddleSide;
