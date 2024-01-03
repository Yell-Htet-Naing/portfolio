import React, { useRef, useState } from "react";
import {
  Container,
  Carousel,
  Image
} from "react-bootstrap";
import classes from '../components/All.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {  faGlobe } from "@fortawesome/free-solid-svg-icons";

const ProjectDetailPage = () => {

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
    <>
      <Container className="mt-5">
        <h1 style={{color: "red", fontWeight:'bold',textAlign : 'center'}}>First Project</h1>
        <Carousel
          className="p-4"
          ref={carouselRef}
          controls={false}
          indicators={false}
          activeIndex={index} onSelect={handleSelect} interval={null}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placekitten.com/800/400"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://placekitten.com/800/400"
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          {/* Add more Carousel.Items as needed */}
        </Carousel>
        <div className="d-flex  justify-content-center">
          <div onClick={handleNext} className={classes['image-container']}>
            <Image
              src="https://placekitten.com/800/400"
              style={{ width: "100px", height: "70px", marginRight: "8px"}}
              className={classes['image-with-border']}
            />
          </div>
          <div onClick={handlePrev} className={classes['image-container']}>
            <Image
              src="https://placekitten.com/800/400"
              style={{ width: "100px", height: "70px", marginRight: "8px" }}
              className={classes['image-with-border']}
            />
          </div>
        </div>

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <h2>You can check by the links below</h2>

       

        <div class="d-flex flex-row flex-wrap mb-3" >
          <div class="p-2">
            <button className={classes["custom-button"]}>
              <FontAwesomeIcon icon={faGithub} />
              <p style={{paddingLeft : "3px"}}>yellhtetnaing002@gmil.com</p>
            </button>
          </div>
          <div class="p-2">
            <button className={classes["custom-button"]}>
              <FontAwesomeIcon icon={faGlobe} />
              <p style={{paddingLeft : "3px"}}>yellhtetnaing002@gmail.com</p>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProjectDetailPage;
