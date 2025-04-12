import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as HamburgerIcon } from "../../assets/images/icon-menu.svg";
import { ReactComponent as HamburgerIconClose } from "../../assets/images/icon-menu-close.svg";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/new", label: "New" },
    { to: "/popular", label: "Popular" },
    { to: "/trending", label: "Trending" },
    { to: "/category", label: "Category" },
  ];

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <nav className="navbar">
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      <button className="navbar__toggle" onClick={toggleMenu}>
        <HamburgerIcon />
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
          <HamburgerIconClose />
        </button>
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "navbar__link navbar__link--active" : "navbar__link"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
