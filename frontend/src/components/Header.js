import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'

const Header = ({ title }) => {
    return (
        <Navbar bg="light">
            <Navbar.Brand>
            <h1>{title}</h1>
            </Navbar.Brand>
        </Navbar>
    )
}

Header.defaultProps = {
    title: 'Study Mates',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'white',
    backgroundColor: 'navy',
}
export default Header
