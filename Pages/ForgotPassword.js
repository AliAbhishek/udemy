import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={12}>
            <div className="logo">
              <img src={require("../Assets/Images/Logo.svg").default} />
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid className="">
        <div className="row  sign-banner-part">
          <Col lg={8} className="p-0">
            <div className="otp-banner-img"></div>
          </Col>
          <Col lg={4}>
            <div className="right-banner-part">
              <div className="login-cmn-box">
                <div className="login-box-inner-wrap">
                  <h2>Forgot Passwoard 🔒</h2>
                  <p className="mb-0">
                    Enter your email and we'll send you instructions to reset
                    your password
                  </p>
                  <Form>
                    <div className="form-set">
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                        />
                      </Form.Group>
                    </div>
                    <Link
                      to="/reset-password"
                      variant="primary"
                      type="submit"
                      className="submit forgot-btn"
                    >
                      Send Reset Link
                    </Link>
                    <div className="back-link-ad">
                      <Link to="/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="7"
                          height="13"
                          viewBox="0 0 7 13"
                          fill="none"
                        >
                          <path
                            d="M6 1.5L1 6.5L6 11.5"
                            stroke="#7367F0"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Back to login
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
}
