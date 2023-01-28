
import "../css/modal.css";
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
              <h3>Welcome</h3>
            </div>
            <div className="modal-content">
              <p>is this working?</p>
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
