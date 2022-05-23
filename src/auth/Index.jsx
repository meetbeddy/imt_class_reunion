import React, { useState } from "react";
import { Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputField from "./InputField";
import { signin, signup } from "../store/actions/authActions";
import { useNavigate } from "react-router-dom";
import { clearNotifications } from "../store/actions/notificationsActions";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import "./login.css";

function Auth(props) {
  const [authType, setAuthType] = useState();
  const [error, setError] = useState({});
  const [inputValue, setInputValue] = useState({
    title: "Mr",
    otherName: "Obed 2",
    lastName: "Test1",
    phone: "0990",
    email: "testemail@gmail.com",
    gender: "male",
    maritalStatus: "single",
    husband: "",
    birthDate: "2002-12-03",
    ndRegNum: "somevale",
    hndRegNum: "samle",
    residentAddress: "kuje",
    homeAddress: "kuje",
    workPlace: "CBN",
    workAddress: "Abuja",
    nok1: "Daniel",
    nokAddress1: "kuje",
    nokEmail1: "danok@gmail.com",
    nokPhone1: "08023433",
    nok2: "Dan",
    nokAddress2: "Kad",
    nokEmail2: "dan1@gmail.com",
    nokPhone2: "0927838",
    password: "",
    confirmPassword: "",
  });

  const notification = useSelector((state) => state.notification);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  React.useEffect(() => {
    setAuthType(props.type);
  }, [props.type]);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  React.useEffect(() => {
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
      dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  const findErrors = () => {
    const { otherName, lastName, phone, email, password, confirmPassword } =
      inputValue;
    const newErrors = {};
    if (!otherName || otherName === "") {
      newErrors.otherName = "field cannot be blank!";
    }
    if (!lastName || lastName === "") {
      newErrors.lastName = "field cannot be blank!";
    }
    if (!phone || phone === "") {
      newErrors.phone = "field cannot be blank!";
    }
    if (!email || email === "") {
      newErrors.email = "field cannot be blank!";
    }
    if (!password || password === "") {
      newErrors.password = "field cannot be blank!";
    }
    if (!confirmPassword || confirmPassword === "") {
      newErrors.confirmPassword = "field cannot be blank!";
    }
    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (authType === "signin") {
      dispatch(signin(inputValue, navigate));
    } else {
      const newErrors = findErrors();
      if (Object.keys(newErrors).length > 0) {
        setError(newErrors);
      } else {
        dispatch(signup(inputValue, navigate));
      }
    }
  };

  return (
    <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
        <div className="row d-flex">
          <div className="col-lg-4">
            <div className="card1 pb-5">
              <div className="row">
                {" "}
                <img
                  src="assets/img/pensys.png"
                  className="logo"
                  alt="logo"
                />{" "}
              </div>
              <div className="mb-3 px-3">
                <Link to="/" className="btn btn-secondary text-center">
                  back to website
                </Link>{" "}
              </div>

              <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                {" "}
                <img
                  src="assets/img/hero-img.png"
                  className="image"
                  alt="hero "
                />{" "}
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card2 card border-0 px-4 py-5">
              <h2 className="mb-3 px-3">
                {" "}
                {authType === "signin" ? "SIGNIN" : "REGISTER"}
              </h2>
              {authType === "register" && (
                <>
                  <Row>
                    <InputField
                      label="Last Name"
                      type="text"
                      name="lastName"
                      value={inputValue.lastName}
                      onChange={handleChange}
                      placeholder="enter last name"
                      error={error.lastName}
                      className="col-lg-6"
                      require={true}
                    />
                    <InputField
                      label="Other Names"
                      type="text"
                      name="otherName"
                      value={inputValue.otherName}
                      onChange={handleChange}
                      placeholder="enter other names"
                      error={error.otherName}
                      className="col-lg-6"
                      require={true}
                    />
                  </Row>
                  <Row>
                    <InputField
                      label="Phone Number"
                      type="number"
                      name="phone"
                      value={inputValue.phone}
                      onChange={handleChange}
                      placeholder="enter phone number"
                      error={error.phone}
                      className="col-lg-6"
                      require={true}
                    />{" "}
                    <Form.Group
                      controlId="formdradio"
                      className="col-lg-6 my-3"
                    >
                      <Form.Label>Marital Status: </Form.Label>
                      <Form.Check
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            maritalStatus: e.target.value,
                          })
                        }
                        type="radio"
                        value="married"
                        label="Married"
                        name="status"
                        inline
                        required
                      ></Form.Check>
                      <Form.Check
                        onChange={(e) =>
                          setInputValue({
                            ...inputValue,
                            maritalStatus: e.target.value,
                          })
                        }
                        type="radio"
                        value="single"
                        label="Single"
                        name="status"
                        required
                        inline
                      ></Form.Check>
                    </Form.Group>
                  </Row>
                  {inputValue.maritalStatus !== "" && (
                    <Row>
                      <Form.Group
                        controlId="formdradio2"
                        className="col-lg-6 my-3"
                      >
                        <Form.Label>Gender: </Form.Label>
                        <Form.Check
                          onChange={(e) =>
                            setInputValue({
                              ...inputValue,
                              gender: e.target.value,
                            })
                          }
                          type="radio"
                          value="male"
                          label="Male"
                          name="gender"
                          required
                          inline
                        ></Form.Check>
                        <Form.Check
                          onChange={(e) =>
                            setInputValue({
                              ...inputValue,
                              gender: e.target.value,
                            })
                          }
                          type="radio"
                          value="female"
                          label="Female"
                          name="gender"
                          required
                          inline
                        ></Form.Check>
                      </Form.Group>

                      {inputValue.gender === "female" && (
                        <InputField
                          label="Husband's Name"
                          type="text"
                          name="husband"
                          value={inputValue.husband}
                          onChange={handleChange}
                          placeholder="enter husband name"
                          error={error.husband}
                          className="col-lg-6"
                          require={true}
                        />
                      )}
                    </Row>
                  )}
                  <Row>
                    <InputField
                      label="Date of Birth"
                      type="date"
                      name="birthDate"
                      value={inputValue.birthDate}
                      onChange={handleChange}
                      placeholder="enter date of birth"
                      error={error.birthDate}
                      className="col-lg-6"
                      require={true}
                    />
                    <InputField
                      label="Email"
                      type="text"
                      name="email"
                      value={inputValue.email}
                      onChange={handleChange}
                      placeholder=""
                      error={error.email}
                      className="col-lg-6"
                      require={true}
                    />
                  </Row>
                  <Row>
                    <InputField
                      label="Residential Address"
                      type="text"
                      name="residentAddress"
                      value={inputValue.residentAddress}
                      onChange={handleChange}
                      placeholder="enter resident address"
                      error={error.residentAddress}
                      className="col-lg-6"
                      require={true}
                    />
                    <InputField
                      label="Permanent Home Address"
                      type="text"
                      name="homeAddress"
                      value={inputValue.homeAddress}
                      onChange={handleChange}
                      placeholder="enter your home address"
                      error={error.homeAddress}
                      className="col-lg-6"
                      require={true}
                    />
                  </Row>

                  <Row>
                    <InputField
                      label="ND Reg Number"
                      type="text"
                      name="ndRegNum"
                      value={inputValue.ndRegNum}
                      onChange={handleChange}
                      placeholder="acceptable format AC/N97/...."
                      error={error.ndRegNum}
                      className="col-lg-6"
                      require={false}
                    />
                    <InputField
                      label="HND Reg"
                      type="text"
                      name="hndRegNum"
                      value={inputValue.hndRegNum}
                      onChange={handleChange}
                      placeholder="acceptable format AC/H2000/"
                      error={error.hndRegNum}
                      className="col-lg-6"
                      require={false}
                    />
                  </Row>
                  <Row>
                    <InputField
                      label="Work Place"
                      type="text"
                      name="workPlace"
                      value={inputValue.workPlace}
                      onChange={handleChange}
                      placeholder="Where do you work"
                      error={error.workPlace}
                      className="col-lg-6"
                      require={false}
                    />
                    <InputField
                      label="Work Address"
                      type="text"
                      name="workAddress"
                      value={inputValue.workAddress}
                      onChange={handleChange}
                      placeholder="enter work address"
                      error={error.workAddress}
                      className="col-lg-6"
                      require={false}
                    />
                  </Row>
                </>
              )}

              {authType === "register" && (
                <>
                  <Row>
                    <InputField
                      label="Next Of Kin 1"
                      type="text"
                      name="nok1"
                      value={inputValue.nok1}
                      onChange={handleChange}
                      placeholder="enter name of next of kin"
                      error={error.nok1}
                      className="col-lg-6"
                      require={false}
                    />
                    <InputField
                      label="NOK 1 Address"
                      type="text"
                      name="nokAddress1"
                      value={inputValue.nokAddress1}
                      onChange={handleChange}
                      placeholder="enter work address"
                      error={error.nokAddress1}
                      className="col-lg-6"
                      require={false}
                    />
                  </Row>

                  <Row>
                    <InputField
                      label="NOK 1 Email"
                      type="text"
                      name="nokEmail1"
                      value={inputValue.nokEmail1}
                      onChange={handleChange}
                      placeholder="enter name of next of kin"
                      error={error.nokEmail1}
                      className="col-lg-6"
                      require={false}
                    />
                    <InputField
                      label="NOK 1 Phone Number"
                      type="text"
                      name="nokPhone1"
                      value={inputValue.nokPhone1}
                      onChange={handleChange}
                      placeholder="enter work address"
                      error={error.nokPhone1}
                      className="col-lg-6"
                      require={false}
                    />
                  </Row>

                  <Row>
                    <InputField
                      label="Next Of Kin 2"
                      type="text"
                      name="nok2"
                      value={inputValue.nok2}
                      onChange={handleChange}
                      placeholder="enter name of next of kin"
                      error={error.nok2}
                      className="col-lg-6"
                      require={false}
                    />
                    <InputField
                      label="NOK 2 Address"
                      type="text"
                      name="nokAddress2"
                      value={inputValue.nokAddress2}
                      onChange={handleChange}
                      placeholder="enter work address"
                      error={error.nokAddress2}
                      className="col-lg-6"
                      require={false}
                    />
                  </Row>

                  <Row>
                    <InputField
                      label="NOK 2 Email"
                      type="text"
                      name="nokEmail2"
                      value={inputValue.nokEmail2}
                      onChange={handleChange}
                      placeholder="enter name of next of kin"
                      error={error.nokEmail2}
                      className="col-lg-6"
                      require={false}
                    />
                    <InputField
                      label="NOK 2 Phone Number"
                      type="text"
                      name="nokPhone2"
                      value={inputValue.nokPhone2}
                      onChange={handleChange}
                      placeholder="enter work address"
                      error={error.nokPhone2}
                      className="col-lg-6"
                      require={false}
                    />
                  </Row>
                </>
              )}

              {authType === "signin" && (
                <InputField
                  label="Email Address"
                  type="email"
                  name="email"
                  value={inputValue.email}
                  onChange={handleChange}
                  placeholder="enter email"
                  error={error.email}
                  required
                />
              )}
              <InputField
                label="Password"
                type="password"
                name="password"
                value={inputValue.password}
                onChange={handleChange}
                placeholder="enter password"
                error={error.password}
              />

              {authType === "register" && (
                <InputField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  value={inputValue.confirmPassword}
                  onChange={handleChange}
                  placeholder="confirm password"
                  error={error.confirmPassword}
                />
              )}
              <div className="row px-3 mb-4">
                {authType === "login" && (
                  <a
                    href="#"
                    className="ml-auto mb-0  text-white bg-warning w-50"
                  >
                    Forgot Password?
                  </a>
                )}
              </div>

              <div className="row mb-3 px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn-blue text-center"
                  onClick={handleSubmit}
                >
                  {authType === "signin" ? "Login" : "Register"}
                </button>{" "}
              </div>
              <div className="row mb-4 px-3">
                {" "}
                <small className="font-weight-bold">
                  {authType === "signin"
                    ? "Don't have an account?   "
                    : "Already have an account    "}
                  <Link
                    to={authType === "signin" ? "/signup" : "/login"}
                    className="text-danger "
                  >
                    {authType === "signin" ? "Register" : "Login"}
                  </Link>
                </small>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default Auth;
