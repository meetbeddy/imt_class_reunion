import React from "react";
import PostForm from "./post/PostForm";
import Posts from "./post/Posts";
import "./profile/profile.css";
import WelcomePost from "./WelcomePost";
import MyPagination from "../components/MyPagination";
import { getPosts } from "../store/actions/posts";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";

const override = css`
  display: block;
  margin: auto auto;
  border-color: #696cff;
`;
function MainDashboard() {
  const { posts, isLoading } = useSelector((state) => state.posts);

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const [currPage, setCurrPage] = React.useState(1);

  const dispatch = useDispatch();
  const profile = user?.result;

  React.useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);

  const afterPageClicked = (page_num) => {
    setCurrPage(page_num);
    dispatch(getPosts(page_num));
  };

  return (
    <div className="row">
      <div className="col-lg-12 mb-4 order-0">
        {!profile?.memberId && <WelcomePost profile={profile} />}
        <PostForm />
        <h3>Posts and Gallery</h3>
        {isLoading ? (
          <DotLoader
            color="#696cff"
            loading={isLoading}
            css={override}
            size={150}
          />
        ) : (
          <MyPagination
            currentPage={currPage}
            pageClicked={(ele) => {
              afterPageClicked(ele);
            }}
          >
            <Posts posts={posts} />
          </MyPagination>
        )}
      </div>
    </div>
  );
}

export default MainDashboard;
