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
    modal.classList.remove("show-modal")
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
          <li>
            <a href={href}>Contact Me</a>
          </li>
        </ul>
      </nav>
      <button id="toggle" className="toggle" onClick={navigationButton}>
        <i className="fa fa-bars fa-2x"></i>
      </button>

      <div className="modalWrapper">
        <div className="modal-container" id="modal">
          <div className="modal">
            <button class="close-btn" id="close" onClick={modalClose}>
              <i class="fa fa-times"></i>
            </button>
            <div className="modal-header">
              <h3>Sign Up</h3>
            </div>
            <div className="modal-content">
              <p>Register with us to get offers, support and more</p>
              <form className="modal-form">
                <div>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    class="form-input"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-input"
                  />
                </div>
                <div>
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-input"
                  />
                </div>
                <div>
                  <label for="password2">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    placeholder="Confirm Password"
                    className="form-input"
                  />
                </div>
              </form>
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