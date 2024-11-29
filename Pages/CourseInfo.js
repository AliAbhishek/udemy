import React, { useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import ShowingResult from "../Components/ShowingResult";
import PaginationComponent from "../Components/Pagination";

export default function CourseInfo() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const BASE_URL = process.env.REACT_APP_FILE_URL;
  console.log(id, "id");

  const { loading, courseDetails, moduleListSpecificToCourse } = useSelector(
    (state) => state.course
  );
  console.log(moduleListSpecificToCourse, "moduleListSpecificToCourse");
  console.log(courseDetails, "courseDetails");
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(0);

  useEffect(() => {
    if (id) {
      dispatch(AdminActions.getCourseInfo(id));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      dispatch(
        AdminActions.getModuleListSpecificToCourse({
          id: id,
          pagination: pagination,
          limit: limit,
        })
      );
    }
  }, [id]);

  return (
    <Layout>
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="page-h-with-btn">
                  <h2 className="mb-0">Information</h2>
                  <div className="d-flex gap-3">
                    <button onClick={() => navigate(`/course-management`)}>
                      Back
                    </button>
                  </div>
                </div>
              </Col>

              <Col lg={12} className="mt-4">
                <Accordion defaultActiveKey="0" className="course-info-accord">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <h2>Basic Information</h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div className="commn-form-card mt-0 p-0">
                        <Row>
                          <Col lg={12}>
                            <div className="course-preview-top">
                              <img
                                src={`${BASE_URL}/public/${courseDetails?.data?.cover_image}`}
                              />
                              <div>
                                <h3>{courseDetails?.data?.title}</h3>
                                <Row>
                                  <Col lg={6}>
                                    <ul>
                                      {courseDetails?.data?.pricing !== 0 && (
                                        <li>
                                          Total Course Module Price:{" "}
                                          {courseDetails?.data?.pricing} coins
                                        </li>
                                      )}

                                      <li>
                                        Course Level:{" "}
                                        {courseDetails?.data?.skill_level == 1
                                          ? "Beginner"
                                          : courseDetails?.data?.skill_level ==
                                            2
                                          ? "Intermediate"
                                          : "Advance"}
                                      </li>
                                    </ul>
                                  </Col>
                                  <Col lg={6}>
                                    <ul>
                                      <li>
                                        Course Language:{" "}
                                        {courseDetails?.data?.language == 1
                                          ? "English"
                                          : "Dutch"}
                                      </li>
                                      <li>
                                        Skills to be learnt:{" "}
                                        {courseDetails?.data?.skills_to_be_learnt
                                          ?.map((skill, index, array) => {
                                            const skillName =
                                              skill === 1
                                                ? "Javascript"
                                                : skill === 2
                                                ? "Python"
                                                : skill === 3
                                                ? "Java"
                                                : "React";

                                            // Add comma if it's not the last element
                                            return index < courseDetails?.data?.skills_to_be_learnt?.length - 1
                                              ? skillName + ", "
                                              : skillName;
                                          })
                                          }
                                      </li>
                                    </ul>
                                  </Col>
                                </Row>
                              </div>
                            </div>

                            <div className="course-preview-disc">
                              <h4>Description:</h4>
                              <p>{courseDetails?.data?.description}</p>
                            </div>

                            <div className="course-preview-top">
                              <div className="w-100">
                                <Row>
                                  <Col lg={4}>
                                    <ul>
                                      <li>
                                        <b>Category</b>:{" "}
                                        {courseDetails?.data?.category_id?.name}
                                      </li>
                                    </ul>
                                  </Col>
                                  {courseDetails?.data?.course_duration && (
                                    <Col lg={6}>
                                      <ul>
                                        <li>
                                          <b>Course Duration</b>:{" "}
                                          {courseDetails?.data?.course_duration
                                            ?.hours +
                                            ":" +
                                            courseDetails?.data?.course_duration
                                              ?.mins}{" "}
                                          hours of video lectures and exercises
                                        </li>
                                      </ul>
                                    </Col>
                                  )}

                                  <Col lg={2}>
                                    <ul>
                                      <li>
                                        <b>Likes: 456</b>
                                      </li>
                                    </ul>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                            <div className="preview-top-employers">
                              <p>Top Employers:</p>
                              <ul>
                                {courseDetails?.data?.top_employers_images?.map(
                                  (images) => {
                                    return (
                                      <li>
                                        <img
                                          src={`${BASE_URL}/public/${images}`}
                                        />
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                            <div className="preview-top-employers">
                              <p> Industry Experts:</p>
                              <ul>
                                {courseDetails?.data?.industry_expert?.map(
                                  (expert) => {
                                    return (
                                      <li>
                                        <img
                                          src={
                                            expert?.profile_pic
                                              ? `${BASE_URL}/public/${expert?.profile_pic}`
                                              : require("../Assets/Images/placeholder.png")
                                          }
                                        />
                                        <p>
                                          {expert?.first_name +
                                            " " +
                                            expert?.last_name}
                                        </p>
                                      </li>
                                    );
                                  }
                                )}
                              </ul>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <h2>Module </h2>
                    </Accordion.Header>
                    <Accordion.Body>
                      <div class="table-responsive">
                        {moduleListSpecificToCourse?.data?.length > 0 && id ? (
                          <Table size="sm" className="table-cmn">
                            <thead>
                              <tr className="border-none">
                                <th></th>
                                <th className="id-field">Module Name</th>
                                <th className="id-field">
                                  Most Recent Comment
                                </th>
                                <th className="id-field">Likes </th>
                                <th className="id-field">Comments</th>
                                <th className="id-field">Action</th>
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
                              {moduleListSpecificToCourse?.data?.map(
                                (module, index) => {
                                  return (
                                    <tr>
                                      <td>{index + 1 + pagination * limit}</td>
                                      <td>
                                        <div className="first-user">
                                          {/* <Link to="/expert-details"> John Smith</Link> */}
                                          <div className="d-flex align-items-center gap-2">
                                            <img
                                              src={`${BASE_URL}/public/${module?.cover_image}`}
                                            />
                                            <div>
                                              <p>{module?.title}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </td>

                                      <td>
                                        <div className="d-flex align-items-center gap-2">
                                          <div>
                                            <p className="mb-0">N/A</p>
                                          </div>
                                        </div>
                                      </td>
                                      <td>0 likes</td>
                                      <td>0</td>
                                      <td>
                                        <div className="page-h-with-btn mt-0">
                                          <div>
                                            <button
                                              type="button"
                                              onClick={() =>
                                                navigate(
                                                  `/module-comments?mid=${module?._id}`
                                                )
                                              }
                                            >
                                              Open
                                            </button>
                                          </div>
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                }
                              )}
                            </tbody>
                            <tr
                              style={{
                                height: "10px",
                                background: "transparent",
                              }}
                            />{" "}
                          </Table>
                        ) : (
                          <div className="no-deta-found">
                            <p style={{ textAlign: "center" }}>
                              No data available yet!
                            </p>
                          </div>
                        )}

                        {moduleListSpecificToCourse?.data?.length > 0 && (
                          <div className="pagination-section">
                            <ShowingResult
                              page={pagination}
                              limit={limit}
                              totalUser={moduleListSpecificToCourse?.count}
                              length={moduleListSpecificToCourse?.data?.length}
                            />
                            <div className="pagination-block">
                              <PaginationComponent
                                currentPage={pagination}
                                totalCount={moduleListSpecificToCourse?.count}
                                totalPages={Math.ceil(
                                  moduleListSpecificToCourse?.count / limit
                                )}
                                onPageChange={(page) => setPagination(page)}
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </div>
          <div className="pb-4"></div>
        </Container>
      </div>
    </Layout>
  );
}
