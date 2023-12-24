import { APLogo } from "../../assets/icons";

const PageLogo = (props: any) => {
  return (
    <a
      onClick={props.handleNavLinkButtonClick}
      data-target="home"
      className="navbar_logo"
    >
      <APLogo />
      <p>Adam Code</p>
    </a>
  );
};

export default PageLogo;
