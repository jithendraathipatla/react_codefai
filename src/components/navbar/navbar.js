import React from "react";
import Tooglebutton from "../navbar/drawer/button";
import "./navbar.css";

const Navbar = (props) => {
  return (
    <div>
      <header className="navbar">
         <nav className="navbar__navigation">
         <div><Tooglebutton {...props}/></div>
            <div className="navbar__logo"><a href="/" >The logo</a></div>
            <div className="navbar__spacing">
            <div className="navbar__navigation--items">
               <ul>
               <li><a hrer="/">Products</a></li>
               <li><a hrer="/">Products</a></li>
               </ul>
            </div>
            </div>
         </nav>
      </header>
    </div>
  );
};

export default Navbar;
