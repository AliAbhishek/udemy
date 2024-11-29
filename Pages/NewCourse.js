import React, { useEffect, useState } from "react";
import {
  Link,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Layout from "../Components/Layout/Layout";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import AdminActions from "../Redux/Action/AdminActions";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../Components/Loader";
import ShowingResult from "../Components/ShowingResult";
import PaginationComponent from "../Components/Pagination";

export default function NewCourse() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const BASE_URL = process.env.REACT_APP_FILE_URL;
  const { expertList } = useSelector((state) => state.creation);
  const { categoryList } = useSelector((state) => state.category);
  const { loading, courseDetails, moduleListSpecificToCourse } = useSelector(
    (state) => state.course
  );

  const courseId = new URLSearchParams(useLocation().search).get("id");
  const isEdit = new URLSearchParams(useLocation().search).get("edit");
  console.log(courseId, "loc");
  const [selectedExperts, setSelectedExperts] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [coverImage, setCoverImage] = useState(null);
  const [uploadedLogos, setUploadedLogos] = useState([]);
  const [limit, setLimit] = useState(10);
  const [flag, setFlag] = useState(10);
  const [pagination, setPagination] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    if (courseId) {
      dispatch(AdminActions.getCourseInfo(courseId));
    }
  }, [courseId]);

  const initialValues = {
    courseTitle: (courseId && courseDetails?.data?.title) ?? "",
    coverImage: (courseId && courseDetails?.data?.cover_image) ?? "",
    description: (courseId && courseDetails?.data?.description) ?? "",
    category: (courseId && courseDetails?.data?.category_id?._id) ?? "",
    skillLevel: (courseId && courseDetails?.data?.skill_level) ?? "",
    industryExperts:
      (courseId && courseDetails?.data?.industry_expert?.map((x) => x?._id)) ??
      "",
    skillToBeLearnt:
      (courseId && courseDetails?.data?.skills_to_be_learnt) ?? "",
    topEmployers: (courseId && courseDetails?.data?.top_employers_images) ?? "",
    courseLanguage: (courseId && courseDetails?.data?.language) ?? "",
    pricing: (courseId && courseDetails?.data?.pricing) ?? "",
    duration: {
      hours: (courseId && courseDetails?.data?.course_duration?.hours) ?? "",
      mins: (courseId && courseDetails?.data?.course_duration?.mins) ?? "",
    },
  };

  useEffect(() => {
    dispatch(
      AdminActions.getExpertsList({
        role: 3,
      })
    );
  }, []);

  useEffect(() => {
    dispatch(AdminActions.getCategory());
  }, []);

  useEffect(() => {
    if (courseId) {
      dispatch(
        AdminActions.getModuleListSpecificToCourse({
          id: courseId,
          pagination: pagination,
          limit: limit,
        })
      );
    }
  }, [courseId, flag]);

  useEffect(() => {
    if (courseId && courseDetails) {
      let editableData = courseDetails?.data?.industry_expert?.map(
        (x) => x?._id
      );
      setSelectedExperts(editableData);
      setSelectedSkills(courseDetails?.data?.skills_to_be_learnt);
      setUploadedLogos(courseDetails?.data?.top_employers_images);
    }
  }, [courseDetails]);
  console.log(uploadedLogos, "uploadedLogos");

  const handleExpertSelect = (event, setFieldValue) => {
    const selectedId = event.target.value;

    if (selectedExperts.length === 5) {
      return toast.error("Maximum limit exceeds");
    }

    if (selectedId && selectedExperts?.includes(selectedId)) {
      return toast.error("Expert already selected");
    }

    if (selectedId && !selectedExperts.includes(selectedId)) {
      const updatedExperts = [...selectedExperts, selectedId];
      setSelectedExperts(updatedExperts);
      setFieldValue("industryExperts", updatedExperts);
    }
  };

  const handleSkillSelection = (e, setFieldValue) => {
    const selectedSkillId = e.target.value;

    if (selectedSkills.length >= 5) {
      return toast.error("Maximum limit exceeds");
    }

    if (selectedSkillId && selectedSkills?.includes(Number(selectedSkillId))) {
      return toast.error("Skill already selected");
    }

    if (selectedSkillId && !selectedSkills.includes(selectedSkillId)) {
      const updatedSkills = [...selectedSkills, Number(selectedSkillId)];
      setSelectedSkills(updatedSkills);
      setFieldValue("skillToBeLearnt", updatedSkills);
    }
  };

  console.log(selectedSkills, "skill");

  const removeExpert = (expertId) => {
    setSelectedExperts(selectedExperts.filter((id) => id !== expertId));
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  const handleImageUpload = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(file);
      setFieldValue("coverImage", file);
    }
  };

  const handleLogoUpload = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    const newLogos = files;
    setUploadedLogos([...uploadedLogos, newLogos]);
    setFieldValue("topEmployers", [...uploadedLogos, newLogos]);
  };

  let Skills = [
    {
      name: "Javascript",
      value: 1,
    },
    {
      name: "Python",
      value: 2,
    },
    {
      name: "Java",
      value: 3,
    },
    {
      name: "React",
      value: 4,
    },
  ];

  let skillLevel = [
    { name: "Beginner", value: 1 },
    { name: "Intermediate", value: 2 },
    { name: "Advance", value: 3 },
  ];

  let language = [
    { name: "English", value: 1 },
    { name: "Dutch", value: 2 },
  ];

  const validate = (value) => {
    let errors = {};

    if (!value.courseTitle) {
      errors.courseTitle = "Please enter course title";
      return errors;
    }
    if (!value.coverImage) {
      errors.coverImage = "Please upload a cover image";
      return errors;
    }
    if (!value.description) {
      errors.description = "Please enter a course description";
      return errors;
    }
    if (!value.category) {
      errors.category = "Please select a category";
      return errors;
    }
    if (!value.skillLevel) {
      errors.skillLevel = "Please select a skill level";
      return errors;
    }
    if (!value.industryExperts || value.industryExperts.length === 0) {
      errors.industryExperts = "Please select at least one industry expert";
      return errors;
    }
    if (!value.skillToBeLearnt || value.skillToBeLearnt.length === 0) {
      errors.skillToBeLearnt = "Please select at least one skill to be learnt";
      return errors;
    }
    if (!value.courseLanguage) {
      errors.courseLanguage = "Please select a course language";
      return errors;
    }
    if (!value.pricing) {
      errors.pricing = "Please enter a course price";
      return errors;
    } else if (isNaN(value.pricing) || value.pricing == 0) {
      errors.pricing = "Please enter a valid course price";
      return errors;
    }
    if (!value.duration.hours) {
      errors.duration = "Please enter a course duration ";
      return errors;
    } else if (isNaN(value.duration.hours) || value.duration.hours == 0) {
      errors.duration = "Please enter a valid course duration ";
      return errors;
    }
    if (!value.duration.mins) {
      errors.duration = "Please enter a course duration minutes ";
      return errors;
    } else if (isNaN(value.duration.mins)) {
      errors.duration = "Please enter a valid course duration ";
      return errors;
    } else if (value.duration.mins > 59) {
      errors.duration = "Course duration in minutes cannot exceed 59.";
      return errors;
    }
    if (!value.topEmployers || value.topEmployers.length === 0) {
      errors.topEmployers = "Please upload logos of top employers";
      return errors;
    }

    return errors;
  };

  const handleSubmit = async (value) => {
    console.log(value);
    const errors = validate(value);

    if (Object.keys(errors)?.length == 0) {
      console.log(value, "eneteredValues");

      let formDataToSave = new FormData();
      formDataToSave.append("title", value.courseTitle);
      formDataToSave.append("description", value.description);
      formDataToSave.append("category_id", value.category);
      formDataToSave.append(
        "industry_expert",
        courseId ? selectedExperts : value.industryExperts
      );
      formDataToSave.append(
        "skills_to_be_learnt",
        courseId ? selectedSkills : value.skillToBeLearnt
      );
      formDataToSave.append("skill_level", value.skillLevel);
      formDataToSave.append("cover_image", value.coverImage);
      formDataToSave.append("language", value.courseLanguage);
      formDataToSave.append("pricing", value.pricing);
      formDataToSave.append("course_duration", JSON.stringify(value.duration));
      if (value?.topEmployers) {
        console.log(value?.topEmployers, "top");
        value?.topEmployers?.forEach((x) => {
          formDataToSave.append("top_employers_images", x[0]);
        });
      }
      let res = courseId
        ? await dispatch(
          AdminActions.EditCourse({ id: courseId, data: formDataToSave })
        )
        : await dispatch(AdminActions.createCourse(formDataToSave));
      if (res?.payload?.data?.data?.status == 200) {
        // navigate(`/course-info/${res?.payload?.data?.data?.data?._id}`,{state:{type:"create"}});
        navigate(`/course-preview/${res?.payload?.data?.data?.data?._id}`);
      }
    } else {
      Object.values(errors)?.forEach((err) => toast.error(err));
    }
  };

  // const renderDeleteIcon = (logo, setFieldValue, index) => (
  //   <span
  //     onClick={async () => {
  //       let res;
  //       if (logo instanceof File) {
  //         setUploadedLogos((prev) => {
  //           const newLogos = prev.filter((_, i) => i !== index);
  //           console.log(newLogos, "newLogos");
  //           setFieldValue("additionalFiles", newLogos);
  //           return newLogos;
  //         });
  //       } else {
  //         res = await dispatch(
  //           AdminActions.DeleteAdditionalFile({
  //             id: ,
  //             file: logo,
  //           })
  //         );
  //         if (res?.payload?.data?.data?.status === 200) {
  //           setFlag(!flag);
  //         }
  //       }
  //     }}
  //     style={{
  //       position: "absolute",
  //       top: "5px",
  //       right: "5px",
  //       cursor: "pointer",
  //       color: "red",
  //       fontSize: "20px",
  //       zIndex: 10,
  //     }}
  //   >
  //     &times; {/* Cross icon */}
  //   </span>
  // );

  return (
    <Layout>
      {loading && <Loader />}
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                enableReinitialize={true}
              >
                {({ setFieldValue, values, handleChange, handleSubmit }) => {
                  console.log(values, "vvallauuuesss");
                  return (
                    <Form>
                      <Col lg={12}>
                        <div className="page-h-with-btn">
                          <h2 className="mb-0">
                            {isEdit ? "Edit " : "New "}Course
                          </h2>
                          <div>
                            <button
                              // to="/add-new-expert"
                              type="submit"
                              onClick={handleSubmit}
                            >
                              Save as draft
                            </button>
                          </div>
                        </div>
                      </Col>
                      <Col lg={12}>
                        <div className="commn-form-card">
                          <h2>Basic Information</h2>

                          <Row>
                            <Col lg={6}>
                              <Row>
                                <Col lg={12}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control
                                      type="text"
                                      placeholder="Enter course title"
                                      value={values.courseTitle}
                                      name="courseTitle"
                                      onChange={handleChange}
                                    />
                                  </Form.Group>
                                </Col>
                                <Col lg={12}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                      as="textarea"
                                      placeholder="Enter course description"
                                      rows={6}
                                      value={values.description}
                                      name="description"
                                      onChange={handleChange}
                                    />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                            <Col lg={6}>
                              <Row>
                                <Col lg={12}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Cover Image</Form.Label>

                                    <div className="commn-upld-file">
                                      <div>
                                        {(coverImage || values?.coverImage) &&
                                          (coverImage instanceof File ? (
                                            <img
                                              className="ad-img-cover"
                                              src={URL.createObjectURL(
                                                coverImage
                                              )}
                                              alt="Cover Preview"
                                            // style={{
                                            //   width: "100%",
                                            //   maxHeight: "200px",
                                            //   objectFit: "cover",
                                            // }}
                                            />
                                          ) : (
                                            <img
                                              className="ad-img-cover"
                                              src={`${BASE_URL}/public/${values?.coverImage}`}
                                              alt="Cover Preview"
                                            // style={{
                                            //   width: "100%",
                                            //   maxHeight: "200px",
                                            //   objectFit: "cover",
                                            // }}
                                            />
                                          ))}

                                        <input
                                          type="file"
                                          accept="image/*"
                                          onChange={(e) =>
                                            handleImageUpload(e, setFieldValue)
                                          }
                                        />

                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="42"
                                          height="42"
                                          viewBox="0 0 42 42"
                                          fill="none"
                                        >
                                          <circle
                                            cx="11.625"
                                            cy="11.6245"
                                            r="3.125"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M1.20825 20.9997C1.20825 11.6698 1.20825 7.00485 4.10667 4.10643C7.0051 1.20801 11.67 1.20801 20.9999 1.20801C30.3298 1.20801 34.9947 1.20801 37.8932 4.10643C40.7916 7.00485 40.7916 11.6698 40.7916 20.9997C40.7916 30.3296 40.7916 34.9945 37.8932 37.8929C34.9947 40.7913 30.3298 40.7913 20.9999 40.7913C11.67 40.7913 7.0051 40.7913 4.10667 37.8929C1.20825 34.9945 1.20825 30.3296 1.20825 20.9997Z"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                          />
                                          <path
                                            d="M6.41663 39.7499C15.5259 28.8645 25.7376 14.5083 40.7864 24.2132"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                          />
                                        </svg>
                                      </div>
                                      <p>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="21"
                                          height="22"
                                          viewBox="0 0 21 22"
                                          fill="none"
                                        >
                                          <path
                                            d="M11.5 2.00231C11.0299 2 10.5307 2 10 2C5.52166 2 3.28249 2 1.89124 3.39124C0.5 4.78249 0.5 7.02166 0.5 11.5C0.5 15.9783 0.5 18.2175 1.89124 19.6088C3.28249 21 5.52166 21 10 21C14.4783 21 16.7175 21 18.1088 19.6088C19.4472 18.2703 19.498 16.147 19.4999 12"
                                            stroke="#165D7C"
                                            stroke-width="0.9375"
                                            stroke-linecap="round"
                                          />
                                          <path
                                            d="M0.5 13.1354C1.11902 13.0455 1.74484 13.0011 2.37171 13.0027C5.02365 12.9466 7.61064 13.7729 9.67107 15.3342C11.582 16.7821 12.9247 18.7749 13.5 21"
                                            stroke="#165D7C"
                                            stroke-width="0.9375"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M19.5 15.8962C18.3246 15.3009 17.1088 14.9988 15.8862 15.0001C14.0345 14.9928 12.2015 15.6733 10.5 17"
                                            stroke="#165D7C"
                                            stroke-width="0.9375"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M15.5 3.5C15.9915 2.9943 17.2998 1 18 1M20.5 3.5C20.0085 2.9943 18.7002 1 18 1M18 1V9"
                                            stroke="#165D7C"
                                            stroke-width="0.9375"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                        </svg>
                                        Upload cover image
                                      </p>
                                      <span>
                                        Click or drag image here to upload{" "}
                                      </span>
                                    </div>
                                  </Form.Group>
                                </Col>
                                <Col lg={6}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Category</Form.Label>
                                    <Form.Select
                                      name="category"
                                      value={values.category}
                                      onChange={handleChange}
                                      aria-label="Default select example"
                                    >
                                      <option value="" disabled selected>
                                        Please select
                                      </option>
                                      {categoryList?.data?.map((cat) => {
                                        return (
                                          <option value={cat?._id}>
                                            {cat?.name}
                                          </option>
                                        );
                                      })}

                                      {/* <option value="2">Two</option>
                                      <option value="3">Three</option> */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                                <Col lg={6}>
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Skill Level</Form.Label>
                                    <Form.Select
                                      name="skillLevel"
                                      value={values?.skillLevel}
                                      onChange={handleChange}
                                      aria-label="Default select example"
                                    >
                                      <option value="" disabled selected>
                                        Please select
                                      </option>
                                      {skillLevel?.map((skillLevel) => {
                                        return (
                                          <option value={skillLevel?.value}>
                                            {skillLevel?.name}
                                          </option>
                                        );
                                      })}

                                      {/* <option value="2">Two</option>
                                      <option value="3">Three</option> */}
                                    </Form.Select>
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>

                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Industry Experts</Form.Label>
                                <Form.Select
                                  aria-label="Default select example"
                                  onChange={(e) =>
                                    handleExpertSelect(e, setFieldValue)
                                  }
                                >
                                  <option disabled selected>
                                    Please select (Max of 5)
                                  </option>
                                  {expertList?.data?.map((experts) => (
                                    <option
                                      key={experts?._id}
                                      value={experts?._id}
                                    >
                                      {experts?.first_name +
                                        " " +
                                        experts?.last_name}
                                    </option>
                                  ))}
                                </Form.Select>
                                {selectedExperts.length > 0 && (
                                  <div>
                                    <Form.Label style={{ marginTop: "10px" }}>
                                      Selected experts:
                                    </Form.Label>
                                    <ul
                                      style={{ display: "flex", gap: "30px" }}
                                    >
                                      {selectedExperts.map((expertId) => {
                                        const expert = expertList?.data?.find(
                                          (e) => e._id === expertId
                                        );
                                        console.log(expert, "exxxx");
                                        return (
                                          <li key={expertId}>
                                            {expert?.first_name +
                                              " " +
                                              expert?.last_name}
                                            <button
                                              onClick={() =>
                                                removeExpert(expertId)
                                              }
                                              style={{
                                                marginLeft: "10px",
                                                top: "10px",
                                                cursor: "pointer",
                                                color: "red",
                                                background: "transparent",
                                                border: "none",
                                              }}
                                            >
                                              &times; {/* Cross button */}
                                            </button>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                )}
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group controlId="formBasicSkills">
                                <Form.Label>Skills to be learnt</Form.Label>
                                <Form.Select
                                  aria-label="Default select example"
                                  onChange={(e) => {
                                    handleSkillSelection(e, setFieldValue);
                                  }}
                                >
                                  <option value="" disabled selected>
                                    Please select (Max of 5)
                                  </option>
                                  {Skills.map((skill) => {
                                    return (
                                      <option
                                        key={skill?.value}
                                        value={skill?.value}
                                      >
                                        {skill?.name}
                                      </option>
                                    );
                                  })}
                                </Form.Select>
                                {selectedSkills.length > 0 && (
                                  <div>
                                    <Form.Label style={{ marginTop: "10px" }}>
                                      Selected Skills:
                                    </Form.Label>
                                    <ul
                                      style={{ display: "flex", gap: "30px" }}
                                    >
                                      {selectedSkills.map((skillId) => {
                                        const skill = Skills.find(
                                          (s) => s.value == skillId
                                        );

                                        return (
                                          <li key={skillId}>
                                            {skill?.name}
                                            <button
                                              onClick={() =>
                                                removeSkill(skillId)
                                              }
                                              style={{
                                                marginLeft: "10px",
                                                top: "10px",
                                                cursor: "pointer",
                                                color: "red",
                                                background: "transparent",
                                                border: "none",
                                              }}
                                            >
                                              &times; {/* Cross button */}
                                            </button>
                                          </li>
                                        );
                                      })}
                                    </ul>
                                  </div>
                                )}
                              </Form.Group>
                            </Col>

                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Course Language</Form.Label>
                                <Form.Select
                                  name="courseLanguage"
                                  value={values.courseLanguage}
                                  onChange={handleChange}
                                  aria-label="Default select example"
                                >
                                  <option value="" selected disabled>
                                    Please select
                                  </option>
                                  {language?.map((lang) => {
                                    return (
                                      <option value={lang?.value}>
                                        {lang?.name}
                                      </option>
                                    );
                                  })}
                                </Form.Select>
                              </Form.Group>
                            </Col>

                            <Col lg={6}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Pricing</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter course price"
                                    value={values.pricing}
                                    name="pricing"
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Form>
                            </Col>

                            <Col lg={6}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicHours"
                                >
                                  <Form.Label>
                                    Course Duration (Hours)
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter hours"
                                    value={values?.duration?.hours}
                                    name="duration.hours"
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col lg={6}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicMinutes"
                                >
                                  <Form.Label>
                                    Course Duration (Minutes)
                                  </Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter minutes"
                                    value={values?.duration?.mins}
                                    name="duration.mins"
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Form>
                            </Col>

                            <Col lg={12}>
                              <div className="top-employers-list">
                                <h2>Top employers</h2>
                                <Row>
                                  <Col lg={4}>
                                    <div className="commn-upld-file">
                                      <div>
                                        <input
                                          type="file"
                                          accept="image/*"
                                          multiple
                                          onChange={(e) =>
                                            handleLogoUpload(e, setFieldValue)
                                          }
                                        />
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="42"
                                          height="42"
                                          viewBox="0 0 42 42"
                                          fill="none"
                                        >
                                          <circle
                                            cx="11.625"
                                            cy="11.6245"
                                            r="3.125"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                          />
                                          <path
                                            d="M1.20825 20.9997C1.20825 11.6698 1.20825 7.00485 4.10667 4.10643C7.0051 1.20801 11.67 1.20801 20.9999 1.20801C30.3298 1.20801 34.9947 1.20801 37.8932 4.10643C40.7916 7.00485 40.7916 11.6698 40.7916 20.9997C40.7916 30.3296 40.7916 34.9945 37.8932 37.8929C34.9947 40.7913 30.3298 40.7913 20.9999 40.7913C11.67 40.7913 7.0051 40.7913 4.10667 37.8929C1.20825 34.9945 1.20825 30.3296 1.20825 20.9997Z"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                          />
                                          <path
                                            d="M6.41663 39.7499C15.5259 28.8645 25.7376 14.5083 40.7864 24.2132"
                                            stroke="#165D7C"
                                            stroke-width="1.0625"
                                          />
                                        </svg>
                                      </div>
                                      <p>
                                        Upload logo of companies that hire
                                        experts of the course
                                      </p>
                                    </div>
                                  </Col>
                                  {uploadedLogos.length > 0 &&
                                    uploadedLogos?.map((logo, index) => (
                                      <Col lg={4}>
                                        <div
                                          className="commn-upld-file-b"
                                          style={{ position: "relative" }}
                                        >
                                          <>
                                            {" "}
                                            <img
                                              className="ad-img-cover"
                                              key={index}
                                              src={
                                                logo[0] instanceof File
                                                  ? URL?.createObjectURL(
                                                    logo[0]
                                                  )
                                                  : `${BASE_URL}/public/${logo}`
                                              }
                                              alt={`Logo Preview ${index + 1}`}
                                            // style={{ width: "100%", height: "100", objectFit: "cover" }}
                                            />
                                          </>
                                        </div>
                                      </Col>
                                    ))}
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                      {courseId && (
                        <Col lg={12} className="mb-2">
                          {moduleListSpecificToCourse?.data?.length > 0 &&
                            courseId ? (
                            <div className="filters">
                              <div className="inner-filter-field">
                                <div className="user-search">
                                  <h2>Modules </h2>

                                  <div className="page-h-with-btn">
                                    <div>
                                      <button
                                        onClick={() =>
                                          navigate(`/new-module?id=${courseId}`)
                                        }
                                      >
                                        Create Module
                                      </button>
                                    </div>
                                  </div>
                                </div>

                                <div class="table-responsive">
                                  <Table size="sm" className="table-cmn">
                                    <thead>
                                      <tr className="border-none">
                                        <th></th>
                                        <th className="id-field">
                                          Module Title
                                        </th>
                                        <th className="id-field">
                                          Description
                                        </th>
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
                                              <td>
                                                {index + 1 + pagination * limit}
                                              </td>
                                              <td>
                                                <div className="first-user">
                                                  {/* <Link to="/expert-details"> John Smith</Link> */}
                                                  <div className="d-flex align-items-center gap-2">
                                                    <img
                                                      src={`${BASE_URL}/public/${module?.cover_image}`}
                                                    />
                                                    <div style={{cursor:"pointer"}} onClick={()=>navigate(`/module-comments?mid=${module?._id}`)}>
                                                      <p>{module?.title}</p>
                                                    </div>
                                                  </div>
                                                </div>
                                              </td>

                                              <td >
                                                <div className=" long-txt d-flex align-items-center gap-2">
                                                  <p className="mb-0 ">
                                                    {/* Conditionally render either truncated or full description */}
                                                    {showFullDescription
                                                      ? module?.description
                                                      : module?.description?.length > 100
                                                        ? `${module?.description.substring(0, 150)}...`
                                                        : module?.description}

                                                    {/* Only show "Read More" if description length exceeds 100 characters */}
                                                    {module?.description?.length > 100 && !showFullDescription && (
                                                      <span
                                                        style={{
                                                          cursor: 'pointer',
                                                          color: 'blue',
                                                        }}
                                                        onClick={() => setShowFullDescription(true)} // Toggle full description
                                                      >
                                                        Read More
                                                      </span>
                                                    )}

                                                    {/* Show "Read Less" if the description is expanded */}
                                                    {showFullDescription && (
                                                      <span
                                                        style={{
                                                          cursor: 'pointer',
                                                          color: 'blue',
                                                        }}
                                                        onClick={() => setShowFullDescription(false)} // Toggle back to truncated description
                                                      >
                                                        Read Less
                                                      </span>
                                                    )}
                                                  </p>
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
                                                        `/new-module?id=${courseId}&mid=${module?._id}&edit=true`
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

                                  {moduleListSpecificToCourse?.data?.length >
                                    0 && (
                                      <div className="pagination-section">
                                        <ShowingResult
                                          page={pagination}
                                          limit={limit}
                                          totalUser={
                                            moduleListSpecificToCourse?.count
                                          }
                                          length={
                                            moduleListSpecificToCourse?.data
                                              ?.length
                                          }
                                        />
                                        <div className="pagination-block">
                                          <PaginationComponent
                                            currentPage={pagination}
                                            totalCount={
                                              moduleListSpecificToCourse?.count
                                            }
                                            totalPages={Math.ceil(
                                              moduleListSpecificToCourse?.count /
                                              limit
                                            )}
                                            onPageChange={(page) =>
                                              setPagination(page)
                                            }
                                          />
                                        </div>
                                      </div>
                                    )}
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="commn-form-card">
                              <h2>Modules</h2>
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
                                      if (
                                        courseDetails?.data?._id &&
                                        courseId
                                      ) {
                                        navigate(
                                          `/new-module?id=${courseDetails?.data?._id}`
                                        );
                                      } else {
                                        toast.error(
                                          "Please add basic information of course"
                                        );
                                      }
                                    }}
                                  // to="/new-module"
                                  >
                                    Create Module
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </Col>
                      )}
                    </Form>
                  );
                }}
              </Formik>
              {/* {
                courseId &&  <Col lg={12} className="mb-4">
                <div className="commn-form-card">
                  <h2>Course Settings</h2>
                  <Row>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Visibility</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Please select </option>
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
                          <Form.Label>Pricing</Form.Label>
                          <Form.Select aria-label="Default select example">
                            <option>Please select</option>
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
                          <Form.Label>Publish Date</Form.Label>
                          <Form.Control
                            type="date"
                            placeholder="Add industry experts,"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                    <Col lg={6}>
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Course Duration</Form.Label>
                          <Form.Control
                            type="type"
                            placeholder="Add industry experts,"
                          />
                        </Form.Group>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Col>
              } */}
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
