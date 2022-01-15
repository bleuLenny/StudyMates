import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Welcome } from "./pages/WelcomePage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Welcome} />

        <Route exact path="/welcome" component={Welcome} />

      </Switch>
    </BrowserRouter>
  );
};
