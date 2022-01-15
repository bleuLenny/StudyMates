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
    </div>
  );
}

export default App;
