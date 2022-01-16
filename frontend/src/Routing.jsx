import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/general/Login";
import RegisterForm from "./components/general/RegisterForm";
import AboutusPage from "./pages/AboutusPage";
import WelcomePage from "./pages/WelcomePage";

import Dashboard from "./components/logged_in/dashboard/Dashboard";
const Routing = () => {
  return (
    <div className="routing">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />

            <Route path="/about" element={<AboutusPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Routing;
