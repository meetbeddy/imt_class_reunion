import React from "react";
import EditProfile from "./EditProfile";
import Profile from "./Profile";

function Index() {
  const [toggle, setToggle] = React.useState(true);

  const switchPage = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <Profile handleswitch={switchPage} />
      ) : (
        <EditProfile handleswitch={switchPage} />
      )}
    </>
  );
}

export default Index;
