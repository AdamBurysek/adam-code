import { useState } from "react";
import "./hamburgerButton.css";

const HamburgerButton = (props: any) => {
  return (
    <button
      onClick={props.handleHamburgerButtonClick}
      className={props.menuOpened ? "hamburger is-active" : "hamburger"}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default HamburgerButton;
