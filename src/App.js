import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";
import Resume from "./routes/Resume";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
        <Route path="/resume" component={Resume} />
      </Switch>
    </Router>
  );
}
