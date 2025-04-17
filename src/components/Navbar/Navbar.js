import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ThemeToggle } from "../";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-menu.svg";
import { ReactComponent as HamburgerIconClose } from "../../assets/images/icon-menu-close.svg";
import { SearchBar } from "../";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/category/new", label: "New" },
    { to: "/category/popular", label: "Popular" },
    { to: "/category/trending", label: "Trending" },
  ];

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav className="navbar">
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <SearchBar className="search-bar__tablet" />
      <button className="navbar__toggle" onClick={toggleMenu}>
        <HamburgerIcon className="navbar__toggle-icon" />
      </button>
      <ul
        className={
          !isMenuOpen ? "navbar__links" : "navbar__links navbar__links--open"
        }
      >
        <button
          className="navbar__toggle navbar__toggle-close"
          onClick={toggleMenu}
        >
          <HamburgerIconClose className="navbar__toggle-icon" />
        </button>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
              onClick={() => setIsMenuOpen((prev) => (prev ? false : ""))}
            >
              {label}
            </NavLink>
          </li>
        ))}

        <SearchBar className="search-bar__desktop" />
        <ThemeToggle styleClass="navbar__theme-toggle" />
      </ul>
    </nav>
  );
}

export default Navbar;
