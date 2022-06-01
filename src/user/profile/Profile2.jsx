import React, { useState } from "react";
import dayjs from "dayjs";
import UploadImageModal from "./UploadImageModal";
import { getFile } from "../../store/actions/posts";
import { useDispatch, useSelector } from "react-redux";
import download from "downloadjs";

function Profile2(props) {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();
  const file = useSelector((state) => state.posts.file);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const profile = user.result;
  React.useEffect(() => {
    if (isLoading === false && file) {
      download(
        Uint8Array.from(file?.data?.Body?.data).buffer, // converting the buffer array to a uint8array, to be compliant with the downloadjs function requirement
        file.file.file_name,
        file.file.file_mimetype
      );
    }
  }, [file, isLoading]);

  return (
    <div className="container-xxl flex-grow-1 container-p-y">
      {/* Header */}
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="user-profile-header-banner">
              <img
                src="../assets/img/profile-banner.png"
                alt="Banner"
                className="rounded-top"
              />
            </div>

            <div className="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
              <div className="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                <img
                  src={
                    profile.profileImage
                      ? profile.profileImage
                      : "../assets/img/avatars/1.png"
                  }
                  alt="user"
                  className="d-block h-auto ms-0 ms-sm-4 rounded user-profile-img"
                />
                <span className="select-display m-0 border-0">
                  <button
                    className="btn btn-outline-primary btn-xs"
                    onClick={handleShow}
                  >
                    Change image
                  </button>
                </span>
              </div>

              <div className="flex-grow-1 mt-3 mt-sm-5">
                <div className="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                  <div className="user-profile-info">
                    <h4>{profile.name}</h4>
                    <ul className="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                      {/* <li className="list-inline-item fw-semibold">
                        <i className="bx bx-pen" /> UX Designer
                      </li> */}
                      <li className="list-inline-item fw-semibold">
                        <i className="bx bx-map" /> {profile.homeAddress}
                      </li>
                      <li className="list-inline-item fw-semibold">
                        <i className="bx bx-calendar-alt" /> Joined{" "}
                        {profile.createdAt
                          ? dayjs(profile.createdAt).format("MMMM-DD-YYYY")
                          : dayjs(profile.updatedAt).format("MMMM-DD-YYYY")}
                      </li>
                    </ul>
                  </div>
                  <button
                    className="btn btn-primary text-nowrap"
                    onClick={props.handleswitch}
                  >
                    <i className="bx bx-user-check" /> Edit Profile
                  </button>
                  <button
                    className="btn btn-primary text-nowrap"
                    onClick={() => dispatch(getFile(user.result.cv.file_key))}
                  >
                    <i className="bx bx-user-check" /> View CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*/ Header */}
      {/* Navbar pills */}
      <div className="row">
        <div className="col-md-12">
          <ul className="nav nav-pills flex-column flex-sm-row mb-4">
            <li className="nav-item">
              <a className="nav-link" href="#iuei">
                <i className="bx bx-user" /> Profile
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="pages-profile-teams.html">
                <i className="bx bx-group" /> Teams
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages-profile-projects.html">
                <i className="bx bx-grid-alt" /> Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pages-profile-connections.html">
                <i className="bx bx-link-alt" /> Connections
              </a>
            </li> */}
          </ul>
        </div>
      </div>
      {/*/ Navbar pills */}
      {/* User Profile Content */}
      <div className="row">
        <div className="col-xl-12 col-lg-5 col-md-5">
          {/* About User */}
          <div className="card mb-4">
            <div className="card-body">
              <small className="text-muted text-uppercase">About</small>
              <ul className="list-unstyled mb-4 mt-3">
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-user" />
                  <span className="fw-semibold mx-2">Full Name:</span>{" "}
                  <span>{profile.name}</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-user" />
                  <span className="fw-semibold mx-2">Date of Birth:</span>{" "}
                  <span>{profile.birthDate}</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-user" />
                  <span className="fw-semibold mx-2">Place Of Work:</span>{" "}
                  <span>{profile.workPlace + "  " + profile.workAddress}</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-user" />
                  <span className="fw-semibold mx-2">
                    Residential Address:
                  </span>{" "}
                  <span>{profile.workAddress}</span>
                </li>

                {profile.ndRegNum.length > 0 && (
                  <li className="d-flex align-items-center mb-3">
                    <i className="bx bx-star" />
                    <span className="fw-semibold mx-2">
                      ND Reg Number:
                    </span>{" "}
                    <span>{profile.ndRegNum}</span>
                  </li>
                )}
                {profile.hndRegNum.length > 0 && (
                  <li className="d-flex align-items-center mb-3">
                    <i className="bx bx-star" />
                    <span className="fw-semibold mx-2">
                      HND Reg Number:
                    </span>{" "}
                    <span>{profile.hndRegNum}</span>
                  </li>
                )}
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-check" />
                  <span className="fw-semibold mx-2">Marital Status:</span>{" "}
                  <span>{profile.maritalStatus}</span>
                </li>
                {profile.husband.length > 0 && (
                  <li className="d-flex align-items-center mb-3">
                    <i className="bx bx-star" />
                    <span className="fw-semibold mx-2">
                      Husband's Name:
                    </span>{" "}
                    <span>{profile.husband}</span>
                  </li>
                )}
              </ul>
              <small className="text-muted text-uppercase">Contacts</small>
              <ul className="list-unstyled mb-4 mt-3">
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-phone" />
                  <span className="fw-semibold mx-2">Mobile Number:</span>{" "}
                  <span>{profile.phone}</span>
                </li>

                <li className="d-flex align-items-center mb-3">
                  <i className="bx bx-envelope" />
                  <span className="fw-semibold mx-2">Email:</span>{" "}
                  <span>{profile.email}</span>
                </li>
              </ul>
              <small className="text-muted text-uppercase">Next Of Kin</small>
              <ul className="list-unstyled mt-3 mb-0">
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bxl-github text-primary me-2" />
                  <div className="d-flex flex-wrap">
                    <span className="fw-semibold me-2">Next Of Kin 1</span>
                    <span>{profile.nok1}</span>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bxl-github text-primary me-2" />
                  <div className="d-flex flex-wrap">
                    <span className="fw-semibold me-2">Address</span>
                    <span>{profile.nokAddress1}</span>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bxl-github text-primary me-2" />
                  <div className="d-flex flex-wrap">
                    <span className="fw-semibold me-2">Email</span>
                    <span>{profile.nokEmail1}</span>
                  </div>
                </li>
              </ul>

              <small className="text-muted text-uppercase">Next Of Kin 2</small>
              <ul className="list-unstyled mt-3 mb-0">
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bxl-github text-primary me-2" />
                  <div className="d-flex flex-wrap">
                    <span className="fw-semibold me-2">Next Of Kin 2</span>
                    <span>{profile.nok1}</span>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bxl-github text-primary me-2" />
                  <div className="d-flex flex-wrap">
                    <span className="fw-semibold me-2">Address</span>
                    <span>{profile.nokAddress1}</span>
                  </div>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <i className="bx bxl-github text-primary me-2" />
                  <div className="d-flex flex-wrap">
                    <span className="fw-semibold me-2">Email</span>
                    <span>{profile.nokEmail1}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-xl-8 col-lg-7 col-md-7">
          {/* Activity Timeline */}
          {/* <div className="card card-action mb-4">
            <div className="card-header align-items-center">
              <h5 className="card-action-title mb-0">
                <i className="bx bx-list-ul me-2" />
                Activity Timeline
              </h5>
              <div className="card-action-element">
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn dropdown-toggle hide-arrow p-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bx bx-dots-vertical-rounded" />
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Share timeline
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Suggest edits
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="javascript:void(0);">
                        Report bug
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ul className="timeline ms-2">
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-warning" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-1">
                      <h6 className="mb-0">Client Meeting</h6>
                      <small className="text-muted">Today</small>
                    </div>
                    <p className="mb-2">Project meeting with john @10:15am</p>
                    <div className="d-flex flex-wrap">
                      <div className="avatar me-3">
                        <img
                          src="../../assets/img/avatars/3.png"
                          alt="Avatar"
                          className="rounded-circle"
                        />
                      </div>
                      <div>
                        <h6 className="mb-0">Lester McCarthy (Client)</h6>
                        <span>CEO of Infibeam</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-info" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-1">
                      <h6 className="mb-0">Create a new project for client</h6>
                      <small className="text-muted">2 Day Ago</small>
                    </div>
                    <p className="mb-0">Add files to new design folder</p>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-primary" />
                  <div className="timeline-event">
                    <div className="timeline-header mb-1">
                      <h6 className="mb-0">Shared 2 New Project Files</h6>
                      <small className="text-muted">6 Day Ago</small>
                    </div>
                    <p className="mb-2">
                      Sent by Mollie Dixon{" "}
                      <img
                        src="../../assets/img/avatars/4.png"
                        className="rounded-circle ms-3"
                        alt="avatar"
                        height={20}
                        width={20}
                      />
                    </p>
                    <div className="d-flex flex-wrap gap-2">
                      <a href="javascript:void(0)" className="me-3">
                        <img
                          src="../../assets/img/icons/misc/pdf.png"
                          alt="Document image"
                          width={20}
                          className="me-2"
                        />
                        <span className="h6">App Guidelines</span>
                      </a>
                      <a href="javascript:void(0)">
                        <img
                          src="../../assets/img/icons/misc/doc.png"
                          alt="Excel image"
                          width={20}
                          className="me-2"
                        />
                        <span className="h6">Testing Results</span>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="timeline-item timeline-item-transparent">
                  <span className="timeline-point timeline-point-success" />
                  <div className="timeline-event pb-0">
                    <div className="timeline-header mb-1">
                      <h6 className="mb-0">Project status updated</h6>
                      <small className="text-muted">10 Day Ago</small>
                    </div>
                    <p className="mb-0">Woocommerce iOS App Completed</p>
                  </div>
                </li>
                <li className="timeline-end-indicator">
                  <i className="bx bx-check-circle" />
                </li>
              </ul>
            </div>
          </div> */}
          {/*/ Activity Timeline */}

          <div className="row">
            {/* Connections */}
            {/* <div className="col-lg-12 col-xl-6">
              <div className="card card-action mb-4">
                <div className="card-header align-items-center">
                  <h5 className="card-action-title mb-0">Connections</h5>
                  <div className="card-action-element">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn dropdown-toggle hide-arrow p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Share connections
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Suggest edits
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Report bug
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Cecilia Payne</h6>
                            <small className="text-muted">45 Connections</small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-label-primary btn-icon btn-sm">
                            <i className="bx bx-user" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/avatars/3.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Curtis Fletcher</h6>
                            <small className="text-muted">
                              1.32k Connections
                            </small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-primary btn-icon btn-sm">
                            <i className="bx bx-user" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/avatars/10.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Alice Stone</h6>
                            <small className="text-muted">
                              125 Connections
                            </small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-primary btn-icon btn-sm">
                            <i className="bx bx-user" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Darrell Barnes</h6>
                            <small className="text-muted">
                              456 Connections
                            </small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-label-primary btn-icon btn-sm">
                            <i className="bx bx-user" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-start">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/avatars/12.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Eugenia Moore</h6>
                            <small className="text-muted">
                              1.2k Connections
                            </small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <button className="btn btn-label-primary btn-icon btn-sm">
                            <i className="bx bx-user" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="text-center">
                      <a href="javascript:;">View all connections</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/*/ Connections */}
            {/* Teams */}
            {/* <div className="col-lg-12 col-xl-6">
              <div className="card card-action mb-4">
                <div className="card-header align-items-center">
                  <h5 className="card-action-title mb-0">Teams</h5>
                  <div className="card-action-element">
                    <div className="dropdown">
                      <button
                        type="button"
                        className="btn dropdown-toggle hide-arrow p-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bx bx-dots-vertical-rounded" />
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Share teams
                          </a>
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Suggest edits
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a
                            className="dropdown-item"
                            href="javascript:void(0);"
                          >
                            Report bug
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/icons/brands/react-label.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">React Developers</h6>
                            <small className="text-muted">72 Members</small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="javascript:;">
                            <span className="badge bg-label-danger">
                              Developer
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/icons/brands/support-label.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Support Team</h6>
                            <small className="text-muted">122 Members</small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="javascript:;">
                            <span className="badge bg-label-primary">
                              Support
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/icons/brands/figma-label.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">UI Designers</h6>
                            <small className="text-muted">7 Members</small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="javascript:;">
                            <span className="badge bg-label-info">
                              Designer
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/icons/brands/vue-label.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-2">
                            <h6 className="mb-0">Vue.js Developers</h6>
                            <small className="text-muted">289 Members</small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="javascript:;">
                            <span className="badge bg-label-danger">
                              Developer
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="d-flex align-items-start">
                          <div className="avatar me-3">
                            <img
                              src="../../assets/img/icons/brands/twitter-label.png"
                              alt="Avatar"
                              className="rounded-circle"
                            />
                          </div>
                          <div className="me-w">
                            <h6 className="mb-0">Digital Marketing</h6>
                            <small className="text-muted">24 Members</small>
                          </div>
                        </div>
                        <div className="ms-auto">
                          <a href="javascript:;">
                            <span className="badge bg-label-secondary">
                              Marketing
                            </span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li className="text-center">
                      <a href="javascript:;">View all teams</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div> */}
            {/*/ Teams */}
          </div>
          {/* Projects table */}
          {/* <div className="card mb-4">
            <div className="card-datatable table-responsive">
              <div
                id="DataTables_Table_0_wrapper"
                className="dataTables_wrapper dt-bootstrap5 no-footer"
              >
                <div className="card-header pb-0 pt-sm-0">
                  <div className="head-label text-center">
                    <h5 className="card-title mb-0">Projects</h5>
                  </div>
                  <div className="d-flex justify-content-center justify-content-md-end">
                    <div
                      id="DataTables_Table_0_filter"
                      className="dataTables_filter"
                    >
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control"
                          placeholder
                          aria-controls="DataTables_Table_0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <table
                  className="datatables-projects border-top table dataTable no-footer dtr-column collapsed"
                  id="DataTables_Table_0"
                  role="grid"
                  aria-describedby="DataTables_Table_0_info"
                  style={{ width: 842 }}
                >
                  <thead>
                    <tr role="row">
                      <th
                        className="control sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 0 }}
                        aria-label
                      />
                      <th
                        className="sorting_disabled dt-checkboxes-cell dt-checkboxes-select-all"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 18 }}
                        data-col={1}
                        aria-label
                      >
                        <input type="checkbox" className="form-check-input" />
                      </th>
                      <th
                        className="sorting sorting_desc"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 175 }}
                        aria-label="Name: activate to sort column ascending"
                        aria-sort="descending"
                      >
                        Name
                      </th>
                      <th
                        className="sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 60 }}
                        aria-label="Leader: activate to sort column ascending"
                      >
                        Leader
                      </th>
                      <th
                        className="sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 60 }}
                        aria-label="Team"
                      >
                        Team
                      </th>
                      <th
                        className="w-px-200 sorting"
                        tabIndex={0}
                        aria-controls="DataTables_Table_0"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 200, display: "none" }}
                        aria-label="Status: activate to sort column ascending"
                      >
                        Status
                      </th>
                      <th
                        className="sorting_disabled"
                        rowSpan={1}
                        colSpan={1}
                        style={{ width: 63, display: "none" }}
                        aria-label="Actions"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="odd">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <span className="avatar-initial rounded-circle bg-label-success">
                                WS
                              </span>
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              Website SEO
                            </span>
                            <small className="text-truncate text-muted">
                              10 May 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Eileen</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/10.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/3.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/8.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "38%" }}
                              aria-valuenow="38%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>38%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="../../assets/img/icons/brands/social-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              Social Banners
                            </span>
                            <small className="text-truncate text-muted">
                              03 Jan 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Owen</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/11.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/10.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "45%" }}
                              aria-valuenow="45%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>45%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="../../assets/img/icons/brands/sketch-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              Logo Designs
                            </span>
                            <small className="text-truncate text-muted">
                              12 Aug 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Keith</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/12.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/4.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "92%" }}
                              aria-valuenow="92%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>92%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="../../assets/img/icons/brands/sketch-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              IOS App Design
                            </span>
                            <small className="text-truncate text-muted">
                              19 Apr 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Merline</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/8.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/1.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "56%" }}
                              aria-valuenow="56%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>56%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="../../assets/img/icons/brands/figma-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              Figma Dashboards
                            </span>
                            <small className="text-truncate text-muted">
                              08 Apr 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Harmonia</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/9.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/4.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "25%" }}
                              aria-valuenow="25%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>25%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="even">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="../../assets/img/icons/brands/html-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              Crypto Admin
                            </span>
                            <small className="text-truncate text-muted">
                              29 Sept 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Allyson</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/3.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/7.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "36%" }}
                              aria-valuenow="36%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>36%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="odd">
                      <td className=" control" tabIndex={0} style={{}} />
                      <td className=" dt-checkboxes-cell">
                        <input
                          type="checkbox"
                          className="dt-checkboxes form-check-input"
                        />
                      </td>
                      <td className="sorting_1">
                        <div className="d-flex justify-content-left align-items-center">
                          <div className="avatar-wrapper">
                            <div className="avatar me-2">
                              <img
                                src="../../assets/img/icons/brands/react-label.png"
                                alt="Avatar"
                                className="rounded-circle"
                              />
                            </div>
                          </div>
                          <div className="d-flex flex-column">
                            <span className="text-truncate fw-bold">
                              Create Website
                            </span>
                            <small className="text-truncate text-muted">
                              20 Mar 2021
                            </small>
                          </div>
                        </div>
                      </td>
                      <td>Georgie</td>
                      <td>
                        <div className="d-flex align-items-center avatar-group">
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/2.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/6.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/5.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                          <div className="avatar avatar-xs">
                            <img
                              src="../../assets/img/avatars/3.png"
                              alt="Avatar"
                              className="rounded-circle pull-up"
                            />
                          </div>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-flex align-items-center">
                          <div
                            className="progress w-100 me-3"
                            style={{ height: 6 }}
                          >
                            <div
                              className="progress-bar"
                              style={{ width: "72%" }}
                              aria-valuenow="72%"
                              aria-valuemin={0}
                              aria-valuemax={100}
                            />
                          </div>
                          <span>72%</span>
                        </div>
                      </td>
                      <td style={{ display: "none" }}>
                        <div className="d-inline-block">
                          <a
                            href="javascript:;"
                            className="btn btn-sm btn-icon dropdown-toggle hide-arrow"
                            data-bs-toggle="dropdown"
                          >
                            <i className="bx bx-dots-vertical-rounded" />
                          </a>
                          <div className="dropdown-menu dropdown-menu-end">
                            <a href="javascript:;" className="dropdown-item">
                              Details
                            </a>
                            <a href="javascript:;" className="dropdown-item">
                              Archive
                            </a>
                            <div className="dropdown-divider" />
                            <a
                              href="javascript:;"
                              className="dropdown-item text-danger delete-record"
                            >
                              Delete
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row mx-2">
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_info"
                      id="DataTables_Table_0_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 7 of 10 entries
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="DataTables_Table_0_paginate"
                    >
                      <ul className="pagination">
                        <li
                          className="paginate_button page-item previous disabled"
                          id="DataTables_Table_0_previous"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={0}
                            tabIndex={0}
                            className="page-link"
                          >
                            Previous
                          </a>
                        </li>
                        <li className="paginate_button page-item active">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={1}
                            tabIndex={0}
                            className="page-link"
                          >
                            1
                          </a>
                        </li>
                        <li className="paginate_button page-item ">
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={2}
                            tabIndex={0}
                            className="page-link"
                          >
                            2
                          </a>
                        </li>
                        <li
                          className="paginate_button page-item next"
                          id="DataTables_Table_0_next"
                        >
                          <a
                            href="#"
                            aria-controls="DataTables_Table_0"
                            data-dt-idx={3}
                            tabIndex={0}
                            className="page-link"
                          >
                            Next
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/*/ Projects table */}
        </div>
        <UploadImageModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        />
      </div>
      {/*/ User Profile Content */}
    </div>
  );
}

export default Profile2;
