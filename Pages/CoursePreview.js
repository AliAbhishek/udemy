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
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import PaginationComponent from "../Components/Pagination";
import ShowingResult from "../Components/ShowingResult";
import toast from "react-hot-toast";

export default function CoursePreview() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const BASE_URL = process.env.REACT_APP_FILE_URL;
  console.log(id, "id");
  const { courseDetails, moduleListSpecificToCourse } = useSelector(
    (state) => state.course
  );
  console.log(courseDetails, "courseDetails");
  // const [purpose, setPurpose] = useState(null);

  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(0);
  const [show, setShow] = useState(false);
  const [flag, setFlag] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (id) {
      dispatch(AdminActions.getCourseInfo(id));
    }
    // if (location) {
    //   setPurpose(location?.state?.type);
    // }
  }, [id, flag]);

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
                  <h2 className="mb-0">Course Preview</h2>
                  <div className="d-flex gap-3">
                    {/* <Link to="/course-info">Save as draft</Link> */}
                    <button
                      onClick={async () => {
                        if (moduleListSpecificToCourse?.data?.length == 0) {
                          toast.error("Please add atleast on module");
                        } else {
                          let res = await dispatch(
                            AdminActions.publishUnpublishCourse(id)
                          );
                          if (res?.payload?.data?.data?.status == 200) {
                            // navigate(`/course-info/${res?.payload?.data?.data?.data?._id}`,{state:{type:"create"}});
                            handleShow();
                            setFlag(!flag);
                          }
                        }
                      }}
                    >
                      {courseDetails?.data?.publish_status == 1
                        ? "Published"
                        : "Publish"}
                    </button>
                  </div>
                </div>
              </Col>
              <Col lg={12}>
                <div className="commn-form-card">
                  <h2>Basic Information</h2>
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
                                    : courseDetails?.data?.skill_level == 2
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
                                      .hours +
                                      ":" +
                                      courseDetails?.data?.course_duration
                                        .mins}{" "}
                                    hours of video lectures and exercises
                                  </li>
                                </ul>
                              </Col>
                            )}

                            {/* <Col lg={2}>
                              <ul>
                                <li>
                                  <b>Likes: 456</b>
                                </li>
                              </ul>
                            </Col> */}
                          </Row>
                        </div>
                      </div>
                      <div className="preview-top-employers">
                        <p>Top Employers:</p>
                        <ul>
                          {courseDetails?.data?.top_employers_images?.map(
                            (logo) => {
                              return (
                                <li>
                                  <img src={`${BASE_URL}/public/${logo}`} />
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
              </Col>

              <Container fluid>
                <div className="filters">
                  <div className="inner-filter-field">
                    <div className="user-search">
                      <h2>Modules </h2>
                      {/* <div className="drop-down">
                  <div className="select-box">
                    <Form.Select aria-label="Default select example">
                      <option>10</option>
                      <option value="1">9</option>
                    </Form.Select>
                  </div>
                </div> */}

                      {moduleListSpecificToCourse?.data?.length > 0 && (
                        <div className="page-h-with-btn">
                          <div>
                            <button
                              onClick={() => navigate(`/new-module?id=${id}`)}
                            >
                              Create Module
                            </button>
                          </div>
                        </div>
                      )}
                    </div>

                    <div class="table-responsive">
                      {moduleListSpecificToCourse?.data?.length > 0 ? (
                        <Table size="sm" className="table-cmn">
                          <thead>
                            <tr className="border-none">
                              <th></th>
                              <th className="id-field">Module Title</th>
                              <th className="id-field">Description</th>
                              {/* <th className="id-field">Price </th> */}
                              <th className="id-field">Lessions</th>
                              <th className="id-field">Actions</th>
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
                                          <p className="mb-0">
                                            {module?.description}
                                          </p>
                                        </div>
                                      </div>
                                    </td>
                                    {/* <td>200 Coins</td> */}
                                    <td>{module?.total_lessons}</td>
                                    <td>
                                      <div className="edit-lesson-action gap-2 justify-content-start">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            navigate(
                                              `/new-module?id=${id}&mid=${module?._id}&edit=true`
                                            );
                                          }}
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
                                          Edit
                                        </button>
                                        <div onClick={async () => {
                                                    let res = await dispatch(AdminActions.DeleteModule(module?._id))
                                                    if (res?.payload?.data?.data?.status === 200) {
                                                      setFlag(!flag);
                                                    }
                                                  }} className="edit-lesson-delt">
                                          <button type="button">
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
                                      </div>
                                    </td>
                                  </tr>
                                );
                              }
                            )}
                          </tbody>
                        </Table>
                      ) : (
                        <Col lg={12} className="mb-2">
                          <div className="commn-form-card">
                            {/* <h2>Modules</h2> */}
                            <div className="course-modules-contain">
                              <div className="course-modules-left">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="46"
                                  height="44"
                                  viewBox="0 0 46 44"
                                  fill="none"
                                >
                                  <path
                                    d="M11.75 9.63505H33.6875C38.4276 9.63505 40.7976 9.63505 42.5001 10.7739C43.2371 11.2669 43.87 11.9004 44.3624 12.6383C45.5 14.3427 45.5 17.2546 45.5 22M23 9.63505L21.5748 6.7814C20.394 4.41728 19.315 2.03759 16.6983 1.05525C15.5523 0.625 14.243 0.625 11.6246 0.625C7.53755 0.625 5.49402 0.625 3.96064 1.48167C2.8676 2.09233 1.9657 2.99524 1.35571 4.08951C0.5 5.6246 0.5 7.67041 0.5 11.762V18.6451C0.5 29.2636 0.5 34.5728 3.79505 37.8715C6.3014 40.3807 9.96968 40.9812 16.25 41.125"
                                    stroke="#141B34"
                                    stroke-linecap="round"
                                  />
                                  <path
                                    d="M39.875 32.4542L40.0167 32.3519C42.3969 30.6335 43.587 29.7742 44.5435 30.1891C45.5 30.604 45.5 31.9794 45.5 34.7303V36.2697C45.5 39.0206 45.5 40.396 44.5435 40.8109C43.587 41.2258 42.3969 40.3665 40.0167 38.6481L39.875 38.5458M30.875 43.375H32C35.7123 43.375 37.5685 43.375 38.7217 42.3659C39.875 41.3568 39.875 39.7326 39.875 36.4844V34.5156C39.875 31.2674 39.875 29.6432 38.7217 28.6341C37.5685 27.625 35.7123 27.625 32 27.625H30.875C27.1627 27.625 25.3065 27.625 24.1533 28.6341C23 29.6432 23 31.2674 23 34.5156V36.4844C23 39.7326 23 41.3568 24.1533 42.3659C25.3065 43.375 27.1627 43.375 30.875 43.375Z"
                                    stroke="#141B34"
                                    stroke-linecap="round"
                                  />
                                </svg>
                              </div>
                              <div className="course-modules-right">
                                <h3>You are yet to create any module </h3>
                                <p>
                                  When you have added a module, it will appear
                                  here
                                </p>
                                <button
                                  type="button"
                                  onClick={() => {
                                    if (id) {
                                      navigate(`/new-module?id=${id}`);
                                    }
                                  }}
                                  // to="/new-module"
                                >
                                  Create Module
                                </button>
                              </div>
                            </div>
                          </div>
                        </Col>
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
                  </div>
                </div>
              </Container>
            </Row>
          </div>
          <div className="pb-4"></div>
        </Container>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="p-5">
          <div className="user-detail-modal">
            <h2>Course Submission Successful</h2>
            <p>
              Your course has been successfully submitted for approval. It will
              now undergo review by a super admin. Once approved, it will be
              published and made available to learners on the platform.
              <br />
              <br />
              Thank you for your submission!
            </p>
          </div>
          <div className="modal-comn-btns mb-0">
            <button
              className="theme-btn"
              onClick={() => {
                handleClose();

                navigate("/course-management");
              }}
            >
              Return to dashboard
            </button>
            {/* <button className="untheme-btn" onClick={handleClose}>Save Changes</button> */}
          </div>
        </Modal.Body>
      </Modal>
    </Layout>
  );
}
