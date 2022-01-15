import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "./pages/WelcomePage";
function App() {
  return (
    <div className="App">
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

export default App;
