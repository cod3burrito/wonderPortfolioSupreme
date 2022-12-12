import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Portfolio from "./components/codeburrito.js";
import BirdCalls from "./components/birdcalls.js";
import About from "./components/codeburrito.js";

export default function Portfolio() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route exact path="/birdcalls" component={BirdCalls} />
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}