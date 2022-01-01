import React from "react";

// reactstrap components
import { Button, Card, Container, Row, Col } from "reactstrap";
import polesimage from "assets/img/brand/paule.jpg";

// core components
// import DemoNavbar from "components/Navbars/DemoNavbar.js";
// import SimpleFooter from "components/Footers/SimpleFooter.js";
import MyNavbar from "components/Navbars/MyNavbar";
import MySimpleFooter from "components/Footers/MySimpleFooter";
import { Link } from "react-router-dom";

class MyProfile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MyNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-dark alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
          <section className="section">
            <Container>
              <Card className="card-profile shadow mt--300">
                <div className="px-4">
                  <Row className="justify-content-center">
                    <Col className="order-lg-2" lg="3">
                      <div className="card-profile-image">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={polesimage}
                          />
                        </a>
                      </div>
                    </Col>
                    <Col
                      className="order-lg-3 text-lg-right align-self-lg-center"
                      lg="4"
                    >
                      <div className="card-profile-actions py-4 mt-lg-0">
                        <Button
                          className="mr-4"
                          color="info"
                          href="https://www.linkedin.com/in/paule-oamen/"
                          // onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          Connect
                        </Button>
                        <Button
                          className="float-right"
                          color="default"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                          size="sm"
                        >
                          <Link to="/reachout">
                            <span style={{ color: "white" }}>Message</span>
                          </Link>
                        </Button>
                      </div>
                    </Col>
                    <Col className="order-lg-1" lg="4">
                      {/* <div className="card-profile-stats d-flex justify-content-center">
                        <div>
                          <span className="heading">22</span>
                          <span className="description">Friends</span>
                        </div>
                        <div>
                          <span className="heading">10</span>
                          <span className="description">Photos</span>
                        </div>
                        <div>
                          <span className="heading">89</span>
                          <span className="description">Comments</span>
                        </div>
                      </div> */}
                    </Col>
                  </Row>
                  <div className="text-center mt-5">
                    <h3>
                      Paul Oamen <span className="font-weight-light">, 23</span>
                    </h3>
                    <div className="h6 font-weight-300">
                      <i className="ni location_pin mr-2" />
                      Currently in Lagos, Nigeria
                    </div>
                    <div className="h6 mt-4">
                      <i className="ni business_briefcase-24 mr-2" />
                      Graduate Elect/Elect Engineer, Fullstack Js Developer,
                      Aspiring Blockchain engineer
                    </div>
                    <div>
                      {/* <i className="ni education_hat mr-2" />
                      University of Computer Science */}
                    </div>
                  </div>
                  <div className="mt-5 py-5 border-top text-center">
                    <Row className="justify-content-center">
                      <Col lg="9">
                        <p>
                          I love innovation / Research and I can learn anything
                          in the shortest possible time. I am always open to
                          working with people to achieve a defined goal.
                        </p>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Card>
            </Container>
          </section>
        </main>
        <MySimpleFooter />
      </>
    );
  }
}

export default MyProfile;
