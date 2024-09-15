import Post from "../post/Post";
import "./Posts.css";

const Posts = ({ postData }) => {
  return (
    <div className="posts text-[--secondary-color]">
      {postData.map((post, id) => {
        console.log(post.id);
        return <Post data={post} key={id} />;
      })}
    </div>
  );
};

export default Posts;
