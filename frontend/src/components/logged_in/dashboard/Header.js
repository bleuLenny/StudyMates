import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = ({ title, username }) => {
    return (
        <Navbar expand="lg" variant="light" bg="info" sticky="top">
            <Navbar.Brand href="#">
            <h1>{title}</h1>
            <Nav>
                <NavDropdown title="Study Groups">
                    <NavDropdown.Item href='search'>Search Groups</NavDropdown.Item>
                    <NavDropdown.Item href='mygroups'>View {username} Groups</NavDropdown.Item>
                    <NavDropdown.Item href='create'>Create Group</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href='logout'>Logout</Nav.Link>
            </Nav>
            </Navbar.Brand>
        </Navbar>
    )
}

Header.defaultProps = {
    title: 'StudyMates',
    username: 'User'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    user: PropTypes.string
}

// const headingStyle = {
//     color: 'white',
//     backgroundColor: 'navy',
// }
export default Header
