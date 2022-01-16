import React from "react";
import Dashboard from "../components/logged_in/dashboard/Dashboard";
// import PropTypes from 'prop-types';


export const DashboardPage = ({ username }) => {
  return (
    <div>
      <Dashboard username={username}/>
      {/* <h1>Hello</h1> */}
    </div>
  );
};
DashboardPage.defaultProps = {
    username: 'User'
}
export default DashboardPage;
