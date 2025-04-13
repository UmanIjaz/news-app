import { HeroArticle, Header, Sidebar, NewsList } from "../../components";
import articles from "../../data";
function HomePage() {
  const { new: newArticles } = articles;
  return (
    <>
      <Header />
      <main className="homepage container">
        <div className="top-section">
          <HeroArticle />
          <Sidebar items={newArticles} />
        </div>
        <NewsList />
      </main>
    </>
  );
}

export default HomePage;
