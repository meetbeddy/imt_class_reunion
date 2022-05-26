import React from "react";
import { Carousel } from "react-bootstrap";
import EventInfo from "./EventInfo";
import ReunionForm from "./ReunionForm";

function Reunion() {
  const [choice, setChoice] = React.useState("");

  const handleToggle = (e) => {
    setChoice(e.target.name);
  };

  return (
    <div className="card">
      <div className="card-body">
        <div
          className="text-center overflow-hidden"
          // style={{ height: "50px", width: "700px", overflowX: "scroll" }}
        >
          {" "}
          <div className="btn-container mx-auto " id="horizontal-example">
            <a
              href="/dashboard/reunion#info"
              className="btn btn-outline-primary  btn-sm m-2"
              name="event-info"
              onClick={handleToggle}
            >
              event info
            </a>{" "}
            <a
              href="/dashboard/reunion#info"
              className="btn btn-outline-primary  btn-sm m-2"
              name="organizing-commitee"
              onClick={handleToggle}
            >
              organizing commitee
            </a>{" "}
            <a
              href="/dashboard/reunion#info"
              className="btn btn-outline-primary  btn-sm m-2"
              name="is-coming"
              onClick={handleToggle}
            >
              who is coming
            </a>{" "}
            <a
              href="/dashboard/reunion#info"
              className="btn btn-primary  btn-sm m-2"
              name="register"
              onClick={handleToggle}
            >
              register
            </a>{" "}
          </div>
        </div>
      </div>
      {/* <img
        className="img-fluid"
        src="../assets/img/elements/13.jpg"
        alt="Card image cap"
        style={{ maxHeight: "400px", contain: "content", objectFit: "fill" }}
      /> */}
      <Carousel controls={false}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../assets/img/graduation1.jpg"
            alt="First slide"
            height="500"
            // style={{ contain: "content", objectFit: "fill" }}
          />
          <Carousel.Caption>
            <h1 className="text-primary">
              Institute of Management and Technology
            </h1>
            <h3 className="text-dark-50 bg-primary">
              Accountancy Class of 2002 Reunion
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div id="info" className="card-body">
        {choice === "register" && <ReunionForm />}
        {choice !== "register" && <EventInfo />}
      </div>
    </div>
  );
}

export default Reunion;
