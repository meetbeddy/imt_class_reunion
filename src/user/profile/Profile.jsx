import { Container, Row } from "react-bootstrap";
import "./profile.css";

function Profile(props) {
  return (
    <Container className="bootstrap snippets bootdey">
      <Row>
        <div className="profile-nav col-md-3">
          <div className="panel">
            <div className="user-heading round">
              <a href="#">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar3.png"
                  alt="..."
                />
              </a>
              <h1>Camila Smith</h1>
              <p>deydey@theEmail.com</p>
            </div>
            <ul className="nav nav-pills nav-stacked">
              <li>
                <button
                  className="btn btn-primary mt-2"
                  onClick={props.handleswitch}
                >
                  {" "}
                  <i className="fa fa-edit" /> Edit profile
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-info col-md-9">
          <div className="panel">
            <div className="panel-body bio-graph-info">
              <h1>Bio Graph</h1>
              <div className="row">
                <div className="bio-row">
                  <p>
                    <span>Full Name </span>: Camila
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Gender </span>: Female
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Marital Status </span>: Single
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Birthday</span>: 13 July 1983
                  </p>
                </div>

                <div className="bio-row">
                  <p>
                    <span>Email </span>: jsmith@flatlab.com
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Phone </span>: 88 (02) 123456
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Residential Address </span>: 88 (02) 123456
                  </p>
                </div>
                <div className="bio-row">
                  <p>
                    <span>Permanent Home address </span>: 88 (02) 123456
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row">
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-desk">
                      <h4 className="red">Work Details</h4>
                      <p>Work Place : 15 July</p>
                      <p>Work Address : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-desk">
                      <h4 className="terques">Registration Numbers </h4>
                      <p>ND : 15 July</p>
                      <p>HND : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    <div className="bio-desk">
                      <h4 className="green">Next Of Kin 1</h4>
                      <p>Name : 15 July</p>
                      <p>Email : 15 August</p>
                      <p>Phone : 15 August</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="panel">
                  <div className="panel-body">
                    {/* <div className="bio-chart">
                      <div
                        style={{ display: "inline", width: 100, height: 100 }}
                      >
                        <canvas width={100} height="100px" />
                        <input
                          className="knob"
                          data-width={100}
                          data-height={100}
                          data-displayprevious="true"
                          data-thickness=".2"
                          defaultValue={50}
                          data-fgcolor="#cba4db"
                          data-bgcolor="#e8e8e8"
                          style={{
                            width: 54,
                            height: 33,
                            position: "absolute",
                            verticalAlign: "middle",
                            marginTop: 33,
                            marginLeft: "-77px",
                            border: 0,
                            fontWeight: "bold",
                            fontStyle: "normal",
                            fontVariant: "normal",
                            fontStretch: "normal",
                            fontSize: 20,
                            lineHeight: "normal",
                            fontFamily: "Arial",
                            textAlign: "center",
                            color: "rgb(203, 164, 219)",
                            padding: 0,
                            WebkitAppearance: "none",
                            background: "none",
                          }}
                        />
                      </div>
                    </div> */}
                    <div className="bio-desk">
                      <div className="bio-desk">
                        <h4 className="green">Next Of Kin 2</h4>
                        <p>Name : 15 July</p>
                        <p>Email : 15 August</p>
                        <p>Phone : 15 August</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Profile;
