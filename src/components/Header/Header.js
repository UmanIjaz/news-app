import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./Header.css";
import { Navbar, ThemeToggle } from "../";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="header__right-section">
        <Navbar styleClass="navbar__theme-toggle" />
        <ThemeToggle styleClass="header__theme-toggle" />
      </div>
    </header>
  );
}

export default Header;
