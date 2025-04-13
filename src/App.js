import { Routes, Route } from "react-router-dom";
import { HomePage, ArticlePage } from "./pages/";
import { Layout } from "./components/";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/articles/:id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
