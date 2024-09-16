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
        style={{
          borderTop: 0,
          borderLeft: `1px solid rgba(47, 51, 54, var(--opacity))`,
          borderRight: `1px solid rgba(47, 51, 54, var(--opacity))`,
        }}
        className="postSide
          bg-[--bg-color]"
      >
        {thirdResize ? <PostPanel setPost={setPost} /> : <SingleHeader />}
        <Posts postData={posts} />
        {!thirdResize && <BottomNav setShow={setShowPostPanel} />}
      </div>
    </>
  );
};

export default MiddleSide;
