import { useLocation } from "react-router-dom";
import mockData from "../../mockData";
import { Sidebar } from "../../components";
import { Link } from "react-router-dom";
import "./ArticlePage.css";
import PropTypes from "prop-types";
import { formatDate, trimText } from "../../utilFunc";

function ArticlePage() {
  const location = useLocation();
  const article = location.state?.article;
  const { news } = mockData;
  const trendingArticles = news.slice(0, 3);
  if (!article) {
    return <p className="container">Article not found.</p>;
  }

  return (
    <main className="article-page container">
      {/* Top: Title and Image */}
      <header className="article-page__header">
        <div className="article-page__header-info">
          <nav aria-label="breadcrumb">
            <p className="article-page__category">
              <Link to={`/${article?.Categories?.label}`}>
                {article?.Categories?.label}
              </Link>
            </p>
          </nav>
          <h1 className="article-page__title">{article?.Title}</h1>
          <p className="article-page__description">{article?.Description}</p>
          <div className="article-page__author-info">
            {article?.author && (
              <p>
                <span>Written by </span>
                <strong>{article.author}</strong>
              </p>
            )}
            <p>
              <span>6 min read</span> |{" "}
              <time dateTime={article?.PublishedOn}>
                {formatDate(article?.PublishedOn)}
              </time>
            </p>
          </div>
        </div>
        <figure className="article-page__image-wrapper">
          <img
            src={article?.ImageUrl || "/fallbackImage.jpg"}
            alt={article?.Title || "Article image"}
            className="article-page__image"
          />
          <figcaption className="visually-hidden">
            {trimText(article?.Title, 40)}
          </figcaption>
        </figure>
      </header>

      <section className="article-page__main">
        <div className="article-page__content">
          <p className="article-page__text">{article?.Summary}</p>
          <span className="article-page__sourceUrl">
            <p className="article-page__sourceUrlText">
              Source - Read full article here:
            </p>
            <a className="article-page__sourceUrlLink">{article?.Url}</a>
          </span>
        </div>

        <div className="article-page__sidebar">
          <Sidebar title="Trending" articles={trendingArticles} />
        </div>
      </section>
    </main>
  );
}

ArticlePage.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticlePage;
