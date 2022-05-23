import React from "react";
import "../profile/profile.css";
import ImagePreview from "./ImagePreview";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../../store/actions/posts";
import { clearNotifications } from "../../store/actions/notificationsActions";
import { ToastContainer, toast } from "react-toastify";

function PostForm() {
  const [postData, setPostData] = React.useState({
    message: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);

  React.useEffect(() => {
    if (notification?.success?.message) {
      const { message } = notification?.success;

      toast.success(message);
      dispatch(clearNotifications());
      setPostData({ selectedFile: "", message: "", imageURL: null });
    }
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
      dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  const handleFileselect = (e) => {
    const file = e.target?.files[0];
    setPostData({
      ...postData,

      imageURL: URL.createObjectURL(file),
    });
    setPostData({
      ...postData,

      selectedFile: file,
      imageURL: URL.createObjectURL(file),
    });
  };

  const submitPost = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("image", postData.selectedFile);
    formData.append("message", postData.message);

    dispatch(createPost(formData));
  };
  return (
    <div className="card  mb-2">
      <div className="d-flex align-items-end row">
        <div className="col-sm-12">
          <div className="card-body">
            <div className="panel">
              <form>
                <textarea
                  placeholder="Whats in your mind today?"
                  rows={2}
                  cols={6}
                  className="form-control input-lg p-text-area"
                  value={postData.message}
                  onChange={(e) =>
                    setPostData({ ...postData, message: e.target.value })
                  }
                />

                <ul className="nav nav-pills">
                  <li className="m-0">
                    <input
                      type="file"
                      className="custom-file-input border-0 m-0"
                      id="post"
                      onChange={(e) => handleFileselect(e)}
                    />
                  </li>
                  {postData.imageURL && (
                    <li>
                      <ImagePreview url={postData.imageURL} />
                    </li>
                  )}
                </ul>
                <footer className="panel-footer mt-2">
                  <button
                    className="btn btn-primary pull-right"
                    onClick={submitPost}
                  >
                    Post
                  </button>
                </footer>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default PostForm;
