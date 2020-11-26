import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div>
        <Home />
      </div>
    </Router>
  );
}
export default App;
