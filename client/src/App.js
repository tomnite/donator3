import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Donations from "./pages/Donations";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Donations} />
        <Route exact path="/donations" component={Donations} />
        <Route exact path="/donations/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
