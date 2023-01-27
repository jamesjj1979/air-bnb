import "../css/footer.css";
import React, { useEffect, useState } from "react";



function Footer() {

 const [visible, setVisible] = useState(false);

 useEffect(() => {
   const timer = setTimeout(() => {
     setVisible(true);
   }, 0);
   return () => clearTimeout(timer);
 }, []);
    
   

    return visible ? (
      <div >
      
          <ul className="footerWrapper1">
            <li>
             
              <img
                alt="1st"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-53007094/original/8865c86d-6a00-45f5-aa49-4563b7b1a9bf.jpeg?im_w=720"
                className="bottomimgs"
              ></img>
            </li>
            <li>
              <img
                alt="1st"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-54386876/original/ddef738a-da4a-41ea-be99-3a20c26b4c68.jpeg?im_w=720"
                className="bottomimgs"
              ></img>
            </li>
            <li>
              <img
                alt="1st"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-46874599/original/eb6a518c-f8e5-40a6-8516-2061a760a8c1.jpeg?im_w=720"
                className="bottomimgs"
              ></img>
            </li>
            <li>
              <img
                alt="1st"
                src="https://a0.muscache.com/im/pictures/411af82b-91b0-4eaf-be8e-66f253fbebdd.jpg?im_w=720"
                className="bottomimgs"
              ></img>
            </li>
          </ul>
       
      </div>
    ) : (
      <div />
    );


}

export default Footer;