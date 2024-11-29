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

export default function NewCertification() {
  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2 className="mb-0">New Certification</h2>
                  <div>
                    <Link to="/new-certification-publish">Preview & Test</Link>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="commn-form-card">
                  <h2>Certification Details</h2>
                  <Row>
                    <Col lg={6}>
                      <Row>
                        <Col lg={12}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Certification Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter certification name"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={12}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Description</Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter certification description"
                                rows={6}
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Col>
                    <Col lg={6}>
                      <Row>
                        <Col lg={12}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Cover Image</Form.Label>
                              {/* <Form.Control
                                type="text"
                                placeholder="Input last name in here"
                              /> */}
                              <div className="commn-upld-file">
                                <div>
                                  <input type="file" />
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="42"
                                    height="42"
                                    viewBox="0 0 42 42"
                                    fill="none"
                                  >
                                    <circle
                                      cx="11.625"
                                      cy="11.6245"
                                      r="3.125"
                                      stroke="#165D7C"
                                      stroke-width="1.0625"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M1.20825 20.9997C1.20825 11.6698 1.20825 7.00485 4.10667 4.10643C7.0051 1.20801 11.67 1.20801 20.9999 1.20801C30.3298 1.20801 34.9947 1.20801 37.8932 4.10643C40.7916 7.00485 40.7916 11.6698 40.7916 20.9997C40.7916 30.3296 40.7916 34.9945 37.8932 37.8929C34.9947 40.7913 30.3298 40.7913 20.9999 40.7913C11.67 40.7913 7.0051 40.7913 4.10667 37.8929C1.20825 34.9945 1.20825 30.3296 1.20825 20.9997Z"
                                      stroke="#165D7C"
                                      stroke-width="1.0625"
                                    />
                                    <path
                                      d="M6.41663 39.7499C15.5259 28.8645 25.7376 14.5083 40.7864 24.2132"
                                      stroke="#165D7C"
                                      stroke-width="1.0625"
                                    />
                                  </svg>
                                </div>
                                <p>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="21"
                                    height="22"
                                    viewBox="0 0 21 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M11.5 2.00231C11.0299 2 10.5307 2 10 2C5.52166 2 3.28249 2 1.89124 3.39124C0.5 4.78249 0.5 7.02166 0.5 11.5C0.5 15.9783 0.5 18.2175 1.89124 19.6088C3.28249 21 5.52166 21 10 21C14.4783 21 16.7175 21 18.1088 19.6088C19.4472 18.2703 19.498 16.147 19.4999 12"
                                      stroke="#165D7C"
                                      stroke-width="0.9375"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M0.5 13.1354C1.11902 13.0455 1.74484 13.0011 2.37171 13.0027C5.02365 12.9466 7.61064 13.7729 9.67107 15.3342C11.582 16.7821 12.9247 18.7749 13.5 21"
                                      stroke="#165D7C"
                                      stroke-width="0.9375"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M19.5 15.8962C18.3246 15.3009 17.1088 14.9988 15.8862 15.0001C14.0345 14.9928 12.2015 15.6733 10.5 17"
                                      stroke="#165D7C"
                                      stroke-width="0.9375"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M15.5 3.5C15.9915 2.9943 17.2998 1 18 1M20.5 3.5C20.0085 2.9943 18.7002 1 18 1M18 1V9"
                                      stroke="#165D7C"
                                      stroke-width="0.9375"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Upload cover image
                                </p>
                                <span>Click or drag image here to upload </span>
                              </div>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={6}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Duration</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option>Please select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={6}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Industry</Form.Label>
                              <Form.Select aria-label="Default select example">
                                <option>Please select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form.Group>
                          </Form>
                        </Col>
                      </Row>
                    </Col>

                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Profession body</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter name of body"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={12} className="mb-2">
                <div className="commn-form-card">
                  <h2>Syllabus Management</h2>
                  <div className="course-modules-contain">
                    <div className="course-modules-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="46"
                        viewBox="0 0 40 46"
                        fill="none"
                      >
                        <path
                          d="M9.875 7.25H29C30.864 7.25 32.375 8.76104 32.375 10.625V14"
                          stroke="#141B34"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36.489 42.864L36.2238 42.5988L36.2238 42.5988L36.489 42.864ZM34.625 0.875C34.8321 0.875 35 0.707107 35 0.5C35 0.292893 34.8321 0.125 34.625 0.125V0.875ZM38.75 18.5V27.5H39.5V18.5H38.75ZM21.125 45.125H18.875V45.875H21.125V45.125ZM1.25 27.5V7.25H0.5V27.5H1.25ZM18.875 45.125C14.6218 45.125 11.4696 45.1242 9.04952 44.7988C6.64028 44.4749 5.01294 43.8355 3.7762 42.5988L3.24587 43.1291C4.64518 44.5284 6.45718 45.2071 8.94959 45.5422C11.4312 45.8758 14.643 45.875 18.875 45.875V45.125ZM0.5 27.5C0.5 31.732 0.499204 34.9438 0.832849 37.4254C1.16794 39.9178 1.84657 41.7298 3.24587 43.1291L3.7762 42.5988C2.53947 41.3621 1.90008 39.7347 1.57616 37.3255C1.2508 34.9054 1.25 31.7532 1.25 27.5H0.5ZM38.75 27.5C38.75 31.7532 38.7492 34.9054 38.4238 37.3255C38.0999 39.7347 37.4605 41.3621 36.2238 42.5988L36.7541 43.1291C38.1534 41.7298 38.8321 39.9178 39.1672 37.4254C39.5008 34.9438 39.5 31.732 39.5 27.5H38.75ZM21.125 45.875C25.357 45.875 28.5688 45.8758 31.0504 45.5422C33.5428 45.2071 35.3548 44.5284 36.7541 43.1291L36.2238 42.5988C34.9871 43.8355 33.3597 44.4749 30.9505 44.7988C28.5304 45.1242 25.3782 45.125 21.125 45.125V45.875ZM34.625 0.125H7.625V0.875H34.625V0.125ZM7.625 14.375H34.625V13.625H7.625V14.375ZM0.5 7.25C0.5 11.185 3.68997 14.375 7.625 14.375V13.625C4.10418 13.625 1.25 10.7708 1.25 7.25H0.5ZM7.625 0.125C3.68997 0.125 0.5 3.31497 0.5 7.25H1.25C1.25 3.72918 4.10418 0.875 7.625 0.875V0.125ZM39.5 18.5C39.5 15.8076 37.3174 13.625 34.625 13.625V14.375C36.9032 14.375 38.75 16.2218 38.75 18.5H39.5Z"
                          fill="#141B34"
                        />
                        <path
                          d="M26.75 25.25L13.25 25.25"
                          stroke="#141B34"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 34.25L13.25 34.25"
                          stroke="#141B34"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="course-modules-right">
                      <h3>You are yet to add any topic</h3>
                      <p>When you have added a topic, it will appear here</p>
                      <Link to="/add-new-topic">Add Topic</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} className="mb-2">
                <div className="commn-form-card">
                  <h2>Mock Exam Management</h2>
                  <div className="course-modules-contain">
                    <div className="course-modules-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                      >
                        <path
                          d="M27.5 0.5H18.5C11.1217 0.5 7.4326 0.5 4.81754 2.33109C3.85004 3.00853 3.00853 3.85004 2.33109 4.81754C0.5 7.4326 0.5 11.1217 0.5 18.5C0.5 25.8783 0.5 29.5674 2.33109 32.1825C3.00853 33.15 3.85004 33.9915 4.81754 34.6689C7.4326 36.5 11.1217 36.5 18.5 36.5H27.5C34.8783 36.5 38.5674 36.5 41.1825 34.6689C42.15 33.9915 42.9915 33.15 43.6689 32.1825C45.5 29.5674 45.5 25.8783 45.5 18.5"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M38.3663 2.19691C39.037 1.47027 39.3723 1.10696 39.7287 0.895034C40.5885 0.383683 41.6472 0.367782 42.5213 0.85309C42.8836 1.05422 43.2292 1.40731 43.9205 2.11349C44.6118 2.81966 44.9575 3.17275 45.1544 3.54283C45.6294 4.43581 45.6139 5.51731 45.1133 6.39563C44.9058 6.75964 44.5502 7.1022 43.8389 7.78731L35.3756 15.9389C34.0276 17.2372 33.3536 17.8863 32.5113 18.2154C31.6689 18.5444 30.7429 18.5202 28.8908 18.4717L28.6388 18.4651C28.075 18.4504 27.7931 18.443 27.6292 18.257C27.4654 18.0711 27.4877 17.7839 27.5325 17.2096L27.5568 16.8977C27.6827 15.2812 27.7457 14.4729 28.0613 13.7464C28.377 13.0199 28.9215 12.4299 30.0105 11.2501L38.3663 2.19691Z"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M28.9754 45.5L28.033 44.5576C25.9084 42.433 25.3817 39.1874 26.7254 36.5"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.2512 45.5L17.1936 44.5576C19.3181 42.433 19.8448 39.1874 18.5012 36.5"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.75 45.5H34.25"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14 18.5H29.75"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="course-modules-right">
                      <h3>You are yet to create any Mock Exam</h3>
                      <p>
                        When you have added a mock exam, it will appear here
                      </p>
                      <Link to="/create-mock-exam">Create Mock Exam</Link>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={12} className="mb-5">
                <div className="commn-form-card">
                  <h2>Practice Question Management</h2>
                  <div className="course-modules-contain">
                    <div className="course-modules-left">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                      >
                        <path
                          d="M27.5 0.5H18.5C11.1217 0.5 7.4326 0.5 4.81754 2.33109C3.85004 3.00853 3.00853 3.85004 2.33109 4.81754C0.5 7.4326 0.5 11.1217 0.5 18.5C0.5 25.8783 0.5 29.5674 2.33109 32.1825C3.00853 33.15 3.85004 33.9915 4.81754 34.6689C7.4326 36.5 11.1217 36.5 18.5 36.5H27.5C34.8783 36.5 38.5674 36.5 41.1825 34.6689C42.15 33.9915 42.9915 33.15 43.6689 32.1825C45.5 29.5674 45.5 25.8783 45.5 18.5"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M38.3663 2.19691C39.037 1.47027 39.3723 1.10696 39.7287 0.895034C40.5885 0.383683 41.6472 0.367782 42.5213 0.85309C42.8836 1.05422 43.2292 1.40731 43.9205 2.11349C44.6118 2.81966 44.9575 3.17275 45.1544 3.54283C45.6294 4.43581 45.6139 5.51731 45.1133 6.39563C44.9058 6.75964 44.5502 7.1022 43.8389 7.78731L35.3756 15.9389C34.0276 17.2372 33.3536 17.8863 32.5113 18.2154C31.6689 18.5444 30.7429 18.5202 28.8908 18.4717L28.6388 18.4651C28.075 18.4504 27.7931 18.443 27.6292 18.257C27.4654 18.0711 27.4877 17.7839 27.5325 17.2096L27.5568 16.8977C27.6827 15.2812 27.7457 14.4729 28.0613 13.7464C28.377 13.0199 28.9215 12.4299 30.0105 11.2501L38.3663 2.19691Z"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M28.9754 45.5L28.033 44.5576C25.9084 42.433 25.3817 39.1874 26.7254 36.5"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M16.2512 45.5L17.1936 44.5576C19.3181 42.433 19.8448 39.1874 18.5012 36.5"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M11.75 45.5H34.25"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                        />
                        <path
                          d="M14 18.5H29.75"
                          stroke="#343637"
                          stroke-width="0.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="course-modules-right">
                      <h3>You are yet to create any Practice Question </h3>
                      <p>
                        When you have added a Practice question, it will appear
                        here
                      </p>
                      <Link to="/create-pratice-question">Create Practice Question</Link>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
