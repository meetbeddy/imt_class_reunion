import React from "react";
import PostCard from "./PostCard";
import { useDispatch, useSelector } from "react-redux";

function Posts() {
  const { posts, isLoading } = useSelector((state) => state.posts);

  return (
    <div className="row mb-5">
      {posts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
}

export default Posts;
