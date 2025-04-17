import { Routes, Route } from "react-router-dom";
import { HomePage, ArticlePage, ResultsPage, NotFoundPage } from "./pages/";
import { Layout } from "./components/";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/category/new" element={<ResultsPage title="New" />} />
          <Route
            path="/category/trending"
            element={<ResultsPage title="Trending" />}
          />
          <Route
            path="/category/popular"
            element={<ResultsPage title="Popular" />}
          />
          <Route
            path="/search"
            element={
              <ResultsPage
                title="Search Results"
                description={`You searched for:`}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
