import { Link } from "react-router-dom";
import WelcomeNav from "../WelcomeNav";
const Test = () => {
  return (
    <div>
      <WelcomeNav />

      <div className="container">
        <form action="/auth/login" method="POST">
          <div className="form-group">
            <h3 className="text-center">Login</h3>
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              // id="exampleInputEmail1"
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <p className="mt-4">
          New User? <Link to="/auth/register">Register</Link>
        </p>
        <p>
          Forgot Password? <Link to="/auth/forgot">Reset</Link>
        </p>
      </div>
    </div>
  );
};

export default Test;
