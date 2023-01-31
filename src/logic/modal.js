import "../css/modal.css";
import me from "../img/me.jpeg";

import React, { useEffect, useState } from "react";
function Modal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 13000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      navigationButton();
    }, 26000);
    return () => clearTimeout(timer1);
  }, []);

  let navigationButton = function (e) {
    document.body.classList.toggle("show-nav");
    e.preventDefault();
  };
  let prevent = function (e) {
    const modal = document.getElementById("modal");
    modal.classList.add("show-modal");
    e.preventDefault();
  };

  let modalClose = function (e) {
    const modal = document.getElementById("modal");

    modal.classList.remove("show-modal");

    e.preventDefault();
  };

  let href = "";
  let github = "https://github.com/jamesjj1979";

  return visible ? (
    <div className="modalWrapper">
      <nav>
        <div>
          <img src={me} width="200px" height="200px" alt="user" />
        </div>
        <ul>
          <li>
            <a href={href} onClick={navigationButton}>
              Home
            </a>
          </li>
          <li>
            <a href={github} rel="noreferrer" target="_blank">
              Portfolio
            </a>
          </li>
          <li>
            <a href={href} onClick={prevent} id="open">
              About Me
            </a>
          </li>
        </ul>
      </nav>
      <button id="toggle" className="toggle" onClick={navigationButton}>
        <i className="fa fa-bars fa-2x"></i>
      </button>
      <div className="modalWrapper">
        <div className="modal-container" id="modal">
          <div className="modal1">
            <button class="close-btn" id="close" onClick={modalClose}>
              <i class="fa fa-times"></i>
            </button>
            <div className="modal-header">
              <h3>Sign Up</h3>
            </div>
            <div className="modal-content">
              <p>This is working...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}
export default Modal;
