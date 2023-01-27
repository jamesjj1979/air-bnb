import "../css/modal.css";
import me from "../img/me.jpeg";

function Modal() {
    let navigationButton = function () {
 document.body.classList.toggle("show-nav");

    };
    let href=""
return (
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
          <a href={href}>Portfolio</a>
        </li>
        <li>
          <a href={href}>About Me</a>
        </li>
        <li>
          <a href={href}>Contact Me</a>
        </li>
      </ul>
    </nav>
    <button id="toggle" className="toggle" onClick={navigationButton}>
      <i className="fa fa-bars fa-2x"></i>
    </button>
  </div>
);


}
export default Modal;