import React, { useState } from "react";
import { Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InputField from "../../auth/InputField";
import { updateprofile } from "../../store/actions/authActions";

function EditProfile(props) {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const profile = user.result;

  const [error, setError] = useState({});
  const [inputValue, setInputValue] = useState(profile);

  // const notification = useSelector((state) => state.notification);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // React.useEffect(() => {
  //   if (notification?.errors?.message) {
  //     const { message } = notification?.errors;
  //     toast.error(message);
  //     return dispatch(clearNotifications());
  //   }
  // }, [dispatch, notification]);

  const findErrors = () => {
    const { phone, email, password, confirmPassword } = inputValue;
    const newErrors = {};
    // if (!otherName || otherName === "") {
    //   newErrors.otherName = "field cannot be blank!";
    // }
    // if (!lastName || lastName === "") {
    //   newErrors.lastName = "field cannot be blank!";
    // }
    if (!phone || phone === "") {
      newErrors.phone = "field cannot be blank!";
    }
    if (!email || email === "") {
      newErrors.email = "field cannot be blank!";
    }

    return newErrors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findErrors();

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      dispatch(updateprofile(inputValue, navigate));
    }
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="row">
        {/* <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div> */}
        <div className="col-md-9 col-lg-12 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Make Changes to your profile</h4>
            </div>
            <Row>
              <InputField
                label="Last Name"
                type="text"
                name="lastName"
                value={profile.name.split(" ")[0]}
                onChange={handleChange}
                placeholder="enter last name"
                error={error.lastName}
                className="col-lg-6"
                require={true}
                read={true}
              />
              <InputField
                label="Other Names"
                type="text"
                name="otherName"
                value={profile.name.split(" ")[1]}
                onChange={handleChange}
                placeholder="enter other names"
                error={error.otherName}
                className="col-lg-6"
                require={true}
                read={true}
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
              <Form.Group controlId="formdradio" className="col-lg-6 my-3">
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
                <Form.Group controlId="formdradio2" className="col-lg-6 my-3">
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
                read={true}
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
                read={true}
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

            <div className="row">
              <button
                className="btn btn-danger profile-button m-2"
                type="button"
                onClick={props.handleswitch}
              >
                Cancel
              </button>

              <button
                className="btn btn-primary profile-button m-2"
                type="button"
                onClick={handleSubmit}
              >
                Save Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
