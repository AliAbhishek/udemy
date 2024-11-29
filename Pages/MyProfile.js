import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Layout from "../Components/Layout/Layout";
import Dropdown from "react-bootstrap/Dropdown";
import Pagination from "react-bootstrap/Pagination";

export default function MyProfile() {
  return (
    <Layout>
      <Container fluid>
        <div className="my-profile-page mt-4">
          <div className="profile-top-box">
            <div className="photo-upload">
              <div className="profile-picture">
                <img src={require("../Assets/Images/my-profile.svg").default} />
              </div>
              <div className="upload-box">
                <div className="btn-up">
                  <input
                    type="file"
                    accept="image/*"
                    id="uploadPhoto"
                    class="file-input"
                  />
                  <label for="uploadPhoto" class="custom-file-upload">
                    Upload New Photo
                  </label>
                  <div className="reset-box">
                    <p>Reset</p>
                  </div>
                </div>
                <p className="image-disp">
                  Allowed JPG, GIF or PNG. Max size of 800K
                </p>
              </div>
            </div>

            <div className="profile-disp mt-5">
              <div className="form-set input-profile">
                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicEmail"
                >
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="type" placeholder="First Name" />
                </Form.Group>

                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="type" placeholder="Last Name" />
                </Form.Group>
              </div>

              <div className="form-set input-profile mt-2">
                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>

                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
              </div>
            </div>

            <div className="btn-up mt-2">
              <button type="submit">Save Changes</button>
              <div className="reset-box">
                <p>Cancel</p>
              </div>
            </div>
          </div>

          <div className="profile-top-box mt-4">
            <div className="heading-profile">
              <h2>Change Password</h2>
            </div>

            <div className="profile-disp mt-4">
              <div className="form-set input-profile">
                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicEmail"
                >
                  <Form.Label>Current Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Current Password"
                  />
                </Form.Group>
              </div>

              <div className="form-set input-profile mt-2">
                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicEmail"
                >
                  <Form.Label>New Password</Form.Label>
                  <Form.Control type="password" placeholder="New Password" />
                </Form.Group>

                <Form.Group
                  className="mb-3 input-field-width"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Confirm New Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm New Password"
                  />
                </Form.Group>
              </div>
            </div>

            <div className="password-req mt-3 mb-4">
              <h4>Password Requirements: </h4>
              <p>
                <span>
                  <img src={require("../Assets/Images/bullets.svg").default} />
                </span>
                Minimum 8 characters long - the more, the better
              </p>
              <p>
                <span>
                  <img src={require("../Assets/Images/bullets.svg").default} />
                </span>
                At least one lowercase character
              </p>
              <p>
                <span>
                  <img src={require("../Assets/Images/bullets.svg").default} />
                </span>
                At least one number, symbol, or whitespace character
              </p>
            </div>

            <div className="btn-up mt-2">
              <button type="submit">Save Changes</button>
              <div className="reset-box">
                <p>Reset</p>
              </div>
            </div>
          </div>
        </div>

        <div className="made-with">
          <div className="pixinvent">
            <p>
              {" "}
              © 2024, Made with ❤️ by <span>Codobux</span>
            </p>
          </div>
          {/* <div className="bottom-links">
            <Link to="/">License</Link>
            <Link to="/">More Themes</Link>
            <Link to="/">Documentation</Link>
            <Link to="/">Support</Link>
          </div> */}
        </div>
      </Container>
    </Layout>
  );
}
