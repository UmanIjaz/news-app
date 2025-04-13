import {
  HeroArticle,
  Header,
  Sidebar,
  HighlightsCards,
  Footer,
} from "../../components";
import articles from "../../data";
import "./HomePage.css";
function HomePage() {
  const { new: newArticles } = articles;
  const { trending: trendingArticles } = articles;

  return (
    <>
      <Header />
      <main className="homepage container">
        <div className="top-section homepage__top-section">
          <HeroArticle />
          <Sidebar items={newArticles} />
        </div>
        <HighlightsCards items={trendingArticles} />
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
