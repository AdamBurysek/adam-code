import PageLogo from "./pageLogo";
import NavbarLinks from "./navbarLInks";
import HamburgerButton from "../components/hamburgerButton";
import { useState } from "react";

const Navbar = (props: any) => {
  const [menuOpened, setMenuOpened] = useState<boolean>(false);

  const handleHamburgerButtonClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <HamburgerButton
          handleHamburgerButtonClick={handleHamburgerButtonClick}
          menuOpened={menuOpened}
        />
        <PageLogo />
        <NavbarLinks
          language={props.language}
          handleLanguageButtonClick={props.handleLanguageButtonClick}
          menuOpened={menuOpened}
        />
      </div>
    </nav>
  );
};

export default Navbar;
