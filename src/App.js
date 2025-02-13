import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ValentinePage from "./pages/Valentine";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>
    </Router>
  );
};

export default App;
