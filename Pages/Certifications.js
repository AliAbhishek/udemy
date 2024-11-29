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

export default function Certifications() {
  const [show, setShow] = useState(false);
  const [showCreditUser, setShowCreditUser] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreditClose = () => setShowCreditUser(false);
  const handleCreditShow = () => setShowCreditUser(true);
  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2>Summary</h2>
                  <div>
                    <Link to="/new-certifications">Add New Certification</Link>
                  </div>
                </div>
              </Col>
              <Col xxl={12} xl={12} lg={12}>
                <div className="dashbox-inner-wrap">
                  <Row>
                    <Col xxl={6} xl={6} lg={6} className="mb-3">
                      <div className="dash-inner-boxes">
                        <div className="user-icon-se">
                          <svg
                            width="36"
                            height="42"
                            viewBox="0 0 36 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="36"
                              height="42"
                              rx="8"
                              fill="#E8EFF2"
                            />
                            <path
                              d="M18 24L18 25.5"
                              stroke="#343637"
                              stroke-width="0.9375"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 20L9.15288 22.8633C9.31714 26.477 9.39927 28.2839 10.5588 29.3919C11.7184 30.5 13.5272 30.5 17.1446 30.5H18.8554C22.4728 30.5 24.2816 30.5 25.4412 29.3919C26.6007 28.2839 26.6829 26.477 26.8471 22.8633L27 20"
                              stroke="#343637"
                              stroke-width="0.9375"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.84718 19.4431C10.5465 22.6744 14.3792 24 18 24C21.6208 24 25.4535 22.6744 27.1528 19.4431C27.964 17.9006 27.3498 15 25.352 15H10.648C8.65023 15 8.03603 17.9006 8.84718 19.4431Z"
                              stroke="#343637"
                              stroke-width="0.9375"
                            />
                            <path
                              d="M21.9999 15L21.9116 14.6909C21.4716 13.1509 21.2516 12.3809 20.7278 11.9404C20.204 11.5 19.5083 11.5 18.1168 11.5H17.8829C16.4915 11.5 15.7958 11.5 15.272 11.9404C14.7482 12.3809 14.5282 13.1509 14.0882 14.6909L13.9999 15"
                              stroke="#343637"
                              stroke-width="0.9375"
                            />
                          </svg>

                          <Form.Select aria-label="Default select example">
                            <option>This Week</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </div>
                        <div className="row mt-3">
                          <Col lg={6}>
                            <div className="left-session">
                              <p>Total Certitifcations</p>
                              <h2>721</h2>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="left-session">
                              <p>Completion Rate</p>
                              <h2>45%</h2>
                            </div>
                          </Col>
                        </div>
                      </div>
                    </Col>
                    <Col xxl={6} xl={6} lg={6} className="mb-3">
                      <div className="dash-inner-boxes">
                        <div className="user-icon-se">
                          <svg
                            width="36"
                            height="42"
                            viewBox="0 0 36 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="36"
                              height="42"
                              rx="8"
                              fill="#E8EFF2"
                            />
                            <path
                              d="M18 24L18 25.5"
                              stroke="#343637"
                              stroke-width="0.9375"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9 20L9.15288 22.8633C9.31714 26.477 9.39927 28.2839 10.5588 29.3919C11.7184 30.5 13.5272 30.5 17.1446 30.5H18.8554C22.4728 30.5 24.2816 30.5 25.4412 29.3919C26.6007 28.2839 26.6829 26.477 26.8471 22.8633L27 20"
                              stroke="#343637"
                              stroke-width="0.9375"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M8.84718 19.4431C10.5465 22.6744 14.3792 24 18 24C21.6208 24 25.4535 22.6744 27.1528 19.4431C27.964 17.9006 27.3498 15 25.352 15H10.648C8.65023 15 8.03603 17.9006 8.84718 19.4431Z"
                              stroke="#343637"
                              stroke-width="0.9375"
                            />
                            <path
                              d="M21.9999 15L21.9116 14.6909C21.4716 13.1509 21.2516 12.3809 20.7278 11.9404C20.204 11.5 19.5083 11.5 18.1168 11.5H17.8829C16.4915 11.5 15.7958 11.5 15.272 11.9404C14.7482 12.3809 14.5282 13.1509 14.0882 14.6909L13.9999 15"
                              stroke="#343637"
                              stroke-width="0.9375"
                            />
                          </svg>

                          <Form.Select aria-label="Default select example">
                            <option>This Week</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </Form.Select>
                        </div>
                        <div className="row mt-3">
                          <Col lg={6}>
                            <div className="left-session">
                              <p>Mock Exam Performance</p>
                              <h2> 45%</h2>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="left-session">
                              <p>User Engagements</p>
                              <h2>1200 Views</h2>
                            </div>
                          </Col>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
        </Container>

        <Container fluid className="mb-5">
          <div className="filters">
            <div className="inner-filter-field">
              <div className="user-search">
                <h2>List of Certifications </h2>
                {/* <div className="drop-down">
                  <div className="select-box">
                    <Form.Select aria-label="Default select example">
                      <option>10</option>
                      <option value="1">9</option>
                    </Form.Select>
                  </div>
                </div> */}
                <div className="search-tab">
                  <div className="input-search">
                    <Form>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control type="text" placeholder="Search" />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="short-by">
                    <Form.Select aria-label="Default select example">
                      <option>Sort by</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                <Table size="sm" className="table-cmn">
                  <thead>
                    <tr className="border-none">
                      <th className="id-field">Name</th>
                      <th className="id-field">Description</th>
                      <th className="id-field">Duration</th>
                      <th className="id-field">Professional Body </th>

                      <th className="id-field">Action</th>
                    </tr>
                  </thead>
                  <tr style={{ height: "10px", background: "transparent" }} />{" "}
                  {/* Spacer row */}
                  <tbody>
                    <tr>
                      <td>
                        <Link to="#">
                          <div className="first-user">
                            {/* <Link to="/expert-details"> John Smith</Link> */}
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <p>AWS Certified Solutions </p>
                                <p>Architect - Associate</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        Comprehensive certification for
                        <br /> AWS cloud architecture
                      </td>
                      <td>3 months</td>
                      <td>Microsoft </td>
                      <td>
                        <div className="action user-management ">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <div className="drop-pro-view">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53977 9.16675 9.16667 9.53984 9.16667 10.0001C9.16667 10.4603 9.53977 10.8334 10 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.16666 10.8334C4.6269 10.8334 4.99999 10.4603 4.99999 10.0001C4.99999 9.53984 4.6269 9.16675 4.16666 9.16675C3.70642 9.16675 3.33333 9.53984 3.33333 10.0001C3.33333 10.4603 3.70642 10.8334 4.16666 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <div className="my-profile">
                                <Dropdown.Item
                                  href="#/action-3"
                                  onClick={handleCreditShow}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.9459 2.17354C16.5332 1.58627 16.8268 1.29264 17.1521 1.15222C17.6208 0.949913 18.1521 0.949913 18.6208 1.15222C18.9461 1.29264 19.2397 1.58627 19.827 2.17354C20.4142 2.76081 20.7079 3.05444 20.8483 3.37974C21.0506 3.84838 21.0506 4.37973 20.8483 4.84838C20.7079 5.17367 20.4142 5.46731 19.827 6.05458L14.8054 11.0762C13.5682 12.3134 12.9496 12.932 12.1748 13.2985C11.4 13.665 10.5294 13.7509 8.78824 13.9227L8.00001 14.0005L8.07778 13.2123C8.24959 11.4711 8.33549 10.6005 8.70202 9.82569C9.06854 9.05091 9.68714 8.43232 10.9243 7.19513L15.9459 2.17354Z"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M5.00001 14H2.75001C1.78351 14 1.00001 14.7835 1.00001 15.75C1.00001 16.7165 1.78351 17.5 2.75001 17.5H12.25C13.2165 17.5 14 18.2835 14 19.25C14 20.2165 13.2165 21 12.25 21H10"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Edit Certification
                                </Dropdown.Item>
                              </div>
                              <Dropdown.Divider />
                              <div className="my-profile">
                                <Dropdown.Item href="/" className="text-danger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M1 4.5H19M14.0557 4.5L13.3731 3.09173C12.9196 2.15626 12.6928 1.68852 12.3017 1.39681C12.215 1.3321 12.1231 1.27454 12.027 1.2247C11.5939 1 11.0741 1 10.0345 1C8.96883 1 8.43598 1 7.99568 1.23412C7.8981 1.28601 7.80498 1.3459 7.71729 1.41317C7.32164 1.7167 7.10063 2.20155 6.65861 3.17126L6.05292 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M7.5 15.5L7.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M12.5 15.5L12.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                  </svg>
                                  Delete Permanently
                                </Dropdown.Item>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="#">
                          <div className="first-user">
                            {/* <Link to="/expert-details"> John Smith</Link> */}
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <p>AWS Certified Solutions </p>
                                <p>Architect - Associate</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        Comprehensive certification for
                        <br /> AWS cloud architecture
                      </td>
                      <td>3 months</td>
                      <td>Microsoft </td>
                      <td>
                        <div className="action user-management ">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <div className="drop-pro-view">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53977 9.16675 9.16667 9.53984 9.16667 10.0001C9.16667 10.4603 9.53977 10.8334 10 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.16666 10.8334C4.6269 10.8334 4.99999 10.4603 4.99999 10.0001C4.99999 9.53984 4.6269 9.16675 4.16666 9.16675C3.70642 9.16675 3.33333 9.53984 3.33333 10.0001C3.33333 10.4603 3.70642 10.8334 4.16666 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <div className="my-profile">
                                <Dropdown.Item
                                  href="#/action-3"
                                  onClick={handleCreditShow}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.9459 2.17354C16.5332 1.58627 16.8268 1.29264 17.1521 1.15222C17.6208 0.949913 18.1521 0.949913 18.6208 1.15222C18.9461 1.29264 19.2397 1.58627 19.827 2.17354C20.4142 2.76081 20.7079 3.05444 20.8483 3.37974C21.0506 3.84838 21.0506 4.37973 20.8483 4.84838C20.7079 5.17367 20.4142 5.46731 19.827 6.05458L14.8054 11.0762C13.5682 12.3134 12.9496 12.932 12.1748 13.2985C11.4 13.665 10.5294 13.7509 8.78824 13.9227L8.00001 14.0005L8.07778 13.2123C8.24959 11.4711 8.33549 10.6005 8.70202 9.82569C9.06854 9.05091 9.68714 8.43232 10.9243 7.19513L15.9459 2.17354Z"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M5.00001 14H2.75001C1.78351 14 1.00001 14.7835 1.00001 15.75C1.00001 16.7165 1.78351 17.5 2.75001 17.5H12.25C13.2165 17.5 14 18.2835 14 19.25C14 20.2165 13.2165 21 12.25 21H10"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Edit Certification
                                </Dropdown.Item>
                              </div>
                              <Dropdown.Divider />
                              <div className="my-profile">
                                <Dropdown.Item href="/" className="text-danger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M1 4.5H19M14.0557 4.5L13.3731 3.09173C12.9196 2.15626 12.6928 1.68852 12.3017 1.39681C12.215 1.3321 12.1231 1.27454 12.027 1.2247C11.5939 1 11.0741 1 10.0345 1C8.96883 1 8.43598 1 7.99568 1.23412C7.8981 1.28601 7.80498 1.3459 7.71729 1.41317C7.32164 1.7167 7.10063 2.20155 6.65861 3.17126L6.05292 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M7.5 15.5L7.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M12.5 15.5L12.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                  </svg>
                                  Delete Permanently
                                </Dropdown.Item>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="#">
                          <div className="first-user">
                            {/* <Link to="/expert-details"> John Smith</Link> */}
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <p>AWS Certified Solutions </p>
                                <p>Architect - Associate</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        Comprehensive certification for
                        <br /> AWS cloud architecture
                      </td>
                      <td>3 months</td>
                      <td>Microsoft </td>
                      <td>
                        <div className="action user-management ">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <div className="drop-pro-view">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53977 9.16675 9.16667 9.53984 9.16667 10.0001C9.16667 10.4603 9.53977 10.8334 10 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.16666 10.8334C4.6269 10.8334 4.99999 10.4603 4.99999 10.0001C4.99999 9.53984 4.6269 9.16675 4.16666 9.16675C3.70642 9.16675 3.33333 9.53984 3.33333 10.0001C3.33333 10.4603 3.70642 10.8334 4.16666 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <div className="my-profile">
                                <Dropdown.Item
                                  href="#/action-3"
                                  onClick={handleCreditShow}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.9459 2.17354C16.5332 1.58627 16.8268 1.29264 17.1521 1.15222C17.6208 0.949913 18.1521 0.949913 18.6208 1.15222C18.9461 1.29264 19.2397 1.58627 19.827 2.17354C20.4142 2.76081 20.7079 3.05444 20.8483 3.37974C21.0506 3.84838 21.0506 4.37973 20.8483 4.84838C20.7079 5.17367 20.4142 5.46731 19.827 6.05458L14.8054 11.0762C13.5682 12.3134 12.9496 12.932 12.1748 13.2985C11.4 13.665 10.5294 13.7509 8.78824 13.9227L8.00001 14.0005L8.07778 13.2123C8.24959 11.4711 8.33549 10.6005 8.70202 9.82569C9.06854 9.05091 9.68714 8.43232 10.9243 7.19513L15.9459 2.17354Z"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M5.00001 14H2.75001C1.78351 14 1.00001 14.7835 1.00001 15.75C1.00001 16.7165 1.78351 17.5 2.75001 17.5H12.25C13.2165 17.5 14 18.2835 14 19.25C14 20.2165 13.2165 21 12.25 21H10"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Edit Certification
                                </Dropdown.Item>
                              </div>
                              <Dropdown.Divider />
                              <div className="my-profile">
                                <Dropdown.Item href="/" className="text-danger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M1 4.5H19M14.0557 4.5L13.3731 3.09173C12.9196 2.15626 12.6928 1.68852 12.3017 1.39681C12.215 1.3321 12.1231 1.27454 12.027 1.2247C11.5939 1 11.0741 1 10.0345 1C8.96883 1 8.43598 1 7.99568 1.23412C7.8981 1.28601 7.80498 1.3459 7.71729 1.41317C7.32164 1.7167 7.10063 2.20155 6.65861 3.17126L6.05292 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M7.5 15.5L7.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M12.5 15.5L12.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                  </svg>
                                  Delete Permanently
                                </Dropdown.Item>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <Link to="#">
                          <div className="first-user">
                            {/* <Link to="/expert-details"> John Smith</Link> */}
                            <div className="d-flex align-items-center gap-2">
                              <div>
                                <p>AWS Certified Solutions </p>
                                <p>Architect - Associate</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td>
                        Comprehensive certification for
                        <br /> AWS cloud architecture
                      </td>
                      <td>3 months</td>
                      <td>Microsoft </td>
                      <td>
                        <div className="action user-management ">
                          <Dropdown>
                            <Dropdown.Toggle
                              variant="success"
                              id="dropdown-basic"
                            >
                              <div className="drop-pro-view">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                >
                                  <path
                                    d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10.0001C10.8333 9.53984 10.4602 9.16675 10 9.16675C9.53977 9.16675 9.16667 9.53984 9.16667 10.0001C9.16667 10.4603 9.53977 10.8334 10 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M15.8333 10.8334C16.2936 10.8334 16.6667 10.4603 16.6667 10.0001C16.6667 9.53984 16.2936 9.16675 15.8333 9.16675C15.3731 9.16675 15 9.53984 15 10.0001C15 10.4603 15.3731 10.8334 15.8333 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M4.16666 10.8334C4.6269 10.8334 4.99999 10.4603 4.99999 10.0001C4.99999 9.53984 4.6269 9.16675 4.16666 9.16675C3.70642 9.16675 3.33333 9.53984 3.33333 10.0001C3.33333 10.4603 3.70642 10.8334 4.16666 10.8334Z"
                                    stroke="#343637"
                                    stroke-width="1.66667"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              <div className="my-profile">
                                <Dropdown.Item
                                  href="#/action-3"
                                  onClick={handleCreditShow}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M15.9459 2.17354C16.5332 1.58627 16.8268 1.29264 17.1521 1.15222C17.6208 0.949913 18.1521 0.949913 18.6208 1.15222C18.9461 1.29264 19.2397 1.58627 19.827 2.17354C20.4142 2.76081 20.7079 3.05444 20.8483 3.37974C21.0506 3.84838 21.0506 4.37973 20.8483 4.84838C20.7079 5.17367 20.4142 5.46731 19.827 6.05458L14.8054 11.0762C13.5682 12.3134 12.9496 12.932 12.1748 13.2985C11.4 13.665 10.5294 13.7509 8.78824 13.9227L8.00001 14.0005L8.07778 13.2123C8.24959 11.4711 8.33549 10.6005 8.70202 9.82569C9.06854 9.05091 9.68714 8.43232 10.9243 7.19513L15.9459 2.17354Z"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linejoin="round"
                                    />
                                    <path
                                      d="M5.00001 14H2.75001C1.78351 14 1.00001 14.7835 1.00001 15.75C1.00001 16.7165 1.78351 17.5 2.75001 17.5H12.25C13.2165 17.5 14 18.2835 14 19.25C14 20.2165 13.2165 21 12.25 21H10"
                                      stroke="#777879"
                                      stroke-width="1.0625"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                    />
                                  </svg>
                                  Edit Certification
                                </Dropdown.Item>
                              </div>
                              <Dropdown.Divider />
                              <div className="my-profile">
                                <Dropdown.Item href="/" className="text-danger">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="22"
                                    viewBox="0 0 20 22"
                                    fill="none"
                                  >
                                    <path
                                      d="M17.5 4.5L16.8803 14.5251C16.7219 17.0864 16.6428 18.3671 16.0008 19.2879C15.6833 19.7431 15.2747 20.1273 14.8007 20.416C13.8421 21 12.559 21 9.99274 21C7.42312 21 6.1383 21 5.17905 20.4149C4.7048 20.1257 4.296 19.7408 3.97868 19.2848C3.33688 18.3626 3.25945 17.0801 3.10461 14.5152L2.5 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M1 4.5H19M14.0557 4.5L13.3731 3.09173C12.9196 2.15626 12.6928 1.68852 12.3017 1.39681C12.215 1.3321 12.1231 1.27454 12.027 1.2247C11.5939 1 11.0741 1 10.0345 1C8.96883 1 8.43598 1 7.99568 1.23412C7.8981 1.28601 7.80498 1.3459 7.71729 1.41317C7.32164 1.7167 7.10063 2.20155 6.65861 3.17126L6.05292 4.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M7.5 15.5L7.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                    <path
                                      d="M12.5 15.5L12.5 9.5"
                                      stroke="#BB1111"
                                      stroke-width="0.703125"
                                      stroke-linecap="round"
                                    />
                                  </svg>
                                  Delete Permanently
                                </Dropdown.Item>
                              </div>
                            </Dropdown.Menu>
                          </Dropdown>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <div className="pagination-section">
                  <div className="showing-user">
                    <p>Showing 1 to 10 of 50 entries</p>
                  </div>
                  <div className="pagination-block">
                    <Pagination>
                      <Pagination.First />
                      <Pagination.Prev />
                      <Pagination.Item>{1}</Pagination.Item>
                      <Pagination.Item>{2}</Pagination.Item>
                      <Pagination.Item active>{3}</Pagination.Item>
                      <Pagination.Item>{4}</Pagination.Item>
                      <Pagination.Item>{5}</Pagination.Item>
                      <Pagination.Next />
                      <Pagination.Last />
                    </Pagination>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pb-4"></div>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="p-5">
          <div className="user-detail-modal">
            <h2>Reset Password Successful</h2>
            <p>
              An email with instructions to reset the password for the user has
              been successfully sent. Please instruct the user to check their
              email inbox (and spam folder) for further instructions on
              resetting their password.
            </p>
          </div>
          <div className="modal-comn-btns mb-0">
            <button className="theme-btn" onClick={handleClose}>
              Return to dashboard
            </button>
            {/* <button className="untheme-btn" onClick={handleClose}>Save Changes</button> */}
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" show={showCreditUser} onHide={handleCreditClose}>
        <Modal.Body className="p-5">
          <div className="user-detail-modal">
            <h2>Credit User Rewards</h2>
            <p>
              Please ensure that the reward amount is accurate and corresponds
              to the user's achievements on the platform. Once credited, the
              reward cannot be undone.
            </p>
            <div className="user-profile-details in-pop-details">
              <div className="">
                <img src={require("../Assets/Images/banner-sign.png")} />
                <div className="profile-details-contain">
                  <div>
                    <div>
                      <p>FULL NAME</p>
                      <div>John Doe</div>
                    </div>

                    <div>
                      <p>EMAIL</p>
                      <div> john.doe@example.com</div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>PHONE NUMBER</p>
                      <div>+2347033083810</div>
                    </div>
                    <div className="w-icon-set">
                      <img src={require("../Assets/Images/XP-BALANCE.png")} />
                      <div>
                        <p>XP BALANCE</p>
                        <div> 600</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="commn-form-card p-0">
              <div className="credit-user-h3">
                <h3>Reward Details</h3>
              </div>
              <Row>
                <Col lg={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Reward Type:</Form.Label>
                      <Form.Select aria-label="Default select example">
                        <option>Select type</option>
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
                      <Form.Label>Amount:</Form.Label>
                      <Form.Control type="text" placeholder="Enter amount" />
                    </Form.Group>
                  </Form>
                </Col>
                <Col lg={12}>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>
                        Reason: <span>(Optional)</span>
                      </Form.Label>
                      <Form.Control
                        as="textarea"
                        placeholder="Enter reason for crediting if any"
                        rows={3}
                      />
                    </Form.Group>
                  </Form>
                </Col>
              </Row>
            </div>
          </div>
          <div className="modal-comn-btns mb-0 gap-4">
            <button className="theme-btn w-100" onClick={handleCreditClose}>
              Credit User
            </button>
            <button className="untheme-btn w-100" onClick={handleCreditClose}>
              Cancel
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
