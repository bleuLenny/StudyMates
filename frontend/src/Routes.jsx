import React from "react";
import { Router, Route } from "react-router-dom";
import  Welcome  from "./pages/WelcomePage";

export const Routes = () => {
  return (
    <Router>
      <Route>
        <Route exact path="/" component={Welcome} />

        {/* <Route exact path="/welcome" component={Welcome} /> */}
      </Route>
    </Router>
  );
};
