import React from "react";
import PasswordReset from "./PasswordReset";
import { useDispatch, useSelector } from "react-redux";
import { checkLink } from "../store/actions/authActions";
import { css } from "@emotion/react";
import { DotLoader } from "react-spinners";
import ExpiredLinkPage from "./ExpiredLinkPage";

const override = css`
  display: block;
  margin: auto auto;
  border-color: #696cff;
`;
function ResetMain() {
  const [run, setRun] = React.useState(true);
  const isLoading = useSelector((state) => state.auth.isLoading);

  const dispatch = useDispatch();

  const notification = useSelector((state) => state.notification);

  const queryString = window.location.search;
  const urlParam = new URLSearchParams(queryString);
  const token = urlParam.get("token");
  const id = urlParam.get("id");
  const email = urlParam.get("email");

  React.useEffect(() => {
    if (run) {
      dispatch(checkLink(token));
    }
    setRun(false);
  }, [dispatch, run, token]);

  const renderDiv = () => {
    if (notification?.success.message) {
      return <PasswordReset id={id} email={email} />;
    }
    if (notification?.errors?.message === "link expired or invalid") {
      return <ExpiredLinkPage />;
    }
  };

  if (isLoading)
    return (
      <DotLoader
        color="#696cff"
        loading={isLoading}
        css={override}
        size={150}
      />
    );

  return renderDiv();
}

export default ResetMain;
