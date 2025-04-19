import "./ResultsPage.css";
import { ArticlesGrid, PageHeading, Loader } from "../../components";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchArticles from "../../api/news";

// function ResultsPage({ title, description = "" }) {
//   const location = useLocation();
//   const [articles, setArticles] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const searchParams = new URLSearchParams(location.search);
//   const query = searchParams.get("query");
//   useEffect(() => {
//     if (!query) return;
//     fetchArticles({
//       targetUrl: `https://news67.p.rapidapi.com/v2/topic-search?search=${query}&languages=en`,
//       setIsLoading,
//       setArticles,
//     });
//   }, [query]);

//   return (
//     <main className="category-page container">
//       <PageHeading heading={title} description={description} />
//       {isLoading ? <Loader /> : <ArticlesGrid articles={articles} />}
//     </main>
//   );
// }

// ResultsPage.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string,
// };

// export default ResultsPage;
function ResultsPage({ title, description = "", type = "trending" }) {
  const location = useLocation();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("query");

  useEffect(() => {
    let endpoint = "";

    switch (type) {
      case "search":
        if (!query) return; // Don't run without a query
        endpoint = `https://news67.p.rapidapi.com/v2/topic-search?search=${query}&languages=en`;
        break;

      case "news":
        endpoint = `https://news67.p.rapidapi.com/v2/feed`;
        break;

      case "country":
        endpoint = `https://news67.p.rapidapi.com/v2/country-news?fromCountry=gb&onlyInternational=true`;
        break;

      case "crypto":
        endpoint = `https://news67.p.rapidapi.com/v2/crypto`;
        break;

      // add more types as needed
      default:
        console.warn("Unknown type passed to ResultsPage");
        return;
    }

    fetchArticles({
      targetUrl: endpoint,
      setIsLoading,
      setArticles,
    });
  }, [type, query]);

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
  type: PropTypes.string,
};

export default ResultsPage;
