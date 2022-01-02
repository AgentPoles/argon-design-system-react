/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import poles from "assets/img/brand/poles.PNG";

class Hero extends React.Component {
  render() {
    return (
      <>
        <div className="position-relative">
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
            {/* Background circles */}
            <div className="shape shape-style-1 shape-dark">
              <span className="span-150" />
              <span className="span-50" />
              <span className="span-50" />
              <span className="span-75" />
              <span className="span-100" />
              <span className="span-75" />
              <span className="span-50" />
              <span className="span-100" />
              <span className="span-50" />
              <span className="span-100" />
            </div>
            <Container className="shape-container d-flex align-items-center py-lg">
              <div className="col px-0">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" lg="6">
                    {/* <div>
                      <img
                        alt="..."
                        className="img-fluid"
                        src={poles}
                        style={{ width: "200px" }}
                      />
                      "paul oamen"
                    </div> */}
                    <p className="lead text-white">
                      Languages: Javascript, Java, C++, Python, English, Yoruba,
                      Spanish (beginner)
                    </p>
                    <p className="lead text-white">
                      Front-end: React.Js, Next.js
                    </p>
                    <p className="lead text-white">
                      Back-end: Node.Js, PHP, Moralis
                    </p>
                    <p className="lead text-white">
                      Blockchain: Solidity, Web3.js, Truffle
                    </p>
                    <p className="lead text-white">Database: MySql, Git, AWS</p>

                    <p className="lead text-white">
                      DevOps: Kubernetes, Docker{" "}
                    </p>
                    <p className="lead text-white">
                      Engineering: Circuit Design and construction,
                      Micro-controller Programming, Matlab
                    </p>

                    <p className="lead text-white">
                      Music: Guitar, Voice (just after beginner 😂 )
                    </p>
                    <p className="lead text-white">
                      Games: Chess (not so tough any more 😓)
                    </p>
                    <Button
                      className="btn-icon"
                      color="warning"
                      type="button"
                      size="sm"
                      href="https://www.chess.com/member/paulepoles"
                      target="blank"
                    >
                      <span className="btn-inner--icon">
                        <i class="fas fa-chess-knight"></i>
                      </span>
                      <span className="btn-inner--text">play me</span>
                    </Button>
                    {/* <p className="lead text-white">Engineering: Matlab </p> */}
                    <div className="btn-wrapper mt-5">
                      <Link to="profile">
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0"
                          color="default"
                          // href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                          size="lg"
                        >
                          <span className="btn-inner--icon mr-1">
                            <img src={poles} alt="logo" />
                          </span>
                          <span className="btn-inner--text">About me</span>
                        </Button>{" "}
                      </Link>
                      <Link to="/reachout">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="github"
                          // href="https://github.com/creativetimofficial/argon-design-system-react"
                          size="lg"
                          target="_blank"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-inbox" />
                          </span>
                          <span className="btn-inner--text">
                            <span className="text-warning mr-1">Message</span>
                            me
                          </span>
                        </Button>
                      </Link>
                    </div>
                    <div className="mt-5">
                      <small className="text-white font-weight-bold mb-0 mr-2">
                        *nada es imposible para dios*
                      </small>
                      {/* <img
                        alt="..."
                        className="ml-1"
                        style={{ height: "28px" }}
                        src={require("assets/img/brand/creativetim-white-slim.png")}
                      /> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
            {/* SVG separator */}
            {/* <div className="separator separator-bottom separator-skew zindex-100">
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
            </div> */}
          </section>
        </div>
      </>
    );
  }
}

export default Hero;
