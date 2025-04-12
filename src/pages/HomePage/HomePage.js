import { HeroArticle, Header, Sidebar, NewsList } from "../../components";
function HomePage() {
  return (
    <>
      <Header />
      <main className="homepage">
        <div className="top-section">
          <HeroArticle />
          <Sidebar />
        </div>
        <NewsList />
      </main>
    </>
  );
}

export default HomePage;
