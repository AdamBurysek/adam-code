import "./hamburgerButton.css";

const HamburgerButton = (props: any) => {
  return (
    <button
      onClick={props.handleHamburgerButtonClick}
      className={props.menuOpened ? "hamburger is-active" : "hamburger"}
    >
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
      <span className="hamburger-line"></span>
    </button>
  );
};

export default HamburgerButton;
