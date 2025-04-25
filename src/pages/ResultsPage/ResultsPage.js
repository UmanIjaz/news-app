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
import { getCache, setCache } from "../../utilFunc";

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
      setIsLoading(false);

      //Genrate unique cacheKey for each query change
      const cacheKey = query ? `cache-search-${query}` : `cached-${type}`;

      //Get Cached Data if exists
      const cachedData = getCache(cacheKey, 10);
      if (cachedData) {
        console.log("Serving cached data: ", type);
        setArticles(cachedData.news);
        return;
      }

      let url = `/api/news?type=${type}`;

      if (type === "search" && query) {
        url += `&query=${encodeURIComponent(query)}`;
      }
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        setCache(cacheKey, data);
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
        <ErrorComponent message="No articles available." />
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
