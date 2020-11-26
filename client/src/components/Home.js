import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap"; 
 
const Home = () => {

  return (
    <Container>
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