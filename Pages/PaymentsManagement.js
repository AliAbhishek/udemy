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

export default function PaymentsManagement() {
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
                  {/* <div>
                    <Link to="/new-course">Publish new course</Link>
                  </div> */}
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
                              d="M21 21C21 22.3807 19.8807 23.5 18.5 23.5C17.1193 23.5 16 22.3807 16 21C16 19.6193 17.1193 18.5 18.5 18.5C19.8807 18.5 21 19.6193 21 21Z"
                              stroke="#343637"
                            />
                            <path
                              d="M25.5 20.1415C25.1749 20.0944 24.841 20.0586 24.5 20.0347M12.5 21.9653C12.159 21.9415 11.8251 21.9056 11.5 21.8585"
                              stroke="#343637"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.5 28.5C17.1675 29.1224 15.4171 29.5 13.5 29.5C12.4341 29.5 11.4197 29.3833 10.5 29.1726C8.99957 28.8289 8.5 27.9264 8.5 26.386V15.614C8.5 14.6291 9.54003 13.9527 10.5 14.1726C11.4197 14.3833 12.4341 14.5 13.5 14.5C15.4171 14.5 17.1675 14.1224 18.5 13.5C19.8325 12.8776 21.5829 12.5 23.5 12.5C24.5659 12.5 25.5803 12.6167 26.5 12.8274C28.0817 13.1897 28.5 14.1204 28.5 15.614V26.386C28.5 27.3709 27.46 28.0473 26.5 27.8274C25.5803 27.6167 24.5659 27.5 23.5 27.5C21.5829 27.5 19.8325 27.8776 18.5 28.5Z"
                              stroke="#343637"
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
                              <p>Total Revenue</p>
                              <h2>
                                $50,000 <span>+12%</span>
                              </h2>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="left-session">
                              <p>Daily Revenue</p>
                              <h2>
                                $2,000 <span>12%</span>
                              </h2>
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
                              d="M21 21C21 22.3807 19.8807 23.5 18.5 23.5C17.1193 23.5 16 22.3807 16 21C16 19.6193 17.1193 18.5 18.5 18.5C19.8807 18.5 21 19.6193 21 21Z"
                              stroke="#343637"
                            />
                            <path
                              d="M25.5 20.1415C25.1749 20.0944 24.841 20.0586 24.5 20.0347M12.5 21.9653C12.159 21.9415 11.8251 21.9056 11.5 21.8585"
                              stroke="#343637"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.5 28.5C17.1675 29.1224 15.4171 29.5 13.5 29.5C12.4341 29.5 11.4197 29.3833 10.5 29.1726C8.99957 28.8289 8.5 27.9264 8.5 26.386V15.614C8.5 14.6291 9.54003 13.9527 10.5 14.1726C11.4197 14.3833 12.4341 14.5 13.5 14.5C15.4171 14.5 17.1675 14.1224 18.5 13.5C19.8325 12.8776 21.5829 12.5 23.5 12.5C24.5659 12.5 25.5803 12.6167 26.5 12.8274C28.0817 13.1897 28.5 14.1204 28.5 15.614V26.386C28.5 27.3709 27.46 28.0473 26.5 27.8274C25.5803 27.6167 24.5659 27.5 23.5 27.5C21.5829 27.5 19.8325 27.8776 18.5 28.5Z"
                              stroke="#343637"
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
                              <p>Coins Revenue</p>
                              <h2> $20,000</h2>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="left-session">
                              <p>XP Revenue</p>
                              <h2>$30,000</h2>
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
                <h2>Payment Transactions </h2>
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
                      <th className="id-field">User Name</th>
                      <th className="id-field">Type</th>
                      <th className="id-field">Amount</th>
                      <th className="id-field">Date </th>
                      <th className="id-field">Status</th>
                      <th className="id-field">Transaction ID</th>
                    </tr>
                  </thead>
                  <tr style={{ height: "10px", background: "transparent" }} />{" "}
                  {/* Spacer row */}
                  <tbody>
                    <tr>
                      <td>John Doe</td>
                      <td>Coins Purchase</td>
                      <td>$50</td>
                      <td>March 15, 2024</td>
                      <td>
                        <div className="Inactive">
                          <p>Inactive</p>
                        </div>
                      </td>
                      <td>1234567890</td>
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
