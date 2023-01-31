import React, { useEffect, useState } from "react";
import "../css/inspire.css";
import airbnb from "../img/airbnb.png";

const Inspire = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay]);

  return visible ? (
    <div className="wrapper">
      <img
        class="logo"
        alt="airbnb logo"
        height="160px"
        width="160px"
        src={airbnb}
      ></img>
      <p className="color">airbnb </p>{" "}
    </div>
  ) : (
    <div />
  );
};

export default Inspire;
