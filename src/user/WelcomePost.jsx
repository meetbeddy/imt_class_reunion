import React from "react";
import { Link } from "react-router-dom";

function WelcomePost({ profile }) {
  return (
    <div className="card  mb-2">
      <div className="d-flex align-items-end row">
        <div className="col-sm-7">
          <div className="card-body">
            <h5 className="card-title text-primary">
              Congratulations {profile.name.split(" ")[0]}! 🎉
            </h5>
            <p className="mb-4">
              your profile is <span className="fw-bold">98%</span> complete,{" "}
              you'd have full access to all features as soon as your profile is
              confirmed and a membership id is assigned to you. In the mean time
              you can edit your profile and add a profile picture.
            </p>
            <Link
              to={`profile/${profile._id}`}
              href="#"
              className="btn btn-sm btn-outline-primary"
            >
              Go to My Profile
            </Link>
          </div>
        </div>
        <div className="col-sm-5 text-center text-sm-left">
          <div className="card-body pb-0 px-0 px-md-4">
            <img
              src="assets/img/illustrations/man-with-laptop-light.png"
              height={140}
              alt="View Badge User"
              data-app-dark-img="illustrations/man-with-laptop-dark.png"
              data-app-light-img="illustrations/man-with-laptop-light.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomePost;
