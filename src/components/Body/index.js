import React from "react";
import "./style.css";
import {
  Carousel,
  Button,
  Jumbotron,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";

function Body() {
  return (
    <div>
      <div id="background">
        <Container>
          <Row>
            <Col>
              <div className="center" id="about">
                <Image
                  src={process.env.PUBLIC_URL + "/images/pkpaprofile.jpg"}
                  roundedCircle
                />
                <Container id="myInfo">
                  My name is Pha Kpa and I'm a web developer from Benson, North
                  Carolina. I enjoy building websites and always looking to
                  improve.
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div>
        <Container fluid>
          <Row>
            <Col>
              <h2 className="projectDetails" id="projects">
                Projects
              </h2>

              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/EloofMain.png"}
                    alt="EloofPage"
                  />
                  <Carousel.Caption>
                    <Jumbotron>
                      <h1 className="projectDetails">Eloof App</h1>
                      <p className="projectDetails">
                        Christmas gifting app for kids and adults
                      </p>
                      <p>
                        <Button variant="primary">Learn more</Button>
                      </p>
                    </Jumbotron>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/BurgerApp.png"}
                    alt="BurgerApp"
                  />

                  <Carousel.Caption>
                    <Jumbotron>
                      <h1 className="projectDetails">Burger App</h1>
                      <p className="projectDetails">
                        Simple Burger App where you can add and devour burgers!
                      </p>
                      <p>
                        <Button variant="primary">Learn more</Button>
                      </p>
                    </Jumbotron>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={process.env.PUBLIC_URL + "/images/WeatherApp.png"}
                    alt="WeatherApp"
                  />

                  <Carousel.Caption>
                    <Jumbotron>
                      <h1 className="projectDetails">Weather App</h1>
                      <p className="projectDetails">
                        Weather app displays weather based on city location
                      </p>
                      <p>
                        <Button variant="primary">Learn more</Button>
                      </p>
                    </Jumbotron>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <Container id="contact">
        <div id="contactTitle">
          <h2>Contact Me</h2>
        </div>
        <Container id="contactBody">
          <div>
            Email:{" "}
            <a href="mailto:kphaoctober@yahoo.com" target="_newtab">
              kphaoctober@yahoo.com
            </a>
          </div>
          <div>
            Github:{" "}
            <a
              href="https://github.com/phakpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://github.com/phakpa
            </a>
          </div>
          <div>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pha-kpa-1356921a7/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              https://www.linkedin.com/in/pha-kpa-1356921a7/
            </a>
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default Body;
