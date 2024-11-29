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
import Loader from "../Components/Loader";
import ShowingResult from "../Components/ShowingResult";
import PaginationComponent from "../Components/Pagination";

export default function CourseManagement() {
  const [show, setShow] = useState(false);
  const [showCreditUser, setShowCreditUser] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_FILE_URL;
  const { expertList, loading } = useSelector((state) => state.creation);
  const { courseList } = useSelector((state) => state.course);
  console.log(expertList, "list");
  const [showSuspend, setSuspendShow] = useState(false);
  const [search, setSearch] = useState(null);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreditClose = () => setShowCreditUser(false);
  const handleCreditShow = () => setShowCreditUser(true);

  useEffect(() => {
    dispatch(
      AdminActions.getCourse({
        pagination: pagination,
        limit: limit,
        search: search,
      })
    );
  }, [search, limit, pagination, flag]);

  const handleDelete = async (id) => {
    let res = await dispatch(AdminActions.DeleteCourse(id));
    if (res?.payload?.data?.data?.status == 200) {
      setFlag(!flag);
    }
  };

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
                    <Link to="/new-course">Publish new course</Link>
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
                            width="37"
                            height="42"
                            viewBox="0 0 37 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              width="36"
                              height="42"
                              rx="8"
                              fill="#E8EFF2"
                            />
                            <path
                              d="M14.0002 11C12.7 11.1285 11.8248 11.419 11.1716 12.0756C10 13.2531 10 15.1483 10 18.9388V22.9592C10 26.7497 10 28.6449 11.1716 29.8225C12.3433 31 14.229 31 18.0004 31H20.0005C23.7719 31 25.6577 31 26.8293 29.8225C27.8926 28.7538 27.9909 27.1056 28 23.9766"
                              stroke="#343637"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.7628 15.8904C18.7023 15.621 18.4348 15.4516 18.1654 15.5122C17.896 15.5727 17.7266 15.8402 17.7872 16.1096L18.7628 15.8904ZM19.0893 19.6246L19.5772 19.515L19.0893 19.6246ZM26.5663 16.1745C26.6281 15.9053 26.4601 15.637 26.1909 15.5752C25.9218 15.5134 25.6535 15.6814 25.5917 15.9506L26.5663 16.1745ZM25.2607 19.6246L24.7733 19.5126L24.7728 19.515L25.2607 19.6246ZM19.4886 20.2528L19.7723 19.841L19.7723 19.841L19.4886 20.2528ZM24.8614 20.2528L25.1451 20.6645L24.8614 20.2528ZM28.9583 14.7602C28.9583 14.484 28.7345 14.2602 28.4583 14.2602C28.1822 14.2602 27.9583 14.484 27.9583 14.7602H28.9583ZM27.9583 19.4375C27.9583 19.7137 28.1822 19.9375 28.4583 19.9375C28.7345 19.9375 28.9583 19.7137 28.9583 19.4375H27.9583ZM16.5 14.125C16.5 14.2005 16.4722 14.2349 16.4846 14.2149C16.4947 14.1986 16.5216 14.1628 16.5778 14.108C16.6902 13.9984 16.8697 13.861 17.1143 13.7027C17.5995 13.3885 18.2728 13.0354 18.9973 12.7023C19.7195 12.3702 20.4776 12.0648 21.1264 11.8436C21.451 11.7329 21.743 11.6451 21.9862 11.5855C22.238 11.5239 22.4078 11.5 22.5 11.5V10.5C22.2845 10.5 22.0203 10.5476 21.7483 10.6143C21.4678 10.683 21.1462 10.7803 20.8037 10.8971C20.1183 11.1308 19.3284 11.4494 18.5795 11.7938C17.8329 12.1371 17.112 12.5128 16.5708 12.8632C16.3021 13.0372 16.0603 13.2159 15.8798 13.3919C15.7896 13.4799 15.7021 13.5792 15.6344 13.6885C15.5689 13.7942 15.5 13.9447 15.5 14.125H16.5ZM29.5 14.125C29.5 13.9447 29.4311 13.7942 29.3656 13.6885C29.2979 13.5792 29.2104 13.4799 29.1202 13.3919C28.9397 13.2159 28.6979 13.0372 28.4292 12.8632C27.888 12.5128 27.1671 12.1371 26.4205 11.7938C25.6716 11.4494 24.8817 11.1308 24.1963 10.8971C23.8538 10.7803 23.5322 10.683 23.2517 10.6143C22.9797 10.5476 22.7155 10.5 22.5 10.5V11.5C22.5922 11.5 22.762 11.5239 23.0138 11.5855C23.257 11.6451 23.549 11.7329 23.8736 11.8436C24.5224 12.0648 25.2805 12.3702 26.0027 12.7023C26.7272 13.0354 27.4005 13.3885 27.8857 13.7027C28.1303 13.861 28.3098 13.9984 28.4222 14.108C28.4784 14.1628 28.5053 14.1986 28.5154 14.2149C28.5278 14.2349 28.5 14.2005 28.5 14.125H29.5ZM28.5 14.125C28.5 14.0495 28.5278 14.0152 28.5154 14.0351C28.5053 14.0514 28.4784 14.0872 28.4222 14.142C28.3098 14.2516 28.1303 14.389 27.8857 14.5474C27.4005 14.8615 26.7272 15.2146 26.0027 15.5477C25.2805 15.8798 24.5224 16.1852 23.8736 16.4064C23.549 16.5171 23.257 16.6049 23.0138 16.6645C22.762 16.7262 22.5922 16.75 22.5 16.75V17.75C22.7155 17.75 22.9797 17.7024 23.2517 17.6358C23.5322 17.567 23.8538 17.4697 24.1963 17.3529C24.8817 17.1192 25.6716 16.8006 26.4205 16.4563C27.1671 16.113 27.888 15.7372 28.4292 15.3868C28.6979 15.2129 28.9397 15.0341 29.1202 14.8581C29.2104 14.7701 29.2979 14.6708 29.3656 14.5615C29.4311 14.4558 29.5 14.3054 29.5 14.125H28.5ZM15.5 14.125C15.5 14.3054 15.5689 14.4558 15.6344 14.5615C15.7021 14.6708 15.7896 14.7701 15.8798 14.8581C16.0603 15.0341 16.3021 15.2129 16.5708 15.3868C17.112 15.7372 17.8329 16.113 18.5795 16.4563C19.3284 16.8006 20.1183 17.1192 20.8037 17.3529C21.1462 17.4697 21.4678 17.567 21.7483 17.6358C22.0203 17.7024 22.2845 17.75 22.5 17.75V16.75C22.4078 16.75 22.238 16.7262 21.9862 16.6645C21.743 16.6049 21.451 16.5171 21.1264 16.4064C20.4776 16.1852 19.7195 15.8798 18.9973 15.5477C18.2728 15.2146 17.5995 14.8615 17.1143 14.5474C16.8697 14.389 16.6902 14.2516 16.5778 14.142C16.5216 14.0872 16.4947 14.0514 16.4846 14.0351C16.4722 14.0152 16.5 14.0495 16.5 14.125H15.5ZM17.7872 16.1096L18.6015 19.7342L19.5772 19.515L18.7628 15.8904L17.7872 16.1096ZM25.5917 15.9506L24.7734 19.5126L25.748 19.7365L26.5663 16.1745L25.5917 15.9506ZM19.2049 20.6645C20.031 21.2337 21.1189 21.5 22.175 21.5C23.2311 21.5 24.319 21.2337 25.1451 20.6645L24.5777 19.841C23.9579 20.2681 23.0823 20.5 22.175 20.5C21.2677 20.5 20.3921 20.2681 19.7723 19.841L19.2049 20.6645ZM24.7728 19.515C24.7374 19.6726 24.6645 19.7813 24.5777 19.841L25.1451 20.6645C25.4878 20.4284 25.6724 20.0731 25.7485 19.7342L24.7728 19.515ZM18.6015 19.7342C18.6776 20.0731 18.8622 20.4284 19.2049 20.6645L19.7723 19.841C19.6855 19.7813 19.6126 19.6726 19.5772 19.515L18.6015 19.7342ZM27.9583 14.7602V19.4375H28.9583V14.7602H27.9583Z"
                              fill="#343637"
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
                              <p>Total Courses</p>
                              <h2>
                                {courseList?.count} <span>+12%</span>
                              </h2>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="left-session">
                              <p>Active Courses</p>
                              <h2>
                                0 <span>12%</span>
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
                            width="37"
                            height="42"
                            viewBox="0 0 37 42"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              width="36"
                              height="42"
                              rx="8"
                              fill="#E8EFF2"
                            />
                            <path
                              d="M14.0002 11C12.7 11.1285 11.8248 11.419 11.1716 12.0756C10 13.2531 10 15.1483 10 18.9388V22.9592C10 26.7497 10 28.6449 11.1716 29.8225C12.3433 31 14.229 31 18.0004 31H20.0005C23.7719 31 25.6577 31 26.8293 29.8225C27.8926 28.7538 27.9909 27.1056 28 23.9766"
                              stroke="#343637"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.7628 15.8904C18.7023 15.621 18.4348 15.4516 18.1654 15.5122C17.896 15.5727 17.7266 15.8402 17.7872 16.1096L18.7628 15.8904ZM19.0893 19.6246L19.5772 19.515L19.0893 19.6246ZM26.5663 16.1745C26.6281 15.9053 26.4601 15.637 26.1909 15.5752C25.9218 15.5134 25.6535 15.6814 25.5917 15.9506L26.5663 16.1745ZM25.2607 19.6246L24.7733 19.5126L24.7728 19.515L25.2607 19.6246ZM19.4886 20.2528L19.7723 19.841L19.7723 19.841L19.4886 20.2528ZM24.8614 20.2528L25.1451 20.6645L24.8614 20.2528ZM28.9583 14.7602C28.9583 14.484 28.7345 14.2602 28.4583 14.2602C28.1822 14.2602 27.9583 14.484 27.9583 14.7602H28.9583ZM27.9583 19.4375C27.9583 19.7137 28.1822 19.9375 28.4583 19.9375C28.7345 19.9375 28.9583 19.7137 28.9583 19.4375H27.9583ZM16.5 14.125C16.5 14.2005 16.4722 14.2349 16.4846 14.2149C16.4947 14.1986 16.5216 14.1628 16.5778 14.108C16.6902 13.9984 16.8697 13.861 17.1143 13.7027C17.5995 13.3885 18.2728 13.0354 18.9973 12.7023C19.7195 12.3702 20.4776 12.0648 21.1264 11.8436C21.451 11.7329 21.743 11.6451 21.9862 11.5855C22.238 11.5239 22.4078 11.5 22.5 11.5V10.5C22.2845 10.5 22.0203 10.5476 21.7483 10.6143C21.4678 10.683 21.1462 10.7803 20.8037 10.8971C20.1183 11.1308 19.3284 11.4494 18.5795 11.7938C17.8329 12.1371 17.112 12.5128 16.5708 12.8632C16.3021 13.0372 16.0603 13.2159 15.8798 13.3919C15.7896 13.4799 15.7021 13.5792 15.6344 13.6885C15.5689 13.7942 15.5 13.9447 15.5 14.125H16.5ZM29.5 14.125C29.5 13.9447 29.4311 13.7942 29.3656 13.6885C29.2979 13.5792 29.2104 13.4799 29.1202 13.3919C28.9397 13.2159 28.6979 13.0372 28.4292 12.8632C27.888 12.5128 27.1671 12.1371 26.4205 11.7938C25.6716 11.4494 24.8817 11.1308 24.1963 10.8971C23.8538 10.7803 23.5322 10.683 23.2517 10.6143C22.9797 10.5476 22.7155 10.5 22.5 10.5V11.5C22.5922 11.5 22.762 11.5239 23.0138 11.5855C23.257 11.6451 23.549 11.7329 23.8736 11.8436C24.5224 12.0648 25.2805 12.3702 26.0027 12.7023C26.7272 13.0354 27.4005 13.3885 27.8857 13.7027C28.1303 13.861 28.3098 13.9984 28.4222 14.108C28.4784 14.1628 28.5053 14.1986 28.5154 14.2149C28.5278 14.2349 28.5 14.2005 28.5 14.125H29.5ZM28.5 14.125C28.5 14.0495 28.5278 14.0152 28.5154 14.0351C28.5053 14.0514 28.4784 14.0872 28.4222 14.142C28.3098 14.2516 28.1303 14.389 27.8857 14.5474C27.4005 14.8615 26.7272 15.2146 26.0027 15.5477C25.2805 15.8798 24.5224 16.1852 23.8736 16.4064C23.549 16.5171 23.257 16.6049 23.0138 16.6645C22.762 16.7262 22.5922 16.75 22.5 16.75V17.75C22.7155 17.75 22.9797 17.7024 23.2517 17.6358C23.5322 17.567 23.8538 17.4697 24.1963 17.3529C24.8817 17.1192 25.6716 16.8006 26.4205 16.4563C27.1671 16.113 27.888 15.7372 28.4292 15.3868C28.6979 15.2129 28.9397 15.0341 29.1202 14.8581C29.2104 14.7701 29.2979 14.6708 29.3656 14.5615C29.4311 14.4558 29.5 14.3054 29.5 14.125H28.5ZM15.5 14.125C15.5 14.3054 15.5689 14.4558 15.6344 14.5615C15.7021 14.6708 15.7896 14.7701 15.8798 14.8581C16.0603 15.0341 16.3021 15.2129 16.5708 15.3868C17.112 15.7372 17.8329 16.113 18.5795 16.4563C19.3284 16.8006 20.1183 17.1192 20.8037 17.3529C21.1462 17.4697 21.4678 17.567 21.7483 17.6358C22.0203 17.7024 22.2845 17.75 22.5 17.75V16.75C22.4078 16.75 22.238 16.7262 21.9862 16.6645C21.743 16.6049 21.451 16.5171 21.1264 16.4064C20.4776 16.1852 19.7195 15.8798 18.9973 15.5477C18.2728 15.2146 17.5995 14.8615 17.1143 14.5474C16.8697 14.389 16.6902 14.2516 16.5778 14.142C16.5216 14.0872 16.4947 14.0514 16.4846 14.0351C16.4722 14.0152 16.5 14.0495 16.5 14.125H15.5ZM17.7872 16.1096L18.6015 19.7342L19.5772 19.515L18.7628 15.8904L17.7872 16.1096ZM25.5917 15.9506L24.7734 19.5126L25.748 19.7365L26.5663 16.1745L25.5917 15.9506ZM19.2049 20.6645C20.031 21.2337 21.1189 21.5 22.175 21.5C23.2311 21.5 24.319 21.2337 25.1451 20.6645L24.5777 19.841C23.9579 20.2681 23.0823 20.5 22.175 20.5C21.2677 20.5 20.3921 20.2681 19.7723 19.841L19.2049 20.6645ZM24.7728 19.515C24.7374 19.6726 24.6645 19.7813 24.5777 19.841L25.1451 20.6645C25.4878 20.4284 25.6724 20.0731 25.7485 19.7342L24.7728 19.515ZM18.6015 19.7342C18.6776 20.0731 18.8622 20.4284 19.2049 20.6645L19.7723 19.841C19.6855 19.7813 19.6126 19.6726 19.5772 19.515L18.6015 19.7342ZM27.9583 14.7602V19.4375H28.9583V14.7602H27.9583Z"
                              fill="#343637"
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
                              <p>Enrollment Rate</p>
                              <h2 className="text-success">0</h2>
                            </div>
                          </Col>
                          <Col lg={6}>
                            <div className="left-session">
                              <p>Completion Rate</p>
                              <h2 className="text-success">0</h2>
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
                <h2>Course </h2>
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
                {courseList?.data?.length > 0 ? (
                  <Table size="sm" className="table-cmn">
                    <thead>
                      <tr className="border-none">
                        <th className="id-field">Course Name</th>
                        <th className="id-field">Category</th>
                        <th className="id-field">Enrollments</th>
                        <th className="id-field">Completion Rate </th>
                        <th className="id-field">Status</th>
                        <th className="id-field">Action</th>
                      </tr>
                    </thead>
                    <tr style={{ height: "10px", background: "transparent" }} />{" "}
                    {/* Spacer row */}
                    <tbody>
                      {courseList?.data?.map((course) => {
                        return (
                          <tr>
                            <td>
                              <Link to={`/course-info/${course?._id}`}>
                                <div className="first-user">
                                  {/* <Link to="/expert-details"> John Smith</Link> */}
                                  <div className="d-flex align-items-center gap-2">
                                    <img
                                      src={`${BASE_URL}/public/${course?.cover_image}`}
                                    />
                                    <div>
                                      <p>{course?.title} </p>
                                      <p>
                                        {course?.skill_level == 1
                                          ? "Beginner"
                                          : course?.skill_level == 2
                                          ? "Intermediate"
                                          : "Advance"}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </td>
                            <td>{course?.category_id?.name}</td>
                            <td>0</td>
                            <td>0</td>
                            <td>
                              {course?.publish_status == 1 ? (
                                <div className="active">
                                  <p>Published</p>
                                </div>
                              ) : (
                                <div className="Inactive">
                                  <p>Draft</p>
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
                                        // onClick={handleShow}
                                        onClick={async () => {
                                          let res = await dispatch(
                                            AdminActions.publishUnpublishCourse(
                                              course?._id
                                            )
                                          );
                                          if (
                                            res?.payload?.data?.data?.status ==
                                            200
                                          ) {
                                            // navigate(`/course-info/${res?.payload?.data?.data?.data?._id}`,{state:{type:"create"}});
                                            // handleShow();
                                            setFlag(!flag);
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
                                            d="M1.5 5C1.5 3.45956 1.5 2.68934 1.84673 2.12353C2.04074 1.80693 2.30693 1.54074 2.62353 1.34673C3.18934 1 3.95956 1 5.5 1C7.04044 1 7.81066 1 8.37647 1.34673C8.69307 1.54074 8.95926 1.80693 9.15327 2.12353C9.5 2.68934 9.5 3.45956 9.5 5C9.5 6.54044 9.5 7.31066 9.15327 7.87647C8.95926 8.19307 8.69307 8.45926 8.37647 8.65327C7.81066 9 7.04044 9 5.5 9C3.95956 9 3.18934 9 2.62353 8.65327C2.30693 8.45926 2.04074 8.19307 1.84673 7.87647C1.5 7.31066 1.5 6.54044 1.5 5Z"
                                            stroke="#777879"
                                          />
                                          <path
                                            d="M2.78166 13.7817C3.82852 12.7348 4.35195 12.2114 4.9721 12.0625C5.3191 11.9792 5.6809 11.9792 6.0279 12.0625C6.64805 12.2114 7.17148 12.7348 8.21834 13.7817C9.2652 14.8285 9.78863 15.3519 9.93752 15.9721C10.0208 16.3191 10.0208 16.6809 9.93752 17.0279C9.78863 17.6481 9.2652 18.1715 8.21834 19.2183C7.17148 20.2652 6.64805 20.7886 6.02791 20.9375C5.6809 21.0208 5.3191 21.0208 4.9721 20.9375C4.35195 20.7886 3.82852 20.2652 2.78166 19.2183C1.7348 18.1715 1.21137 17.6481 1.06248 17.0279C0.979173 16.6809 0.979173 16.3191 1.06248 15.9721C1.21137 15.3519 1.7348 14.8285 2.78166 13.7817Z"
                                            stroke="#777879"
                                          />
                                          <path
                                            d="M13 17C13 15.4596 13 14.6893 13.3467 14.1235C13.5407 13.8069 13.8069 13.5407 14.1235 13.3467C14.6893 13 15.4596 13 17 13C18.5404 13 19.3107 13 19.8765 13.3467C20.1931 13.5407 20.4593 13.8069 20.6533 14.1235C21 14.6893 21 15.4596 21 17C21 18.5404 21 19.3107 20.6533 19.8765C20.4593 20.1931 20.1931 20.4593 19.8765 20.6533C19.3107 21 18.5404 21 17 21C15.4596 21 14.6893 21 14.1235 20.6533C13.8069 20.4593 13.5407 20.1931 13.3467 19.8765C13 19.3107 13 18.5404 13 17Z"
                                            stroke="#777879"
                                          />
                                          <path
                                            d="M21 5L13 5"
                                            stroke="#777879"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                        {course?.publish_status == 1
                                          ? "Unpublish"
                                          : "Publish"}
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />

                                    <div
                                      onClick={() => {
                                        navigate(`/course-info/${course?._id}`);
                                      }}
                                      className="my-profile"
                                    >
                                      <Dropdown.Item>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="20"
                                          height="20"
                                          viewBox="0 0 20 20"
                                          fill="none"
                                        >
                                          <path
                                            d="M0.5 10C0.5 5.52166 0.5 3.28249 1.89124 1.89124C3.28249 0.5 5.52166 0.5 10 0.5C14.4783 0.5 16.7175 0.5 18.1088 1.89124C19.5 3.28249 19.5 5.52166 19.5 10C19.5 14.4783 19.5 16.7175 18.1088 18.1088C16.7175 19.5 14.4783 19.5 10 19.5C5.52166 19.5 3.28249 19.5 1.89124 18.1088C0.5 16.7175 0.5 14.4783 0.5 10Z"
                                            stroke="#5D5E5F"
                                            stroke-width="0.9375"
                                          />
                                          <path
                                            d="M10.2422 15V10C10.2422 9.5286 10.2422 9.29289 10.0957 9.14645C9.94929 9 9.71359 9 9.24219 9"
                                            stroke="#5D5E5F"
                                            stroke-width="0.9375"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M9.99199 6H10.001"
                                            stroke="#5D5E5F"
                                            stroke-width="1.25"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                        Information
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div className="my-profile">
                                      <Dropdown.Item
                                        // href="#/action-3"
                                        // onClick={handleCreditShow}
                                        onClick={() =>
                                          navigate(
                                            `/new-course?id=${course?._id}&edit=true`
                                          )
                                        }
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
                                        Edit Course
                                      </Dropdown.Item>
                                    </div>
                                    <Dropdown.Divider />
                                    <div
                                      onClick={() => handleDelete(course?._id)}
                                      className="my-profile"
                                    >
                                      <Dropdown.Item
                                        // href="/"
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
                        );
                      })}
                    </tbody>
                  </Table>
                ) : (
                  <div className="no-deta-found">
                    <p style={{ textAlign: "center" }}>
                      No course available yet!
                      <Col lg={12}>
                        <div className="page-h-with-btn">
                          {/* <h2>Summary</h2> */}
                          <div>
                            <Link to="/new-course">
                              Click here to create new course
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </p>
                  </div>
                )}

                {courseList?.data?.length > 0 && (
                  <div className="pagination-section">
                    <ShowingResult
                      page={pagination}
                      limit={limit}
                      totalUser={courseList?.count}
                      length={courseList?.data?.length}
                    />
                    <div className="pagination-block">
                      <PaginationComponent
                        currentPage={pagination}
                        totalCount={courseList?.count}
                        totalPages={Math.ceil(courseList?.count / limit)}
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
