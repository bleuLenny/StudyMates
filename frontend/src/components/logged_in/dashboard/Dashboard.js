import React from "react";
import Header from "./Header";

const Dashboard = ({ username }) => {
  return (
    <div>
      <Header username={username} />
    </div>
  );
};

export default Dashboard;
