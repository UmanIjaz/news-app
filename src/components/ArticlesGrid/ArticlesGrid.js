import PropTypes from "prop-types";
import "./ArticlesGrid.css";
import { ArticleCard } from "../";
function ArticlesGrid({ articles }) {
  return (
    <section className="articles-grid">
      {articles && articles.length > 0 ? (
        articles.map((article, index) => (
          <ArticleCard key={article.id || index} article={article} />
        ))
      ) : (
        <p>Nothing to show</p>
      )}
    </section>
  );
}

ArticlesGrid.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlesGrid;
