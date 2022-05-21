import React, { useRef, useState, useEffect } from "react";
import ImagePreview from "../post/ImagePreview";
import { Modal, Button } from "react-bootstrap";

function UploadImageModal({ handleClose, show }) {
  const [postData, setPostData] = React.useState({
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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
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

            <Button variant="primary" className="btn rounded-pill">
              upload
            </Button>
          </form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default UploadImageModal;
