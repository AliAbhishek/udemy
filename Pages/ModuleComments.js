import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
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
import Accordion from "react-bootstrap/Accordion";
import AdminActions from "../Redux/Action/AdminActions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Components/Loader";
import ShowingResult from "../Components/ShowingResult";
import PaginationComponent from "../Components/Pagination";
import moment from "moment";

export default function ModuleComments() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = process.env.REACT_APP_FILE_URL;
  const moduleId = new URLSearchParams(useLocation().search).get("mid");
  const {
    loading,
    moduleDetails,
    lessonList,
    moduleDetailById,
    lessonDetailById,
  } = useSelector((state) => state.course);

  const [activeTab, setActiveTab] = useState("comments");
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    dispatch(AdminActions.getModuleById(moduleId));
  }, [moduleId]);

  useEffect(() => {
    if (moduleId) {
      dispatch(
        AdminActions.getLessonsPerModule({
          id: moduleId,
          pagination: pagination,
          limit: limit,
        })
      );
      dispatch(AdminActions.getModuleById(moduleId));
    }
  }, [moduleId, pagination]);

  return (
    <Layout>
      {loading && <Loader />}
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2 className="mb-0">Information</h2>
                  <div className="d-flex gap-3">
                    <button onClick={() => navigate(-1)}>Back</button>
                  </div>
                </div>
              </Col>

              <Col lg={12}>
                <div className="commn-form-card">
                  <h2>Module Information</h2>
                  <Row>
                    <Col lg={12}>
                      <div className="module-comments-top">
                        <img
                          src={require("../Assets/Images/banner-sign.png")}
                        />
                        <div>
                          <ul>
                            <li>
                              Module Name:{" "}
                              <b>{moduleDetailById?.data?.title}</b>
                            </li>
                            <li>
                              Duration:
                              <b>
                                {" "}
                                {moment
                                  .utc(
                                    moduleDetailById?.data?.module_duration_in_secs *
                                      1000
                                  )
                                  .format("mm:ss")}{" "}
                                hours
                              </b>
                            </li>
                            <li>
                              Total Enrollments: <b>0 Learners</b>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </Col>
                  </Row>

                  <div className="mt-4 d-flex gap-4">
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("comments")}
                    >
                      Comments
                    </h2>
                    <h2
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveTab("lessons")}
                    >
                      Lessons
                    </h2>
                  </div>

                  {activeTab === "comments" && (
                    <div>
                      {/* <h2 className="mt-4">Comments</h2> */}
                      <Row>
                        <Col lg={12}>
                          <div className="comments-list-contain">
                            <div className="no-deta-found">
                              <p style={{ textAlign: "center" }}>
                                No data available yet!
                              </p>
                            </div>
                            {/* <ul>
                              <li>
                                <div className="comments-list-item">
                                  <div className="comments-pro">
                                    <div>
                                      <img
                                        src={require("../Assets/Images/industry-experts.png")}
                                      />
                                      <div>
                                        <h5>Ahmed Essam</h5>
                                        <p>Wednesday, 29 June 2022, 7:32 AM</p>
                                      </div>
                                    </div>
                                    <ul>
                                      <li>
                                        <button className="blue">Reply</button>
                                      </li>
                                      <li>
                                        <button className="red">Delete</button>
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    It is a long established fact that a reader will
                                    be distracted by the readable content of a page
                                    when looking at its layout.{" "}
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="comments-list-item">
                                  <div className="comments-pro">
                                    <div>
                                      <img
                                        src={require("../Assets/Images/industry-experts.png")}
                                      />
                                      <div>
                                        <h5>Ahmed Essam</h5>
                                        <p>Wednesday, 29 June 2022, 7:32 AM</p>
                                      </div>
                                    </div>
                                    <ul>
                                      <li>
                                        <button className="blue">Reply</button>
                                      </li>
                                      <li>
                                        <button className="red">Delete</button>
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    It is a long established fact that a reader will
                                    be distracted by the readable content of a page
                                    when looking at its layout.{" "}
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="comments-list-item">
                                  <div className="comments-pro">
                                    <div>
                                      <img
                                        src={require("../Assets/Images/industry-experts.png")}
                                      />
                                      <div>
                                        <h5>Ahmed Essam</h5>
                                        <p>Wednesday, 29 June 2022, 7:32 AM</p>
                                      </div>
                                    </div>
                                    <ul>
                                      <li>
                                        <button className="blue">Reply</button>
                                      </li>
                                      <li>
                                        <button className="red">Delete</button>
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    It is a long established fact that a reader will
                                    be distracted by the readable content of a page
                                    when looking at its layout.{" "}
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="comments-list-item">
                                  <div className="comments-pro">
                                    <div>
                                      <img
                                        src={require("../Assets/Images/industry-experts.png")}
                                      />
                                      <div>
                                        <h5>Ahmed Essam</h5>
                                        <p>Wednesday, 29 June 2022, 7:32 AM</p>
                                      </div>
                                    </div>
                                    <ul>
                                      <li>
                                        <button className="blue">Reply</button>
                                      </li>
                                      <li>
                                        <button className="red">Delete</button>
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    It is a long established fact that a reader will
                                    be distracted by the readable content of a page
                                    when looking at its layout.{" "}
                                  </p>
                                </div>
                              </li>
                              <li>
                                <div className="comments-list-item">
                                  <div className="comments-pro">
                                    <div>
                                      <img
                                        src={require("../Assets/Images/industry-experts.png")}
                                      />
                                      <div>
                                        <h5>Ahmed Essam</h5>
                                        <p>Wednesday, 29 June 2022, 7:32 AM</p>
                                      </div>
                                    </div>
                                    <ul>
                                      <li>
                                        <button className="blue">Reply</button>
                                      </li>
                                      <li>
                                        <button className="red">Delete</button>
                                      </li>
                                    </ul>
                                  </div>
                                  <p>
                                    It is a long established fact that a reader will
                                    be distracted by the readable content of a page
                                    when looking at its layout.{" "}
                                  </p>
                                </div>
                              </li>
                            </ul> */}
                          </div>
                          {/* <div className="comments-send-box">
                            <Form.Control
                              as="textarea"
                              placeholder="Write something..."
                              rows={3}
                            />
                            <ul>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="11"
                                  height="24"
                                  viewBox="0 0 11 24"
                                  fill="none"
                                >
                                  <path
                                    d="M1.56152 7.75049V5.62549C1.56152 3.27828 3.48019 1.37549 5.84698 1.37549C8.21377 1.37549 10.1324 3.27828 10.1324 5.62549V18.3755C10.1324 20.7227 8.21377 22.6255 5.84698 22.6255C3.48019 22.6255 1.56152 20.7227 1.56152 18.3755V13.5942C1.56152 12.1272 2.76069 10.938 4.23993 10.938C5.71918 10.938 6.91834 12.1272 6.91834 13.5942V16.2505"
                                    stroke="#343637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                >
                                  <ellipse
                                    cx="12.2722"
                                    cy="12"
                                    rx="10.7136"
                                    ry="10.625"
                                    stroke="#343637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M6.91504 8.8125C7.13948 9.43151 7.74509 9.875 8.45696 9.875C9.16883 9.875 9.77444 9.43151 9.99888 8.8125M14.5448 8.8125C14.7693 9.43151 15.3749 9.875 16.0867 9.875C16.7986 9.875 17.4042 9.43151 17.6287 8.8125"
                                    stroke="#343637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                  <path
                                    d="M7.98633 15.1875C8.96354 16.4778 10.5194 17.3125 12.2718 17.3125C14.0242 17.3125 15.58 16.4778 16.5572 15.1875"
                                    stroke="#343637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </li>
                              <li>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="22"
                                  viewBox="0 0 23 22"
                                  fill="none"
                                >
                                  <path
                                    d="M21.3928 1.49374C19.0593 -0.998427 1.507 5.10652 1.52149 7.33544C1.53793 9.86299 8.37616 10.6406 10.2715 11.1679C11.4113 11.4851 11.7166 11.8101 11.9794 12.9955C13.1697 18.3636 13.7673 21.0337 15.1293 21.0934C17.3003 21.1885 23.6702 3.92588 21.3928 1.49374Z"
                                    stroke="#343637"
                                    stroke-width="1.5"
                                  />
                                  <path
                                    d="M11.1641 11.5312L14.9138 7.8125"
                                    stroke="#343637"
                                    stroke-width="1.5"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </li>
                            </ul>
                          </div> */}
                        </Col>
                      </Row>
                    </div>
                  )}

                  {activeTab === "lessons" && (
                    <div>
                      {/* <h2 className="mt-4">Lessons</h2> */}
                      {/* Add your lessons display code here */}
                      <div class="table-responsive table-border-none">
                        {lessonList?.data?.length > 0 ? (
                          <Table size="sm" className="table-cmn">
                            <tr
                              style={{
                                height: "10px",
                                background: "transparent",
                              }}
                            />{" "}
                            {/* Spacer row */}
                            <tbody>
                              {lessonList?.data?.map((lesson, index) => {
                                return (
                                  <tr>
                                    <td>{lesson?.lesson_no}</td>
                                    <td>
                                      <div className="first-user">
                                        {/* <Link to="/expert-details"> John Smith</Link> */}
                                        <div className="d-flex align-items-center gap-2">
                                          <img
                                            src={`${BASE_URL}/public/${lesson?.course_id?.cover_image}`}
                                          />
                                          {/* <video controls width="400">
                                            <source
                                              src={lesson?.video}
                                              type="video/mp4"
                                            />
                                            Your browser does not support the
                                            video tag.
                                          </video> */}
                                          <div>
                                            <p>{lesson?.title} </p>
                                            <p>
                                              {lesson?.course_id?.skill_level ==
                                              1
                                                ? "Beginner"
                                                : lesson?.course_id
                                                    ?.skill_level == 2
                                                ? "Intermediate"
                                                : "Advance"}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      {moment
                                        .utc(lesson?.duration * 1000)
                                        .format("mm:ss")} hours
                                    </td>
                                    {/* <td>
                                      <div className="edit-lesson-action">
                                        <button
                                          type="button"
                                          // onClick={() =>
                                          //   navigate(
                                          //     `/new-module?id=${courseId}&mid=${moduleId}&lid=${lesson?._id}`
                                          //   )
                                          // }
                                        >
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
                                          Edit Lesson
                                        </button>
                                      </div>
                                    </td>
                                    <td>
                                      <div className="edit-lesson-delt">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            handleDelete(lesson?._id)
                                          }
                                        >
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
                                    </td> */}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </Table>
                        ) : (
                          <div className="no-deta-found">
                            <p style={{ textAlign: "center" }}>
                              Please upload lesson to see.
                            </p>
                          </div>
                        )}

                        {lessonList?.data?.length > 0 && (
                          <div className="pagination-section">
                            <ShowingResult
                              page={pagination}
                              limit={limit}
                              totalUser={lessonList?.count}
                              length={lessonList?.data?.length}
                            />
                            <div className="pagination-block">
                              <PaginationComponent
                                currentPage={pagination}
                                totalCount={lessonList?.count}
                                totalPages={Math.ceil(
                                  lessonList?.count / limit
                                )}
                                onPageChange={(page) => setPagination(page)}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </Col>
            </Row>
          </div>
          <div className="pb-4"></div>
        </Container>
      </div>
    </Layout>
  );
}
