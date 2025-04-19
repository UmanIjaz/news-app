import { useParams } from "react-router-dom";
import { fullArticles } from "../../data";
import { Sidebar } from "../../components";
import { Link } from "react-router-dom";
import "./ArticlePage.css";
import PropTypes from "prop-types";

function ArticlePage({ articles }) {
  const { Title } = useParams();
  const article = articles.find((article) => article.Title === Title);

  const { trending: trendingArticles } = fullArticles;

  if (!article) return <p>Article not found.</p>;

  return (
    <main className="article-page container">
      {/* Top: Title and Image */}
      <section className="article-page__header">
        <div className="article-page__header-info">
          <p className="article-page__category">
            <Link to={`/${article.Categories.label}`}>
              {article.Categories.label}
            </Link>
            {/* <span> - {article.Categories.label}</span> */}
          </p>
          <h1 className="article-page__title">{article.Title}</h1>
          <p className="article-page__description">{article.Description}</p>
          <p className="article-page__author-info">
            <div>
              <span>written by </span>
              {/* {article.author} */}
            </div>
            <span> 6min read</span>
          </p>
        </div>
        <img
          src="/fallbackImage.jpg"
          alt={article.Title}
          className="article-page__image"
        />
      </section>

      {/* Bottom: Content and Sidebar */}
      <section className="article-page__main">
        <div className="article-page__content">
          <p className="article-page__text">{article.Summary}</p>
        </div>

        <div className="article-page__sidebar">
          <Sidebar title="Trending" items={trendingArticles} />
        </div>
      </section>
    </main>
  );
}

ArticlePage.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlePage;
