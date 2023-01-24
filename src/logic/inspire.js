import React, { useEffect, useState } from "react";


const Inspire = (props) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, props.delay);
    return () => clearTimeout(timer);
  }, [props.delay]);

  return visible ? <div>{props.children}</div> : <div />;
};

export default Inspire;