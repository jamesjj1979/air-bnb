import Typed from "react-typed";
import React, { useEffect, useState } from "react";
import "../css/typing.css";
const Expire = (props) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay]);

  return visible ? (
    <div className="wrapper">
      <Typed
        className="typed"
        strings={["For anywhere you want to be", "There is..."]}
        typeSpeed={120}
        backSpeed={100}
      />
    </div>
  ) : (
    <div />
  );
};

export default Expire;
