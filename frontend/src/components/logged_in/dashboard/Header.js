import axios from "axios";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Header = ({ title, username }) => {
  const logOutButton = () => {
    axios.get("/auth/logout");
    <Navigate to="/" />;
  };
  return (
    <Navbar expand="lg" variant="light" bg="info" sticky="top">
      <Container>
        <Navbar.Brand href="#">
          <h1> {title}</h1>
        </Navbar.Brand>
        <Nav>
          <NavDropdown title="Study Groups">
            <NavDropdown.Item href="search">Search Groups</NavDropdown.Item>
            <NavDropdown.Item href="mygroups">
              View {username} Groups
            </NavDropdown.Item>
            <NavDropdown.Item href="create">Create Group</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link onClick={logOutButton}>Logout</Nav.Link>
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

// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'navy',
// }
export default Header;
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Link } from "react-router-dom";

// const Header = () => {
//   return (
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <Link className="navbar-brand" to="/">
//           StudyMate
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <Link className="nav-item nav-link" to="/">
//               Home
//             </Link>
//             <Link className="nav-item nav-link" to="/about">
//               About Us
//             </Link>
//             <Link className="nav-item nav-link" to="/login">
//               Login
//             </Link>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Header;
