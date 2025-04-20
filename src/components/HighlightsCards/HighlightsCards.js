import "./HighlightsCards.css";
import { HighlightsCard } from "..";
import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";
// import articles from "../../data";
function HighlightsCards({ articles }) {
  return (
    <section className="highlights-cards">
      {articles.map((article, index) => (
        <Link
          to={`/articles/${article.Title}`}
          state={{ article }}
          key={article.Title || index}
        >
          <HighlightsCard article={article} itemIndex={index} />
        </Link>
      ))}
    </section>
  );
}

HighlightsCards.propTypes = {
  articles: PropTypes.array,
};

export default HighlightsCards;
