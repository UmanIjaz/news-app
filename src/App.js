import { Routes, Route } from "react-router-dom";
import { HomePage, ArticlePage, ResultsPage, NotFoundPage } from "./pages/";
import { Layout } from "./components/";
import { useState } from "react";
function App() {
  const [articles, setArticles] = useState([]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/articles/:Title"
            element={<ArticlePage articles={articles} />}
          />
          <Route
            path="/category/crypto"
            element={<ResultsPage title="Crypto" type="crypto" />}
          />
          <Route
            path="/category/news"
            element={<ResultsPage title="News Feed" type="news" />}
          />
          <Route
            path="/category/Pakistan"
            element={<ResultsPage title="News from Pakistan" type="country" />}
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
