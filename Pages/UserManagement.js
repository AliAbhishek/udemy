import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import { setCurretPage } from "../Redux/Reducers/ExpertCreation";
import moment from "moment";
import ShowingResult from "../Components/ShowingResult";
import PaginationComponent from "../Components/Pagination";
import Loader from "../Components/Loader";

export default function UserManagement() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userList, loading, pageInRedux } = useSelector(
    (state) => state.usercreation
  );
  console.log(userList, "userList");
  const [show, setShow] = useState(false);
  const [showSuspend, setSuspendShow] = useState(false);
  const [showCreditUser, setShowCreditUser] = useState(false);
  const [search, setSearch] = useState(null);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(pageInRedux ?? 0);
  const [flag, setFlag] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSuspendClose = () => setSuspendShow(false);
  const handleSuspendShow = () => setSuspendShow(true);

  const handleCreditClose = () => setShowCreditUser(false);
  const handleCreditShow = () => setShowCreditUser(true);

  useEffect(() => {
    dispatch(
      AdminActions.getExpertsList({
        role: 2,
        pagination: pagination,
        limit: limit,
        search: search,
      })
    );
  }, [search, limit, pagination, flag]);

  return (
    <Layout>
      {loading && <Loader />}
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2>Summary</h2>
                  <div>
                    <Link to="/new-user/add">Add New User</Link>
                  </div>
                </div>
              </Col>
              <Col xxl={12} xl={12} lg={12}>
                <div className="dashbox-inner-wrap">
                  <Row>
                    <Col xxl={12} xl={12} lg={12} className="mb-3">
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
                              d="M26.774 27C27.5233 27 28.1193 26.5285 28.6544 25.8691C29.7499 24.5194 27.9513 23.4408 27.2653 22.9126C26.568 22.3756 25.7894 22.0714 24.9999 22M23.9999 20C25.3807 20 26.4999 18.8807 26.4999 17.5C26.4999 16.1193 25.3807 15 23.9999 15"
                              stroke="#343637"
                              stroke-linecap="round"
                            />
                            <path
                              d="M9.2259 27C8.47659 27 7.88061 26.5285 7.34548 25.8691C6.25003 24.5194 8.04861 23.4408 8.73458 22.9126C9.43191 22.3756 10.2105 22.0714 10.9999 22M11.4999 20C10.1192 20 8.99994 18.8807 8.99994 17.5C8.99994 16.1193 10.1192 15 11.4999 15"
                              stroke="#343637"
                              stroke-linecap="round"
                            />
                            <path
                              d="M14.0837 24.1112C13.0619 24.743 10.3829 26.0331 12.0146 27.6474C12.8117 28.436 13.6994 29 14.8155 29H21.1843C22.3004 29 23.1881 28.436 23.9852 27.6474C25.6169 26.0331 22.9379 24.743 21.9161 24.1112C19.52 22.6296 16.4797 22.6296 14.0837 24.1112Z"
                              stroke="#343637"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M21.4999 16.5C21.4999 18.433 19.9329 20 17.9999 20C16.0669 20 14.4999 18.433 14.4999 16.5C14.4999 14.567 16.0669 13 17.9999 13C19.9329 13 21.4999 14.567 21.4999 16.5Z"
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
                          <Col lg={3}>
                            <div className="left-session">
                              <p>Total Number of Users</p>
                              <h2>
                                {userList?.count} <span>+12%</span>
                              </h2>
                            </div>
                          </Col>
                          <Col lg={3}>
                            <div className="left-session">
                              <p>Active Users</p>
                              <h2>
                                0 <span>12%</span>
                              </h2>
                            </div>
                          </Col>
                          <Col lg={3}>
                            <div className="left-session">
                              <p>Retention Rate</p>
                              <h2>
                                0 <span>12%</span>
                              </h2>
                            </div>
                          </Col>
                          <Col lg={3}>
                            <div className="left-session">
                              <p>User Engagement Metrics:</p>
                              <h2>
                                {userList?.engagement_metrices} <span>12%</span>
                              </h2>
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

        <Container fluid>
          <div className="filters ">
            <div className="inner-filter-field">
              <div className="user-search">
                <h2>List of Users</h2>
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
                        <Form.Control
                          onChange={(e) => setSearch(e.target.value)}
                          type="text"
                          placeholder="Search"
                        />
                      </Form.Group>
                    </Form>
                  </div>
                  <div className="short-by">
                    <Form.Select
                      style={{ cursor: "pointer" }}
                      onChange={(e) => setLimit(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>Sort by</option>
                      <option value="10">10</option>
                      <option value="15">15</option>
                      <option value="20">20</option>
                    </Form.Select>
                  </div>
                </div>
              </div>

              <div class="table-responsive">
                {userList?.data?.length > 0 ? (
                  <Table size="sm" className="table-cmn">
                    <thead>
                      <tr className="border-none">
                        <th className="id-field">Name</th>
                        <th className="id-field">Email</th>
                        <th className="id-field">Phone numbers</th>
                        <th className="id-field">Reg Date </th>
                        <th className="id-field">Status</th>
                        <th className="id-field">Action</th>
                      </tr>
                    </thead>
                    <tr style={{ height: "10px", background: "transparent" }} />{" "}
                    {/* Spacer row */}
                    <tbody>
                      {userList?.data?.map((expert) => {
                        return (
                          <tr>
                            <td>
                              <div
                                onClick={() => {
                                  navigate(`/user-details/${expert?._id}`);
                                  dispatch(setCurretPage(pagination));
                                }}
                                className="first-user"
                              >
                                <Link>
                                  {" "}
                                  {expert?.first_name + " " + expert?.last_name}
                                </Link>
                              </div>
                            </td>
                            <td>{expert?.email}</td>
                            <td>
                              +{expert?.country_code + " " + expert?.phone_no}
                            </td>
                            <td>
                              {moment(expert?.createdAt).format("YYYY-MM-DD")}
                            </td>
                            <td>
                              {expert?.status == 2 ? (
                                <div className="Inactive">
                                  <p>In-Active</p>
                                </div>
                              ) : (
                                <div className="active">
                                  <p>Active</p>
                                </div>
                              )}
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
                                      <Dropdown.Item
                                        href="#/action-3"
                                        onClick={async () => {
                                          let res = await dispatch(
                                            AdminActions.resetPassword(
                                              expert?._id
                                            )
                                          );
                                          if (
                                            res?.payload?.data?.data?.status ==
                                            200
                                          ) {
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
                                        navigate(`/new-user/${expert?._id}`);
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
                                    <Dropdown.Divider />{" "}
                                    <div className="my-profile">
                                      <Dropdown.Item href="#/action-3">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="22"
                                          viewBox="0 0 20 22"
                                          fill="none"
                                        >
                                          <path
                                            d="M13 14C13 14.8284 13.6716 15.5 14.5 15.5C15.3284 15.5 16 14.8284 16 14C16 13.1716 15.3284 12.5 14.5 12.5C13.6716 12.5 13 13.1716 13 14Z"
                                            stroke="#777879"
                                          />
                                          <path
                                            d="M1 11V5C3.1047 5.62133 7.57619 6.42671 13.0038 6.80281C15.9252 7.00525 17.3859 7.10646 18.1929 7.97688C19 8.8473 19 10.2497 19 13.0546V15.0683C19 17.9566 19 19.4008 18.0163 20.2998C17.0325 21.1987 15.6919 21.0677 13.0106 20.8058C12.3572 20.7419 11.6846 20.666 11 20.5762"
                                            stroke="#777879"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M15.6258 7C16.0035 5.57673 16.3453 2.98822 15.327 1.70292C14.6816 0.88827 13.7223 0.966538 12.7818 1.04926C7.83791 1.48406 4.34544 2.36731 2.39301 2.96737C1.55348 3.2254 1 4.04522 1 4.96044"
                                            stroke="#777879"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M9 17H5M5 17H1M5 17V21M5 17L5 13"
                                            stroke="#777879"
                                            stroke-linecap="round"
                                          />
                                        </svg>
                                        Credit User
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div
                                      onClick={async () => {
                                        let formdata = new FormData();
                                        formdata.append("status", 1);
                                        let res =
                                          expert?.status == 2
                                            ? await dispatch(
                                                AdminActions.EditExpertProfile({
                                                  id: expert?._id,
                                                  data: formdata,
                                                })
                                              )
                                            : await dispatch(
                                                AdminActions.suspendAccount(
                                                  expert?._id
                                                )
                                              );
                                        if (
                                          res?.payload?.data?.data?.status ==
                                          200
                                        ) {
                                          // handleCreditShow();
                                          // handleShow();
                                          expert?.status != 2 &&
                                            handleSuspendShow();
                                          setFlag(!flag);
                                        }
                                      }}
                                      className="my-profile"
                                    >
                                      <Dropdown.Item
                                        // href="/"
                                        className={
                                          expert?.status == 2
                                            ? "text-success"
                                            : "text-danger"
                                        }
                                      >
                                        {expert?.status == 2 ? (
                                          <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                          >
                                            <path
                                              d="M7.18007 15.2964C5.92249 16.0335 2.62521 17.5386 4.63348 19.422C5.6145 20.342 6.7071 21 8.08077 21H15.9192C17.2929 21 18.3855 20.342 19.3665 19.422C21.3748 17.5386 18.0775 16.0335 16.8199 15.2964C13.8709 13.5679 10.1291 13.5679 7.18007 15.2964Z"
                                              stroke="#1B831B"
                                              stroke-width="1.0625"
                                              stroke-linecap="round"
                                              stroke-linejoin="round"
                                            />
                                            <path
                                              d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z"
                                              stroke="#1B831B"
                                              stroke-width="1.0625"
                                            />
                                          </svg>
                                        ) : (
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
                                        )}
                                        {expert?.status == 2
                                          ? "Active "
                                          : "Suspend "}
                                        Account
                                      </Dropdown.Item>
                                    </div>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="no-deta-found">
                    <p style={{ textAlign: "center" }}>
                      No data available yet!
                    </p>
                  </div>
                )}
                {userList?.data?.length > 0 && (
                  <div className="pagination-section">
                    <ShowingResult
                      page={pagination}
                      limit={limit}
                      totalUser={userList?.count}
                      length={userList?.data?.length}
                    />
                    <div className="pagination-block">
                      <PaginationComponent
                        currentPage={pagination}
                        totalCount={userList?.count}
                        totalPages={Math.ceil(userList?.count / limit)}
                        onPageChange={(page) => setPagination(page)}
                      />
                    </div>
                  </div>
                )}
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
