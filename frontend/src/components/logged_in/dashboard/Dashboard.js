import React from "react";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.min.css'

const Dashboard = ({ username }) => {
  return (
    <div>
      <Header username={username} />
      <Card></Card>
    </div>
  );
};

export default Dashboard;
