import React from "react";
import EditProfile from "./EditProfile";
import Profile2 from "./Profile2";
import init from "../../dashboard/init";
import { clearNotifications } from "../../store/actions/notificationsActions";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";

function Index() {
  const [toggle, setToggle] = React.useState(true);

  React.useEffect(() => {
    init();
  }, []);
  const notification = useSelector((state) => state.notification);

  const dispatch = useDispatch();

  const switchPage = () => {
    setToggle(!toggle);
  };

  React.useEffect(() => {
    if (notification?.success?.message) {
      const { message } = notification?.success;

      toast.success(message);
      dispatch(clearNotifications());
      switchPage(true);
    }
    if (notification?.errors?.message) {
      const { message } = notification?.errors;
      toast.error(message);
      dispatch(clearNotifications());
    }
  }, [dispatch, notification]);
  return (
    <>
      {toggle ? (
        <Profile2 handleswitch={switchPage} />
      ) : (
        <EditProfile handleswitch={switchPage} />
      )}
      <ToastContainer position="top-center" />
    </>
  );
}

export default Index;
