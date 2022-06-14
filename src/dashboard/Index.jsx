import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import init from "./init";

function Index(props) {
  const [check, setCheck] = React.useState(true);
  React.useEffect(() => {
    if (check) {
      init();
      setCheck(false);
    }
  }, [check]);

  console.log(check);

  const toggleCollapse = (e, type) => {
    e.preventDefault();
    // console.log(window.Helpers);

    if (type === "open") {
      window.Helpers.toggleCollapsed(true);
    }
    if (type === "close") {
      window.Helpers.toggleCollapsed(false);
    }
  };
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SideNav toggleCollapse={toggleCollapse} />
        <div className="layout-page">
          <Header toggleCollapse={toggleCollapse} />
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              {props.children}
              <Outlet />
            </div>
          </div>
          <div className="content-backdrop fade"></div>
        </div>
      </div>
      <div
        className="layout-overlay"
        onClick={(e) => toggleCollapse(e, "close")}
      ></div>
    </div>
  );
}

export default Index;
