import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap"; 
 
const Home = () => {

  return (
    
    <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
  );
};

export default Home;