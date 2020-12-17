import React from "react";
import { CardGroup, Card, Container, Row, Col, Accordion, Button } from "react-bootstrap";
import "./MyInfo.css";
import "./pic.png";

const MyInfo = () => {
  return (








<Row className="d-flex justify-content-center px-5">
<Card className="col-md-4 bg-white">
    <Card.Title>My Vision</Card.Title>
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Text>
    I am looking to join a team to improve health care technology. I envision a future of efficient and effective medical applications to improve patient care. With a health care provider point of view and a graduate of a fullstack program my goal is to help close the gap between medicine and technology. Let's be the Apple of Health Care!
    </Card.Text>
  </Card.Body>
</Card>
<Card className="col-md-4 d-flex">
  {/* <Card.Img variant="top" img src="./pic.png" /> */}
  <Card.Img variant="top" src="https://picsum.photos/200/300" />
  <Card.Body>
    <Card.Title>About Me</Card.Title>
    <Card.Text>
    <p class="card-text"> Driven, motivated, and ambitious.</p>
    <p> My favorite thing to do is learn. Current topics include health care technology, emergency medicine, pain management, traveling, skiing, and tennis.</p>
    <p>Personal Goals: Make everyday better than the yesterday.</p>
    <p> Dogs name: Pikachu</p>
    </Card.Text>
  </Card.Body>
</Card>


<Card className="col-md-4">
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
     
    </Card.Text>
  </Card.Body>
</Card>
</Row>

/* <Card> */
  /* <Card.Img variant="top" src="holder.js/100px160" /> */
  /* Resume
  <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Professional
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          Personality: ISFJ-T
          <br></br>
          Professional Proficiency:  
          Leadership, effective communication, organization, and integrity.
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Tech Resume
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>SMU Full-Stack Student</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
          Health Care Resume
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          Oklahoma City University Doctoral of Nursing Practice Graduate
          <br></br>
          Nurse practitioner: Urgent care/Emergency room and Pain management (2 years experience)
          <br></br>
          University of Oklahoma Health Science Bachelors of Nursing Graduate
          Nurse: Emergency medicine (10 years experience)
          Electronic Medical Systems Front-End User: Epic, Cerner, Meditech, Centricity, AdvanceMD, T-systems, Mckesson, Quest360
          </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">"Think big, trust yourself, and make it happen." -unknown</small>
  </Card.Footer>
</Card>
</CardGroup> */
  )

}
export default MyInfo;
