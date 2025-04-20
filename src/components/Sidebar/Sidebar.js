import "./Sidebar.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// import articles from "../../data";
function Sidebar({ title = "New", articles }) {
  return (
    <aside className="sidebar">
      <h2 className="sidebar__heading">{title}</h2>
      <div className="sidebar__items">
        {articles.map((article, index) => (
          <Link
            to={`/articles/${article?.Title}`}
            state={{ article }}
            key={article.Title || index}
          >
            <div className="sidebar__item">
              <h3 className="sidebar__item-title">{article?.Title}</h3>
              <p className="sidebar__item-description">
                {article?.Description}
              </p>
              {index !== articles.length - 1 && <hr />}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

Sidebar.propTypes = {
  title: PropTypes.string,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Sidebar;
