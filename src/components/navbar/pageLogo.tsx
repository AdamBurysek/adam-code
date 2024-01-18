import { APLogo } from "../../assets/icons";

type Props = {
  handleNavLinkButtonClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

const PageLogo = (props: Props) => {
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
