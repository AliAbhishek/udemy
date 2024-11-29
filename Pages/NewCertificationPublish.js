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

export default function NewCertificationPublish() {
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
                    <button>Publish</button>
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
                <div className="filters">
                  <div className="inner-filter-field">
                    <div className="user-search">
                      <h2>Syllabus Management </h2>

                      <div className="page-h-with-btn">
                        <div>
                          <button>Add New Topic</button>
                        </div>
                      </div>
                    </div>

                    <div class="table-responsive">
                      <Table size="sm" className="table-cmn">
                        <thead>
                          <tr className="border-none">
                            <th className="id-field">Topic Name</th>
                            <th className="id-field">Number of Sections</th>
                            <th className="id-field">Overall Duration</th>
                            <th className="id-field">Action</th>
                          </tr>
                        </thead>
                        <tr
                          style={{
                            height: "10px",
                            background: "transparent",
                          }}
                        ></tr>
                        {/* Spacer row */}
                        <tbody>
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
              </Col>
              <Col lg={12} className="mb-2">
                <div className="filters">
                  <div className="inner-filter-field">
                    <div className="user-search">
                      <h2>Mock Exam Management </h2>

                      <div className="page-h-with-btn">
                        <div>
                          <button>Create Mock Exam</button>
                        </div>
                      </div>
                    </div>

                    <div class="table-responsive">
                      <Table size="sm" className="table-cmn">
                        <thead>
                          <tr className="border-none">
                            <th className="id-field">Exam Name</th>
                            <th className="id-field">Section</th>
                            <th className="id-field">Questions</th>
                            <th className="id-field">Passing Score</th>
                            <th className="id-field">Action</th>
                          </tr>
                        </thead>
                        <tr
                          style={{
                            height: "10px",
                            background: "transparent",
                          }}
                        ></tr>
                        {/* Spacer row */}
                        <tbody>
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                          </tr>{" "}
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                          </tr>{" "}
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                          </tr>{" "}
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
              </Col>
              <Col lg={12} className="">
                <div className="filters">
                  <div className="inner-filter-field">
                    <div className="user-search">
                      <h2>Practice Question Management</h2>
                    </div>

                    <div class="table-responsive">
                      <Table size="sm" className="table-cmn">
                        <thead>
                          <tr className="border-none">
                            <th className="id-field">Exam Name</th>
                            <th className="id-field">Section</th>
                            <th className="id-field">Questions</th>
                            <th className="id-field">Passing Score</th>
                            <th className="id-field">Action</th>
                          </tr>
                        </thead>
                        <tr
                          style={{
                            height: "10px",
                            background: "transparent",
                          }}
                        ></tr>
                        {/* Spacer row */}
                        <tbody>
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                          </tr>{" "}
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                          </tr>{" "}
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
                          </tr>{" "}
                          <tr>
                            <td>
                              <Link to="">
                                <div className="first-user">
                                  <div>
                                    <p> Introduction to AWS</p>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>AWS Services & Tools</td>
                            <td>2</td>

                            <td>25 mins</td>
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
                                      <Dropdown.Item href="#/action-3">
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        href="/"
                                        className="text-danger"
                                      >
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
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
