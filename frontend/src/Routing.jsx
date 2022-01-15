import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/WelcomePage";
function Routing() {
  return (
    <div className="routing">
      <Router>
        <div className="container">
          <Routes>
            <Route path='/' element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default Routing;
