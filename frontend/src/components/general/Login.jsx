import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import "./Login.css";
import WelcomeNav from "../WelcomeNav";
import Footer from "../logged_in\\dashboard/Footer.js"

const Login = () => {
  return (
    <div>
      <WelcomeNav />
      <Row className="g-0">
        <Col className="login-content"></Col>
        <Col>
          <div className="container login-content">
            <form action="/auth/login" method="POST" className="login-form">
              <div className="form-group">
                <h3 className="text-center title">Login</h3>
                <label>Email address</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btn btn-primary border-0">
                Submit
              </button>
            </form>
            <p className="mt-4">
              New User? <Link to="/auth/register" className="login-links">Register</Link>
            </p>
            <p>
              Forgot Password? <Link to="/auth/forgot" className="login-links">Reset</Link>
            </p>
          </div>
        </Col>
        <Col className="login-content"></Col>
      </Row>
      <Footer />
    </div>
  );
};

export default Login;
