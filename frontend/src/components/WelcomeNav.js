import "bootstrap/dist/css/bootstrap.min.css";
import "./WelcomePage.css";
import { Link } from "react-router-dom";

const WelcomeNav = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg color-nav">
        <Link className="navbar-brand" to="/">
          StudyMate
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              Home
            </Link>
            <Link className="nav-item nav-link" to="/about">
              About Us
            </Link>
            <Link className="nav-item nav-link" to="/login">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WelcomeNav;
