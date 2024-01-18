import "./hamburgerButton.css";

type Props = {
  handleHamburgerButtonClick: () => void;
  menuOpened: boolean;
};

const HamburgerButton = (props: Props) => {
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
