import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import "./Header.css";
import { Navbar } from "../";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="header container">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <Navbar />
    </header>
  );
}

export default Header;
