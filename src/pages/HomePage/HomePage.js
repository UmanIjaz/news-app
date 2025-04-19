// import { HeroArticle, Sidebar, HighlightsCards } from "../../components";
// import articles from "../../data";
// import "./HomePage.css";
// import fetchArticles from "../../api/news";
// import { useEffect, useState } from "react";
// // function HomePage() {
// //   const { new: newArticles } = articles;
// //   const { trending: trendingArticles } = articles;

// const [articles, setArticles] = useState([])
// const [isLoading, setIsLoading] = useState(false)

//   useEffect(() => {
//     fetchArticles({
//       targetUrl:
//         "https://news67.p.rapidapi.com/v2/country-news?fromCountry=gb&onlyInternational=true",
//         setIsLoading,
//         setArticles
//     });
//   }, []);

//   return (
//     <main className="homepage container">
//       <div className="top-section homepage__top-section">
//         <HeroArticle />
//         <Sidebar items={newArticles} />
//       </div>
//       <HighlightsCards items={trendingArticles} />
//     </main>
//   );
// }

// export default HomePage;

import { HeroArticle, Sidebar, HighlightsCards } from "../../components";
import fetchArticles from "../../api/news";
import { useEffect, useState } from "react";
import { Loader } from "../../components/";
import "./HomePage.css";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [heroArticle, setHeroArticle] = useState([]);
  const [sidebarArticles, setSidebarArticles] = useState([]);
  const [highlightArticles, setHighlightArticles] = useState([]);

  useEffect(() => {
    fetchArticles({
      targetUrl:
        "https://news67.p.rapidapi.com/v2/country-news?fromCountry=gb&onlyInternational=true",
      setIsLoading,
      setArticles,
    });
  }, []);

  useEffect(() => {
    if (articles.length >= 7) {
      setHeroArticle(articles.slice(0, 1));
      setSidebarArticles(articles.slice(1, 4));
      setHighlightArticles(articles.slice(-3));
    } else {
      // Optional: handle <7 articles case here if needed
      setHeroArticle([]);
      setSidebarArticles([]);
      setHighlightArticles([]);
    }
  }, [articles]);

  return (
    <main className="homepage container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="top-section homepage__top-section">
            <HeroArticle item={heroArticle[0]} />
            <Sidebar items={sidebarArticles} />
          </div>
          <HighlightsCards items={highlightArticles} />
        </>
      )}
    </main>
  );
}

export default HomePage;
