import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Resume() {
  return (
    <Container fluid className="project-section">
      <Particle />
        <Row>
          <Col mod={12} className="coming_soon">
            <h2 style={{color: "white", fontSize: "70px", padding: "2em"}}>Coming Soon</h2>
            </Col>
        </Row>
    </Container>
  );
}

export default Resume;
