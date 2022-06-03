import React from "react";
import Posts from "../post/Posts";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../store/actions/posts";
import MyPagination from "../../components/MyPagination";

function MyPost() {
  const { myPosts, isLoadings } = useSelector((state) => state.posts);

  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const [currPage, setCurrPage] = React.useState(1);

  const dispatch = useDispatch();
  const profile = user?.result;

  React.useEffect(() => {
    dispatch(getMyPosts(1));
  }, [dispatch]);

  const afterPageClicked = (page_num) => {
    setCurrPage(page_num);
    dispatch(getMyPosts(page_num));
  };

  return (
    <>
      {myPosts.length < 0 && <h2>You have not made any post yet</h2>}
      <MyPagination
        currentPage={currPage}
        pageClicked={(ele) => {
          afterPageClicked(ele);
        }}
      >
        <Posts posts={myPosts} id="my-post" />{" "}
      </MyPagination>
    </>
  );
}

export default MyPost;
