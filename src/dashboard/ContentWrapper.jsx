import React from "react";

function ContentWrapper(props) {
  return (
    <div className="content-wrapper">
      {/* <!-- Content --> */}

      <div className="container-xxl flex-grow-1 container-p-y">
        {props.chidren}
      </div>
    </div>
  );
}

export default ContentWrapper;
