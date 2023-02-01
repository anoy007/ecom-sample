import React from "react";
import ReactDOM from "react-dom";
import "./SideDrawer.css";
import { CSSTransition } from "react-transition-group";

const SideDrawer = (props) => {
  const control = (
    <CSSTransition
      in={props.show}
      timeout={200}
      classNames={"slide-in-left"}
      mountOnEnter
      unmountOnExit
    >
      <aside className="side-drawer">{props.children}</aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(control, document.getElementById("sideBar"));
};

export default SideDrawer;