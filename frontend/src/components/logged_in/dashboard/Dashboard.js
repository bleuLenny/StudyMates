import React from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css'
import './Dashboard.css'
import { Breadcrumb, Card } from "react-bootstrap";

const Dashboard = ({ username }) => {
  return (
    <div>
      <Header username={username} />
      <Card className="Dashboard-Welcome">
        <Card.Body>
          <Card.Title>
            Welcome {username}!
          </Card.Title>
          <Card>
            <Card.Body>
            <Card.Title>
              {username}'s Stats
            </Card.Title>
            <Card.Text>
              some stats here
            </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                Upcoming Study Sessions
              </Card.Title>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
