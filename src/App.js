import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import Shortener from "./routes/Shortener";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/:id" component={Shortener} />
      </Switch>
    </Router>
  );
};

export default App;
