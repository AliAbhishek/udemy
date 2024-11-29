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

export default function NotificationSettings() {
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
              <Col lg={12} className="mb-5">
                <div className="commn-details-card">
                  <div className="profile-details-tabs">
                    <div className="details-tabs-left">
                      <div className="d-flex justify-content-center">
                        <div className="pro-upld-image">
                          <img
                            src={require("../Assets/Images/user.svg").default}
                          />
                          <input type="file" />

                          <div>
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 22 22"
                              fill="none"
                            >
                              <path
                                d="M21 5.75C21.4142 5.75 21.75 5.41421 21.75 5C21.75 4.58579 21.4142 4.25 21 4.25V5.75ZM13 4.25C12.5858 4.25 12.25 4.58579 12.25 5C12.25 5.41421 12.5858 5.75 13 5.75V4.25ZM17.75 1C17.75 0.585786 17.4142 0.25 17 0.25C16.5858 0.25 16.25 0.585786 16.25 1H17.75ZM16.25 9C16.25 9.41421 16.5858 9.75 17 9.75C17.4142 9.75 17.75 9.41421 17.75 9H16.25ZM21 4.25H17V5.75H21V4.25ZM17 4.25H13V5.75H17V4.25ZM16.25 1V5H17.75V1H16.25ZM16.25 5V9H17.75V5H16.25Z"
                                fill="#E8EFF2"
                              />
                              <path
                                d="M10.5 2C6.02166 2 3.78249 2 2.39124 3.39124C1 4.78249 1 7.02166 1 11.5C1 15.9783 1 18.2175 2.39124 19.6088C3.78249 21 6.02166 21 10.5 21C14.9783 21 17.2175 21 18.6088 19.6088C20 18.2175 20 15.9783 20 11.5V11"
                                stroke="#E8EFF2"
                                stroke-width="1.5"
                                stroke-linecap="round"
                              />
                              <path
                                d="M4 20C8.20998 15.2487 12.9412 8.9475 20 13.6734"
                                stroke="#E8EFF2"
                                stroke-width="1.5"
                              />
                            </svg>
                          </div>
                          <span></span>
                        </div>
                      </div>
                      <ul className="mt-3">
                        <li>
                          <Link to="/account-settings">Account Settings</Link>
                        </li>
                        <li className="active">
                          <Link to="/notification-settings">
                            Notification Settings
                          </Link>
                        </li>
                        {/* <li>
                          {" "}
                          <Link to="/settings-support">Support</Link>
                        </li> */}
                      </ul>
                    </div>
                    <div className="details-tabs-right">
                      <h2>Notification Settings</h2>
                      <hr />
                      <Col lg={12}>
                        <div className="commn-form-card p-0">
                          <Row>
                            <Col lg={12}>
                              <div className="heading-para-cmn d-flex justify-content-between">
                                <h4>Type</h4>
                                <h4>Email</h4>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="settings-preferences-toggle">
                                <Form>
                                  <ul>
                                    <li>
                                      <Form.Label>Course Updates</Form.Label>
                                      <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                      />
                                    </li>
                                    <li>
                                      <Form.Label>
                                        Community Engagement
                                      </Form.Label>
                                      <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                      />
                                    </li>
                                    <li>
                                      <Form.Label>
                                        Community Activity
                                      </Form.Label>
                                      <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                      />
                                    </li>{" "}
                                    <li>
                                      <Form.Label>Discussion Alerts</Form.Label>
                                      <Form.Check // prettier-ignore
                                        type="switch"
                                        id="custom-switch"
                                      />
                                    </li>
                                  </ul>
                                </Form>
                              </div>
                            </Col>

                            <Col lg={12} className="mb-5">
                              <div className="commn-form-btns mt-0">
                                <button className="theme-btn">
                                  Save Changes
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
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
