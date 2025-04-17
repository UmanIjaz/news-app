import { Routes, Route } from "react-router-dom";
import { HomePage, ArticlePage, CategoryPage, NotFoundPage } from "./pages/";
import { Layout } from "./components/";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
          <Route path="/category/new" element={<CategoryPage title="New" />} />
          <Route
            path="/category/trending"
            element={<CategoryPage title="Trending" />}
          />
          <Route
            path="/category/popular"
            element={<CategoryPage title="Popular" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
