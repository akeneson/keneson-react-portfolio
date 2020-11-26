import React, { useState } from "react";
import { Row, Container, Col, Jumbotron } from "react-bootstrap"; 
 
const Home = () => {

  return (
    
    <Container>
        <Jumbotron fluid>
  <Container>
    <h1>Fluid jumbotron</h1>
    <p>
      This is a modified jumbotron that occupies the entire horizontal space of
      its parent.
    </p>
  </Container>
</Jumbotron>
        <Row>
            <Col>column 1</Col>
            <Col>column 2</Col>
        </Row>
        <Row className="row-2">
            <h4>row 2</h4><br/>
        </Row>
        <Row>
            <h4>another row</h4>
        </Row>
        <Row>
            <h4>Row 3</h4>
        </Row>
    </Container>
  );
};

export default Home;