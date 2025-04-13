import { Routes, Route } from "react-router-dom";
import { HomePage, ArticlePage } from "./pages/";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles/:id" element={<ArticlePage />} />
      </Routes>
    </div>
  );
}

export default App;
