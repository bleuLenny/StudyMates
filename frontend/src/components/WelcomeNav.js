import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container class="justify-content-around">
          <Navbar expand="lg" variant="light" bg="light" fixed="top">
            <Container>
              <Navbar.Brand href="#">StudyMate</Navbar.Brand>
              <Nav.Link href="#about">About Us</Nav.Link>
              <Nav.Link href="#support">Support Us</Nav.Link>
              <Button>Log In</Button>
            </Container>
          </Navbar>
        </Container>
      </header>
    </div>
  );
}

export default App;
