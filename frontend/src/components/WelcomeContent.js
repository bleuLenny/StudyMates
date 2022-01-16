import "bootstrap/dist/css/bootstrap.min.css";
import "./WelcomePage.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const WelcomeContent = () => {
  return (
    <div className="wel-content sm">
      <Row>
        <Col>
          <Container className="wel-banner">
            <h1>StudyMate</h1>
            <br></br>
            <h5>Stop struggling <br></br> Start studying</h5>
          </Container>
        </Col>

        <Col>
          <Container className="sign-up-form" >
            <h4>Get started</h4>
            <Form>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="First Name"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Last name"
                    ></Form.Control>
                  </Form.Group>
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
              <br></br>
              <Button className="sign-up-button"variant="primary" type="submit">
                Sign Up
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default WelcomeContent;
