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
        strings={["For anywhere you wanna be", "There is"]}
        typeSpeed={150}
        backSpeed={200}
      />
    </div>
  ) : (
    <div />
  );
};

export default Expire;
