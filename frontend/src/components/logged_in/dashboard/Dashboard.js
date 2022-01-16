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
      <Card className="mt-5 p-3 Dashboard-Welcome">
        <Card.Body>
          <Card.Title>
            <h1>Welcome {username}!</h1>
          </Card.Title>
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
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

Dashboard.defaultProps = {
  title: "StudyMates",
  username: "User",
};
const statsStyle = {
  color: "black",
  backgroundColor: "245, 245, 245",
};

export default Dashboard;
