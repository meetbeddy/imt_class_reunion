import React from "react";
import "../profile/profile.css";
import ImagePreview from "./ImagePreview";

function PostForm() {
  const [postData, setPostData] = React.useState({
    message: "",
    selectedFile: "",
  });

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

  return (
    <div className="col-lg-8 mb-4 order-0">
      <div className="card">
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
                    defaultValue={""}
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
                    <button className="btn btn-primary pull-right">Post</button>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostForm;
