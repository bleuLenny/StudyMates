import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/general/Login";
import RegisterForm from "./components/general/RegisterForm";
import WelcomePage from "./pages/WelcomePage";
import DashboardPage from "./pages/DashboardPage";
function Routing() {
  return (
    <div className="routing">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Routing;
