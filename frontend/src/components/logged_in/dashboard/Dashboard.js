import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";

const Dashboard = ({ username }) => {
  return (
    <div>
      <Header username={username} />
      <Card className="mt-5 p-3" style={welcomeStyle}>
        <Card.Body>
          <Card.Title>Welcome {username}!</Card.Title>
          <CardGroup>
            <Card style={statsStyle}>
              <Card.Body>
                <Card.Title>{username}'s Stats</Card.Title>
                <Card.Text>some stats here</Card.Text>
              </Card.Body>
            </Card>
            <Card style={statsStyle}>
              <Card.Body>
                <Card.Title>Upcoming Study Sessions</Card.Title>
              </Card.Body>
            </Card>
          </CardGroup>
        </Card.Body>
      </Card>
      <Footer />
    </div>
  );
};

Dashboard.defaultProps = {
  title: "StudyMates",
  username: "User",
};
const welcomeStyle = {
  color: "white",
  backgroundColor: "0, 36, 61",
};
const statsStyle = {
  color: "black",
  backgroundColor: "245, 245, 245",
};

export default Dashboard;
