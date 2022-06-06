import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNotifications } from "../store/actions/notificationsActions";
import { forgotpassword } from "../store/actions/authActions";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  useEffect(() => {
    if (notification.success) {
      const { message } = notification.success;
      toast.success(message);
      dispatch(clearNotifications());
    }
    if (notification.errors) {
      const { message } = notification.errors;
      toast.error(message);
      dispatch(clearNotifications());
    }
  }, [notification, dispatch]);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(forgotpassword({ email }));
  };

  return (
    <div>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner py-4">
            {/* Forgot Password */}
            <div className="card">
              <div className="card-body">
                {/* Logo */}
                <div className="app-brand justify-content-center">
                  <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text demo text-body fw-bolder">
                      imt accountancy `02
                    </span>
                  </a>
                </div>
                {/* /Logo */}
                <h4 className="mb-2">Forgot Password? 🔒</h4>
                <p className="mb-4">
                  Enter your email and we'll send you instructions to reset your
                  password
                </p>
                <form
                  id="formAuthentication"
                  className="mb-3"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={(e) => setEmail(e.target.value)}
                      autofocus
                    />
                  </div>
                  <button className="btn btn-primary d-grid w-100">
                    Send Reset Link
                  </button>
                </form>
                <div className="text-center">
                  <Link
                    to="/login"
                    className="d-flex align-items-center justify-content-center"
                  >
                    <i className="bx bx-chevron-left scaleX-n1-rtl bx-sm" />
                    Back to login
                  </Link>
                </div>
              </div>
            </div>
            {/* /Forgot Password */}
          </div>
        </div>
      </div>
      {/* / Content */}
      <ToastContainer position="top-center" />
    </div>
  );
}

export default ForgotPassword;
