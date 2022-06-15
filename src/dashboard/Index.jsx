import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";
import init from "./init";

function Index(props) {
  React.useEffect(() => {
    init();
  }, []);

  const toggleCollapse = (e) => {
    e.preventDefault();
    window.Helpers.toggleCollapsed(true);
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
      <div className="layout-overlay" onClick={(e) => toggleCollapse(e)}></div>
    </div>
  );
}

export default Index;
