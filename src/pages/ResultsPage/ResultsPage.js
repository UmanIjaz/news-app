import "./ResultsPage.css";
// import { fullArticles } from "../../data";
import { ArticlesGrid, PageHeading } from "../../components";
import fetchArticles from "../../api/news";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ResultsPage({ title, description = "" }) {
  const query = useQuery().get("query");
  const [articles, setArticles] = useState("");

  useEffect(() => {
    async function loadArticles() {
      const news = await fetchArticles({ query: query });
      setArticles(news);
      // console.log(news);
    }
    loadArticles();
  }, [query]);

  return (
    <main className="category-page container">
      <PageHeading heading={title} description={description} />
      <ArticlesGrid articles={articles} />
    </main>
  );
}

ResultsPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default ResultsPage;
