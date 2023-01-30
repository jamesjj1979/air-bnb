
import "../css/splashModal.css";
import React, { useEffect, useState } from "react";
function SplashModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 18000);
    return () => clearTimeout(timer);
  }, []);

    useEffect(() => {
     const modal = document.getElementById("splashmodal");
   setTimeout(() => {
     modal.classList.add("show-modal");
   }, 1000);
   return () => {};
 });
 
    
  let modalClose = function (e) {
    const modal = document.getElementById("splashmodal");
    modal.classList.remove("show-modal");
    e.preventDefault();
  };
  

  return visible ? (
    <div className="modalWrapper">
      <div className="modalWrapper">
        <div className="modal-container" id="splashmodal">
          <div className="modal">
            <button class="close-btn" id="close" onClick={modalClose}>
              <i class="fa fa-times"></i>
            </button>
            <div className="modal-header">
              <h3>Welcome!!</h3>
            </div>
            <div className="modal-content">
                          <p>Thankk you for taking the time to review this project. I wanted to take the time to point out that none of the buttons in the header actually work besides the hamburger button and all the links on the pop open navigation menu. But feel free to take a look at my github(portfolio link), check out my about section and if you want to leave any feedback the contact me link is linked to my email box.</p>
                          
                          <p>Once again thank you for your time.</p>
                          <p>Jim Jorgensen</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}
export default SplashModal;
