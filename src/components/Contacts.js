import React from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import classes from './All.module.css';
import myPhoto from "../assets/code1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import {  faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  const imageStyle = {
    backgroundImage: `url(${myPhoto})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "30vh", 
    opacity: 1,
  };
  const containerStyle = {
    background: "black",
    width: "90%", 
    height: "100%", 
    border: "1px solid #ddd", 
    padding: "30px",
    marginBottom: "100px",
    borderRadius : "5px",
  };

    //Gmail
    const emailButtonClick = () => {
      const emailAddress = 'yellhtetnaing002@.com'; 
      const subject = 'Hello from your website';
  
      window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;
    };
  

    //facebook
    const faceBookButtonClick = () => {
      window.location.href = 'https://www.facebook.com/yell.htet.naing99'; 
    };

     //github
     const gitHubButtonClick = () => {
      window.location.href = 'https://github.com/Yell-Htet-Naing'; 
    };
      //Phone
    const handlePhoneCallClick = () => {
      const phoneNumber = '09793131600'; 
  
      window.location.href = `tel:${phoneNumber}`;
    };



  return (
    <div className={classes['web-border']}>
      <Container id="contacts">
        <Row>
          <Col>
            <Card
              className="py-5 text-white text-center mb-5"
              style={imageStyle}
            >
              <h1>I'm available for freelancing.</h1>
              <Card.Body>
                <Button variant="danger" className="rounded-0 px-4" onClick={emailButtonClick}>
                  Hire Me
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <h1 style={{color: "red", fontWeight:'bold',textAlign : 'center'}}>Contact me</h1>

        <Container style={containerStyle}>

          <div className="d-flex flex-row flex-wrap  justify-content-center align-items-center">
            <div className='m-2'>
              <button className={classes["custom-button"]} onClick={emailButtonClick} >
              <FontAwesomeIcon icon={faEnvelope}/>
              <p style={{paddingLeft : "3px"}}>yellhtetnaing002@gmail.com</p>
              </button>
            </div>
            <div  className='m-2'>
              <button className={classes["custom-button"]} onClick={faceBookButtonClick} >
                <FontAwesomeIcon  icon={faFacebook}/>
                <p style={{paddingLeft : "3px"}}>facebook.com/yellhtetnaing</p>
              </button>
            </div>
          </div>

          <div class="d-flex flex-row flex-wrap mb-3 justify-content-center align-items-center">
            <div  className='m-2 ' >
              <button className={classes["custom-button"]} onClick={gitHubButtonClick}>
                <FontAwesomeIcon icon={faGithub}/>
                <p style={{paddingLeft : "3px"}}>github.com/Yell-Htet-Naing</p>
              </button>
            </div>
            <div  className='m-2'>
              <button className={classes["custom-button"]} onClick={handlePhoneCallClick}>
                <FontAwesomeIcon icon={faPhone}/>
                <p style={{paddingLeft : "3px"}}>09-793131600</p>
              </button>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Contacts;
