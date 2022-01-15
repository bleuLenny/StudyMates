<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css'
import '../App.css';
import { Container, Row, Col, Button, Form} from 'react-bootstrap'

function App() {
  return (
    <div className="wel-content">
        <Container className="wel-banner">
          <h1>StudyMate</h1>
          <h5>Stop struggling, start studying</h5>
        </Container>

        <Container className="sign-up">
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
=======
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="example@email.com"
                ></Form.Control>
              </Form.Group>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="8 characters long"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="secondary" type="submit">
            Sign Up
          </Button>
        </Form>
      </Container>
>>>>>>> b5ee7b77327ea5266db9498dbe4354672096fa36
    </div>
  );
}

export default App;
