import React from "react";
import EditProfile from "./EditProfile";
import Profile from "./Profile";
import Profile2 from "./Profile2";
import init from "../../dashboard/init";

function Index() {
  const [toggle, setToggle] = React.useState(true);

  React.useEffect(() => {
    init();
  }, []);

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
