import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

export default function UnderMaintenance() {
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
          <Col lg={12} className="p-0">
            <div className="maintenance-banner-img">
              <div className="error-text-box">
                <div className="">Under Maintenance! 🚧</div>
                <p>
                  Sorry for the inconvenience but we're performing some
                  maintenance at the moment
                </p>
                <Link to="/">Back to home</Link>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
}
