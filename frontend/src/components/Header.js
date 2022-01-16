import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const Header = ({ title, user }) => {
  const logOutButton = () => {
    axios.get("/auth/logout");
  };
  return (
    <Navbar expand="lg" variant="light" bg="info" sticky="top">
      <Navbar.Brand href="#">
        <h1>{title}</h1>
        <Nav>
          <NavDropdown title="Study Groups">
            <NavDropdown.Item>
              <Link to="/create">Create a group</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/mygroups">View your Groups</Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link to="/search">Search for a group</Link>
            </NavDropdown.Item>
          </NavDropdown>

          <Nav.Link onClick={logOutButton}>
            <Link to="/">Logout</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Brand>
    </Navbar>
  );
};

Header.defaultProps = {
  title: "StudyMates",
  user: "User",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
};

// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'navy',
// }
export default Header;
