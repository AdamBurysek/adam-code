import { useState } from "react";
import "./hamburgerButton.css";

const HamburgerButton = () => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  function handleHamburgerIconClick() {
    setMenuOpened(!menuOpened);
  }
  return (
    <button
      onClick={handleHamburgerIconClick}
      className={menuOpened ? "hamburger is-active" : "hamburger"}
    >
      <span className="line"></span>
      <span className="line"></span>
      <span className="line"></span>
    </button>
  );
};

export default HamburgerButton;
