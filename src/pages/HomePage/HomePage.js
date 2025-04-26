import { HeroArticle, Sidebar, HighlightsCards } from "../../components";
import { useEffect, useState } from "react";
import SkeletonMimic from "../../components/utils/SkeletonMimic/SkeletonMimic";
import { ErrorComponent, Notification } from "../../components/";
import "./HomePage.css";
import { getCache, setCache } from "../../utilFunc";

function HomePage() {
  const [sections, setSections] = useState({
    hero: [],
    sidebar: [],
    highlights: [],
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMockData, setIsMockData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setError(null);

      const cachedData = getCache("cached-home", 5);
      if (cachedData && Array.isArray(cachedData.news)) {
        console.log("Serving cached data: home");
        const news = cachedData.news;
        setSections({
          hero: news.slice(0, 1),
          sidebar: news.slice(1, 4),
          highlights: news.slice(-3),
        });
        return;
      }

      setIsLoading(true);
      try {
        const response = await fetch("/api/news?type=home");
        const data = await response.json();
        console.log(data);
        setCache("cached-home", data);

        const news = data.news || [];
        setSections({
          hero: news.slice(0, 1),
          sidebar: news.slice(1, 4),
          highlights: news.slice(-3),
        });

        setIsMockData(data?.isRateLimit);
      } catch (err) {
        console.error("Fetch error:", err);
        setError(err.message || "Something went wrong while loading articles.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderContent = () => {
    if (isLoading) return <SkeletonMimic />;
    if (error) return <ErrorComponent message={error} />;

    return (
      <>
        <div className="top-section homepage__top-section">
          <HeroArticle article={sections.hero[0]} />
          <Sidebar articles={sections.sidebar} />
        </div>
        <HighlightsCards articles={sections.highlights} />
      </>
    );
  };

  return (
    <main className="homepage container">
      {isMockData && (
        <Notification
          message="Mock data is being displayed due to API rate limit."
          type="warning"
          onClose={() => setIsMockData(false)}
        />
      )}
      {renderContent()}
    </main>
  );
}

export default HomePage;
