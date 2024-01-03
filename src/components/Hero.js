import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";

import classes from "./All.module.css";
import programmer from "../assets/programmer.json";
import Lottie from 'lottie-react';
import Resume from '../assets/Yell-Htet-Naing.pdf'
const Hero = () => {




  return (
    <div className={classes['hero-div']}>
      
      <Container
        className={classes["full-height-container"]}
        id='home'
      >
        <Row xs={1} md={2} >
          <Col>
            <Card className="border-0 py-5 bg-transparent">
              <Card.Body className="p-0">
                <Card.Text className="fs-4">Hi</Card.Text>
                <Card.Title style={{fontSize:'25px', paddingTop : '20px'}}>I'm <span style={{color: "red", fontWeight:'bold'}}>Yell Htet Naing</span></Card.Title>
                <Card.Text style={{fontSize:'20px', padding : '20px 0'}}>A Front-End Developer.</Card.Text>
                <Button variant="danger" className="rounded-0 px-4"><a href={Resume} download={Resume} style={{textDecoration: "none", color: "white"}}>Download CV</a></Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="border-0 bg-transparent">
            <Lottie animationData={programmer}/>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
