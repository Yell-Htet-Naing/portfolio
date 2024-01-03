import React from "react";
import classes from "./All.module.css";
import { Container, Card, Col, Row} from "react-bootstrap";
import myPhoto from "../assets/code.jpg";
// Import necessary Font Awesome components and icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJs,
  faReact,
  faBootstrap,
  faPhp,
} from "@fortawesome/free-brands-svg-icons";

const Aboutme = () => {
  return (

    <Container
      variant="primary"
      className={classes["full-height-container"]}
      id="aboutme"
    >
     
      <Row xs={1} sm={2} md={2} className="mb-5">
        <Col md={4}>
          <Card className="bg-transparent"> 
            <Card.Img
              src={myPhoto}
              style={{ borderRadius: "0" }}
              className={classes['about-border']}
            />
          </Card>
        </Col>
        <Col md={8}>
          <Card className="border-0 bg-transparent">
            <Card.Body className="p-0">
              <Card.Title><span style={{color: "red", fontWeight:'bold'}}>About me</span></Card.Title>
              <Card.Text className="pt-3">
              As a front-end developer, I specialize in turning design concepts into responsive and dynamic web applications.With expertise in HTML, CSS, and JavaScript, I craft seamless and intuitive user experiences that leave a lasting impression.My skills include utilizing front-end frameworks such as React to build scalable and interactive web solutions.
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" img={myPhoto} />
          </Card>
        </Col>
      </Row>

      {/* Education and skills */}

      <Row xs={1} sm={2} md={2}>
        <Col md={6}>
          <Card className="border-0 bg-transparent">
            <Card.Body className="p-0">
              <Card.Title><span style={{color: "red", fontWeight:'bold'}}>Education</span></Card.Title>
              <Card.Text>(2016-2020)</Card.Text>
              <Card.Text>
                Technological University Taunggyi(3rd year)
              </Card.Text>
            

              <Card.Title><span style={{color: "red", fontWeight:'bold'}}>Qualification</span></Card.Title>
              <Card.Text>(2022)</Card.Text>

              <Card.Text>
              Responsive Web Design(freecodecamp)
                
              </Card.Text>
              <Card.Text>(2023)</Card.Text>
              <Card.Text style={{ marginBottom: "30px"}}>
              Professional Web Developer(Fairway Technology)
              </Card.Text>
            </Card.Body>
            <Card.Img variant="top" img={myPhoto} />
          </Card>
        </Col>
        <Col md={6}>
        {/* className="border-0" */}
          <Card className="border-0 bg-transparent">
            <Card.Body className="p-0">
              <Card.Title><span style={{color: "red", fontWeight:'bold'}}>Skills</span></Card.Title>
              <div className={classes['skills-bar']}>
              <Row>
                <Col>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faHtml5} size="3x" />
                    <p>HTML</p>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faCss3Alt} size="3x" />
                    <p>CSS</p>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faBootstrap} size="3x" />
                    <p>Bootstrap</p>
                  </div>
                </Col>
              </Row>
              </div>
              <div className={classes['skills-bar']}>
              <Row>
                <Col>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faJs} size="3x" />
                    <p>JavaScript</p>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faReact} size="3x" />
                    <p>React</p>
                  </div>
                </Col>
                <Col>
                  <div className="text-center">
                    <FontAwesomeIcon icon={faPhp} size="3x" />
                    <p>PHP</p>
                  </div>
                </Col>
              </Row>
              </div>
            </Card.Body>
            <Card.Img variant="top" img={myPhoto} />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutme;
