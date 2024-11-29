import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Layout from "../Components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import moment from "moment";
import { Dropdown, Modal } from "react-bootstrap";

export default function ExpertDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { expertDetails } = useSelector((state) => state.creation);

  const [show, setShow] = useState(false);
  const [showSuspend, setSuspendShow] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSuspendClose = () => setSuspendShow(false);
  const handleSuspendShow = () => setSuspendShow(true);

  useEffect(() => {
    dispatch(AdminActions.getExpertProfile(id));
  }, [id, flag]);

  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="commn-details-card">
                  <div className="top-detail-user">
                    <div className="user-d-name">
                      <h2>
                        {expertDetails &&
                          expertDetails?.data?.first_name +
                            " " +
                            expertDetails?.data?.last_name}
                      </h2>
                      <div
                        className={`${
                          expertDetails?.data?.status == 2
                            ? "Inactive"
                            : "active"
                        }`}
                      >
                        {expertDetails &&
                          (expertDetails?.data?.status == 2
                            ? "In-Active"
                            : "Active")}
                      </div>
                      <div className="user-type">
                        User Type :{" "}
                        <span>
                          {expertDetails && expertDetails?.data?.role == 3
                            ? "Industry Expert"
                            : "User"}
                        </span>
                      </div>
                    </div>
                    {/* <div>
                      <Form.Select
                        onChange={(e) => handleAction(e)}
                        style={{ cursor: "pointer" }}
                        aria-label="Default select example"
                      >
                        <option>Actions</option>
                        <option value="1">Reset Password</option>
                        <option value="2">Edit profile</option>
                        <option value="3">Suspend Account</option>
                      </Form.Select>
                    </div> */}
                    <div className="action user-management ">
                      <Dropdown>
                        <Dropdown.Toggle  style={{background:"#165D7C"}}  id="dropdown-basic">
                          <div className="drop-pro-view">
                            {/* <svg
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
                            </svg> */}
                            Actions
                          </div>
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <div className="my-profile">
                            <Dropdown.Item
                              href="#/action-3"
                              onClick={async () => {
                                let res = await dispatch(
                                  AdminActions.resetPassword(
                                    expertDetails?.data?._id
                                  )
                                );
                                if (res?.payload?.data?.data?.status == 200) {
                                  handleShow();
                                }
                              }}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                              >
                                <path
                                  d="M10.0029 1H9.0062C5.72443 1 4.08355 1 2.92039 1.81382C2.49006 2.1149 2.11577 2.48891 1.81445 2.91891C1 4.08116 1 5.72077 1 9C1 12.2792 1 13.9188 1.81445 15.0811C2.11577 15.5111 2.49006 15.8851 2.92039 16.1862C4.08355 17 5.72443 17 9.0062 17H13.0093C16.2911 17 17.932 17 19.0951 16.1862C19.5254 15.8851 19.8997 15.5111 20.2011 15.0811C20.8156 14.2042 20.9663 13.0941 21 12"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M17 8.71428V10M17 8.71428C15.8432 8.71428 14.8241 8.14608 14.2263 7.28331M17 8.71428C18.1568 8.71428 19.1759 8.14608 19.7737 7.28331M17 2.28571C18.1569 2.28571 19.1761 2.854 19.7738 3.71688M17 2.28571C15.8431 2.28571 14.8239 2.854 14.2262 3.71688M17 2.28571V1M21 2.92857L19.7738 3.71688M13.0004 8.07143L14.2263 7.28331M13 2.92857L14.2262 3.71688M20.9996 8.07143L19.7737 7.28331M19.7738 3.71688C20.1273 4.22711 20.3333 4.84035 20.3333 5.5C20.3333 6.15973 20.1272 6.77304 19.7737 7.28331M14.2262 3.71688C13.8727 4.22711 13.6667 4.84035 13.6667 5.5C13.6667 6.15973 13.8728 6.77304 14.2263 7.28331"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                />
                                <path
                                  d="M10 14H12"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M11 17V21"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                />
                                <path
                                  d="M7.00003 21H15"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                />
                              </svg>
                              Reset Password
                            </Dropdown.Item>
                          </div>
                          <Dropdown.Divider />

                          <div
                            onClick={() => {
                              navigate(
                                `/new-expert/${expertDetails?.data?._id}`
                              );
                            }}
                            className="my-profile"
                          >
                            <Dropdown.Item>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="20"
                                viewBox="0 0 22 20"
                                fill="none"
                              >
                                <path
                                  d="M4.18007 13.2964C2.92249 14.0335 -0.374787 15.5386 1.63348 17.422C2.6145 18.342 3.7071 19 5.08077 19H12.9192C14.2929 19 15.3855 18.342 16.3665 17.422C18.3748 15.5386 15.0775 14.0335 13.8199 13.2964C10.8709 11.5679 7.12906 11.5679 4.18007 13.2964Z"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                />
                                <path
                                  d="M18.6221 2.56564C18.8457 2.32342 18.9574 2.20232 19.0762 2.13168C19.3628 1.96123 19.7157 1.95593 20.0071 2.1177C20.1279 2.18474 20.2431 2.30244 20.4735 2.53783C20.7039 2.77322 20.8192 2.89092 20.8848 3.01428C21.0431 3.31194 21.038 3.67244 20.8711 3.96521C20.8019 4.08655 20.6834 4.20073 20.4463 4.4291L17.6252 7.14629C17.1759 7.57906 16.9512 7.79545 16.6704 7.90512C16.3896 8.01479 16.081 8.00672 15.4636 7.99057L15.3796 7.98838C15.1917 7.98346 15.0977 7.98101 15.0431 7.91901C14.9885 7.85702 14.9959 7.7613 15.0108 7.56985L15.0189 7.4659C15.0609 6.92706 15.0819 6.65765 15.1871 6.41547C15.2923 6.17328 15.4738 5.97664 15.8368 5.58335L18.6221 2.56564Z"
                                  stroke="#5D5E5F"
                                  stroke-width="1.0625"
                                  stroke-linejoin="round"
                                />
                              </svg>
                              Edit Profile
                            </Dropdown.Item>
                          </div>

                          <Dropdown.Divider />
                          <div
                            onClick={async () => {
                              let res = await dispatch(
                                AdminActions.suspendAccount(
                                  expertDetails?.data?._id
                                )
                              );
                              if (res?.payload?.data?.data?.status == 200) {
                                // handleCreditShow();
                                // handleShow();
                                handleSuspendShow();
                                setFlag(!flag);
                              }
                            }}
                            className="my-profile"
                          >
                            <Dropdown.Item
                              // href="/"
                              className="text-danger"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 22 22"
                                fill="none"
                              >
                                <path
                                  d="M12 21H5.59087C4.04549 21 2.81631 20.248 1.71266 19.1966C-0.546635 17.0441 3.1628 15.324 4.57757 14.4816C6.97679 13.053 9.84251 12.6575 12.5 13.2952"
                                  stroke="#BB1111"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                />
                                <path
                                  d="M15.5 5.5C15.5 7.98528 13.4853 10 11 10C8.51472 10 6.5 7.98528 6.5 5.5C6.5 3.01472 8.51472 1 11 1C13.4853 1 15.5 3.01472 15.5 5.5Z"
                                  stroke="#BB1111"
                                  stroke-width="1.0625"
                                />
                                <path
                                  d="M15.05 15.05L19.95 19.95M21 17.5C21 15.567 19.433 14 17.5 14C15.567 14 14 15.567 14 17.5C14 19.433 15.567 21 17.5 21C19.433 21 21 19.433 21 17.5Z"
                                  stroke="#BB1111"
                                  stroke-width="1.0625"
                                  stroke-linecap="round"
                                />
                              </svg>
                              Suspend Account
                            </Dropdown.Item>
                          </div>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                  <div className="user-profile-details">
                    <div className="">
                      {expertDetails?.data?.profile_pic ? (
                        <img src={expertDetails?.data?.profile_pic} />
                      ) : (
                        <img src={require("../Assets/Images/placeholder.png")} />
                      )}
                      {/* <img src={require("../Assets/Images/banner-sign.png")} /> */}
                      <div className="profile-details-contain">
                        <div>
                          <div>
                            <p>FULL NAME</p>
                            <div>
                              {expertDetails &&
                                expertDetails?.data?.first_name +
                                  " " +
                                  expertDetails?.data?.last_name}
                            </div>
                          </div>
                          <div>
                            <p>PHONE NUMBER</p>
                            <div>
                              +
                              {expertDetails &&
                                expertDetails?.data?.country_code +
                                  " " +
                                  expertDetails?.data?.phone_no}
                            </div>
                          </div>
                          <div>
                            <p>EMAIL</p>
                            <div>
                              {expertDetails && expertDetails?.data?.email}
                            </div>
                          </div>
                          <div>
                            <p>PUBLISHED COURSES</p>
                            <div> 2</div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <p>INDUSTRY</p>
                            <div>Nigeria</div>
                          </div>
                          <div>
                            <p>DATE REGISTERED</p>
                            <div>
                              {moment(expertDetails?.data?.createdAt).format(
                                "YYYY-MM-DD "
                              )}
                            </div>
                          </div>

                          {expertDetails?.data.last_login && (
                            <div>
                              <p>LAST LOGIN</p>
                              <div>
                                {moment(expertDetails?.data?.last_login).format(
                                  "MMM DD YYYY"
                                )}
                              </div>
                            </div>
                          )}

                          <div>
                            <p>SESSIONS HELD</p>
                            <div> 2</div>
                          </div>
                        </div>
                        {expertDetails?.data?.bio && (
                          <div>
                            <p>
                              BIO:{" "}
                              <span className="text-dark">
                                Sarah Smith is an experienced marketing
                                professional with over 10 years of experience in
                                digital marketing strategies, social media
                                marketing, and brand management.
                              </span>
                            </p>
                            <div>
                              <p>WEBINAR HELD</p>
                              <div>4</div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="profile-details-tabs">
                    <div className="details-tabs-left">
                      <ul>
                        <li className="active">Published Courses</li>
                        <li>Sessions Held</li>
                        <li>Webinars Conducted</li>
                        <li>Activity log</li>
                      </ul>
                    </div>
                    <div className="details-tabs-right">
                      <h2>Published Courses</h2>
                      <p>Sarah has published the following courses:</p>
                      <div class="table-responsive">
                        <Table size="sm" className="table-cmn">
                          <thead>
                            <tr className="border-none">
                              <th className="id-field">Course Name</th>
                              <th className="id-field">Description</th>
                              <th className="id-field">Enrollments</th>
                              <th className="id-field">Avg. Rating </th>
                            </tr>
                          </thead>
                          <tr
                            style={{
                              height: "10px",
                              background: "transparent",
                            }}
                          />{" "}
                          {/* Spacer row */}
                          <tbody>
                            <tr>
                              <td>
                                <div className="first-user">
                                  Introduction to
                                  <br /> Machine Learning
                                </div>
                              </td>
                              <td>
                                A comprehensive guide <br /> to digital
                                marketing
                              </td>
                              <td>500</td>
                              <td> 4.8/5</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="first-user">
                                  Introduction to
                                  <br /> Machine Learning
                                </div>
                              </td>
                              <td>
                                A comprehensive guide <br /> to digital
                                marketing
                              </td>
                              <td>500</td>
                              <td> 4.8/5</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="first-user">
                                  Introduction to
                                  <br /> Machine Learning
                                </div>
                              </td>
                              <td>
                                A comprehensive guide <br /> to digital
                                marketing
                              </td>
                              <td>500</td>
                              <td> 4.8/5</td>
                            </tr>
                            <tr>
                              <td>
                                <div className="first-user">
                                  Introduction to
                                  <br /> Machine Learning
                                </div>
                              </td>
                              <td>
                                A comprehensive guide <br /> to digital
                                marketing
                              </td>
                              <td>500</td>
                              <td> 4.8/5</td>
                            </tr>
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="p-5">
          <div className="user-detail-modal">
            <h2>Reset Password Successful</h2>
            <p>
              An email with instructions to reset the password for the
              industrial expert has been successfully sent. Please instruct the
              user to check their email inbox (and spam folder) for further
              instructions on resetting their password.
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

      <Modal show={showSuspend} onHide={handleSuspendClose}>
        <Modal.Body className="p-5">
          <div className="user-detail-modal">
            <h2>Account Suspension Successful</h2>
            <p>
              The industrial expert's account has been successfully suspended.
              They will no longer have access to their account and associated
              features. If necessary, you can reactivate their account in the
              future.
            </p>
          </div>
          <div className="modal-comn-btns mb-0">
            <button className="theme-btn" onClick={handleSuspendClose}>
              Return to dashboard
            </button>
            {/* <button className="untheme-btn" onClick={handleClose}>Save Changes</button> */}
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
