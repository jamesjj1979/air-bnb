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
  let contactClose = function (e) {
    const contact = document.getElementById("contact");
    contact.classList.remove("show-contact");
    e.preventDefault();
  };

  let href = "";
  let github = "https://github.com/jamesjj1979";

  const form = useRef();
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
        () => {
          const sent = document.getElementById("sent");
          sent.innerText = "Your message was sent!!";

          setTimeout(() => {
            sent.innerText = "";
          }, "5000");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
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
            <div id="sent"></div>
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
              <p>Hello</p>
              <p>
                My name is Jim Jorgensen, and I am aiming to become a full-stack
                developer. While incarcerated at the Michigan State Prison in
                2020, I participated in the Last Mile Program. Upon re-entering
                society in 2021, I continued my learning journey and did a
                3-month internship with Ithaka Harbors, working on their visual
                essays project. In 2022, I did a six-month month internship with
                a startup called Uptrust, working on the front end of their
                website.
              </p>

              <p>
                Alot of people seem to ask ask me why coding? Well the awnser to
                that is simply that I enjoy it. I love the problem solving and the highs and lows it brings. This is the way I would like to live my life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="emailContainer">
        <div className="show-contact " id="contact">
          <form ref={form} onSubmit={sendEmail} className="form2">
            <button class="btn" onClick={contactClose}>
              <i class="fa fa-times"></i>
            </button>
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
            <input type="text" placeholder="Subject" name="subject" required />
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Write Message Here"
            ></textarea>
            <div></div>
            <button className="--bnt-primary btn" type="submit">
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
