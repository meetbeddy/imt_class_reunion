import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideNav from "./SideNav";

function Index(props) {
  React.useEffect(() => {
    let menu, animate;

    let layoutMenuEl = document.querySelectorAll("#layout-menu");
    layoutMenuEl.forEach(function (element) {
      console.log(window);
      const Menu = window?.Menu;
      menu = new Menu(element, {
        orientation: "vertical",
        closeChildren: false,
      });

      // Change parameter to true if you want scroll animation
      window.Helpers.scrollToActive((animate = false));
      window.Helpers.mainMenu = menu;
    });

    let menuToggler = document.querySelectorAll(".layout-menu-toggle");
    menuToggler.forEach((item) => {
      item.addEventListener("click", (event) => {
        event.preventDefault();
        window.Helpers.toggleCollapsed();
      });
    });
  }, []);
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SideNav />
        <div className="layout-page">
          <Header />
          <div className="content-wrapper">
            {/* <!-- Content --> */}

            <div className="container-xxl flex-grow-1 container-p-y">
              {props.children}
              <Outlet/>
            </div>
          </div>
          <div className="content-backdrop fade"></div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
     
    </div>
  );
}

export default Index;
