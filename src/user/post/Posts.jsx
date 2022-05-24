import React from "react";
import PostCard from "./PostCard";

function Posts(props) {
  console.log(props.posts);

  return (
    <div className="row mb-5">
      {props?.posts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
}

export default Posts;
