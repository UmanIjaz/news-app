import "./ResultsPage.css";
import {
  ArticlesGrid,
  PageHeading,
  Loader,
  ErrorComponent,
} from "../../components";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function ResultsPage({ title, description = "", type = "trending" }) {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      setIsLoading(true);

      let url = `/api/news?type=${type}`;

      if (type === "search" && query) {
        url += `&query=${encodeURIComponent(query)}`;
      }
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setError(null);
        setArticles(data.news);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching articles:", err);
        setError(err.message || "An unexpected error occurred.");
      }
    };

    fetchData();
  }, [type, query]);

  return (
    <main className="category-page container">
      <PageHeading heading={title} description={description} />
      {isLoading ? (
        <Loader />
      ) : error ? (
        <ErrorComponent message={error} />
      ) : !Array.isArray(articles) || articles.length === 0 ? (
        <ErrorComponent message="No articles available for this category." />
      ) : (
        <ArticlesGrid articles={articles} />
      )}
    </main>
  );
}

ResultsPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  type: PropTypes.string,
};

export default ResultsPage;
