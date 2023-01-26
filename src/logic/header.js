import logo from "../img/logo.png";
import world from "../img/world.png";
import login from "../img/login.png";
import search from "../img/search.png";
import "../css/header.css";

function Header() {
   
    
    
    
  return (
    <div className="header">
      <div className="containerHeader">
        <div className="airbnbLogo">
          <img alt="airbnb logo" height="50" width="100" src={logo}></img>
        </div>
              <div className="headerMiddle">
                  <div className="hMiddle">
          <p className="marginRight"> Anywhere</p>
          <p className="marginRight vLineBreak    ">Any week            </p>
                  <p className="marginRight">Add guests</p>
          <p className="svgIcon">
            <img alt="search logo" height="30 " width="30" src={search}></img>
                  </p>
                 </div>
        </div>
        <div className="headerEnd">
          <p className="marginRight2">Airbnb your home</p>
          <p className="marginRight2">
            <img alt="world logo" height="25" width="25" src={world}></img>
          </p>
          <p>
            <img alt="login in logo" height="30" width="70" src={login}></img>
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
