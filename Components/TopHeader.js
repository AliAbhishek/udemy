import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import HeaderName from "./Layout/HeaderName";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import { computeHeadingLevel } from "@testing-library/react";
const TopHeader = () => {
  const location = useLocation();
  console.log(location, "location");
  const { id, type } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { adminDetails } = useSelector((state) => state.admin);
  console.log(adminDetails);
  const queryParams = new URLSearchParams(location.search);
  const isEdit = new URLSearchParams(useLocation().search).get("edit");
  const queryId = new URLSearchParams(useLocation().search).get("id");

  const buttonText = isEdit === "true" ? "Edit" : "New";

  useEffect(() => {
    if (!adminDetails) {
      dispatch(AdminActions.profile());
    }
  }, []);

  // console.log(
  //   location.pathname == `/new-course?id=${queryId}&edit=${isEdit}`
  //     ? "Edit"
  //     : "New",
  //   "3434"
  // );
  // console.log(
  //   useLocation().search === `?id=${queryId}&edit=${isEdit}` ? "Edit" : "New",
  //   "dfsfdsdfsdf"
  // );

  console.log(location.pathname, queryParams);

  console.log(location.pathname + `?id=${queryId}&edit=${isEdit}`);
  console.log(`/new-course?id=${queryId}&edit=${isEdit}`);

  return (
    <div>
      <Container fluid className="p-0">
        <div className="dashboard-items">
          <div className="right-top-bar">
            <div className="left-side-bar">
              {/* <h2>Overview</h2> */}

              {location.pathname === "/home" && <HeaderName name="Overview" />}
              {(location.pathname === "/user-management" ||
                location.pathname === "/user-details" ||
                location.pathname === `/new-user/${type}` ||
                location.pathname === `/user-details/${id}`) && (
                <HeaderName name="User Management" />
              )}

              {(location.pathname === "/new-expert/add" ||
                location.pathname === `/new-expert/${type}` ||
                location.pathname === `/expert-details/${id}`) && (
                <HeaderName name="Industry Expert Management" />
              )}
              {location.pathname === "/industry-experts-management" && (
                <HeaderName name="Industry Expert Management" />
              )}
              {(location.pathname === "/course-management" ||
                location.pathname === "/new-course" ||
                location.pathname === `/course-info/${id}` ||
                location.pathname === `/course-preview/${id}` ||
                location.pathname === "/new-module" ||
                location.pathname === "/module-comments") && (
                <HeaderName name="Course Management" />
              )}
            </div>
            <div className="right-side-bar">
              <div className="user-img-top">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <div className="drop-pro-view">
                      <img src={require("../Assets/Images/user.svg").default} />
                      <div className="admin-name">
                        <h3>{adminDetails?.data?.first_name}</h3>
                        <p>Role name</p>
                      </div>
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
                            d="M20.3175 6.14139L19.8239 5.28479C19.4506 4.63696 19.264 4.31305 18.9464 4.18388C18.6288 4.05472 18.2696 4.15664 17.5513 4.36048L16.3311 4.70418C15.8725 4.80994 15.3913 4.74994 14.9726 4.53479L14.6357 4.34042C14.2766 4.11043 14.0004 3.77133 13.8475 3.37274L13.5136 2.37536C13.294 1.71534 13.1842 1.38533 12.9228 1.19657C12.6615 1.00781 12.3143 1.00781 11.6199 1.00781H10.5051C9.81078 1.00781 9.4636 1.00781 9.20223 1.19657C8.94085 1.38533 8.83106 1.71534 8.61149 2.37536L8.27753 3.37274C8.12465 3.77133 7.84845 4.11043 7.48937 4.34042L7.15249 4.53479C6.73374 4.74994 6.25259 4.80994 5.79399 4.70418L4.57375 4.36048C3.85541 4.15664 3.49625 4.05472 3.17867 4.18388C2.86109 4.31305 2.67445 4.63696 2.30115 5.28479L1.80757 6.14139C1.45766 6.74864 1.2827 7.05227 1.31666 7.37549C1.35061 7.69871 1.58483 7.95918 2.05326 8.48012L3.0843 9.63282C3.3363 9.95185 3.51521 10.5078 3.51521 11.0077C3.51521 11.5078 3.33636 12.0636 3.08433 12.3827L2.05326 13.5354C1.58483 14.0564 1.35062 14.3168 1.31666 14.6401C1.2827 14.9633 1.45766 15.2669 1.80757 15.8741L2.30114 16.7307C2.67443 17.3785 2.86109 17.7025 3.17867 17.8316C3.49625 17.9608 3.85542 17.8589 4.57377 17.655L5.79394 17.3113C6.25263 17.2055 6.73387 17.2656 7.15267 17.4808L7.4895 17.6752C7.84851 17.9052 8.12464 18.2442 8.2775 18.6428L8.61149 19.6403C8.83106 20.3003 8.94085 20.6303 9.20223 20.8191C9.4636 21.0078 9.81078 21.0078 10.5051 21.0078H11.6199C12.3143 21.0078 12.6615 21.0078 12.9228 20.8191C13.1842 20.6303 13.294 20.3003 13.5136 19.6403L13.8476 18.6428C14.0004 18.2442 14.2765 17.9052 14.6356 17.6752L14.9724 17.4808C15.3912 17.2656 15.8724 17.2055 16.3311 17.3113L17.5513 17.655C18.2696 17.8589 18.6288 17.9608 18.9464 17.8316C19.264 17.7025 19.4506 17.3785 19.8239 16.7307L20.3175 15.8741C20.6674 15.2669 20.8424 14.9633 20.8084 14.6401C20.7744 14.3168 20.5402 14.0564 20.0718 13.5354L19.0407 12.3827C18.7887 12.0636 18.6098 11.5078 18.6098 11.0077C18.6098 10.5078 18.7888 9.95185 19.0408 9.63282L20.0718 8.48012C20.5402 7.95918 20.7744 7.69871 20.8084 7.37549C20.8424 7.05227 20.6674 6.74864 20.3175 6.14139Z"
                            stroke="#343637"
                            stroke-linecap="round"
                          />
                          <path
                            d="M14.5195 11C14.5195 12.933 12.9525 14.5 11.0195 14.5C9.08653 14.5 7.51953 12.933 7.51953 11C7.51953 9.067 9.08653 7.5 11.0195 7.5C12.9525 7.5 14.5195 9.067 14.5195 11Z"
                            stroke="#343637"
                          />
                        </svg>
                        Account Settings
                      </Dropdown.Item>
                    </div>
                    <Dropdown.Divider />
                    <div className="my-profile">
                      <Dropdown.Item
                        // href="/"
                        onClick={async () => {
                          let res = await dispatch(AdminActions.logout());
                          console.log(res, "rers");
                          if (res?.payload?.data?.data?.status == 200) {
                            navigate("/");
                            sessionStorage.clear();
                          }
                        }}
                        className="text-danger"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M13 15.625C12.9264 17.4769 11.3831 19.0494 9.31564 18.9988C8.83465 18.987 8.24013 18.8194 7.05112 18.484C4.18961 17.6768 1.70555 16.3203 1.10956 13.2815C1 12.723 1 12.0944 1 10.8373L1 9.16274C1 7.90561 1 7.27705 1.10956 6.71846C1.70555 3.67965 4.18961 2.32316 7.05112 1.51603C8.24014 1.18064 8.83465 1.01295 9.31564 1.00119C11.3831 0.95061 12.9264 2.52307 13 4.37501"
                            stroke="#BB1111"
                            stroke-linecap="round"
                          />
                          <path
                            d="M19 10H8M19 10C19 9.29977 17.0057 7.99153 16.5 7.5M19 10C19 10.7002 17.0057 12.0085 16.5 12.5"
                            stroke="#BB1111"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Logout
                      </Dropdown.Item>
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="notify-icon">
                <div className="notification-icon">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="23"
                        viewBox="0 0 22 23"
                        fill="none"
                      >
                        <path
                          d="M1.52992 13.894C1.31727 15.2471 2.268 16.1862 3.43205 16.6542C7.89481 18.4486 14.1052 18.4486 18.5679 16.6542C19.732 16.1862 20.6827 15.2471 20.4701 13.894C20.3394 13.0625 19.6932 12.3701 19.2144 11.694C18.5873 10.7975 18.525 9.81971 18.5249 8.77941C18.5249 4.7591 15.1559 1.5 11 1.5C6.84413 1.5 3.47513 4.7591 3.47513 8.77941C3.47503 9.81971 3.41272 10.7975 2.78561 11.694C2.30684 12.3701 1.66061 13.0625 1.52992 13.894Z"
                          stroke="#343637"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 20.5C8.79613 21.1219 9.84747 21.5 11 21.5C12.1525 21.5 13.2039 21.1219 14 20.5"
                          stroke="#343637"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item className="">
                        <div className="notify-head">
                          <p>Notifications</p>
                          <div className="">{/* <span>8 New</span> */}</div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item className="">
                        <div className="drop-pro-view mt-3">
                          <div className="user-notfic-icon">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="8"
                                fill="#E6EEF1"
                              />
                              <path
                                d="M7.0046 27.8068C6.13396 27.8087 5.27842 27.5794 4.52539 27.1424C3.77235 26.7054 3.1488 26.0764 2.71844 25.3196C2.29466 24.5681 2.08331 23.7154 2.10702 22.853C2.13074 21.9905 2.38862 21.1508 2.85306 20.4237L11.6797 6.56279C12.1315 5.81787 12.7729 5.20621 13.5384 4.79029C14.3039 4.37437 15.1661 4.16908 16.0369 4.19541C16.9071 4.21627 17.756 4.46794 18.497 4.92467C19.2379 5.3814 19.8442 6.02679 20.2538 6.79479C21.0768 8.35064 20.9738 10.2225 19.9884 11.6831L11.1674 25.5439C10.72 26.2409 10.104 26.8138 9.3763 27.2094C8.64862 27.605 7.83285 27.8105 7.0046 27.8068Z"
                                fill="#165D7C"
                              />
                              <path
                                d="M25.3505 20.4489C27.8602 20.4489 29.8948 18.4571 29.8948 16C29.8948 13.5429 27.8602 11.5511 25.3505 11.5511C22.8407 11.5511 20.8062 13.5429 20.8062 16C20.8062 18.4571 22.8407 20.4489 25.3505 20.4489Z"
                                fill="#165D7C"
                              />
                            </svg>
                          </div>
                          <div className="notification-box">
                            <h5>New User Registration</h5>
                            <p>
                              A new user has registered on the platform. Please
                              review their account details.
                            </p>
                            <span>16th March, 2023</span>
                          </div>
                          <div className="">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="11"
                                viewBox="0 0 10 11"
                                fill="none"
                              >
                                <path
                                  d="M5 10.1299C7.76142 10.1299 10 7.89128 10 5.12985C10 2.36843 7.76142 0.129852 5 0.129852C2.23858 0.129852 0 2.36843 0 5.12985C0 7.89128 2.23858 10.1299 5 10.1299Z"
                                  fill="#165D7C"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="">
                        <div className="drop-pro-view mt-3">
                          <div className="user-notfic-icon">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="8"
                                fill="#E6EEF1"
                              />
                              <path
                                d="M7.0046 27.8068C6.13396 27.8087 5.27842 27.5794 4.52539 27.1424C3.77235 26.7054 3.1488 26.0764 2.71844 25.3196C2.29466 24.5681 2.08331 23.7154 2.10702 22.853C2.13074 21.9905 2.38862 21.1508 2.85306 20.4237L11.6797 6.56279C12.1315 5.81787 12.7729 5.20621 13.5384 4.79029C14.3039 4.37437 15.1661 4.16908 16.0369 4.19541C16.9071 4.21627 17.756 4.46794 18.497 4.92467C19.2379 5.3814 19.8442 6.02679 20.2538 6.79479C21.0768 8.35064 20.9738 10.2225 19.9884 11.6831L11.1674 25.5439C10.72 26.2409 10.104 26.8138 9.3763 27.2094C8.64862 27.605 7.83285 27.8105 7.0046 27.8068Z"
                                fill="#165D7C"
                              />
                              <path
                                d="M25.3505 20.4489C27.8602 20.4489 29.8948 18.4571 29.8948 16C29.8948 13.5429 27.8602 11.5511 25.3505 11.5511C22.8407 11.5511 20.8062 13.5429 20.8062 16C20.8062 18.4571 22.8407 20.4489 25.3505 20.4489Z"
                                fill="#165D7C"
                              />
                            </svg>
                          </div>
                          <div className="notification-box">
                            <h5>New User Registration</h5>
                            <p>
                              A new user has registered on the platform. Please
                              review their account details.
                            </p>
                            <span>16th March, 2023</span>
                          </div>
                          <div className="">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="11"
                                viewBox="0 0 10 11"
                                fill="none"
                              >
                                <path
                                  d="M5 10.1299C7.76142 10.1299 10 7.89128 10 5.12985C10 2.36843 7.76142 0.129852 5 0.129852C2.23858 0.129852 0 2.36843 0 5.12985C0 7.89128 2.23858 10.1299 5 10.1299Z"
                                  fill="#165D7C"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Dropdown.Item>
                      <Dropdown.Item className="">
                        <div className="drop-pro-view mt-3">
                          <div className="user-notfic-icon">
                            <svg
                              width="32"
                              height="32"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="32"
                                height="32"
                                rx="8"
                                fill="#E6EEF1"
                              />
                              <path
                                d="M7.0046 27.8068C6.13396 27.8087 5.27842 27.5794 4.52539 27.1424C3.77235 26.7054 3.1488 26.0764 2.71844 25.3196C2.29466 24.5681 2.08331 23.7154 2.10702 22.853C2.13074 21.9905 2.38862 21.1508 2.85306 20.4237L11.6797 6.56279C12.1315 5.81787 12.7729 5.20621 13.5384 4.79029C14.3039 4.37437 15.1661 4.16908 16.0369 4.19541C16.9071 4.21627 17.756 4.46794 18.497 4.92467C19.2379 5.3814 19.8442 6.02679 20.2538 6.79479C21.0768 8.35064 20.9738 10.2225 19.9884 11.6831L11.1674 25.5439C10.72 26.2409 10.104 26.8138 9.3763 27.2094C8.64862 27.605 7.83285 27.8105 7.0046 27.8068Z"
                                fill="#165D7C"
                              />
                              <path
                                d="M25.3505 20.4489C27.8602 20.4489 29.8948 18.4571 29.8948 16C29.8948 13.5429 27.8602 11.5511 25.3505 11.5511C22.8407 11.5511 20.8062 13.5429 20.8062 16C20.8062 18.4571 22.8407 20.4489 25.3505 20.4489Z"
                                fill="#165D7C"
                              />
                            </svg>
                          </div>
                          <div className="notification-box">
                            <h5>New User Registration</h5>
                            <p>
                              A new user has registered on the platform. Please
                              review their account details.
                            </p>
                            <span>16th March, 2023</span>
                          </div>
                          <div className="">
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="10"
                                height="11"
                                viewBox="0 0 10 11"
                                fill="none"
                              >
                                <path
                                  d="M5 10.1299C7.76142 10.1299 10 7.89128 10 5.12985C10 2.36843 7.76142 0.129852 5 0.129852C2.23858 0.129852 0 2.36843 0 5.12985C0 7.89128 2.23858 10.1299 5 10.1299Z"
                                  fill="#165D7C"
                                />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page-connect">
          <ul>
            <li>
              <div style={{ cursor: "pointer]" }}>
                {location.pathname === "/home" && "Home"}
                {(location.pathname === "/user-management" ||
                  location.pathname === `/new-user/${type}` ||
                  location.pathname === `/user-details/${id}`) && (
                  <div
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      navigate("/user-management");
                    }}
                  >
                    User
                  </div>
                )}
                {location.pathname === "/industry-experts-management" &&
                  "Experts"}
                {/* {location.pathname === "/industry-experts-management" &&
                  "Experts"} */}
                {location.pathname === "/course-management" && "Courses"}
                {(location.pathname === "/new-course" ||
                  location.pathname === "/module-comments" ||
                  location.pathname === "/new-module" ||
                  location.pathname === `/course-info/${id}` ||
                  location.pathname === `/course-preview/${id}`) && ( // Show "Experts + Adding" when on the add new expert page
                  <>
                    <div
                      onClick={() => {
                        console.log(
                          "Navigating to industry experts management"
                        );
                        navigate("/course-management");
                      }}
                      style={{ cursor: "pointer" }} // Added cursor style for better UX
                    >
                      Courses
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                        stroke="#5F6D7E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>{" "}
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        location.pathname === `/course-preview/${id}`
                          ? navigate(`/new-course`)
                          : ""
                      }
                    >
                      {location.pathname === `/course-info/${id}` ||
                      location.pathname === "/module-comments" ? (
                        "Course Info"
                      ) : (
                        <span
                          onClick={() =>
                            buttonText == "New" && navigate(`/new-course`)
                          }
                        >
                          {/* {location.pathname + `?id=${queryId}&edit=${isEdit!=="null"}`==`/new-course?id=${queryId}&edit=${isEdit!=="null"}`
                            ? "Edit "
                            : "New "}
                           Course */}
                          {buttonText} Course
                        </span>
                      )}
                    </span>
                    {location.pathname === "/module-comments" && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                            stroke="#5F6D7E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>{" "}
                        <span>Module Info</span>
                      </>
                    )}
                    {location.pathname === "/new-module" && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                            stroke="#5F6D7E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>{" "}
                        <span>{buttonText} Module</span>
                      </>
                    )}
                    {location.pathname === `/course-preview/${id}` && (
                      <>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                            stroke="#5F6D7E"
                            stroke-width="1.5"
                            stroke-linecap="round"
                          />
                        </svg>{" "}
                        <span>Preview</span>
                      </>
                    )}
                  </>
                )}

                {location.pathname === `/expert-details/${id}` && ( // Show "Experts + Adding" when on the add new expert page
                  <>
                    <div
                      onClick={() => navigate("/industry-experts-management")}
                    >
                      Experts
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                        stroke="#5F6D7E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>{" "}
                    <span> Expert Details</span>
                  </>
                )}
                {location.pathname === `/new-expert/add` && ( // Show "Experts + Adding" when on the add new expert page
                  <>
                    <div
                      onClick={() => {
                        console.log(
                          "Navigating to industry experts management"
                        );
                        navigate("/industry-experts-management");
                      }}
                      style={{ cursor: "pointer" }} // Added cursor style for better UX
                    >
                      Experts
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                        stroke="#5F6D7E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>{" "}
                    <span> Add Expert</span>
                  </>
                )}
                {type !== "add" &&
                  location.pathname === `/new-expert/${type}` && ( // Show "Experts + Adding" when on the add new expert page
                    <>
                      Experts
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                          stroke="#5F6D7E"
                          stroke-width="1.5"
                          stroke-linecap="round"
                        />
                      </svg>{" "}
                      <span> Edit Expert</span>
                    </>
                  )}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                    stroke="#5F6D7E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </svg>

                {(location.pathname === `/new-user/${type}` ||
                  location.pathname === `/user-details/${id}`) && (
                  <>
                    {location.pathname === `/user-details/${id}`
                      ? "User Details"
                      : "Add User"}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M8.33331 5L12.7441 9.41074C13.0695 9.73618 13.0695 10.2638 12.7441 10.5893L8.33331 15"
                        stroke="#5F6D7E"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </>
                )}
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
