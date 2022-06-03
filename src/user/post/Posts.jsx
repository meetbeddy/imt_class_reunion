import React from "react";
import MyPostCard from "./MyPostCards";
import PostCard from "./PostCard";

function Posts(props) {
  return (
    <div className="row mb-5">
      {props.id === "my-post"
        ? props?.posts.map((post) => <MyPostCard post={post} key={post?._id} />)
        : props?.posts.map((post) => <PostCard post={post} key={post?._id} />)}
    </div>
  );
}

export default Posts;
