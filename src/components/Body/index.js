import React from "react";
import "./style.css";
import { Button, Container, Row, Col, Image, Card } from "react-bootstrap";

function Body() {
  return (
    <div>
      <div id="background">
        <Container>
          <Row>
            <Col>
              <div className="center" id="about">
                <Container id="myInfo">
                  <h1>I am Pha Kpa.</h1>I'm a motivated Full Stack Web Developer
                  from Benson, North Carolina. <br></br>Scroll down to learn
                  more about me.
                </Container>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/*                       <---about me--->                          */}
      <div id="aboutMe">
        <Container>
          <Row>
            <Col sm={4}>
              {" "}
              <Image
                src={process.env.PUBLIC_URL + "/images/pkpaprofile.jpg"}
                roundedCircle
              />{" "}
            </Col>
            <Col sm={8}>
              <h1 id="aboutTitle">About Me</h1>
              <p id="aboutText">
                Full Stack Web Developer eager to accomplish team goals through
                excellent troubleshooting, teamwork, and communication skills.
                Always looking to learn new techniques, and technologies to
                improve the efficiency of future projects. Fast learner,
                achieved lead technician role under two years as a controls
                technician for the buildings automation industry. Equipped with
                skills needed to achieve team goals to help build a better user
                experience on the web.{" "}
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={4}></Col>
            <Col sm={8}>
              <Row>
                <Col sm={6} id="aboutText">
                  <h1 id="aboutTitle">Contact Details</h1>
                  <p id="aboutText">
                    Pha Kpa <br></br>Benson, NC <br></br>(919)436-6659 <br></br>
                    kphaoctober@yahoo.com <br></br>
                    linkedin.com/in/pha-kpa-1356921a7/ <br></br>
                    github.com/phakpa
                  </p>
                </Col>
                <Col sm={6} id="aboutText" className="center">
                  <a
                    href={process.env.PUBLIC_URL + "/Resumepkpa.pdf"}
                    target="_newtab"
                  >
                    <Button variant="primary" size="lg">
                      Resume
                    </Button>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="projects">
        <Container>
          <h2>Check out some of my projects.</h2>
          <Row>
            <Col sm>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/EloofMain.png"}
                  alt="EloofPage"
                />
                <Card.Body>
                  <Card.Title>Eloof</Card.Title>
                  <Card.Text>
                    Christmas gifting app for kids during the holidays. Kids
                    login to make a "wish list" and adults login to buy the kids
                    their wish list items.
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>React.js</li>
                      <li>Express.js</li>
                      <li>Passport.js</li>
                      <li>Semantic UI</li>
                      <li>MongoDB</li>
                    </ul>
                  </Card.Text>
                  <a
                    href="https://eloof.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button variant="danger">Check it out!</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/employeeTrack.png"}
                  alt="employeeTrack"
                />
                <Card.Body>
                  <Card.Title>Employee Tracker</Card.Title>
                  <Card.Text>
                    Application using the CLI to keep track of your employees
                    using Sequelize/MySQL and Node.js.
                    <ul>
                      <li>Node.js</li>
                      <li>MySQL</li>
                    </ul>
                  </Card.Text>
                  <a
                    href="https://github.com/phakpa/employeeTracker"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button variant="danger">Check it out!</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col sm>
              <Card>
                <Card.Img
                  variant="top"
                  src={process.env.PUBLIC_URL + "/images/WeatherApp.png"}
                  alt="WeatherApp"
                />
                <Card.Body>
                  <Card.Title>Weather App</Card.Title>
                  <Card.Text>
                    Weather App to keep track of the weather in your city. The
                    current weather data is being pulled from the openweathermap
                    API.
                    <ul>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Javascript</li>
                      <li>Bootstrap</li>
                      <li>JQuery/Ajax</li>
                      <li>Moment.js</li>
                    </ul>
                  </Card.Text>
                  <a
                    href="https://phakpa.github.io/weatherDashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <Button variant="danger">Check it out!</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="center">
            Check out more of my work on{" "}
            <a
              href="https://github.com/phakpa"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Body;
