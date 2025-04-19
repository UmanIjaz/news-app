import PropTypes from "prop-types";
import "./ArticleCard.css";
import { Link } from "react-router-dom";
import { trimText } from "../../utilFunc/";
function ArticleCard({ article }) {
  // console.log("Rendering article:", article);

  if (!article) return null;

  return (
    <article className="article-card">
      <img
        className="article-card__image"
        alt={article.Title}
        src={article.Image || "/fallbackImage.jpg"}
      />
      <div className="article-card__content">
        <span className="article-card__category">
          {/* {article.Categories.label} */}
        </span>
        <Link to={`/articles/${article.Title}`} className="article-card__link">
          <h4 className="article-card__heading">
            {trimText(article.Title, 50)}
          </h4>
          <p>{trimText(article.Description, 100)}</p>
        </Link>
      </div>
    </article>
  );
}

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
