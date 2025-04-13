import { useParams } from "react-router-dom";
import articles from "../../data"; // your dummy data

function ArticlePage() {
  const { id } = useParams();

  // For now using local data
  const article = articles.trending.find((item) => item.id === id);

  if (!article) return <p>Article not found.</p>;

  return (
    <article className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.img} alt={article.title} />
      <p>{article.description}</p>
    </article>
  );
}

export default ArticlePage;
