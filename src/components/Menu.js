import React, { useState } from "react";
import mydata from "../data";
import "./menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  
  const [navbar, setnavbar] = useState(false);
  const[menubar,setmenubar] =useState(true);

  const changeBackground = () => {
    if (window.scrollY > 50) setnavbar(true);
    else setnavbar(false);
  };
  const togglemenu =()=>{
    if(menubar)
     setmenubar(false)
    else
    setmenubar(true) 
  }

  window.addEventListener("scroll", changeBackground);
  return (
    <div className={navbar ? "navbar active" : "navbar"}>
      <div className="logo"><i class="fab fa-battle-net"></i><i class="fab fa-angrycreative"></i></div>
      <div
        className={menubar ? "menubar":"menubar togg"}
       >
        {mydata.map((res) => (
          <li onClick={togglemenu}> 
            <Link exact to={res.link}>{res.item}</Link>
          </li>
        ))}
      </div>
      <div className="hamburger">
        <i
             onClick={togglemenu}  
          className={menubar ?   "fas fa-bars":"fas fa-times"}></i>
      </div>
    </div>
  );
};
export default Menu;
