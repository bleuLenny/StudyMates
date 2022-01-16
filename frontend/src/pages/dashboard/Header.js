import axios from "axios";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = ({ title, username }) => {
  const logOutButton = () => {
    axios.get("/auth/logout");
  };
  return (
    <Navbar expand="lg" variant="dark" bg="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <h1> {title}</h1>
        </Navbar.Brand>
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
      </Container>
    </Navbar>
  );
};

Header.defaultProps = {
  title: "StudyMates",
  username: "User",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.string,
};
export default Header;
