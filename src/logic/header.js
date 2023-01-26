import logo from "../img/logo.png";
import "../css/header.css";

function Header() {
  return (
    <div className="App">
      <div className="containerHeader">
        <div className="airbnbLogo">
          <img alt="airbnb logo" height="160px" width="160px" src={logo}></img>
        </div>
        <div className="headerMiddle">d</div>
        <div className="headerEnd">d</div>
      </div>
    </div>
  );
}

export default Header;
