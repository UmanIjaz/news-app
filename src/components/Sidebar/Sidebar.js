import "./Sidebar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
function Sidebar({ title = "New", items }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">{title}</h2>
      <div className="sidebar__items">
        {items.map((item, index) => (
          <Link to={`articles/${item.id}`} key={item.id || index}>
            <div className="sidebar__item">
              <h3 className="sidebar__item-title">{item.title}</h3>
              <p className="sidebar__item-description">{item.description}</p>
              {index !== items.length - 1 && <hr />}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
