import React, { useRef, useState, useEffect } from "react";
import ImagePreview from "../post/ImagePreview";
import { Modal, Button } from "react-bootstrap";
import { updateimage } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";

function UploadImageModal({ handleClose, show }) {
  const dispatch = useDispatch();
  const [postData, setPostData] = React.useState({
    profileImage: "",
  });

  const handleFileselect = async (e) => {
    const file = e.target?.files[0];
    setPostData({
      ...postData,

      imageURL: URL.createObjectURL(file),
    });

    const reader = new FileReader();
    reader.onloadend = () => {
      setPostData({
        ...postData,
        profileImage: reader.result,
        imageURL: URL.createObjectURL(file),
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateimage(postData));
  };
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Profile Image Upload</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {" "}
        <div className="card d-flex flex-column text-center ">
          <form className="mx-auto">
            {postData.imageURL && <ImagePreview url={postData.imageURL} />}

            <input
              type="file"
              className="custom-file-input border-0 m-0"
              id="file-input"
              onChange={(e) => handleFileselect(e)}
            />

            <Button
              variant="primary"
              className="btn rounded-pill"
              onClick={handleSubmit}
            >
              upload
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadImageModal;
