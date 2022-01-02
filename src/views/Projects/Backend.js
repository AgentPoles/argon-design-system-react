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

class BackEnd extends React.Component {
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
                        Backend Projects{" "}
                        {/* <span>completed with examples</span> */}
                      </h1>
                      <p className="lead text-white">
                        These are some Backend end projects I am currently
                        working on, others can be found on GitHub
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
                            Tensel
                          </h6>
                          <p className="description mt-3">
                            Tensel hopes to be a decentralized market place,
                            where people can buy digital and non-digital assets
                            from their peers, AI, organizations and Contracts.
                            It would use Usefull V2 and it is still at a very
                            early stage.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              Node
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Express
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Email.js
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Current look
                          </Button> */}
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
                            Kabura.finance
                          </h6>
                          <p className="description mt-3">
                            Kabura.finance seeks to be a decentralied financial
                            system, where you can borrow, lend, save and invest
                            on digital assests and non digital assests. It would
                            use UsefullV2 and it is still at a very early stage
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Node
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Express
                            </Badge>
                            {/* <Badge color="success" pill className="mr-1">
                              success
                            </Badge> */}
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Current Look
                          </Button> */}
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Turnnel
                          </h6>
                          <p className="description mt-3">
                            Turnnel seeks to be a blockchain search engine,
                            Payment gateway and universal receipt generator. it
                            would make use of UsefullV2 and it is still at a
                            very early stage.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Moralis
                            </Badge>
                          </div>
                          {/* <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            See Current Look
                          </Button> */}
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

export default BackEnd;
