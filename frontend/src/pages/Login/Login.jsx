import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import "./Login.css";
import WelcomeNav from "../../components/WelcomeNav";
import axios from "axios";
const Login = () => {
  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState("");
  useEffect(() => {
    axios.get("/api/auth").then((val) => {
      setUsername(val.data[1].username);
      if (val.data[0].passport.user !== undefined) {
        setAuth(true);
      }
    });
  });

  if (!auth) {
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
                <button
                  type="submit"
                  className="btn btn-primary border-0"
                  style={{ backgroundcolor: "#00243D", color: "#FFD485" }}
                >
                  Submit
                </button>
              </form>
              <p className="mt-4">
                New User?{" "}
                <Link to="/auth/register" className="login-links">
                  Register
                </Link>
              </p>
              <p>
                Forgot Password?{" "}
                <Link to="/auth/forgot" className="login-links">
                  Reset
                </Link>
              </p>
            </div>
          </Col>
          <Col className="login-content"></Col>
        </Row>
      </div>
    );
  } else {
    return(<h1>You're already logged in as {username}</h1>);
  }
};

export default Login;
