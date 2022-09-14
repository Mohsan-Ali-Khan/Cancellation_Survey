import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./layout/HomeScreen";
import CancellationSurvey from "./containers/cancellationSurvey/CancellationSurvey";

function App() {
  return (
    <div className="App">
      <React.Suspense fallback={<div>Loading</div>}>
        <Router>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route
              exact
              path="/cancellation-survey"
              element={<CancellationSurvey />}
            />
          </Routes>
        </Router>
      </React.Suspense>
    </div>
  );
}

export default App;
