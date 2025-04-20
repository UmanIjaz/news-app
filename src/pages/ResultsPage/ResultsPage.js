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
import fetchArticles from "../../api/news";

function ResultsPage({ title, description = "", type = "trending" }) {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    const fetchData = async () => {
      setError(null); // Clear error before starting a new fetch
      setIsLoading(true);
      try {
        let endpoint = "";

        switch (type) {
          case "search":
            if (!query) return; // Don't run without a query
            endpoint = `https://news67.p.rapidapi.com/v2/topic-search?search=${query}&languages=en`;
            break;

          case "news":
            endpoint = `https://news67.p.rapidapi.com/v2/feed?languages=en`;
            break;

          case "country":
            endpoint = `https://news67.p.rapidapi.com/v2/country-news?fromCountry=pk&languages=en`;
            break;

          case "crypto":
            endpoint = `https://news67.p.rapidapi.com/v2/crypto?languages=en`;
            break;

          default:
            console.warn("Unknown type passed to ResultsPage");
            return;
        }

        await fetchArticles({
          targetUrl: endpoint,
          setIsLoading,
          setArticles,
        });
        setError(null); // Clear error after successful fetch
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
      ) : articles.length === 0 ? (
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
