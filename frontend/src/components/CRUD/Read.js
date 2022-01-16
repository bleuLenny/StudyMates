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

const Read = () => {
  return (
    <div>
      <Header />
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>View GroupName Group</Card.Title>
          <h1>GroupName</h1>
          <h3>Course: Insert Course Here</h3>
          <h3>Day: Mondays</h3>
          <h3>Time: 4:00 PM</h3>
          <h3>Course Info:</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sagittis pellentesque odio. Fusce mattis sapien nec neque facilisis sagittis. Duis ultrices neque eu augue facilisis, nec elementum nibh placerat. Fusce et vulputate urna, non dignissim turpis. Cras eget nunc eros. In placerat neque quis rhoncus lobortis. Integer bibendum neque mi, pellentesque venenatis dui fermentum vitae. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In vehicula gravida nunc eget volutpat. </p>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

export default Read;
