import React from "react";

import { NavLink } from "react-router-dom";
import "./NavLinks.css";




const NavLinks = (props) => {
  return (
   
      <ul className="nav-links">
        <li>
          <NavLink to={"/"} exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to={"/products"}>PRODUCTS</NavLink>
        </li>
        <li>
          <NavLink to={"/myCart"}>CART{props.amount}</NavLink>
        </li>
        
      </ul>
    
  );
};

export default NavLinks;
