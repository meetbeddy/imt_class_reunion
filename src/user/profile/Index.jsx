import React from "react";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import Profile2 from "./Profile2";

function Index() {
  const [toggle, setToggle] = React.useState(true);

  const switchPage = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle ? (
        <Profile2 handleswitch={switchPage} />
      ) : (
        <EditProfile handleswitch={switchPage} />
      )}
    </>
  );
}

export default Index;
