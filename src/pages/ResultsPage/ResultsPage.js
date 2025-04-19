import "./ResultsPage.css";
import { ArticlesGrid, PageHeading } from "../../components";
import fetchArticles from "../../api/news";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader } from "../../components/";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResultsPage({ title, description = "" }) {
  const query = useQuery().get("query");
  const [articles, setArticles] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function loadArticles() {
      setIsLoading(true);
      const news = await fetchArticles({ query: query });
      setArticles(news);
      setIsLoading(false);
    }
    loadArticles();
  }, [query]);

  return (
    <main className="category-page container">
      <PageHeading heading={title} description={description} />
      {isLoading ? <Loader /> : <ArticlesGrid articles={articles} />}
    </main>
  );
}

ResultsPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResultsPage;
