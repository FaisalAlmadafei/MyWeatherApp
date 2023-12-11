import "./styles.css";
import WeatherApp from "./Components/WeatherApp";
import SearchWeatherApp from "./Components/SearchWeatherApp";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<WeatherApp />} />

          <Route path="/search" element={<SearchWeatherApp />} />
        </Routes>
      </Router>
    </div>
  );
}
