import React from "react";
import LogoSvg from "./LogoSvg";
import { NavLink as RouterNavLink } from "react-router-dom";
import init from "./init";

function SideNav() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const profile = user.result;

  React.useEffect(() => {
    init();
  }, []);
  return (
    <aside
      id="layout-menu"
      className="layout-menu menu-vertical menu bg-menu-theme"
    >
      <div className="app-brand demo">
        <RouterNavLink to="/dashboard" className="app-brand-link">
          <span className="app-brand-logo demo">
            <LogoSvg />
          </span>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">
            IMT
          </span>
        </RouterNavLink>
        <a
          href="#test"
          className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
        >
          <i className="bx bx-chevron-left bx-sm align-middle" />
        </a>
      </div>
      <div className="menu-inner-shadow" />
      <ul className="menu-inner py-1">
        {/* Dashboard */}
        <li className="menu-item active">
          <RouterNavLink to="/dashboard" className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle" />
            <div data-i18n="Analytics">Dashboard</div>
          </RouterNavLink>
        </li>
        <li className="menu-item ">
          <RouterNavLink to={`profile/${profile._id}`} className="menu-link">
            <i className="menu-icon tf-icons bx bx-user" />
            <div data-i18n="Analytics">Profile</div>
          </RouterNavLink>
        </li>
        <li className="menu-item ">
          <RouterNavLink to="cv-upload" className="menu-link">
            <i className="menu-icon tf-icons bx bx-file" />
            <div data-i18n="Analytics">Upload CV</div>
          </RouterNavLink>
        </li>
        {/* Layouts */}
        <li className="menu-item">
          <a href="/dashboard" className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-calendar-event" />
            <div data-i18n="Layouts">Events</div>
          </a>
          <ul className="menu-sub">
            <li className="menu-item">
              <RouterNavLink to="cv-upload" className="menu-link">
                <div data-i18n="Without menu">Reunion</div>
              </RouterNavLink>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default SideNav;
