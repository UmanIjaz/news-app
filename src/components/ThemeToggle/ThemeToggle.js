import { useState, useEffect } from "react";
import { ReactComponent as Sun } from "../../assets/images/sun-icon.svg";
import { ReactComponent as Moon } from "../../assets/images/moon-icon.svg";
import "./ThemeToggle.css";
function ThemeToggle({ styleClass }) {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const toggleTheme = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <button
      className={`theme-toggle ${styleClass} ${darkMode ? "dark" : "light"}`}
      onClick={toggleTheme}
      title={darkMode ? "lilghtmode" : "darkmode"}
    >
      {!darkMode ? (
        <Moon className="theme-toggle__icon" />
      ) : (
        <Sun className="theme-toggle__icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
