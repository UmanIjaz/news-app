import { useParams } from "react-router-dom";
import { fullArticles } from "../../data";
import { Sidebar } from "../../components";
import { Link } from "react-router-dom";
import "./ArticlePage.css";

function ArticlePage() {
  const { id } = useParams();

  const getArticleById = (id) => {
    const allArticles = [
      ...fullArticles.trending,
      ...fullArticles.new,
      fullArticles.hero,
    ];
    return allArticles.find((article) => article.id === id);
  };

  const article = getArticleById(id);

  const { trending: trendingArticles } = fullArticles;

  if (!article) return <p>Article not found.</p>;

  return (
    <main className="article-page container">
      {/* Top: Title and Image */}
      <section className="article-page__header">
        <div className="article-page__header-info">
          <p className="article-page__category">
            <Link to={`/${article.category}`}>{article.category}</Link>
            <span> - {article.date}</span>
          </p>
          <h1 className="article-page__title">{article.title}</h1>
          <p className="article-page__description">{article.description}</p>
          <p className="article-page__author-info">
            <div>
              <span>written by </span>
              {article.author}
            </div>
            <span> 6min read</span>
          </p>
        </div>
        <img
          src={article.image}
          alt={article.title}
          className="article-page__image"
        />
      </section>

      {/* Bottom: Content and Sidebar */}
      <section className="article-page__main">
        <div className="article-page__content">
          {article.content.split("\n").map((para, index) => (
            <p key={index} className="article-page__text">
              {para}
            </p>
          ))}
        </div>

        <div className="article-page__sidebar">
          <Sidebar title="Trending" items={trendingArticles} />
        </div>
      </section>
    </main>
  );
}

export default ArticlePage;
