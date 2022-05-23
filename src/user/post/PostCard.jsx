import React from "react";
import dayjs from "dayjs";

function PostCard({ post }) {
  return (
    <div className="col-md-6 col-xl-4">
      <div className="card mb-3">
        <img
          className="card-img-top"
          src={"../assets/img/elements/18.jpg"}
          alt="Card  cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">{post?.message}</p>
          <p className="card-text">
            <small className="text-muted">
              posted {dayjs(post?.createdAt).fromNow()}
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
