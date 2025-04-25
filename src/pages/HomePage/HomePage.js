import { HeroArticle, Sidebar, HighlightsCards } from "../../components";
// import fetchArticles from "../../api/news";
import { useEffect, useState } from "react";
import SkeletonMimic from "../../components/utils/SkeletonMimic/SkeletonMimic";
import { ErrorComponent, Notification } from "../../components/";
import "./HomePage.css";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMockData, setIsMockData] = useState(false);

  const [heroArticle, setHeroArticle] = useState([]);
  const [sidebarArticles, setSidebarArticles] = useState([]);
  const [highlightArticles, setHighlightArticles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);
      try {
        setIsLoading(true);
        const response = await fetch("/api/news?type=home");
        const data = await response.json();
        console.log(data);
        setArticles(data.news);
        setIsLoading(false);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong while loading articles.");
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (Array.isArray(articles) && articles.length >= 7) {
      setHeroArticle(articles.slice(0, 1));
      setSidebarArticles(articles.slice(1, 4));
      setHighlightArticles(articles.slice(-3));
    } else {
      setHeroArticle([]);
      setSidebarArticles([]);
      setHighlightArticles([]);
    }
  }, [articles]);

  const renderContent = () => {
    if (isLoading) return <SkeletonMimic />;

    if (error) return <ErrorComponent message={error} />;

    // if (!Array.isArray(articles) || articles.length === 0) {
    //   return <ErrorComponent message="No articles available at the moment." />;
    // }

    return (
      <>
        <div className="top-section homepage__top-section">
          <HeroArticle article={heroArticle[0]} />
          <Sidebar articles={sidebarArticles} />
        </div>
        {isMockData && (
          <div className="mock-data-warning">
            <p>Mock data is being displayed due to API rate limit.</p>
          </div>
        )}

        <HighlightsCards articles={highlightArticles} />
      </>
    );
  };

  return (
    <main className="homepage container">
      {isMockData && (
        <Notification
          message="Mock data is being displayed due to API rate limit."
          type="warning"
          onClose={() => setIsMockData(false)} // Clear notification after it slides out
        />
      )}
      {renderContent()}
    </main>
  );
}

export default HomePage;
