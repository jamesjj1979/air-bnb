import logo from "../img/logo.png";
import "../css/header.css";

function Header() {
  return (
    <div className="App">
      <div className="containerHeader">
        <div className="airbnbLogo">
          <img alt="airbnb logo" height="50" width="100" src={logo}></img>
        </div>
        <div className="headerMiddle">
          <p>Anywhere</p>
          <p>Any week</p>
          <p>Add guests</p>
          <p></p>
        </div>
        <div className="headerEnd">d</div>
      </div>
    </div>
  );
}

export default Header;
