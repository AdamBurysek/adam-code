import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import PageLogo from "./pageLogo";
import NavbarLinks from "./navbarLInks";
import HamburgerButton from "./hamburgerButton";
import "./navbar.css";

type Props = {
  language: string;
  handleLanguageButtonClick: () => void;
  handleHamburgerButtonClick: () => void;
  menuOpened: boolean;
  setMenuOpened: (value: boolean) => void;
};

const Navbar = (props: Props) => {
  const lenis = useLenis(() => {});

  function handleNavLinkButtonClick(
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) {
    props.setMenuOpened(false);
    const navHeight = 70;
    const targetId = e.currentTarget.getAttribute("data-target");
    const section = document.getElementById(targetId || "");
    if (section && lenis) {
      const position = section.offsetTop - navHeight;
      lenis.scrollTo(position);
    }
  }

  return (
    <ReactLenis root>
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
    </ReactLenis>
  );
};

export default Navbar;
