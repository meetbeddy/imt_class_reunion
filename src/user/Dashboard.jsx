import React from "react";
import PostForm from "./post/PostForm";
import Posts from "./post/Posts";
import "./profile/profile.css";
import WelcomePost from "./WelcomePost";
import { getPosts } from "../store/actions/posts";
import { useDispatch } from "react-redux";

function MainDashboard() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const profile = user.result;

  return (
    <div className="row">
      <div className="col-lg-12 mb-4 order-0">
        {!profile.memberId && <WelcomePost profile={profile} />}

        <PostForm />

        <Posts />
      </div>
    </div>
  );
}

export default MainDashboard;
