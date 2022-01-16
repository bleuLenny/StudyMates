import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import './Dashboard.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from "react-bootstrap";
import PropTypes from 'prop-types';

const Dashboard = ({ username }) => {
  return (
    <div>
      <Header username={username} />
      <Card className='mt-5 p-3' style={welcomeStyle}>
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
      <Footer />
    </div>
  );
};

Dashboard.defaultProps = {
  title: 'StudyMates',
  username: 'User'
}
const welcomeStyle = {
      color: 'white',
      backgroundColor: 'navy',
  }
export default Dashboard;
