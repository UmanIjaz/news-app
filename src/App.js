import { Routes, Route } from "react-router-dom";
import { HomePage, ArticlePage, ResultsPage, NotFoundPage } from "./pages/";
import { Layout, ScrollToTop } from "./components/";
function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles/:Title" element={<ArticlePage />} />
          <Route
            path="/category/crypto"
            element={<ResultsPage title="Crypto" type="crypto" />}
          />
          <Route
            path="/category/news"
            element={<ResultsPage title="News Feed" type="news" />}
          />
          <Route
            path="/category/Global"
            element={<ResultsPage title="Global" type="country" />}
          />
          <Route
            path="/search"
            element={<ResultsPage title="Search Results" type="search" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
