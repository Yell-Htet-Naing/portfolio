import React, { useRef, useState } from "react";
import { Container, Card, Col, Row, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./All.module.css";
import myPhoto from "../assets/come.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  return (
    <div className={classes['project-div']}>
      <Container
        variant="primary"
        className={classes["full-height-container"]}
        id="projects"
      >
        <div className="text-center">
          <h1 style={{ color: "red", fontWeight: "bold" }}>My Projects</h1>
          <p>You can check my previous work below</p>
        </div>
        <Container>
          {/* Desktop View */}
          <Row className="d-none d-md-flex justify-content-center mb-4">
            <Col md="4">
              {/* First Column */}
              <div className="card" style={{ border: "0" }}>
                <Carousel controls={false} indicators={false}>
                  <Carousel.Item>
                    <Link to="/1" className={classes["custom-link"]}>
                      <Col>
                        <div className="text-center border-0">
                          <Card
                            className={classes["custom-card"]}
                            style={{ border: "0" }}
                          >
                            <Card.Img
                              src={myPhoto}
                              style={{ borderRadius: "0" }}
                              className={classes["project-border"]}
                            />
                          
                            <Card.Text className="border-0 py-4">
                              
                              First Project
                             
                              
                            </Card.Text>
                            
                          </Card>
                        </div>
                      </Col>
                    </Link>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Col>

            <Col md="4">
              {/* Second Column */}
              <div className="card" style={{ border: "0" }}>
                <Carousel controls={false} indicators={false}>
                  <Link to="/2" className={classes["custom-link"]}>
                    <Col>
                      <div className="text-center">
                        <Card
                          className={classes["custom-card"]}
                          style={{ border: "0" }}
                        >
                          <Card.Img
                            src={myPhoto}
                            style={{ borderRadius: "0" }}
                            className={classes["project-border"]}
                          />
                          <Card.Text className="border-0 py-4 text-black">
                            Second Project
                          </Card.Text>
                        </Card>
                      </div>
                    </Col>
                  </Link>
                </Carousel>
              </div>
            </Col>

            <Col md="4">
              {/* Third Column */}
              <div className="card" style={{ border: "0" }}>
                <Carousel controls={false} indicators={false}>
                  <Link to="/3" className={classes["custom-link"]}>
                    <Col>
                      <div className="text-center">
                        <Card
                          className={classes["custom-card"]}
                          style={{ border: "0" }}
                        >
                          <Card.Img
                            src={myPhoto}
                            style={{ borderRadius: "0" }}
                            className={classes["project-border"]}
                          />
                          <Card.Text className="border-0 py-4 text-black bg-transparent">
                            Third Project
                          </Card.Text>
                        </Card>
                      </div>
                    </Col>
                  </Link>
                </Carousel>
              </div>
            </Col>
          </Row>

          {/* Mobile View */}

          <Row className="d-flex d-md-none mb-4 ">
            <Col xs="12">
              {/* Single Card for Mobile */}
              <div className="card border-0 bg-transparent" style={{ border: "0" }}>
                <Carousel
                  ref={carouselRef}
                  controls={false}
                  indicators={false}
                  activeIndex={index}
                  onSelect={handleSelect}
                  interval={null}
                >
                  <Carousel.Item>
                    <Link to="/1" className={classes["custom-link"]}>
                      <Col>
                        <div className="text-center">
                          <Card
                            className={classes["custom-card"]}
                            style={{ border: "0" }}
                          >
                            <Card.Img
                              src={myPhoto}
                              style={{ borderRadius: "0" }}
                              className={classes["project-border"]}
                            />
                            
                            <Card.Text className="py-4">
                              First Project
                            </Card.Text>
                           
                            
                          </Card>
                        </div>
                      </Col>
                    </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to="/2" className={classes["custom-link"]}>
                      <Col>
                        <div className="text-center">
                          <Card
                            className={classes["custom-card"]}
                            style={{ border: "0" }}
                          >
                            <Card.Img
                              src={myPhoto}
                              style={{ borderRadius: "0" }}
                              className={classes["project-border"]}
                            />
                            <Card.Text className="border-0 py-4 text-black bg-transparent">
                              Second Project
                            </Card.Text>
                          </Card>
                        </div>
                      </Col>
                    </Link>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Link to="/3" className={classes["custom-link"]}>
                      <Col>
                        <div className="text-center">
                          <Card
                            className={classes["custom-card"]}
                            style={{ border: "0" }}
                          >
                            <Card.Img
                              src={myPhoto}
                              style={{ borderRadius: "0" }}
                              className={classes["project-border"]}
                            />
                            <Card.Text className="border-0 py-4 text-black bg-transparent">
                              Third Project
                            </Card.Text>
                          </Card>
                        </div>
                      </Col>
                    </Link>
                  </Carousel.Item>
                </Carousel>
                <div className="d-flex justify-content-center mt-4">
                  <div
                    onClick={handlePrev}
                    className={classes["image-container"]}
                    style={{ marginRight: "10px"}}
                  >
                    <FontAwesomeIcon icon={faCircleChevronLeft} size="2xl" />
                  </div>
                  <div
                    onClick={handleNext}
                    className={classes["image-container"]}
                    style={{ marginLeft: "10px" }}
                  >
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2xl" />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Projects;
