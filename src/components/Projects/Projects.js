import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Keylogging"
              description="Developed a security tool to detect and prevent keylogging malware by analyzing system processes and keystroke patterns. Implemented heuristic-based detection methods to identify suspicious logging behavior.
Tech: Python, Windows API, C++"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Password Strength Checker"
              description="Developed a security tool to evaluate password strength based on length, character diversity, and entropy. Implemented a scoring system to classify passwords as Weak, Moderate, or Strong. Integrated a user-friendly GUI using tkinter for real-time feedback and enhanced usability. Utilized Python’s string manipulation and mathematical functions to analyze password complexity and entropy.
Tech: Python, String Manipulation, Entropy Calculation"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Binary Search Tree Implementation"
              description="Implemented a Binary Search Tree (BST) in C++ with operations such as insertion, deletion, searching, and in-order traversal. The project demonstrates fundamental data structure concepts and efficient searching techniques.
Tech: C++, Data Structures and Algorithms"
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Empty"
              description=" "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Empty"
              description="#"
              ghLink="#"
              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Empty"
              description=""
              ghLink="#"
              
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
