import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "./styles.css";
import Home from "./pages/Home";
import HomePage from "./components/HomePage/HomePage";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Navigation from "./components/Navigation/Navigation";
import MyInfo from "./components/MyInfo/MyInfo";
// import Picture from "";
// import Resume from "";

function App() {
  return (
    <div>
      <Jumbotron />
      <Navigation />
      <MyInfo />

      {/* <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/> */}
    </div>
  );
}
export default App;
