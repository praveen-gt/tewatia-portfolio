import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row>
          <Col mod={12} className="coming_soon">
            <h2 style={{color: "white", fontSize: "70px", padding: "2em"}}>Coming Soon</h2>
            </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
