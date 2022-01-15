import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Row, Col, Button, Form, Navbar, Nav } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Container>
        <Navbar expand="lg" variant="light" bg="light" fixed="top">
          <Container>
            <Navbar.Brand href="#">Navbar</Navbar.Brand>
          </Container>
        </Navbar>
      </Container>

        <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="example@email.com"></Form.Control>
              </Form.Group>    
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="8 characters long"></Form.Control>
              </Form.Group>    
            </Col>
          </Row>
          <Button variant="secondary" type="submit">Sign Up</Button>    
        </Form>
        </Container>
      </header>
    </div>
  );
}

export default App;
