import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Welcomepage/WelcomePage.css";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
const WelcomeContent = () => {
  return (
    <Container className="wel-content fluid sm">
      <Row>
        <Col>
          <Container className="wel-banner fluid">
            <h1>StudyMate</h1>
            <br></br>
            <h5>
              Stop struggling <br></br> Start studying
            </h5>
          </Container>
        </Col>

        <Col>
          <Container className="sign-up-form fluid">
            <h4>Get started</h4>
            <Form action='/auth/register' method='POST'>
              <Row>
                <Col>
                  <Form.Group controlId="formFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      name='first_name'
                      type="input"
                      placeholder="First Name"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="input"
                      placeholder="Last name"
                      name="last_name"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      name='email'
                      placeholder="example@email.com"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name='password'
                      placeholder="8 characters long"
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="major">
                    <Form.Label>Major</Form.Label>
                    <Form.Control
                      type="major"
                      name='major'
                      placeholder="Type in your major"
                    ></Form.Control>
                  </Form.Group>
                </Col>
              </Row>
              <br></br>
              <Button
                className="sign-up-button"
                variant="primary"
                type='submit'
              >Sign up
              </Button>
            </Form>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default WelcomeContent;
