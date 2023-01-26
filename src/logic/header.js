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
          <p className="marginRight">Anywhere</p>
          <p className="marginRight">Any week</p>
          <p className="marginRight">Add guests</p>
          <p className="svgIcon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="white"
              height="32"
              width="32"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 "
              />
            </svg>
          </p>
        </div>
        <div className="headerEnd">d</div>
      </div>
    </div>
  );
}

export default Header;
