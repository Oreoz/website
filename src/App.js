import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Index from "./routes/Index";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} exact />
      </Switch>
    </Router>
  );
}
