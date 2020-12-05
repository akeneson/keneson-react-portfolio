import React, { useState } from "react";
import { Row, Container, Col, Jumbotron } from "react-bootstrap"; 
 
const Banner = () => {
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

export default Banner;