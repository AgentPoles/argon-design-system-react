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
// JavaScript plugin that hides or shows a component based on your scroll
import Headroom from "headroom.js";
import poles from "assets/img/brand/poles.PNG";
// reactstrap components
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

let owner = " paul oamen";

class MyNavbar extends React.Component {
  componentDidMount() {
    let headroom = new Headroom(document.getElementById("navbar-main"));

    // initialise
    headroom.init();
  }

  state = {
    collapseClasses: "",
    collapseOpen: false,
  };

  onExiting = () => {
    this.setState({
      collapseClasses: "collapsing-out",
    });
  };

  onExited = () => {
    this.setState({
      collapseClasses: "",
    });
  };

  render() {
    return (
      <>
        <header className="header-global">
          <Navbar
            className="navbar-main navbar-transparent navbar-light headroom"
            expand="lg"
            id="navbar-main"
          >
            <Container>
              <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
                <img alt="..." src={poles} />
                {owner}
              </NavbarBrand>
              <button className="navbar-toggler" id="navbar_global">
                <span className="navbar-toggler-icon" />
              </button>
              <UncontrolledCollapse
                toggler="#navbar_global"
                navbar
                className={this.state.collapseClasses}
                onExiting={this.onExiting}
                onExited={this.onExited}
              >
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-brand" xs="6">
                      <Link to="/">
                        <img alt="..." src={poles} />
                      </Link>
                    </Col>
                    <Col className="collapse-close" xs="6">
                      <button className="navbar-toggler" id="navbar_global">
                        <span />
                        <span />
                      </button>
                    </Col>
                  </Row>
                </div>
                <Nav className="navbar-nav-hover align-items-lg-center" navbar>
                  <UncontrolledDropdown nav>
                    <DropdownToggle nav>
                      <i className="ni ni-ui-04 d-lg-none mr-1" />
                      <span className="nav-link-inner--text">Projects</span>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-xl">
                      <div className="dropdown-menu-inner">
                        <Media
                          className="d-flex align-items-center"
                          href=""
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-palette" />
                          </div>
                          <Media body className="ml-3">
                            <Link to="/frontend">
                              <h6 className="heading text-primary mb-md-1">
                                Front-End
                              </h6>
                            </Link>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href=""
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-spaceship" />
                          </div>
                          <Media body className="ml-3">
                            <Link to="/backend">
                              <h6 className="heading text-primary mb-md-1">
                                Back-End
                              </h6>
                            </Link>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href=""
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-ui-04" />
                          </div>
                          <Media body className="ml-3">
                            <Link to="/blockchain">
                              <h5 className="heading text-warning mb-md-1">
                                Blockchain
                              </h5>
                            </Link>
                          </Media>
                        </Media>
                        <Media
                          className="d-flex align-items-center"
                          href=""
                          target="_blank"
                        >
                          <div className="icon icon-shape bg-gradient-danger rounded-circle text-white">
                            <i className="ni ni-atom" />
                          </div>
                          <Media body className="ml-3">
                            <Link to="/engineering">
                              <h5 className="heading text-danger mb-md-1">
                                Engineering
                              </h5>
                            </Link>
                          </Media>
                        </Media>
                      </div>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown
                    className="d-none d-lg-block ml-lg-4"
                    nav
                  >
                    <DropdownToggle nav>
                      <i className="ni ni-collection d-lg-none mr-1" />

                      <span
                        className="nav-link-inner--text"
                        style={{ color: "white" }}
                      >
                        Blockchain Papers
                      </span>
                    </DropdownToggle>

                    {/* <DropdownMenu>
                      <DropdownItem to="/landing-page" tag={Link}>
                        Landing
                      </DropdownItem>
                      <DropdownItem to="/profile-page" tag={Link}>
                        Profile
                      </DropdownItem>
                      <DropdownItem to="/login-page" tag={Link}>
                        Login
                      </DropdownItem>
                      <DropdownItem to="/register-page" tag={Link}>
                        Register
                      </DropdownItem>
                    </DropdownMenu> */}
                  </UncontrolledDropdown>
                </Nav>
                <Nav className="align-items-lg-center ml-lg-auto" navbar>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://github.com/AgentPoles"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-github" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Github
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      connect on Github
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className="nav-link-icon"
                      href="https://www.linkedin.com/in/paule-oamen/"
                      id="tooltip112445449"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin" />
                      <span className="nav-link-inner--text d-lg-none ml-2">
                        Linkedin
                      </span>
                    </NavLink>
                    <UncontrolledTooltip delay={0} target="tooltip112445449">
                      connect on Linkedin
                    </UncontrolledTooltip>
                  </NavItem>
                  <NavItem className="">
                    <Link to="/profile">
                      <Button
                        className="btn-neutral btn-icon"
                        color="default"
                        //   href="www.linkedin.com/in/paule-oamen"
                        // target="_blank"
                      >
                        <span className="btn-inner--icon">
                          <i className="fa fa-link mr-2" />
                        </span>
                        <span className="nav-link-inner--text ml-1">
                          Reach Out
                        </span>
                      </Button>
                    </Link>
                  </NavItem>
                </Nav>
              </UncontrolledCollapse>
            </Container>
          </Navbar>
        </header>
      </>
    );
  }
}

export default MyNavbar;
