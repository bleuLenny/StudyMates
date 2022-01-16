import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/general/Login";
import RegisterForm from "./components/general/RegisterForm";
import AboutusPage from "./pages/AboutusPage";
import WelcomePage from "./pages/WelcomePage";
import PersonalGroups from "./components/logged_in/dashboard/PersonalGroups"
import Dashboard from "./components/logged_in/dashboard/Dashboard";
import Search from "./components/logged_in/dashboard/Search"

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
            <Route path='/mygroups' element={<PersonalGroups/>}/>
            <Route path='/search' element={<Search/>}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Routing;
