import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Layout from "../Components/Layout/Layout";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";

export default function EditUserDetails() {
  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="commn-form-card">
                  <h2>Edit user details</h2>
                  <Row>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input first name in here"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input last name in here"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input first name in here"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Input last name in here"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Role</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Assign role</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>First Name</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select Status</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </Form.Group>
                      </Form>
                    </Col>

                    <Col lg={12}>
                      <div className="commn-form-btns">
                        <button className="theme-btn">Add User</button>
                        <button className="untheme-btn">Cancel</button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
