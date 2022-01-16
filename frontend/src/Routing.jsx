import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import RegisterForm from "./components/general/RegisterForm";
import AboutusPage from "./pages/Aboutus/AboutusPage";
import WelcomePage from "./pages/Welcomepage/WelcomePage";
import StudySessions from "./pages/StudySessions/StudySessionsPage";
import PersonalGroups from "./pages/dashboard/PersonalGroups";
import Dashboard from "./pages/dashboard/Dashboard";
import Search from "./pages/dashboard/Search";
import Carousel from "./components/Carousel/Carousel";
import CreatePage from "./pages/CRUD/CreatePage";

const Routing = () => {
  return (
    <div className="routing">
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/studygroups" element={<StudySessions />} />
            <Route path="/about" element={<AboutusPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/mygroups" element={<PersonalGroups />} />
            <Route path="/search" element={<Search />} />
            <Route path="/carousel" element={<Carousel />} />
            <Route path="/create" element={<CreatePage/>}/>

          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Routing;
