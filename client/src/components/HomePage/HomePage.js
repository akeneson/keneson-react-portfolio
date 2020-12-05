import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./HomePage.css";

const HomePage = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <h1 class="display-4">
          Amy <span class="pink">Keneson</span>
        </h1>
        <p class="lead">
          Fullstack Developer | <span class="pink">Nurse Practitioner</span>
        </p>
      </Container>
    </Jumbotron>
  );
};

export default HomePage;
