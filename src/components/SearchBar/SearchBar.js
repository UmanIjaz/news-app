import { useState } from "react";
import "./SearchBar.css";
import { ReactComponent as SearchIcon } from "../../assets/images/icon-search.svg";
import { PropTypes } from "prop-types";
import { useNavigate } from "react-router-dom";
function SearchBar({ className = "" }) {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchInput) return;
    navigate(`/search?query=${encodeURIComponent(searchInput)}`);
    setSearchInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };
  return (
    <form className={`search-bar ${className}`}>
      <input
        name="searchInput"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search something..."
      />
      <button type="submit" className="search-bar__btn" onClick={handleSubmit}>
        <SearchIcon className="search-bar__svg" />
      </button>
    </form>
  );
}

SearchBar.propTypes = {
  className: PropTypes.string,
};

export default SearchBar;
