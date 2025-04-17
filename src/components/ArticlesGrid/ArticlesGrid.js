import PropTypes from "prop-types";
import "./ArticlesGrid.css";
import { ArticleCard } from "../";
function ArticlesGrid({ articles }) {
  return (
    <section className="articles-grid">
      {articles.map((article, index) => (
        <ArticleCard key={article.id || index} article={article} />
      ))}
    </section>
  );
}

ArticlesGrid.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesGrid;
