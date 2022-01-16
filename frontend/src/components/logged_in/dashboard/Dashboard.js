import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Dashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardGroup } from "react-bootstrap";
import { useEffect } from "react";
import axios from "axios";

const Dashboard = (username) => {
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
                <Card.Text>

                  <p>Student ID: </p>
                  <p>Program: </p>
                  <p>Study Groups Owned: </p>
                  <p>Study Groups Joined: </p>
                  <p>Current Tags: </p>
                  {/* </Card.Text> */}
                </Card.Body>
              </Card>
              <Card style={statsStyle}>
                <Card.Body>
                  <Card.Title>Upcoming Study Sessions</Card.Title>
                  <Card.Text />
                  <p>Next study session: 00:00 AM/PM DD/MM/YYYY</p>
                  <p>Study sessions this week:</p>
                  <ul>
                    <li>This one</li>
                    <li>Next one</li>
                    <li>Another one</li>
                  </ul>
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
  } else {
    return <h1>You are not logged in</h1>;
  }
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
