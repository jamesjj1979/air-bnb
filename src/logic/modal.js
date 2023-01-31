import "../css/modal.css";
import me from "../img/me.jpeg";
import emailjs from "@emailjs/browser";

import React, { useEffect, useState, useRef } from "react";

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
    }, 28000);
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

  let openContact = function (e) {
    const contact = document.getElementById("contact");
     contact.classList.add("show-contact");
     e.preventDefault();
  
   
  };


  let href = "";
  let github = "https://github.com/jamesjj1979";

  const form = useRef()
  const sendEmail = (e) => {
    const contact = document.getElementById("contact");
   e.preventDefault();

   emailjs
     .sendForm(
       "service_yc9362a",
       "template_kk86wjd",
       form.current,
       "8xArrDlQhIgOdHQTj"
     )
     .then(
       (result) => {
         console.log(result.text);
       },
       (error) => {
         console.log(error.text);
       }
   );
   e.target.reset()
    contact.classList.remove("show-contact");
 };

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
            <a href={href} onClick={openContact}>
              Contact
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
              <h3>About Me</h3>
            </div>
            <div className="modal-content">
              <p>This is working...</p>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="emailContainer">
        <div className="show-contact " id="contact">
        
           
            <form ref={form} onSubmit={sendEmail} className="form2">
               <h3 className="contacth3"> Contact Me</h3>
              <input
                type="text"
                placeholder="Full Name"
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                required
              />
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                required
              />
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--bnt-primary" type="submit">
                Send Message
              </button>
            </form>
          </div>
      
      </section>
    </div>
  ) : (
    <div />
  );
}
export default Modal;
