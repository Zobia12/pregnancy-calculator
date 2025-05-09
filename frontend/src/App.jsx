import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CalculatorCard from "./components/CalculatorCard";
import EmbedCalculator from "./components/EmbedCalculator";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="min-h-screen flex items-center justify-center p-4 bg-green-50">
              <CalculatorCard />
            </div>
          }
        />
        <Route
          path="/embed"
          element={
              <EmbedCalculator />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
