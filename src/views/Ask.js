import React from "react";
import { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
  UncontrolledAlert,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import Githublogo from "assets/img/icons/common/github.svg";
import Linkedlinlogo from "assets/img/icons/common/linkedin.svg";
import MyNavbar from "components/Navbars/MyNavbar";
import SimpleFooter from "components/Footers/SimpleFooter.js";
import MySimpleFooter from "components/Footers/MySimpleFooter";
import emailjs from "emailjs-com";

const Ask = () => {
  const [userData, setUserData] = useState({ from_name: "", message: "" });
  // const [sent, setSent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  function sendEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        "service_wl5wj3o",
        "template_gut6ftz",
        userData,
        "user_Qi06GFI32mGu84Vc1pZE7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsLoading(false);
          alert(
            "I have received your message, thanks a lot, will respond Asap"
          );
        },
        (error) => {
          setIsLoading(false);
          alert("I couldnt get your messaga, system says " + error.text);
        }
      );
  }
  let handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <MyNavbar />
      <main>
        <section className="section section-shaped section-lg">
          <div className="shape shape-style-1 bg-gradient-default">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>

          <Container className="pt-lg-7">
            {/* {sent && <Alerts />} */}
            <Row className="justify-content-center">
              <Col lg="5">
                <Card className="bg-secondary shadow border-0">
                  <CardHeader className="bg-white pb-5">
                    <div className="text-muted text-center mb-3">
                      <small style={{ fontWeight: "bold" }}>Find me</small>
                    </div>
                    <div className="text-center">
                      <Button
                        className="btn-neutral btn-icon mr-4"
                        color="default"
                        href="https://github.com/AgentPoles"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img alt="..." src={Githublogo} />
                        </span>
                        {/* <span className="btn-inner--text">Github</span> */}
                      </Button>
                      <Button
                        className="btn-neutral btn-icon ml-1"
                        color="default"
                        href="www.linkedin.com/in/paule-oamen"
                        onClick={(e) => e.preventDefault()}
                      >
                        <span className="btn-inner--icon mr-1">
                          <img alt="..." src={Linkedlinlogo} />
                        </span>
                        {/* <span className="btn-inner--text">Linkedin</span> */}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-hat-3" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="valid email or number"
                            type="text"
                            name="from_name"
                            required="true"
                            onChange={(e) => handleChange(e)}
                          />
                        </InputGroup>
                      </FormGroup>
                      <FormGroup>
                        <InputGroup className="input-group-alternative mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="ni ni-email-83" />
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input
                            placeholder="Message"
                            type="text"
                            name="message"
                            required="true"
                            onChange={(e) => handleChange(e)}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="text-center">
                        {isLoading && <i class="fas fa-cog fa-spin"></i>}
                        <Button
                          className="mt-4"
                          color="primary"
                          type="button"
                          onClick={(e) => sendEmail(e)}
                        >
                          message
                        </Button>
                      </div>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <MySimpleFooter />
    </>
  );
};
class Alerts extends React.Component {
  render() {
    return (
      <>
        <UncontrolledAlert className="alert-primary" fade={false}>
          <span className="alert-inner--icon">
            <i className="ni ni-like-2" />
          </span>{" "}
          <span className="alert-inner--text">
            <strong>Default!</strong> This is a default alert—check it out!
          </span>
        </UncontrolledAlert>
      </>
    );
  }
}

export default Ask;
