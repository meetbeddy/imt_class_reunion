import React from "react";
import * as dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { likePost } from "../../store/actions/posts";
import { useDispatch } from "react-redux";
dayjs.extend(relativeTime);

function PostCard({ post }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [likes, setLikes] = React.useState(post?.likes);
  const dispatch = useDispatch();
  // const history = useHistory();

  const userId = user?.result.googleId || user?.result?._id;
  const hasLikedPost = post.likes.find((like) => like === userId);

  const handleLike = async () => {
    dispatch(likePost(post._id));

    if (hasLikedPost) {
      setLikes(post.likes.filter((id) => id !== userId));
    } else {
      setLikes([...post.likes, userId]);
    }
  };

  const Likes = () => {
    if (likes.length > 0) {
      return likes.find((like) => like === userId) ? (
        <>
          <i className="bx bxs-like"></i>
          &nbsp;
          {likes.length > 2
            ? `You and ${likes.length - 1} others`
            : `${likes.length} like${likes.length > 1 ? "s" : ""}`}
        </>
      ) : (
        <>
          <i className="bx bxs-like"></i>
          &nbsp;{likes.length} {likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <i className="bx bx-like"></i>
        &nbsp;Like
      </>
    );
  };

  // const openPost = (e) => {
  //   // dispatch(getPost(post._id, history));

  //   history.push(`/posts/${post._id}`);
  // };

  return (
    <div className="col-md-4 col-lg-3 col-xl-3">
      <div className="card mb-3">
        <img className="card-img-top" src={post?.image} alt="Card  cap" />
        <div className="card-body">
          {/* <h5 className="card-title">Card title</h5> */}
          <p className="card-text">{post?.message}</p>
          <p className="card-text">
            <small className="text-muted">
              posted {dayjs(post?.createdAt).fromNow()}
            </small>
          </p>

          <div
            className="btn-toolbar demo-inline-spacing"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div className="btn-group" role="group" aria-label="First group">
              <button
                type="button"
                className="btn btn-outline-primary btn-sm"
                disabled={!user?.result}
                onClick={handleLike}
              >
                <Likes />
              </button>
              <button type="button" className="btn btn-outline-primary btn-sm">
                <i className="tf-icons bx bx-comment-dots"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
