import React from "react";
import { Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/WelcomePage";

export const Routing = () => {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/about" element={<Welcome />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Routing;
