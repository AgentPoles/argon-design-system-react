// import {
//   ChainId,
//   Token,
//   TokenAmount,
//   Pair,
//   Trade,
//   TradeType,
//   Route,
// } from "@uniswap/sdk";
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
// nodejs library that concatenates classes
import classnames from "classnames";
import MyNavbar from "components/Navbars/MyNavbar.js";
import MySimpleFooter from "components/Footers/MySimpleFooter.js";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Engineering extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <MyNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Engineering Projects{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        These are some Engineering projects I am currently
                        working on.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="github"
                          href="https://github.com/AgentPoles"
                          size="lg"
                          target="_blank"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-github" />
                          </span>
                          <span className="btn-inner--text">
                            <span className="text-warning mr-1">See</span>
                            Github
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              {/* <div className="separator separator-bottom separator-skew">
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
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Adaptive Control Traffic Lights
                          </h6>
                          <p className="description mt-3">
                            This hopes to use fuzzy logic to determine green and
                            red time of a traffic light at a given point in
                            time, Hence traffic light would not operate with a
                            fixed time, but rather based on the traffic
                            situation at a given point in time. Would add a Dapp
                            to integrate public consensus
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Matlab
                            </Badge>
                            {/* <Badge color="primary" pill className="mr-1">
                              Email.js
                            </Badge> */}
                            <Badge color="primary" pill className="mr-1">
                              Blockchain Dapp
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Multisource Energy for Electric Vehicles
                          </h6>
                          <p className="description mt-3">
                            Researching possible sources of renewable energy
                            that can be integrated with electric vehicles
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <MySimpleFooter />
      </>
    );
  }
}

export default Engineering;
