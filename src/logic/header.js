import logo from "../img/logo.png";
import world1 from "../img/world1.png";
import login from "../img/login.png";
import search from "../img/search.png";
import "../css/header.css";
import React, { useEffect, useState } from "react";




function Header() {
    const [visible, setVisible] = useState(false);    

     useEffect(() => {
       const timer = setTimeout(() => {
         setVisible(true);
       }, 0);
       return () => clearTimeout(timer);
     }, []);
    
    let url = "";
    
    
        return visible ? (
          <div className="header fadeIn">
            <div className="containerHeader">
              <div className="airbnbLogo">
              <a href={url}> <img alt="airbnb logo" height="50" width="100" src={logo}></img></a> 
              </div>
              <div className="headerMiddle">
                <div className="hMiddle">
                  <p className="marginRight"> Anywhere</p>
                  <p className="marginRight vLineBreak    ">Any week </p>
                  <p className="marginRight">Add guests</p>
                  <p className="svgIcon">
                    <img
                      alt="search logo"
                      height="30 "
                      width="30"
                      src={search}
                    ></img>
                  </p>
                </div>
              </div>
              <div className="headerEnd">
                <p className="marginRight2 headerEnd1"> Airbnb your home</p>
                <p className="marginRight2 headerEnd2">
                  <img
                    alt="world logo"
                    height="25"
                    width="25"
                    src={world1}
                  ></img>
                </p>
                <p className="headerEnd3">
                  <img
                    alt="login in logo"
                    height="30"
                    width="70"
                    src={login}
                    className="loginLogo"
                  ></img>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        ) : (
          <div />
        );
    }


export default Header;
