import { APLogo } from "../../assets/icons";
import { getCurrentYear } from "../../utils/getCurrentYear";
import "./footer.css";

const Footer = () => {
  const currentYear = getCurrentYear();

  return (
    <div className="footer_container">
      <div className="footer_logo-container">
        <APLogo />
        <p>Adam Code</p>
      </div>
      <div className="footer_text-container">
        <p className="footer_text">
          © {currentYear} web by Adam Code. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
