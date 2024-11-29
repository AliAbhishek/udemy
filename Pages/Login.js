import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [show,setShow] = useState(false)

  const validate = (values) => {
    let errors = {};

    if (!values?.email) {
      errors.email = "Please enter email";
      return errors;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
      return errors
    }
    if (!values?.password) {
      errors.password = "Please enter password";
      return errors;
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const errors = validate(values);
    console.log(errors, "errors");
    if (Object.keys(errors).length === 0) {
      let res = await dispatch(
        AdminActions.login({ email: values?.email, password: values?.password })
      );

      if (res?.payload?.data?.data?.status == 200) {
        
        toast.success(res?.payload?.data?.data?.message);
        navigate("/home")
        console.log(res?.payload?.data)
        sessionStorage.setItem("token",res?.payload?.data?.data?.data?.token)
      } else {
        toast.error(res?.payload?.data?.data?.message);
      }
    } else {
      Object.values(errors).forEach((err) => {
        toast.error(err);
      });
    }
  };

  return (
    <div>
      <Container fluid></Container>
      <Container fluid className="">
        <div className="row  sign-banner-part">
          <Col lg={12} className="p-0">
            <div className="banner-sigin-top">
              <img src={require("../Assets/Images/main-logo.png")} />
            </div>
          </Col>
          <Col lg={5} className="p-0">
            <div className="left-banner-img">
              <div className="logo">
                <img src={require("../Assets/Images/banner-logo.png")} />
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div className="right-banner-part">
              <div className="login-cmn-box">
                <div className="login-box-inner-wrap">
                  <h2>Admin Area </h2>
                  <p>
                    Welcome to the Admin Area! Please log in to access your
                    account and manage the learning platform effectively.
                  </p>
                  <Formik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={handleSubmit}
                    // validate={validate}
                  >
                    {({ values, handleSubmit, isSubmitting, handleChange }) => {
                      return (
                        <Form onSubmit={handleSubmit}>
                          <div className="form-set">
                            <Form.Group
                              className="mb-4"
                              controlId="formBasicEmail"
                            >
                              <Form.Label>Email</Form.Label>
                              <Form.Control
                                type="email"
                                placeholder="Enter your email address"
                                name="email"
                                onChange={handleChange}
                              />
                            </Form.Group>

                            <Form.Group
                              className="mb-3 pass-eys"
                              controlId="formBasicPassword"
                            >
                              <Form.Label>Password</Form.Label>
                              <Form.Control
                                className="password-input"
                                type={show ? "text" : "password"}
                                placeholder="Password"
                                name="password"
                                onChange={handleChange}
                              />
                              <span onClick={()=>setShow(!show)}>show</span>
                            </Form.Group>
                          </div>
                          <div className="pass-rember-line">
                            {/* <div className="remember-check">
                        <input type="checkbox" class="red" id="filled-in-box" />
                        <Form.Label>Remember Me</Form.Label>
                      </div> */}
                            {/* <Link to="/forgot-password" className="forgot">
                        Forgot Password?
                      </Link> */}
                          </div>
                          <button
                            type="submit"
                            className="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? ( // Conditional rendering for loading state
                              <>
                                <Spinner animation="border" size="sm" />{" "}
                                {/* Loader */}
                              </>
                            ) : (
                              "Log In"
                            )}
                          </button>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </div>
            </div>
          </Col>
        </div>
      </Container>
    </div>
  );
}
