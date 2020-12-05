import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Index from "./routes/Index";
import Resume from "./routes/Resume";
import Wow from "./routes/Wow";

export default function App() {
  return (
    <div className="flex flex-col items-center max-w-screen-md mx-auto p-6">
      <Router>
        <Switch>
          <Route path="/" component={Index} exact />
          <Route path="/resume" component={Resume} />
          <Route path="/wow" component={Wow} />
        </Switch>
      </Router>
    </div>
  );
}
