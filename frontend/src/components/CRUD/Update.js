import React from "react";
import {
  Button,
  Col,
  Card,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../pages/dashboard/Header";
import Footer from "../../pages/dashboard/Footer";

const Update = () => {
  return (
    <div>
      <Header />
      <Card className="creategrid">
        <Card.Body>
          <Card.Title>Edit your Study Group</Card.Title>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Group Name: </InputGroup.Text>
            <FormControl
              placeholder="Study Group"
              aria-label="groupname"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">Course: </InputGroup.Text>
            <FormControl
              placeholder="Course name goes here"
              aria-label="coursename"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
          <Form.Group as={Col} controlId="formGridState" className="mb-3">
            <Form.Label>Day</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Monday</option>
              <option>Tuesday</option>
              <option>Wednesday</option>
              <option>Thursday</option>
              <option>Friday</option>
              <option>Saturday</option>
              <option>Sunday</option>
            </Form.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridState" className="mb-3">
            <Form.Label>Time</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>4:00 PM</option>
              <option>4:30 PM</option>
              <option>5:00 PM</option>
              <option>5:30 PM</option>
              <option>6:00 PM</option>
              <option>6:30 PM</option>
              <option>7:00 PM</option>
              <option>7:30 PM</option>
              <option>8:00 PM</option>
              <option>8:30 PM</option>
              <option>9:00 PM</option>
              <option>9:30 PM</option>
              <option>10:00 PM</option>
              <option>10:30 PM</option>
              <option>11:00 PM</option>
              <option>11:30 PM</option>
              <option>12:00 AM</option>
            </Form.Select>
          </Form.Group>
          <InputGroup className="mb-3">
            <InputGroup.Text>Group Information</InputGroup.Text>
            <FormControl placeholder="Here is a little information about our group..." as="textarea" aria-label="With textarea" />
          </InputGroup>
          <Button variant="success">Submit Update</Button>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

export default Update;
