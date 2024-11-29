import React, { useReducer } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Layout from "../Components/Layout/Layout";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";
import { useState, useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Formik, Form as FormikForm } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import Loader from "../Components/Loader";
import moment from "moment";
import ShowingResult from "../Components/ShowingResult";
import PaginationComponent from "../Components/Pagination";
import { computeHeadingLevel } from "@testing-library/react";

export default function NewModule() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const inputRef1 = useRef(null);
  const BASE_URL = process.env.REACT_APP_FILE_URL;
  const [show, setShow] = useState(false);
  const [showEditLesson, setShowEditLesson] = useState(false);
  const [coverImage, setCoverImage] = useState(null);
  const [questionImage, setQuestionImage] = useState(null);
  const [videoId, setVideoId] = useState(null);
  const [summaryvideoId, setSummaryVideoId] = useState(null);
  const [prevVideo, setPrevVideo] = useState(null);
  const [limit, setLimit] = useState(10);
  const [pagination, setPagination] = useState(0);
  const [quizlimit, setquizLimit] = useState(10);
  const [quizpagination, setquizPagination] = useState(0);
  const [uploadedLogos, setUploadedLogos] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flag1, setFlag1] = useState(false);
  const [quizId, setQuizId] = useState(null);
  console.log(quizId, "id");

  const courseId = new URLSearchParams(useLocation().search).get("id");
  const moduleId = new URLSearchParams(useLocation().search).get("mid");
  const lessonId = new URLSearchParams(useLocation().search).get("lid");
  const isEdit = new URLSearchParams(useLocation().search).get("edit");
  const quizType = [
    { name: "Text based", value: 1 },
    { name: "Image based", value: 2 },
  ];
  const Answers = ["a", "b", "c", "d"];
  console.log(lessonId, "lessonId");
  const {
    loading,
    moduleDetails,
    lessonList,
    moduleDetailById,
    lessonDetailById,
    quizList,
    quizById,
  } = useSelector((state) => state.course);
  console.log(quizById, "quizById");

  useEffect(() => {
    if (courseId) {
      dispatch(AdminActions.getCourseInfo(courseId));
    }
  }, [courseId]);

  useEffect(() => {
    if (lessonId) {
      dispatch(AdminActions.getLessonById(lessonId));
    }
  }, [lessonId]);

  useEffect(() => {
    if (lessonDetailById?.data) {
      if (inputRef.current) {
        inputRef.current.file = lessonDetailById.data.video; // Changed from optional chaining
      }
      if (inputRef1.current) {
        inputRef1.current.file = lessonDetailById.data.summary_video; // Changed from optional chaining
      }
      setVideoId(lessonDetailById?.data?.video);
      setSummaryVideoId(lessonDetailById?.data?.summary_video);
    }
  }, [lessonDetailById]);

  useEffect(() => {
    if (moduleDetailById?.data) {
      setUploadedLogos(moduleId && moduleDetailById?.data?.additional_files);
    }
  }, [moduleDetailById]);

  useEffect(() => {
    if (quizId) {
      dispatch(AdminActions.getQuizById(quizId));
    }
  }, [quizId, flag1]);

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
  }, [moduleId, flag, pagination]);

  useEffect(() => {
    if (moduleId) {
      dispatch(
        AdminActions.getQuizPerModule({
          id: moduleId,
          pagination: quizpagination,
          limit: quizlimit,
        })
      );
      dispatch(AdminActions.getModuleById(moduleId));
    }
    setFlag(!flag);
  }, [moduleId, quizpagination, flag1]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShowEditLesson(false);
  const handleShowEdit = () => setShowEditLesson(true);

  const initialValues = {
    moduleTitle: (moduleId && moduleDetailById?.data?.title) ?? "",
    coverImage: (moduleId && moduleDetailById?.data?.cover_image) ?? "",
    moduleDescription: (moduleId && moduleDetailById?.data?.description) ?? "",
    modulePrice: (moduleId && moduleDetailById?.data?.price) ?? "",
    lessonTitle: (lessonId && lessonDetailById?.data?.title) ?? "",
    lessonNumber: (lessonId && lessonDetailById?.data?.lesson_no) ?? "",
    summaryVideoId: (lessonId && lessonDetailById?.data?.summary_video) ?? "",
    videoId: (lessonId && lessonDetailById?.data?.video) ?? "",
    additionalFiles:
      (moduleId && moduleDetailById?.data?.additional_files) ?? "",
  };

  const validation = (value) => {
    let errors = {};

    if (!value?.moduleTitle) {
      errors.moduleTitle = "Module title is required";
      return errors;
    }
    if (!value?.coverImage) {
      errors.coverImage = "Please upload a cover image";
      return errors;
    }
    if (!value?.moduleDescription) {
      errors.moduleDescription = "Module description is required";
      return errors;
    }
    if (!value?.modulePrice) {
      errors.modulePrice = "Module price is required";
      return errors;
    } else if (isNaN(value.modulePrice)) {
      errors.modulePrice = "Module price must be a number";
      return errors;
    }

    return errors;
  };

  const handleLessonValidation = async (value, setFieldValue) => {
    console.log(value, "aaaa");
    let errors = {};

    if (!value?.lessonTitle) {
      errors.lessonTitle = "Lesson title is required";
    } else if (!value?.lessonNumber) {
      errors.lessonNumber = "Lesson number is required";
    } else if (isNaN(value.lessonNumber)) {
      errors.lessonNumber = "Lesson number must be a number";
    } else if (!value?.summaryVideoId) {
      errors.summaryVideoId = "Summary video ID is required";
    } else if (!value?.videoId) {
      errors.videoId = "Video ID is required";
    }

    if (Object.keys(errors)?.length > 0) {
      Object.values(errors).forEach((err) => toast.error(err));
    } else {
      console.log(value, "lesson val");
      let formDataToSave = new FormData();
      formDataToSave.append("module_id", moduleId);
      formDataToSave.append("title", value?.lessonTitle);
      formDataToSave.append("lesson_no", value?.lessonNumber);
      formDataToSave.append("summary_video", value?.summaryVideoId);
      formDataToSave.append("video", value?.videoId);

      let res = lessonId
        ? await dispatch(
          AdminActions.EditLesson({ id: lessonId, data: formDataToSave })
        )
        : await dispatch(AdminActions.addLessons(formDataToSave));
      // console.log(res?.payload?.data,"rrrerererere")
      if (res?.payload?.data?.data?.status == 200) {
        // console.log("adddinnngngngngnngngngng")
        // navigate(`/course-info/${res?.payload?.data?.data?._id}`,{state:{type:"create"}});
        // navigate(`/course-preview/${res?.payload?.data?.data?.data?._id}`);
        // setAddModuleVideos(true);
        navigate(`/new-module?id=${courseId}&mid=${moduleId}`);
        setFlag(!flag);
        setFieldValue("lessonTitle", "");
        setFieldValue("lessonNumber", "");
        setFieldValue("summaryVideoId", "");
        setFieldValue("videoId", "");
        inputRef.current.value = "";
        inputRef1.current.value = "";

        setVideoId(null);
        setSummaryVideoId(null);
        setPrevVideo(null);
        handleCloseEdit();
        // navigate(`new-module?id=${courseId}`)
      }
    }
  };

  const handleSubmit = async (value) => {
    const errors = validation(value);
    if (Object.keys(errors)?.length > 0) {
      Object.values(errors).forEach((err) => toast.error(err));
      return;
    } else {
      let formDataToSave = new FormData();
      formDataToSave.append("course_id", courseId);
      formDataToSave.append("title", value?.moduleTitle);
      formDataToSave.append("description", value?.moduleDescription);
      formDataToSave.append("price ", value?.modulePrice);
      formDataToSave.append("cover_image", value?.coverImage);
      // moduleId && formDataToSave.append("id", moduleId);

      let res = moduleId
        ? await dispatch(
          AdminActions.EditModule({ id: moduleId, data: formDataToSave })
        )
        : await dispatch(AdminActions.createModule(formDataToSave));
      if (res?.payload?.data?.data?.status == 200) {
        // navigate(`/course-info/${res?.payload?.data?.data?.data?._id}`,{state:{type:"create"}});
        // navigate(`/course-preview/${res?.payload?.data?.data?.data?._id}`);
        // setAddModuleVideos(true);
        navigate(
          `/new-module?id=${courseId}&mid=${res?.payload?.data?.data?.data?._id}`
        );
      }
    }
  };

  const handleImageUpload = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setCoverImage(file);
      setFieldValue("coverImage", file);
    }
  };

  const handleVideoUpload = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      // You can handle the file upload or preview here

      // Optionally, you can set the file to a state if needed
      console.log(e.target.name);
      if (e.target.name == "videoId") {
        setFieldValue("videoId", file);
        setVideoId(e.target.files[0]);
      } else {
        setFieldValue("summaryVideoId", file);
        setSummaryVideoId(e.target.files[0]);
      }
    }
  };

  const handleVideoPreview = (type) => {
    if (type == 0) {
      setPrevVideo(type);
    } else {
      setPrevVideo(type);
    }
  };

  const handleLogoUpload = (event, setFieldValue) => {
    const files = Array.from(event.target.files);
    const newLogos = files.map((file) => file); // You can process files here as needed (e.g., for validation)
    setUploadedLogos((prevLogos) => [...prevLogos, ...newLogos]);
    setFieldValue("additionalFiles", [...uploadedLogos, ...newLogos]); // Update form values if needed
  };

  console.log(prevVideo, summaryvideoId, videoId);

  console.log(prevVideo, "prev");

  const handleDelete = async (lid) => {
    console.log(lid, "lid");
    let res = await dispatch(AdminActions.DeleteLesson(lid));
    if (res?.payload?.data?.data?.status == 200) {
      setFlag(!flag);
    }
  };

  const handleQuestionValidation = (value) => {
    let error = {};

    if (!value?.quizType) {
      error.quizType = "Quiz type is required"; // Added validation for quiz type
      return error;
    }
    if (value?.quizType == 2) {
      if (!value?.image) {
        error.image = "Please upload an image";
        return error; // Added validation for image
      }
    }
    if (!value?.question) {
      error.question = "Question is required";
      return error;
    }

    if (!value?.options) {
      error.options = "Options are required";
      return error;
    }
    if (!value?.answer) {
      error.answer = "Correct answer is required";
      return error;
    }

    return error;
  };

  const handleQuizSubmit = async (value) => {
    const errors = handleQuestionValidation(value);
    if (Object.keys(errors)?.length > 0) {
      Object.values(errors).forEach((err) => toast.error(err)); // Show error messages
      return; // Prevent submission if there are errors
    } else {
      console.log(value);
      let formDataToSave = new FormData();
      formDataToSave.append("module_id", moduleId);
      formDataToSave.append("question", value?.question);
      console.log(value?.options, "options");
      value?.quizType == 1 &&
        formDataToSave.append("options", JSON.stringify(value?.options));
      value?.quizType == 2 &&
        formDataToSave.append("a_image", value?.options?.a);
      value?.quizType == 2 &&
        formDataToSave.append("b_image", value?.options?.b);
      value?.quizType == 2 &&
        formDataToSave.append("c_image", value?.options?.c);
      value?.quizType == 2 &&
        formDataToSave.append("d_image", value?.options?.d);
      formDataToSave.append("correct_option", value?.answer);
      value?.image && formDataToSave.append("image", value?.image);

      formDataToSave.append("type", value?.quizType);
      console.log(value, "val");

      let res = quizId
        ? await dispatch(
          AdminActions.EditQuiz({ id: quizId, data: formDataToSave })
        )
        : await dispatch(AdminActions.addQuiz(formDataToSave));
      if (res?.payload?.data?.data?.status == 200) {
        // navigate(`/course-info/${res?.payload?.data?.data?.data?._id}`,{state:{type:"create"}});

        value.question = "";
        value.options = "";
        value.answer = "";
        value.image = "";
        setQuestionImage(null);
        value.quizType = "";
        setQuizId(null)
        handleClose();
        setFlag1(!flag1);

      }
    }
    // ... existing submission logic ...
  };

  const hanndleQuestionIMageUpload = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      setQuestionImage(file);
      setFieldValue("image", file);
    }
  };

  let option = {
    a: quizById?.data?.options?.a ?? "",
    b: quizById?.data?.options?.b ?? "",
    c: quizById?.data?.options?.c ?? "",
    d: quizById?.data?.options?.d ?? "",
  };

  const handleOptions = (e, num, setFieldValue, option) => {
    // Dynamically update the option based on num
    if (option.hasOwnProperty(num)) {
      option[num] = e.target.value; // You can update it with any value you need
    }

    console.log(option);
    setFieldValue("options", option);
  };

  const renderDeleteIcon = (logo, setFieldValue, index) => (
    <span
      onClick={async () => {
        let res;
        if (logo instanceof File) {
          setUploadedLogos((prev) => {
            const newLogos = prev.filter((_, i) => i !== index);
            console.log(newLogos, "newLogos");
            setFieldValue("additionalFiles", newLogos);
            return newLogos;
          });
        } else {
          res = await dispatch(
            AdminActions.DeleteAdditionalFile({
              id: moduleId,
              file: logo,
            })
          );
          if (res?.payload?.data?.data?.status === 200) {
            setFlag(!flag);
          }
        }
      }}
      style={{
        position: "absolute",
        top: "5px",
        right: "5px",
        cursor: "pointer",
        color: "red",
        fontSize: "20px",
        zIndex: 10,
      }}
    >
      &times; {/* Cross icon */}
    </span>
  );

  const handleOptionsImageUpload = (event, num, setFieldValue, optionKey) => {
    const file = event.target.files[0];
    console.log(file);
    if (option.hasOwnProperty(num)) {
      option[num] = file; // You can update it with any value you need
    }

    console.log(option);
    setFieldValue("options", option);
  };

  return (
    <Layout>
      {loading && <Loader />}
      <div className="main-content-m">
        {/* formikk */}

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ values, handleSubmit, handleChange, setFieldValue }) => {
            console.log(values, "vvvv");
            return (
              <>
                <FormikForm>
                  <Container fluid>
                    <div className="dashboard-items">
                      <Row>
                        <Col lg={12}>
                          <div className="page-h-with-btn">
                            <h2 className="mb-0">
                              {isEdit == "true" ? "Edit " : "New "} Module
                            </h2>
                            <div>
                              <button
                                onClick={() => {
                                  if (!moduleId) {
                                    toast.error(
                                      "Please create the module first"
                                    );
                                  } else if (lessonList?.data?.length == 0) {
                                    toast.error(
                                      "At least one lesson is required"
                                    );
                                  } else {
                                    // toast.success("Ready to move");
                                    navigate(`/course-preview/${courseId}`);
                                  }
                                }}
                                type="button"
                              // to="/add-new-expert"
                              >
                                Preview
                              </button>
                            </div>
                          </div>
                        </Col>
                        <Col lg={12}>
                          <div className="commn-form-card">
                            <h2>Module Information</h2>
                            <Row>
                              <Col lg={6}>
                                <Row>
                                  <Col lg={12}>
                                    <Form>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                      >
                                        <Form.Label>Module Title</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Enter module title"
                                          name="moduleTitle"
                                          value={values?.moduleTitle}
                                          onChange={handleChange}
                                        />
                                      </Form.Group>
                                    </Form>
                                  </Col>
                                  <Col lg={12}>
                                    <Form>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                      >
                                        <Form.Label>
                                          Module Description
                                        </Form.Label>
                                        <Form.Control
                                          as="textarea"
                                          placeholder="Enter course description"
                                          rows={6}
                                          name="moduleDescription"
                                          value={values?.moduleDescription}
                                          onChange={handleChange}
                                        />
                                      </Form.Group>
                                    </Form>
                                  </Col>
                                </Row>
                              </Col>
                              <Col lg={6}>
                                <Row>
                                  <Col lg={12}>
                                    <Form>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                      >
                                        <Form.Label>Cover Image</Form.Label>
                                        {/* <Form.Control
                                type="text"
                                placeholder="Input last name in here"
                              /> */}
                                        <div className="commn-upld-file">
                                          <div>
                                            {(coverImage ||
                                              values?.coverImage) &&
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
                                                handleImageUpload(
                                                  e,
                                                  setFieldValue
                                                )
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
                                    </Form>
                                  </Col>
                                  <Col lg={12}>
                                    <Form>
                                      <Form.Group
                                        className="mb-3"
                                        controlId="formBasicEmail"
                                      >
                                        <Form.Label>Module Price</Form.Label>
                                        <Form.Control
                                          type="text"
                                          placeholder="Enter number of coins required to unlock this module"
                                          value={values?.modulePrice}
                                          onChange={handleChange}
                                          name="modulePrice"
                                        />
                                      </Form.Group>
                                    </Form>
                                  </Col>
                                  <Col lg={12}>
                                    <div className="page-h-with-btn justify-content-end">
                                      {/* <h2 className="mb-0">New Module</h2> */}
                                      <div>
                                        <button
                                          onClick={handleSubmit}
                                        // to="/add-new-expert"
                                        >
                                          Save
                                        </button>
                                      </div>
                                    </div>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        {moduleId && (
                          <Col lg={12}>
                            <div className="commn-form-card">
                              <h2>Upload lesson video</h2>
                              <Row>
                                <Col lg={6}>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="extra-title-set">
                                        <h3>Course Video</h3>
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Lesson Title</Form.Label>
                                          <Form.Control
                                            type="text"
                                            placeholder="Enter the lesson title here"
                                            value={values.lessonTitle}
                                            name="lessonTitle"
                                            onChange={handleChange}
                                          />
                                        </Form.Group>
                                      </Form>
                                    </Col>
                                    <Col lg={12}>
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Lesson Number</Form.Label>
                                          <Form.Control
                                            type="text"
                                            placeholder="Enter a number for the lesson"
                                            value={values.lessonNumber}
                                            name="lessonNumber"
                                            onChange={handleChange}
                                          />
                                        </Form.Group>
                                      </Form>
                                    </Col>
                                    <Col lg={12}>
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicVideo"
                                        >
                                          <Form.Label>Summary Video</Form.Label>
                                          <div className="ad-action-btn upld-video-inpu">
                                            <Form.Control
                                              type="file"
                                              accept="video/*"
                                              ref={inputRef1}
                                              onChange={(e) =>
                                                handleVideoUpload(
                                                  e,
                                                  setFieldValue
                                                )
                                              }
                                              name="summaryVideoId"
                                            />
                                            {summaryvideoId && (
                                              <>
                                                <button
                                                  onClick={() =>
                                                    handleVideoPreview(0)
                                                  }
                                                  type="button"
                                                >
                                                  Load video
                                                </button>


                                              </>
                                            )}
                                            <div>{values?.summaryVideoId instanceof File ? values.summaryVideoId.name : values?.summaryVideoId ? values.summaryVideoId : "Upload summary video  here"}</div>
                                          </div>
                                         
                                        </Form.Group>
                                      </Form>
                                    </Col>
                                    <Col lg={12}>
                                      <Form>
                                        <Form.Group
                                          className="mb-3"
                                          controlId="formBasicEmail"
                                        >
                                          <Form.Label>Video ID</Form.Label>
                                          <div className="ad-action-btn upld-video-inpu">
                                            <Form.Control
                                              type="file"
                                              accept="video/*"
                                              ref={inputRef}
                                              onChange={(e) =>
                                                handleVideoUpload(
                                                  e,
                                                  setFieldValue
                                                )
                                              }
                                              name="videoId"
                                            />
                                            {videoId && (
                                              <>
                                                <button
                                                  onClick={() =>
                                                    handleVideoPreview(1)
                                                  }
                                                  type="button"
                                                  value={inputRef}
                                                >
                                                  Load video
                                                </button>

                                              </>
                                            )}
                                            <div>{values?.videoId instanceof File ? values.videoId.name : values?.videoId ? values.videoId : "Upload video ID here"}</div>
                                          </div>
                                          <p>
                                            {/* {lessonId &&
                                              !(videoId instanceof File) &&
                                              values?.videoId} */}
                                          </p>
                                        </Form.Group>
                                      </Form>
                                    </Col>
                                  </Row>
                                </Col>
                                <Col lg={6}>
                                  <Row>
                                    <Col lg={12}>
                                      <div className="extra-title-set">
                                        <h3>Preview Video</h3>
                                      </div>
                                    </Col>
                                    <Col lg={12}>
                                      <div className="preview-video-set">
                                        {(videoId || summaryvideoId) &&
                                          prevVideo != null ? (
                                          <>
                                            {prevVideo == 0 && (
                                              <video
                                                controls
                                                width="400"
                                                height="200"
                                              >
                                                <source
                                                  src={
                                                    summaryvideoId instanceof
                                                      File
                                                      ? URL.createObjectURL(
                                                        summaryvideoId
                                                      )
                                                      : `${BASE_URL}/public/${summaryvideoId}`
                                                  }
                                                  type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                              </video>
                                            )}

                                            {prevVideo == 1 && (
                                              <video
                                                controls
                                                width="400"
                                                height="200"
                                              >
                                                <source
                                                  src={
                                                    videoId instanceof File
                                                      ? URL.createObjectURL(
                                                        videoId
                                                      )
                                                      : `${BASE_URL}/public/${videoId}`
                                                  }
                                                  type="video/mp4"
                                                />
                                                Your browser does not support
                                                the video tag.
                                              </video>
                                            )}
                                          </>
                                        ) : (
                                          <p>Please upload a video</p>
                                        )}
                                        {/* <img
                                        src={require("../Assets/Images/banner-sign.png")}
                                      /> */}
                                      </div>
                                    </Col>

                                    <Col lg={12}>
                                      <div className="preview-video-action">
                                        <button
                                          type="button"
                                          onClick={() => {
                                            console.log(values, "cccc");
                                            handleLessonValidation(
                                              values,
                                              setFieldValue
                                            );
                                          }}
                                        >
                                          Save and continue
                                        </button>
                                      </div>
                                    </Col>
                                  </Row>
                                </Col>
                              </Row>
                            </div>
                          </Col>
                        )}
                      </Row>
                    </div>
                  </Container>
                  {moduleId && (
                    <>
                      <Container fluid className="mb-1">
                        <div className="filters">
                          <div className="inner-filter-field">
                            <div className="user-search">
                              <h2>Lesson Videos </h2>
                              {/* <div className="drop-down">
                  <div className="select-box">
                    <Form.Select aria-label="Default select example">
                      <option>10</option>
                      <option value="1">9</option>
                    </Form.Select>
                  </div>
                </div> */}
                            </div>

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
                                                    {lesson?.course_id
                                                      ?.skill_level == 1
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
                                              .format("mm:ss")}{" "}
                                            hours
                                          </td>
                                          <td>
                                            <div className="edit-lesson-action">
                                              <button
                                                type="button"
                                                onClick={() => {
                                                  navigate(
                                                    `/new-module?id=${courseId}&mid=${moduleId}&lid=${lesson?._id}`
                                                  );
                                                  handleShowEdit();
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
                                          </td>
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
                      </Container>
                      <Container fluid>
                        <div className="dashboard-items">
                          <Row>
                            <Col lg={12}>
                              <div className="commn-form-card">
                                <h2>Additional files</h2>
                                <Row>
                                  <Col lg={4}>
                                    <div className="commn-upld-file">
                                      <div>
                                        <input
                                          type="file"
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
                                      <p>Upload PDFs, audio files, or image</p>
                                    </div>
                                  </Col>
                                  {uploadedLogos?.length > 0 &&
                                    uploadedLogos?.map((logo, index) => (
                                      <Col lg={4} key={index}>
                                        <div
                                          className="commn-upld-file-b"
                                          style={{ position: "relative" }}
                                        >
                                          {/* Reusable function to render the delete icon */}
                                          {renderDeleteIcon(
                                            logo,
                                            setFieldValue,
                                            index
                                          )}

                                          {/* Render based on file type */}
                                          {logo instanceof File ? (
                                            logo.type.startsWith("image/") ? (
                                              <>
                                                <img
                                                  className="ad-img-cover"
                                                  src={URL.createObjectURL(
                                                    logo
                                                  )}
                                                  alt={`File Preview ${index + 1
                                                    }`}
                                                  style={{
                                                    width: "100%",
                                                    height: "156px",
                                                    objectFit: "cover",
                                                  }}
                                                />
                                              </>
                                            ) : logo.type.startsWith(
                                              "audio/"
                                            ) ? (
                                              <>
                                                <audio controls>
                                                  <source
                                                    src={URL.createObjectURL(
                                                      logo
                                                    )}
                                                  />
                                                  Your browser does not support
                                                  the audio element.
                                                </audio>
                                              </>
                                            ) : logo.type.startsWith(
                                              "video/"
                                            ) ? (
                                              <>
                                                <video
                                                  width="100%"
                                                  height="156"
                                                  controls
                                                >
                                                  <source
                                                    src={URL.createObjectURL(
                                                      logo
                                                    )}
                                                  />
                                                  Your browser does not support
                                                  the video element.
                                                </video>
                                              </>
                                            ) : logo.type ===
                                              "application/pdf" ? (
                                              <>
                                                <a
                                                  href={URL.createObjectURL(
                                                    logo
                                                  )}
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                                  style={{
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    height: "100%",
                                                  }}
                                                >
                                                  <div
                                                    style={{
                                                      display: "inline-block",
                                                      padding: "10px 15px",
                                                      backgroundColor:
                                                        "#007bff",
                                                      color: "#fff",
                                                      borderRadius: "5px",
                                                      boxShadow:
                                                        "0 4px 8px rgba(0, 0, 0, 0.2)",
                                                      cursor: "pointer",
                                                      textDecoration: "none",
                                                      fontWeight: "bold",
                                                      transition:
                                                        "background-color 0.3s",
                                                    }}
                                                    onClick={(event) =>
                                                      event.stopPropagation()
                                                    }
                                                  >
                                                    View PDF
                                                  </div>
                                                </a>
                                              </>
                                            ) : null
                                          ) : logo?.endsWith(".pdf") ? (
                                            <>
                                              <a
                                                href={`${BASE_URL}/public/${logo}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                style={{
                                                  display: "flex",
                                                  justifyContent: "center",
                                                  alignItems: "center",
                                                  height: "100%",
                                                }}
                                              >
                                                <div
                                                  style={{
                                                    display: "inline-block",
                                                    padding: "10px 15px",
                                                    backgroundColor: "#007bff",
                                                    color: "#fff",
                                                    borderRadius: "5px",
                                                    boxShadow:
                                                      "0 4px 8px rgba(0, 0, 0, 0.2)",
                                                    cursor: "pointer",
                                                    textDecoration: "none",
                                                    fontWeight: "bold",
                                                    transition:
                                                      "background-color 0.3s",
                                                  }}
                                                >
                                                  View PDF
                                                </div>
                                              </a>
                                            </>
                                          ) : logo?.endsWith(".mp3") ||
                                            logo?.endsWith(".wav") ? (
                                            <>
                                              <audio controls>
                                                <source
                                                  src={`${BASE_URL}/public/${logo}`}
                                                />
                                                Your browser does not support
                                                the audio element.
                                              </audio>
                                            </>
                                          ) : logo?.endsWith(".mp4") ||
                                            logo?.endsWith(".mov") ? (
                                            <>
                                              <video
                                                width="100%"
                                                height="156"
                                                controls
                                              >
                                                <source
                                                  src={`${BASE_URL}/public/${logo}`}
                                                />
                                                Your browser does not support
                                                the video element.
                                              </video>
                                            </>
                                          ) : (
                                            <>
                                              <img
                                                className="ad-img-cover"
                                                src={`${BASE_URL}/public/${logo}`}
                                                alt={`File Preview ${index + 1
                                                  }`}
                                                style={{
                                                  width: "100%",
                                                  height: "156px",
                                                  objectFit: "cover",
                                                }}
                                              />
                                            </>
                                          )}
                                        </div>
                                      </Col>
                                    ))}

                                  <Col lg={12}>
                                    <div className="preview-video-action">
                                      <button
                                        type="button"
                                        onClick={async () => {
                                          let formDataToSave = new FormData();
                                          if (values?.additionalFiles) {
                                            values?.additionalFiles?.forEach(
                                              (x) => {
                                                formDataToSave.append(
                                                  "additional_files",
                                                  x
                                                );
                                              }
                                            );
                                          }

                                          let res = await dispatch(
                                            AdminActions.EditModule({
                                              id: moduleId,
                                              data: formDataToSave,
                                            })
                                          );

                                          if (
                                            res?.payload?.data?.data?.status ==
                                            200
                                          ) {
                                            // navigate(`/course-info/${res?.payload?.data?.data?.data?._id}`,{state:{type:"create"}});
                                            // navigate(`/course-preview/${res?.payload?.data?.data?.data?._id}`);
                                            // setAddModuleVideos(true);
                                            // navigate(
                                            //   `/new-module?id=${courseId}&mid=${res?.payload?.data?.data?.data?._id}`
                                            // );
                                            // navigate(`/course-management`);
                                          }
                                        }}
                                      >
                                        Save
                                      </button>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </Container>
                    </>
                  )}
                </FormikForm>
              </>
            );
          }}
        </Formik>

        {/* formik end */}
        {moduleId && (
          <Container fluid className="mb-5">
            <div className="filters">
              <div className="inner-filter-field">
                <div className="user-search">
                  <h2>Module Quiz </h2>
                  {/* <div className="drop-down">
                  <div className="select-box">
                    <Form.Select aria-label="Default select example">
                      <option>10</option>
                      <option value="1">9</option>
                    </Form.Select>
                  </div>
                </div> */}

                  <div className="page-h-with-btn">
                    <div>
                      <button onClick={handleShow}>Add Question</button>
                    </div>
                  </div>
                </div>
                {quizList?.data?.length > 0 ? (
                  <div class="table-responsive">
                    <Table size="sm" className="table-cmn">
                      <thead>
                        <tr className="border-none">
                          <th className="id-field">S/N</th>
                          <th className="id-field">Question</th>
                          <th className="id-field">Option 1</th>
                          <th className="id-field">Option 2 </th>
                          <th className="id-field">Option 3</th>
                          <th className="id-field">Option 4</th>
                          <th className="id-field">Action</th>
                        </tr>
                      </thead>
                      <tr
                        style={{ height: "10px", background: "transparent" }}
                      />{" "}
                      {/* Spacer row */}
                      <tbody>
                        {quizList?.data?.map((quiz, index) => {
                          return (
                            <tr>
                              <td>{index + 1 + quizpagination * quizlimit}</td>
                              <td>
                                {/* <Link to="/expert-details"> John Smith</Link> */}
                                <div className="d-flex align-items-center gap-2">
                                  <div>
                                    <p className="mb-0">{quiz?.question} </p>
                                  </div>
                                </div>
                              </td>
                              <td
                                className={
                                  quiz?.correct_option == "a" && "text-success"
                                }
                              >
                                {quiz?.options?.a}
                              </td>
                              <td
                                className={
                                  quiz?.correct_option == "b" && "text-success"
                                }
                              >
                                {quiz?.options?.b}
                              </td>
                              <td
                                className={
                                  quiz?.correct_option == "c" && "text-success"
                                }
                              >
                                {quiz?.options?.c}
                              </td>
                              <td
                                className={
                                  quiz?.correct_option == "d" && "text-success"
                                }
                              >
                                {quiz?.options?.d}
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
                                      {/* <div className="my-profile">
                                        <Dropdown.Item href="#/action-3">
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
                                          Unpublish
                                        </Dropdown.Item>
                                      </div> */}
                                      {/* <Dropdown.Divider /> */}

                                      {/* <div className="my-profile">
                                        <Dropdown.Item href="/edit-user-details">
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
                                      </div> */}
                                      {/* <Dropdown.Divider /> */}
                                      <div
                                        onClick={() => {
                                          handleShow();
                                          setQuizId(quiz?._id);
                                        }}
                                        className="my-profile"
                                      >
                                        <Dropdown.Item href="#/action-3">
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
                                          Edit Quiz
                                        </Dropdown.Item>
                                      </div>
                                      <Dropdown.Divider />
                                      <div
                                        onClick={async () => {
                                          let res = await dispatch(
                                            AdminActions.DeleteQuiz(quiz?._id)
                                          );
                                          if (
                                            res?.payload?.data?.data?.status ==
                                            200
                                          ) {
                                            setFlag1(!flag1);
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
                    {quizList?.data?.length > 0 && (
                      <div className="pagination-section">
                        <ShowingResult
                          page={quizpagination}
                          limit={quizlimit}
                          totalUser={quizList?.count}
                          length={quizList?.data?.length}
                        />
                        <div className="pagination-block">
                          <PaginationComponent
                            currentPage={quizpagination}
                            totalCount={quizList?.count}
                            totalPages={Math.ceil(quizList?.count / limit)}
                            onPageChange={(page) => setquizPagination(page)}
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="no-deta-found">
                    <p style={{ textAlign: "center" }}>
                      No quiz available yet!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Container>
        )}

        <div className="pb-1"></div>
      </div>

      <Modal size="lg" show={show} onHide={handleClose}>
        <Formik
          initialValues={{
            quizType: (quizId && quizById?.data?.type )?? "",
            question:(quizId && quizById?.data?.question) ?? "",
            image:(quizId && quizById?.data?.image) ?? "",
            options:(quizId && quizById?.data?.options) ?? {},
            answer: (quizId && quizById?.data?.correct_option) ?? "",
          }}
          onSubmit={handleQuizSubmit}
          enableReinitialize={true}
        >
          {({
            values,
            handleChange,
            setFieldValue,
            resetForm,
            handleSubmit,
          }) => {
            console.log(values, "opt");
            return (
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <Row>
                    {" "}
                    <Col lg={12}>
                      <div className="commn-form-card mt-0">
                        <h2>{quizId ? "Edit " : "Add "} Quiz Question</h2>
                        <Row>
                          <Col lg={12}>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Select quiz type</Form.Label>
                                <Form.Select
                                  value={values?.quizType}
                                  name="quizType"
                                  onChange={handleChange}
                                  aria-label="Default select example"
                                >
                                  <option value="" selected disabled>
                                    Select type
                                  </option>
                                  {quizType?.map((x) => {
                                    return (
                                      <option value={x?.value}>
                                        {x?.name}
                                      </option>
                                    );
                                  })}
                                </Form.Select>
                              </Form.Group>
                            </Form>
                          </Col>
                          <Col lg={6}>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Question</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter your question here"
                                  value={values?.question}
                                  name="question"
                                  onChange={handleChange}
                                />
                              </Form.Group>
                            </Form>
                          </Col>
                          {values?.quizType == 2 && (
                            <Col lg={6}>
                              <div className="commn-upld-file mb-3">
                                <div>
                                  <div className="commn-upld-file">
                                    <div>
                                      {(questionImage || values?.image) &&
                                        (questionImage instanceof File ? (
                                          <img
                                            className="ad-img-cover"
                                            src={URL.createObjectURL(
                                              questionImage
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
                                            src={`${BASE_URL}/public/${values?.image}`}
                                            alt="Cover Preview"
                                          // style={{
                                          //   width: "100%",
                                          //   maxHeight: "200px",
                                          //   objectFit: "cover",
                                          // }}
                                          />
                                        ))}

                                      {/* <input
                                              type="file"
                                              accept="image/*"
                                              onChange={(e) =>
                                                handleImageUpload(
                                                  e,
                                                  setFieldValue
                                                )
                                              }
                                            /> */}
                                      <input
                                        type="file"
                                        onChange={(e) =>
                                          hanndleQuestionIMageUpload(
                                            e,
                                            setFieldValue
                                          )
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
                                      Upload image
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </Col>
                          )}

                          <Col lg={12}>
                            <Row>
                              {/* Render text fields by default */}
                              {["a", "b", "c", "d"].map((optionKey) => {
                                return (
                                  <Col lg={6} key={optionKey}>
                                    <Form>
                                      <Form.Group
                                        className="mb-3"
                                        controlId={`formBasicOption${optionKey}`}
                                      >
                                        <Form.Label>
                                          Option {optionKey.toUpperCase()}
                                        </Form.Label>
                                        {values?.quizType == 2 ? (
                                         <div className="ad-action-btn upld-video-inpu">
                                            <Form.Control
                                              type="file"
                                              accept="img/*"
                                              // ref={inputRef1}
                                              onChange={(e) =>
                                                handleOptionsImageUpload(
                                                  e,
                                                  optionKey,
                                                  setFieldValue,
                                                  option
                                                )
                                              }
                                              name="summaryVideoId"
                                            />
                                            
                                            <div>{values?.options[optionKey] instanceof File ? values?.options[optionKey].name : values?.options[optionKey] ? values?.options[optionKey] : "Upload summary video  here"}</div>
                                            {/* <div>Upload summary video  here</div> */}
                                          </div>


                                          
                                        ) : (
                                          // Show text input for other quiz types
                                          <Form.Control
                                            type="text"
                                            placeholder={`Enter option ${optionKey.toUpperCase()}`}
                                            value={values?.options[optionKey]}
                                            onChange={(e) =>
                                              handleOptions(
                                                e,
                                                optionKey,
                                                setFieldValue,
                                                option
                                              )
                                            }
                                          />
                                        )}

                                      </Form.Group>
                                    </Form>
                                  </Col>
                                );
                              })}
                            </Row>
                          </Col>
                          <Col lg={12}>
                            <Form>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Correct Answer</Form.Label>
                                <Form.Select
                                  name="answer"
                                  value={values?.answer}
                                  onChange={handleChange}
                                  aria-label="Default select example"
                                >
                                  <option value="" selected disabled>
                                    Select the correct answer
                                  </option>
                                  {Answers?.map((x) => (
                                    <option value={x}>{x}</option>
                                  ))}
                                </Form.Select>
                              </Form.Group>
                            </Form>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </Row>

                  <div className="modal-comn-btns mb-4 gap-4 w-50 mx-auto">
                    <button
                      className="untheme-btn w-100"
                      type="button"
                      onClick={() => {

                        console.log(values,"skjdyhfkjsd")
                          
                        values.question = "";
                        values.options = "";
                        values.answer = "";
                        values.image = "";
                        setQuestionImage(null);
                        values.quizType = "";
                        setQuizId(null)
                        handleClose();

                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="theme-btn w-100"
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Submit
                    </button>
                  </div>
                </Modal.Body>
              </Form>
            );
          }}
        </Formik>
      </Modal>

      {/* EDIT LESSONS */}

      <Modal size="lg" show={showEditLesson}>
        {loading && <Loader />}
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          enableReinitialize={true}
        >
          {({ values, handleSubmit, handleChange, setFieldValue }) => {
            return (
              <Form onSubmit={handleSubmit}>
                <Modal.Body>
                  <Col lg={12}>
                    <div className="commn-form-card">
                      <h2>Edit lesson video</h2>
                      <Row>
                        <Col lg={6}>
                          <Row>
                            <Col lg={12}>
                              <div className="extra-title-set">
                                <h3>Course Video</h3>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Lesson title</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter course title"
                                    value={values.lessonTitle}
                                    name="lessonTitle"
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col lg={12}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Lesson Number</Form.Label>
                                  <Form.Control
                                    type="text"
                                    placeholder="Enter course title"
                                    value={values.lessonNumber}
                                    name="lessonNumber"
                                    onChange={handleChange}
                                  />
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col lg={12}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicVideo"
                                >
                                  <Form.Label>Summary Video</Form.Label>
                                  <div className="ad-action-btn upld-video-inpu">
                                    <Form.Control
                                      type="file"
                                      accept="video/*"
                                      ref={inputRef1}
                                      onChange={(e) =>
                                        handleVideoUpload(e, setFieldValue)
                                      }
                                      name="summaryVideoId"
                                    />
                                    {summaryvideoId && (
                                      <>
                                        <button

                                          onClick={() => handleVideoPreview(0)}
                                          type="button"
                                        >
                                          Load video
                                        </button>

                                      </>
                                    )}
                                    <div>{lessonId &&
                                      values?.summaryVideoId instanceof File ? values.summaryVideoId.name : values?.summaryVideoId ? values.summaryVideoId?.split('').slice(0, 20) : "Upload summary video  here"}</div>
                                  </div>
                                  {/* <p style={{ fontSize: "14px" }}>
                                    {lessonId &&
                                      !(summaryvideoId instanceof File) &&
                                      values?.summaryVideoId}
                                  </p> */}
                                </Form.Group>
                              </Form>
                            </Col>
                            <Col lg={12}>
                              <Form>
                                <Form.Group
                                  className="mb-3"
                                  controlId="formBasicEmail"
                                >
                                  <Form.Label>Video ID</Form.Label>
                                  <div className="ad-action-btn upld-video-inpu">

                                    <Form.Control

                                      type="file"
                                      accept="video/*"
                                      ref={inputRef}
                                      onChange={(e) =>
                                        handleVideoUpload(e, setFieldValue)
                                      }
                                      name="videoId"
                                    />
                                    {videoId && (
                                      <>
                                        <button
                                          onClick={() => handleVideoPreview(1)}
                                          type="button"
                                          value={inputRef}
                                        >
                                          Load video
                                        </button>

                                      </>
                                    )}
                                    <div>
                                      {lessonId &&
                                        values?.videoId instanceof File ? values.videoId.name : values?.videoId ? values.videoId?.split('').slice(0, 20) : "Upload summary video  here"}</div>
                                  </div>
                                  {/* <p style={{ fontSize: "14px" }}>
                                    {lessonId &&
                                      !(videoId instanceof File) &&
                                      values?.videoId}
                                  </p> */}
                                </Form.Group>
                              </Form>
                            </Col>
                          </Row>
                        </Col>
                        <Col lg={6}>
                          <Row>
                            <Col lg={12}>
                              <div className="extra-title-set">
                                <h3>Preview Video</h3>
                              </div>
                            </Col>
                            <Col lg={12}>
                              <div className="preview-video-set">
                                {(videoId || summaryvideoId) &&
                                  prevVideo != null ? (
                                  <>
                                    {prevVideo == 0 && (
                                      <video controls width="400" height="200">
                                        <source
                                          src={
                                            summaryvideoId instanceof File
                                              ? URL.createObjectURL(
                                                summaryvideoId
                                              )
                                              : `${BASE_URL}/public/${summaryvideoId}`
                                          }
                                          type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    )}

                                    {prevVideo == 1 && (
                                      <video controls width="400" height="200">
                                        <source
                                          src={
                                            videoId instanceof File
                                              ? URL.createObjectURL(videoId)
                                              : `${BASE_URL}/public/${videoId}`
                                          }
                                          type="video/mp4"
                                        />
                                        Your browser does not support the video
                                        tag.
                                      </video>
                                    )}
                                  </>
                                ) : (
                                  <p>Please upload a video</p>
                                )}
                                {/* <img
                                        src={require("../Assets/Images/banner-sign.png")}
                                      /> */}
                              </div>
                            </Col>

                            {/* <Col lg={12}>
                              <div className="preview-video-action">
                                <button
                                  type="button"
                                  onClick={() => {
                                    console.log(values, "cccc");
                                    handleLessonValidation(
                                      values,
                                      setFieldValue
                                    );
                                  }}
                                >
                                  Save and continue
                                </button>
                              </div>
                            </Col> */}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <div className="modal-comn-btns mb-4 gap-4 w-50 mx-auto">
                    <button
                      className="untheme-btn w-100"
                      type="button"
                      onClick={() => {
                        navigate(`/new-module?id=${courseId}&mid=${moduleId}`);
                        handleCloseEdit();
                        setSummaryVideoId(null);
                        setVideoId(null);
                      }}
                    >
                      Cancel
                    </button>
                    <button
                      className="theme-btn w-100"
                      type="button"
                      onClick={() => {
                        console.log(values, "cccc");
                        handleLessonValidation(values, setFieldValue);
                      }}
                    >
                      Submit
                    </button>
                  </div>
                </Modal.Body>
              </Form>
            );
          }}
        </Formik>
      </Modal>
    </Layout>
  );
}
