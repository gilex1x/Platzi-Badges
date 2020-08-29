import React from "react";
import BadgesNew from "../pages/BadgesNew";
import Badge from "./Badge";
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/badges" component={Badge} />
        <Route exact path="/badges/new" component={BadgesNew} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
