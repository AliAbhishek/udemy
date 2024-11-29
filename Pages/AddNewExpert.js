import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Layout from "../Components/Layout/Layout";
import { Formik } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import AdminActions from "../Redux/Action/AdminActions";
import Loader from "../Components/Loader";
import { useNavigate, useParams } from "react-router-dom";

export default function AddNewExpert() {
  const { type } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, expertDetails } = useSelector((state) => state.creation);

  console.log(expertDetails, "expertDetails");

  useEffect(() => {
    if (type !== "add") {
      dispatch(AdminActions.getExpertProfile(type));
    }
  }, [type]);

  const initialValues = {
    firstName: type !=="add"
      ? expertDetails?.data?.first_name
      : "",
    lastName:  type !=="add"
      ? expertDetails?.data?.last_name
      : "",
    email: type !=="add" ? expertDetails?.data?.email : "",
    phoneNumber:  type !=="add" &&  expertDetails?.data
      ? expertDetails?.data?.country_code + expertDetails?.data?.phone_no
      : "",
    // role: "",
    status: type !=="add" ? expertDetails?.data?.status : "",
    countryCode:  type !=="add"
      ? expertDetails?.data?.country_code
      : "",
  };

  const validate = (values) => {
    let errors = {};

    if (!values?.firstName) {
      errors.firstName = "Please enter first name";
      return errors;
    } else if (!/^[A-Za-z]+$/.test(values.firstName)) {
      errors.firstName = "First name can only contain letters";
      return errors;
    }
    if (!values?.lastName) {
      errors.lastName = "Please enter last name";
      return errors;
    } else if (!/^[A-Za-z]+$/.test(values.lastName)) {
      errors.lastName = "Last name can only contain letters";
      return errors;
    }
    if (!values?.email) {
      errors.email = "Please enter email";
      return errors;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
      return errors;
    }

    if (!values?.phoneNumber) {
      errors.phoneNumber = "Please enter phone Number";
      return errors;
    }
    // if (!values?.role) {
    //   errors.role = "Please select the role";
    //   return errors;
    // }
    if (!values?.status) {
      errors.status = "Please select status";
      return errors;
    }
    return errors;
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const errors = validate(values);
    console.log(errors, "err");

    if (Object.keys(errors)?.length == 0) {
      console.log(typeof Number(values?.role));
      let formDataToSave = new FormData();
      formDataToSave.append("role", 3);
      formDataToSave.append("first_name", values?.firstName.charAt(0).toUpperCase()+values?.firstName.slice(1));
      formDataToSave.append("last_name", values?.lastName.charAt(0).toUpperCase()+values?.lastName.slice(1));
      formDataToSave.append("country_code", values?.countryCode);

      if (values?.phoneNumber) {
        const countryCodeLength = values?.countryCode?.length || 0;
        const number = values?.phoneNumber?.slice(countryCodeLength);
        // console.log(number, "number without country code");
        formDataToSave.append("phone_no", number);
      }

      formDataToSave.append("email", values?.email);
      // formDataToSave.append("assigned_role  ",values?.role);
      formDataToSave.append("status", values?.status);
      let res =
        type !== "add"
          ? await dispatch(
              AdminActions.EditExpertProfile({ id: type, data: formDataToSave })
            )
          : await dispatch(AdminActions.createExpert(formDataToSave));
      console.log(res?.payload?.data?.data, "res");
      if (res?.payload?.data?.data?.status == 200) {
        navigate(`/expert-details/${res?.payload?.data?.data?.data?._id}`);
      }
    } else {
      Object.values(errors).forEach((err) => {
        toast.error(err);
      });
    }
  };

  // const handlePhoneAndCode=(value,code,setFieldValue)=>{
  //   console.log(value,"value")
  //   console.log(code,"code")
  //   setFieldValue("countryCode",code)
  //   // let phoneNumber = value && value?.splice(0,code?.length)
  //   // console.log(phoneNumber,"number")

  // }

  return (
    <Layout>
      {loading && <Loader />}
      <div className="main-content-m">
        <Container fluid>
          <div className="dashboard-items">
            <Row>
              <Col lg={12}>
                <div className="commn-form-card">
                  <h2>{type !== "add" ? "Edit" : "Add new"} Expert</h2>
                  <Formik
                    onSubmit={handleSubmit}
                    initialValues={initialValues}
                    enableReinitialize={true}
                  >
                    {({
                      isSubmitting,
                      handleChange,
                      handleSubmit,
                      setFieldValue,
                      resetForm,
                      values,
                    }) => {
                      return (
                        <Form onSubmit={handleSubmit}>
                          <Row>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Input first name in here"
                                  name="firstName"
                                  onChange={handleChange}
                                  value={values.firstName}
                                  autoComplete="off"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Input last name in here"
                                  name="lastName"
                                  onChange={handleChange}
                                  value={values.lastName}
                                 autoComplete="off"
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                  type="text"
                                  placeholder="Enter email in here"
                                  name="email"
                                  onChange={handleChange}
                                  value={values?.email}
                                  autoComplete="off"
                                  style={{ textTransform: 'none' }}
                                />
                              </Form.Group>
                            </Col>
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Phone Number</Form.Label>
                                {/* <Form.Control
                                    type="text"
                                    placeholder="Input last name in here"
                                    name="phoneNumber"
                                    onChange={handleChange}
                                  /> */}
                                <PhoneInput
                                  country={"us"}
                                  value={values?.phoneNumber}
                                  onChange={(
                                    value,
                                    country,
                                    e,
                                    formattedValue
                                  ) => {
                                    // console.log(value,country)
                                    // handlePhoneAndCode(value,country.dialCode,setFieldValue)

                                    setFieldValue(`phoneNumber`, value);
                                    setFieldValue(
                                      `countryCode`,
                                      country.dialCode
                                    );
                                  }}
                                  inputProps={{
                                    name: `phoneNumber`,
                                    required: true,
                                  }}
                                  containerClass="phone-input-container"
                                  buttonClass="country-dropdown"
                                />
                              </Form.Group>
                            </Col>
                            {/* <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Role</Form.Label>
                                <Form.Select
                                  name="role"
                                  onChange={handleChange}
                                  aria-label="Default select example"
                                  value={values?.role}
                                >
                                  <option>Assign role</option>
                                  <option value="1">One</option>
                                  <option value="2">Two</option>
                                  <option value="3">Three</option>
                                </Form.Select>
                              </Form.Group>
                            </Col> */}
                            <Col lg={6}>
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                              >
                                <Form.Label>Status</Form.Label>
                                <Form.Select
                                  name="status"
                                  onChange={handleChange}
                                  aria-label="Default select example"
                                  value={values?.status}
                                >
                                  <option>Select Status</option>
                                  <option value="1">Active</option>
                                  <option value="2">In-Active</option>
                                </Form.Select>
                              </Form.Group>
                            </Col>

                            <Col lg={12}>
                              <div className="commn-form-btns">
                                <button
                                  // onSubmit={handleSubmit}
                                  // disabled={isSubmitting}
                                  className="theme-btn"
                                  type="submit"
                                >
                                  {type !== "add" ? "Edit" : "Add"} Expert
                                </button>
                                <button
                                  type="button" // Make sure this is type="button"
                                  onClick={() => resetForm()} // Call resetForm() on click
                                  className="untheme-btn"
                                >
                                  Cancel
                                </button>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      );
                    }}
                  </Formik>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </Layout>
  );
}
