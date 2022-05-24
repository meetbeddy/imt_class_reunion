import React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function PostCard({ post }) {
  return (
    <div className="col-md-4 col-lg-3 col-xl-3">
      <div className="card mb-3">
        <img className="card-img-top" src={post.image} alt="Card  cap" />
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
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
