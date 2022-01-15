import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Welcome } from "./pages/WelcomePage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route>
        <Route exact path="/" component={Welcome} />

        {/* <Route exact path="/welcome" component={Welcome} /> */}

      </Route>
    </BrowserRouter>
  );
};
