import PageLogo from "./pageLogo";
import NavbarLinks from "./navbarLInks";
import HamburgerButton from "./hamburgerButton";
import "./navbar.css";

const Navbar = (props: any) => {
  function handleNavLinkButtonClick(e: any) {
    props.setMenuOpened(false);
    const navHeight = 70;
    const targetId = e.currentTarget.getAttribute("data-target");
    const section = document.getElementById(targetId);
    if (section) {
      let position = section.offsetTop - navHeight;
      window.scrollTo({
        left: 0,
        top: position,
      });
    }
  }

  return (
    <nav className={props.menuOpened ? "navbar navbar_menu-open" : "navbar"}>
      <div className="container">
        <HamburgerButton
          handleHamburgerButtonClick={props.handleHamburgerButtonClick}
          menuOpened={props.menuOpened}
        />
        <PageLogo handleNavLinkButtonClick={handleNavLinkButtonClick} />
        <NavbarLinks
          language={props.language}
          handleLanguageButtonClick={props.handleLanguageButtonClick}
          menuOpened={props.menuOpened}
          setMenuOpened={props.setMenuOpened}
          handleNavLinkButtonClick={handleNavLinkButtonClick}
        />
      </div>
    </nav>
  );
};

export default Navbar;
