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

export default function AddNewSection() {
  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2 className="mb-0">Add New Section</h2>
                  <div>
                    <button>Save Section</button>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="commn-form-card">
                  <Row>
                    <Col lg={6}>
                      <h2>Section Information</h2>
                    </Col>
                    <Col lg={6}>
                      <h2>Add New Lesson</h2>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Row>
                        <Col lg={12}>
                          <Form>
                            <Form.Group
                              className="mb-3"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Section Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter section name"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={12}>
                          <div className="user-search">
                            <h2 className="mb-0">Lesson </h2>
                          </div>

                          <div class="table-responsive table-border-none">
                            <Table size="sm" className="table-cmn">
                              <tr
                                style={{
                                  height: "10px",
                                  background: "transparent",
                                }}
                              />{" "}
                              {/* Spacer row */}
                              <tbody>
                                <tr>
                                  <td>01</td>
                                  <td>
                                    <div className="first-user">
                                      {/* <Link to="/expert-details"> John Smith</Link> */}
                                      <div className="d-flex align-items-center gap-2">
                                        <img
                                          src={require("../Assets/Images/banner-sign.png")}
                                        />
                                        <div>
                                          <p>Data Science </p>
                                          <p>Basics</p>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="edit-lesson-action">
                                      <button>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="22"
                                          height="23"
                                          viewBox="0 0 22 23"
                                          fill="none"
                                        >
                                          <path
                                            d="M15.9459 2.67354C16.5332 2.08627 16.8268 1.79264 17.1521 1.65222C17.6208 1.44991 18.1521 1.44991 18.6208 1.65222C18.946 1.79264 19.2397 2.08627 19.8269 2.67354C20.4142 3.26081 20.7079 3.55444 20.8483 3.87974C21.0506 4.34838 21.0506 4.87973 20.8483 5.34838C20.7079 5.67367 20.4142 5.96731 19.8269 6.55458L14.8054 11.5762C13.5682 12.8134 12.9496 13.432 12.1748 13.7985C11.4 14.165 10.5294 14.2509 8.78823 14.4227L8 14.5005L8.07778 13.7123C8.24958 11.9711 8.33549 11.1005 8.70201 10.3257C9.06854 9.55091 9.68713 8.93232 10.9243 7.69513L15.9459 2.67354Z"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M5 14.5H2.75C1.7835 14.5 1 15.2835 1 16.25C1 17.2165 1.7835 18 2.75 18H12.25C13.2165 18 14 18.7835 14 19.75C14 20.7165 13.2165 21.5 12.25 21.5H10"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="edit-lesson-delt">
                                      <button>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="21"
                                          viewBox="0 0 20 21"
                                          fill="none"
                                        >
                                          <path
                                            d="M17.5 4L16.8803 14.0251C16.7219 16.5864 16.6428 17.8671 16.0008 18.7879C15.6833 19.2431 15.2747 19.6273 14.8007 19.916C13.8421 20.5 12.559 20.5 9.99274 20.5C7.42312 20.5 6.1383 20.5 5.17905 19.9149C4.7048 19.6257 4.296 19.2408 3.97868 18.7848C3.33688 17.8626 3.25945 16.5801 3.10461 14.0152L2.5 4"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M7 10.2349H13"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M8.5 14.1543H11.5"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M1 4H19M14.0555 4L13.3729 2.59173C12.9194 1.65626 12.6926 1.18852 12.3015 0.896806C12.2148 0.8321 12.1229 0.774542 12.0268 0.724701C11.5937 0.5 11.0739 0.5 10.0343 0.5C8.96864 0.5 8.43579 0.5 7.99549 0.73412C7.89791 0.786008 7.80479 0.845896 7.7171 0.913168C7.32145 1.2167 7.10044 1.70155 6.65842 2.67126L6.05273 4"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td>02</td>
                                  <td>
                                    <div className="first-user">
                                      {/* <Link to="/expert-details"> John Smith</Link> */}
                                      <div className="d-flex align-items-center gap-2">
                                        <img
                                          src={require("../Assets/Images/banner-sign.png")}
                                        />
                                        <div>
                                          <p>Data Science </p>
                                          <p>Basics</p>
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="edit-lesson-action">
                                      <button>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="22"
                                          height="23"
                                          viewBox="0 0 22 23"
                                          fill="none"
                                        >
                                          <path
                                            d="M15.9459 2.67354C16.5332 2.08627 16.8268 1.79264 17.1521 1.65222C17.6208 1.44991 18.1521 1.44991 18.6208 1.65222C18.946 1.79264 19.2397 2.08627 19.8269 2.67354C20.4142 3.26081 20.7079 3.55444 20.8483 3.87974C21.0506 4.34838 21.0506 4.87973 20.8483 5.34838C20.7079 5.67367 20.4142 5.96731 19.8269 6.55458L14.8054 11.5762C13.5682 12.8134 12.9496 13.432 12.1748 13.7985C11.4 14.165 10.5294 14.2509 8.78823 14.4227L8 14.5005L8.07778 13.7123C8.24958 11.9711 8.33549 11.1005 8.70201 10.3257C9.06854 9.55091 9.68713 8.93232 10.9243 7.69513L15.9459 2.67354Z"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M5 14.5H2.75C1.7835 14.5 1 15.2835 1 16.25C1 17.2165 1.7835 18 2.75 18H12.25C13.2165 18 14 18.7835 14 19.75C14 20.7165 13.2165 21.5 12.25 21.5H10"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>
                                  <td>
                                    <div className="edit-lesson-delt">
                                      <button>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="21"
                                          viewBox="0 0 20 21"
                                          fill="none"
                                        >
                                          <path
                                            d="M17.5 4L16.8803 14.0251C16.7219 16.5864 16.6428 17.8671 16.0008 18.7879C15.6833 19.2431 15.2747 19.6273 14.8007 19.916C13.8421 20.5 12.559 20.5 9.99274 20.5C7.42312 20.5 6.1383 20.5 5.17905 19.9149C4.7048 19.6257 4.296 19.2408 3.97868 18.7848C3.33688 17.8626 3.25945 16.5801 3.10461 14.0152L2.5 4"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M7 10.2349H13"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M8.5 14.1543H11.5"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M1 4H19M14.0555 4L13.3729 2.59173C12.9194 1.65626 12.6926 1.18852 12.3015 0.896806C12.2148 0.8321 12.1229 0.774542 12.0268 0.724701C11.5937 0.5 11.0739 0.5 10.0343 0.5C8.96864 0.5 8.43579 0.5 7.99549 0.73412C7.89791 0.786008 7.80479 0.845896 7.7171 0.913168C7.32145 1.2167 7.10044 1.70155 6.65842 2.67126L6.05273 4"
                                            stroke="#BB1111"
                                            stroke-linecap="round"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
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
                              <Form.Label>Lesson Name</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter lesson name"
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
                              <Form.Label>Lesson Description</Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter lesson description"
                                rows={6}
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
                              <Form.Label>Video ID</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter lesson video ID"
                              />
                            </Form.Group>
                          </Form>
                        </Col>
                        <Col lg={12}>
                          <div className="commn-form-btns">
                            <button className="theme-btn">
                              Save and continue
                            </button>
                          </div>
                        </Col>
                      </Row>
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
