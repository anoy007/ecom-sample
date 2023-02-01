import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import "./MainNavigation.css";
import NavLinks from "./NavLinks";
import MainHeader from "./MainHeader";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop";

const MainNavigation = (props) => {
  const [sideBarOpen, setBarOpen] = useState(false);
  const [items, setItems] = useState([]);
  
  const ctx = useSelector((state)=>state.cart);
  const currentItem = items  ? items[0]?.items : [];
  const numberOfItems = ctx.items.length > 0 ? ctx.items.reduce((curr,value)=>{
    return curr + value.amount;
  },0) : currentItem ? currentItem.reduce((curr, value)=>{
    return curr + value.amount;
  },0) : 0;
  console.log(numberOfItems,currentItem,ctx.items,'number')
  const openBarHandler = () => {
    setBarOpen(!sideBarOpen);
  };

  const closeBarHandler = () => {
    setBarOpen(!sideBarOpen);
  };

  useEffect(()=>{
  const data = localStorage.getItem('cart')
  if(data !== null) setItems(JSON.parse(data))
  },[])

  return (
    <React.Fragment>
      {sideBarOpen && <Backdrop onClick={closeBarHandler} />}

      <SideDrawer className="" show={sideBarOpen}>
        <NavLinks />
      </SideDrawer>

      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openBarHandler}>
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">My Ecom</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks  amount = {numberOfItems}/>
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
