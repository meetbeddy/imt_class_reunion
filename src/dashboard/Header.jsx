import React from "react";
import { Dropdown, FormControl } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import decode from "jwt-decode";

function Header() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useNavigate();

  const logout = () => {
    dispatch({ type: "LOGOUT" });

    history("/login");

    setUser(null);
  };

  React.useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <nav
      className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
      id="layout-navbar"
    >
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="#">
          <i className="bx bx-menu bx-sm" />
        </a>
      </div>
      <div
        className="navbar-nav-right d-flex align-items-center"
        id="navbar-collapse"
      >
        {/* Search */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0" />
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* /Search */}

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          {/* Place this tag where you want the button to render. */}
          {/* <li className="nav-item lh-1 me-3">
            <a
              className="github-button"
              href="#"
              data-icon="octicon-star"
              data-size="large"
              data-show-count="true"
              aria-label="Star themeselection/sneat-html-admin-template-free on GitHub"
            >
              Star
            </a>
          </li> */}
          <Dropdown className="nav-item navbar-dropdown dropdown-user dropdown">
            <Dropdown.Toggle
              variant="transparent"
              id="dropdown-basic"
              className="nav-link dropdown-toggle hide-arrow transparent"
            >
              <div className="avatar avatar-online">
                <img
                  src="../assets/img/avatars/1.png"
                  alt=".."
                  className="w-px-40 h-auto rounded-circle"
                />
              </div>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu dropdown-menu-end">
              <Dropdown.Item href="#/action-1">
                <div className="d-flex">
                  <div className="flex-shrink-0 me-3">
                    <div className="avatar avatar-online">
                      <img
                        src="../assets/img/avatars/1.png"
                        alt=".."
                        className="w-px-40 h-auto rounded-circle"
                      />
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <span className="fw-semibold d-block">John Doe</span>
                    <small className="text-muted">Admin</small>
                  </div>
                </div>
              </Dropdown.Item>
              <div className="dropdown-divider" />
              <Dropdown.Item href="#/action-2">
                {" "}
                <i className="bx bx-user me-2" />
                <span className="align-middle">My Profile</span>
              </Dropdown.Item>
              <Dropdown.Item href="#" onClick={() => logout()}>
                {" "}
                <i class="bx bx-power-off me-2"></i>
                <span className="align-middle">Logout</span>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* User */}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
