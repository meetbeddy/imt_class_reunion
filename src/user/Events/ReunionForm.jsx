import React from "react";
import { Row, Form } from "react-bootstrap";
import InputField from "../../auth/InputField";
import { reunionReg } from "../../store/actions/posts";
import { clearNotifications } from "../../store/actions/notificationsActions";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function ReunionForm() {
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem("profile"))
  );

  const profile = user?.result;
  React.useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reunion-save"));
    const result = { ...saved };

    if (saved) {
      result.name = profile?.name;
      result.email = profile?.email;
      result.phone = profile?.phone;
      saved.result = result;
      setUser(saved);
      console.log("ima ");
    } else {
      setUser(JSON.parse(localStorage.getItem("profile")));
    }
  }, [profile?.email, profile?.name, profile?.phone]);

  //   console.log(user);

  const [inputValue, setInputValue] = React.useState(profile);
  const [error, setError] = React.useState({});

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("reunion-save", JSON.stringify(inputValue));
    toast.success("progress saved!");
  };

  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  React.useEffect(() => {
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
      dispatch(clearNotifications());
    }
    if (notification?.success?.message) {
      const { message } = notification?.success;
      toast.success(message);
      dispatch(clearNotifications());
    }
  }, [dispatch, notification]);

  const findErrors = () => {
    const { phone, email } = inputValue;
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
      dispatch(reunionReg(inputValue));
    }
  };
  return (
    <div className="card-body">
      <div className="divider">
        <div className="divider-text">
          {" "}
          <h3 className="card-header"> Registeration Form</h3>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <InputField
            label="Full Name"
            type="text"
            name="name"
            value={profile?.name}
            onChange={handleChange}
            placeholder=""
            error={error.name}
            className="col-lg-12"
            require={true}
            read={true}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Member Id"
            type="text"
            name="memberId"
            value={profile?.memberId}
            onChange={handleChange}
            placeholder=""
            error={error.memberId}
            className="col-lg-12"
            require={true}
            read={true}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Email"
            type="email"
            name="email"
            value={profile?.email}
            onChange={handleChange}
            placeholder=""
            error={error.email}
            className="col-lg-12"
            require={true}
            read={true}
          />
        </div>
        <div className="mb-3">
          <InputField
            label="Phone Number"
            type="number"
            name="phone"
            value={profile?.phone}
            onChange={handleChange}
            placeholder=""
            error={error.phone}
            className="col-lg-12"
            require={true}
            read={true}
          />
        </div>
        <Row>
          <InputField
            label="Arrival Date"
            type="date"
            name="arrivalDate"
            value={inputValue?.arrivalDate}
            onChange={handleChange}
            placeholder=""
            error={error.arrivalDate}
            className="col-lg-6"
            require={true}
            read={false}
          />

          <InputField
            label="Depature Date"
            type="date"
            name="depatureDate"
            value={inputValue?.depatureDate}
            onChange={handleChange}
            placeholder=""
            error={error.depatureDate}
            className="col-lg-6"
            require={true}
            read={false}
          />
        </Row>

        <Row>
          <Form.Group controlId="formdradio" className="col-lg-6 my-3">
            <Form.Label>Attending With Someone?: </Form.Label>
            <Form.Check
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  withGuest: e.target.value,
                })
              }
              type="radio"
              value="yes"
              label="Yes"
              name="withGuest"
              inline
              required
            ></Form.Check>
            <Form.Check
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  withGuest: e.target.value,
                })
              }
              type="radio"
              value="no"
              label="No"
              name="withGuest"
              inline
              required
            ></Form.Check>
          </Form.Group>

          {inputValue.withGuest === "yes" && (
            <Form.Group className="col-lg-6 my-3" controlId="formTitle">
              <Form.Label>Number Of Guest</Form.Label>
              <Form.Control
                as="select"
                name="guestNum"
                value={inputValue?.guestNum}
                onChange={handleChange}
              >
                <option> select number of guests</option>
                <option value="1">1 </option>
                <option value="2">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Control>
            </Form.Group>
          )}
        </Row>

        <Row>
          <Form.Group controlId="formdradio" className="col-lg-6 my-3">
            <Form.Label>Accomodation: </Form.Label>
            <Form.Check
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  accomodation: e.target.value,
                })
              }
              type="radio"
              value="resident"
              label="Resident"
              name="accomodation"
              inline
              required
            ></Form.Check>
            <Form.Check
              onChange={(e) =>
                setInputValue({
                  ...inputValue,
                  accomodation: e.target.value,
                })
              }
              type="radio"
              value="non resident"
              label="Non Resident"
              name="accomodation"
              inline
              required
            ></Form.Check>
          </Form.Group>

          {inputValue.accomodation === "resident" && (
            <Form.Group className="col-lg-6 my-3" controlId="formTitle">
              <Form.Label>Number Of Rooms</Form.Label>
              <Form.Control
                as="select"
                name="roomNum"
                value={inputValue?.roomN}
                onChange={handleChange}
              >
                <option> select number of rooms</option>
                <option value="1">1 </option>
                <option value="2">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Control>
            </Form.Group>
          )}
        </Row>
        {inputValue.accomodation === "resident" && (
          <>
            <div className="divider">
              <div className="divider-text">
                {" "}
                <h3 className="card-header"> Accomodation Deposit Details</h3>
              </div>
            </div>

            <Row>
              <InputField
                label="Bank Transferred from"
                type="text"
                name="accTransferFrom"
                value={inputValue?.accTransferFrom}
                onChange={handleChange}
                placeholder="enter the bank you transferred from"
                error={error.accTransferFrom}
                className="col-lg-6"
                require={true}
                read={false}
              />

              <InputField
                label="Bank Transferred to"
                type="text"
                name="accTransferTo"
                value={inputValue?.accTransferTo}
                onChange={handleChange}
                placeholder="enter the bank you transferred to"
                error={error.accTransferTo}
                className="col-lg-6"
                require={true}
                read={false}
              />
            </Row>
            <Row>
              <InputField
                label="Account Name"
                type="text"
                name="accAcountName"
                value={inputValue?.accAcountName}
                onChange={handleChange}
                placeholder="enter the name in account"
                error={error.accAcountName}
                className="col-lg-6"
                require={true}
                read={false}
              />

              <InputField
                label="Account Number"
                type="number"
                name="accBankNum"
                value={inputValue?.accBankNum}
                onChange={handleChange}
                placeholder="enter your account number"
                error={error.accBankNum}
                className="col-lg-6"
                require={true}
                read={false}
              />
            </Row>
            <InputField
              label="Transaction Id"
              type="text"
              name="accTransactionId"
              value={inputValue?.accTransactionId}
              onChange={handleChange}
              placeholder="enter transaction ID or full name"
              error={error.accTransactionId}
              className="col-lg-12"
              require={true}
              read={false}
            />
            <Row>
              <InputField
                label="Amount Transferred"
                type="text"
                name="accAmountTransferred"
                value={inputValue?.accAmountTransferred}
                onChange={handleChange}
                placeholder="enter the amount"
                error={error.accAmountTransferred}
                className="col-lg-6"
                require={true}
                read={false}
              />

              <InputField
                label="Transaction Date"
                type="date"
                name="accDate"
                value={inputValue?.accDate}
                onChange={handleChange}
                placeholder="enter your account number"
                error={error.accDate}
                className="col-lg-6"
                require={true}
                read={false}
              />
            </Row>
          </>
        )}

        <div className="divider">
          <div className="divider-text">
            {" "}
            <h3 className="card-header"> Donations/Support</h3>
          </div>
        </div>

        <Row>
          <InputField
            label="Bank Transferred from"
            type="text"
            name="donationTransferFrom"
            value={inputValue?.donationTransferFrom}
            onChange={handleChange}
            placeholder="enter the bank you transferred from"
            error={error.donationTransferFrom}
            className="col-lg-6"
            require={true}
            read={false}
          />

          <InputField
            label="Bank Transferred to"
            type="text"
            name="donationTransferTo"
            value={inputValue?.donationTransferTo}
            onChange={handleChange}
            placeholder="enter the bank you transferred to"
            error={error.donationTransferTo}
            className="col-lg-6"
            require={true}
            read={false}
          />
        </Row>
        <Row>
          <InputField
            label="Account Name"
            type="text"
            name="donationAcountName"
            value={inputValue?.donationAcountName}
            onChange={handleChange}
            placeholder="enter the name in account"
            error={error.donationAcountName}
            className="col-lg-6"
            require={true}
            read={false}
          />

          <InputField
            label="Account Number"
            type="number"
            name="donationBankNum"
            value={inputValue?.donationBankNum}
            onChange={handleChange}
            placeholder="enter your account number"
            error={error.donationBankNum}
            className="col-lg-6"
            require={true}
            read={false}
          />
        </Row>
        <InputField
          label="Transaction Id"
          type="text"
          name="donationTransactionId"
          value={inputValue?.donationTransactionId}
          onChange={handleChange}
          placeholder="enter transaction ID or full name"
          error={error.donationTransactionId}
          className="col-lg-12"
          require={true}
          read={false}
        />
        <Row>
          <InputField
            label="Amount Transferred"
            type="text"
            name="donationAmountTransferred"
            value={inputValue?.donationAmountTransferred}
            onChange={handleChange}
            placeholder="enter the amount"
            error={error.donationAmountTransferred}
            className="col-lg-6"
            require={true}
            read={false}
          />

          <InputField
            label="Transaction Date"
            type="date"
            name="donationDate"
            value={inputValue?.donationDate}
            onChange={handleChange}
            placeholder="enter your transaction date"
            error={error.donationDate}
            className="col-lg-6"
            require={true}
            read={false}
          />
        </Row>
        <button className="btn btn-success m-2" onClick={handleSave}>
          Save
        </button>
        <button type="submit" className="btn btn-primary m-2">
          Send
        </button>
      </form>
      <ToastContainer position="top-center" />
    </div>
  );
}

export default ReunionForm;
