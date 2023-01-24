import React, { useEffect, useState } from "react";
import "../css/inspire.css";


const Inspire = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay]);

  return visible ? <p className="color">airbnb </p> : <div />;
};

export default Inspire;