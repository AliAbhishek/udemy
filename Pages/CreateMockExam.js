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

export default function CreateMockExam() {
  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2 className="mb-0">Create Mock Exam</h2>
                  <div>
                    <Link to="">Create</Link>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="commn-form-card mb-5">
                  <h2>Exam Details:</h2>
                  <Row>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Topic Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter topic name"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Section (optional)</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Select affiliated section</option>
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
                          <Form.Label>Number of Questions:</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter number of questions"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Passing Score</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter passing score"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={12}>
                      <div className="user-search">
                        <h2 className="mb-0">Multiple Choice Questions </h2>
                        {/* <div className="drop-down">
                  <div className="select-box">
                    <Form.Select aria-label="Default select example">
                      <option>10</option>
                      <option value="1">9</option>
                    </Form.Select>
                  </div>
                </div> */}

                        <div className="page-h-with-btn">
                          <div>
                            <button>Add Question</button>
                          </div>
                        </div>
                      </div>

                      <div class="table-responsive">
                        <Table size="sm" className="table-cmn">
                          <thead>
                            <tr className="border-none">
                              <th className="id-field">S/N</th>
                              <th className="id-field">Question</th>
                              <th className="id-field">Option 1</th>
                              <th className="id-field">Option 2</th>
                              <th className="id-field">Option 3</th>
                              <th className="id-field">Option 4</th>
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
                                <Link to="#">
                                  <div className="first-user">
                                    {/* <Link to="/expert-details"> John Smith</Link> */}
                                    <div className="d-flex align-items-center gap-2">
                                      <div>
                                        <p>1</p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </td>
                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0">What is the primary </p>
                                    <p className="mb-0">
                                      purpose of Amazon S3?
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td className="text-success">
                                <b>Introduction to AWS</b>
                              </td>
                              <td>Compute</td>
                              <td>Compute</td>

                              <td>Networking</td>

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
                    </Col>
                    <Col lg={12}>
                      <div className="user-search">
                        <h2 className="mb-0">Theory Questions</h2>
                        {/* <div className="drop-down">
                  <div className="select-box">
                    <Form.Select aria-label="Default select example">
                      <option>10</option>
                      <option value="1">9</option>
                    </Form.Select>
                  </div>
                </div> */}

                        <div className="page-h-with-btn">
                          <div>
                            <button>Add Question</button>
                          </div>
                        </div>
                      </div>

                      <div class="table-responsive">
                        <Table size="sm" className="table-cmn">
                          <thead>
                            <tr className="border-none">
                              <th className="id-field">S/N</th>
                              <th className="id-field">Question</th>
                              <th className="id-field">Detailed Explanation</th>
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
                                <Link to="#">
                                  <div className="first-user">
                                    {/* <Link to="/expert-details"> John Smith</Link> */}
                                    <div className="d-flex align-items-center gap-2">
                                      <div>
                                        <p>AWS Basics</p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </td>

                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0">
                                      Explain the concept of IAM{" "}
                                    </p>
                                    <p className="mb-0">
                                      (Identity and Access Management) in AWS.
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0 text-success">
                                      <b>
                                        {" "}
                                        IAM in AWS allows you to manage users,
                                        groups, and
                                      </b>
                                    </p>
                                    <p className="mb-0 text-success">
                                      <b>
                                        {" "}
                                        permissions to securely control access
                                        to AWS services.
                                      </b>
                                    </p>
                                  </div>
                                </div>
                              </td>

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
                                <Link to="#">
                                  <div className="first-user">
                                    {/* <Link to="/expert-details"> John Smith</Link> */}
                                    <div className="d-flex align-items-center gap-2">
                                      <div>
                                        <p>AWS Basics</p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </td>

                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0">
                                      Explain the concept of IAM{" "}
                                    </p>
                                    <p className="mb-0">
                                      (Identity and Access Management) in AWS.
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0 text-success">
                                      <b>
                                        {" "}
                                        IAM in AWS allows you to manage users,
                                        groups, and
                                      </b>
                                    </p>
                                    <p className="mb-0 text-success">
                                      <b>
                                        {" "}
                                        permissions to securely control access
                                        to AWS services.
                                      </b>
                                    </p>
                                  </div>
                                </div>
                              </td>

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
                                <Link to="#">
                                  <div className="first-user">
                                    {/* <Link to="/expert-details"> John Smith</Link> */}
                                    <div className="d-flex align-items-center gap-2">
                                      <div>
                                        <p>AWS Basics</p>
                                      </div>
                                    </div>
                                  </div>
                                </Link>
                              </td>

                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0">
                                      Explain the concept of IAM{" "}
                                    </p>
                                    <p className="mb-0">
                                      (Identity and Access Management) in AWS.
                                    </p>
                                  </div>
                                </div>
                              </td>

                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0 text-success">
                                      <b>
                                        {" "}
                                        IAM in AWS allows you to manage users,
                                        groups, and
                                      </b>
                                    </p>
                                    <p className="mb-0 text-success">
                                      <b>
                                        {" "}
                                        permissions to securely control access
                                        to AWS services.
                                      </b>
                                    </p>
                                  </div>
                                </div>
                              </td>

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
