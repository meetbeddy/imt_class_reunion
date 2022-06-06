import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetpassword } from "../store/actions/authActions";
import { toast, ToastContainer } from "react-toastify";

function PasswordReset({ id, email }) {
  const [inputValue, setInputValue] = React.useState({
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (auth.success) {
      const { message } = auth.success;
      toast.success(message);
    }
    if (auth.errors) {
      const { message } = auth.errors;
      toast.error(message);
    }
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    inputValue.id = id;

    inputValue.email = email;
    dispatch(resetpassword(inputValue));
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
                <h4 className="mb-2"> Password Reset 🔒</h4>
                <p className="mb-4">
                  You are only one step a way from your new password, recover
                  your password now.
                </p>
                <form
                  id="formAuthentication"
                  className="mb-3"
                  onSubmit={handleSubmit}
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      placeholder="Enter your new password"
                      onChange={(e) =>
                        setInputValue({
                          ...inputValue,
                          password: e.target.value,
                        })
                      }
                      autofocus
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="confirm-password"
                      placeholder="Confirm password"
                      onChange={(e) =>
                        setInputValue({
                          ...inputValue,
                          confirmPassword: e.target.value,
                        })
                      }
                      autofocus
                    />
                  </div>
                  <button className="btn btn-primary d-grid w-100">
                    Update Password
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

export default PasswordReset;
