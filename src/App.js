import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
function App() {
  return (
    <div className="App">
      <h1>Hola, Amigo!</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
