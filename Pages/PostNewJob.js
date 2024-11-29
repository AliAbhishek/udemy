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
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function PostNewJob() {
  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2 className="mb-0">Post a New Job Listing</h2>
                  <div className="d-flex gap-3">
                    <button className="bg-white text-dark">Cancel</button>
                    <button>Submit</button>
                  </div>
                </div>
              </Col>

              <Col lg={12} className="mb-5">
                <div className="commn-form-card">
                  <h2>Certification Details</h2>
                  <Row>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Company Name:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter company name"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Role Title:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter role title"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Location</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter job location"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Salary Range</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter salary range"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Link to Apply</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter application link"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Industry</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select industry from dropdown"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Years of Experience</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter required years of experience"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Job Type</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Please select (Max of 5)</option>
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
                          <Form.Label>Work Mode</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Select work mode"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Company Logo (If available)</Form.Label>
                          <Form.Control
                            type="file"
                            placeholder="Upload company logo if available"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    
                    <Col lg={12}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Description</Form.Label>
                          <Form.Control
                            as="textarea"
                            placeholder="Enter job description"
                            rows={6}
                          />
                        </Form.Group>
                      </Form>
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
