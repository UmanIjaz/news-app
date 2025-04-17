import PropTypes from "prop-types";
import "./ArticleCard.css";
import { Link } from "react-router-dom";
function ArticleCard({ article }) {
  // console.log("Rendering article:", article);

  if (!article) return null;

  return (
    <article className="article-card">
      <img
        className="article-card__image"
        alt={article.title}
        src={article.image || "/fallbackImage.jpg"}
      />
      <div className="article-card__content">
        <span>{article.category}</span>
        <Link to={`/articles/${article.id}`} className="article-card__link">
          <h4 className="article-card__heading">{article.title}</h4>
          <p>{article.description}</p>
        </Link>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
