import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Error from "./Pages/Error";
import UnderMaintenance from "./Pages/UnderMaintenance";
import MyProfile from "./Pages/MyProfile";
import Home from "./Pages/Home";
import UserManagement from "./Pages/UserManagement";
import AddNewUser from "./Pages/AddNewUser";
import UserDetails from "./Pages/UserDetails";
import EditUserDetails from "./Pages/EditUserDetails";
import IndustryExpertsManagement from "./Pages/IndustryExpertsManagement";
import AddNewExpert from "./Pages/AddNewExpert";
import ExpertDetails from "./Pages/ExpertDetails";
import CourseManagement from "./Pages/CourseManagement";
import NewCourse from "./Pages/NewCourse";
import NewModule from "./Pages/NewModule";
import CoursePreview from "./Pages/CoursePreview";
import CourseInfo from "./Pages/CourseInfo";
import ModuleComments from "./Pages/ModuleComments";
import PaymentsManagement from "./Pages/PaymentsManagement";
import JobsManagement from "./Pages/JobsManagement";
import PostNewJob from "./Pages/PostNewJob";
import Certifications from "./Pages/Certifications";
import NewCertification from "./Pages/NewCertification";
import AccountSettings from "./Pages/AccountSettings";
import NotificationSettings from "./Pages/NotificationSettings";
import AddNewTopic from "./Pages/AddNewTopic";
import CreatePraticeQuestion from "./Pages/CreatePraticeQuestion";
import CreateMockExam from "./Pages/CreateMockExam";
import AddNewSection from "./Pages/AddNewSection";
import NewCertificationPublish from "./Pages/NewCertificationPublish";
import StaffList from "./Pages/StaffList";
import Roles from "./Pages/Roles";
import ProtectedRoutes from "./Components/ProtectdRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route path="/reset-password" element={<ResetPassword />}></Route> */}
          {/* <Route path="/my-profile" element={<MyProfile />}></Route> */}
          
            <Route path="/" element={<Login />}></Route>
            <Route element={<ProtectedRoutes />}>
            <Route path="/error" element={<Error />}></Route>
            <Route
              path="/under-maintenance"
              element={<UnderMaintenance />}
            ></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/new-user/:type" element={<AddNewUser />}></Route>
            <Route path="/user-details/:id" element={<UserDetails />}></Route>
            <Route
              path="/edit-user-details"
              element={<EditUserDetails />}
            ></Route>
            <Route
              path="/industry-experts-management"
              element={<IndustryExpertsManagement />}
            ></Route>
            {/* <Route path="/add-new-expert" element={<AddNewExpert />}></Route> */}
            <Route path="/new-expert/:type" element={<AddNewExpert />}></Route>

            <Route path="/expert-details/:id" element={<ExpertDetails />}></Route>
            <Route
              path="/course-management"
              element={<CourseManagement />}
            ></Route>
            <Route path="/new-course" element={<NewCourse />}></Route>
            <Route path="/user-management" element={<UserManagement />}></Route>
            <Route path="/new-module" element={<NewModule />}></Route>
            <Route path="/course-preview/:id" element={<CoursePreview />}></Route>
            <Route path="/course-info/:id" element={<CourseInfo />}></Route>
            <Route path="/module-comments" element={<ModuleComments />}></Route>
            <Route path="/payments-management" element={<PaymentsManagement />}></Route>
            <Route path="/jobs-management" element={<JobsManagement />}></Route>
            <Route path="/post-new-job" element={<PostNewJob />}></Route>
            <Route path="/certifications" element={<Certifications />}></Route>
            <Route path="/new-certifications" element={<NewCertification />}></Route>
            <Route path="/account-settings" element={<AccountSettings />}></Route>
            <Route path="/notification-settings" element={<NotificationSettings />}></Route>
            <Route path="/add-new-topic" element={<AddNewTopic />}></Route>
            <Route path="/create-pratice-question" element={<CreatePraticeQuestion />}></Route>
            <Route path="/create-mock-exam" element={<CreateMockExam />}></Route>
            <Route path="/add-new-section" element={<AddNewSection />}></Route>
            <Route path="/new-certification-publish" element={<NewCertificationPublish />}></Route>
            <Route path="/staff-list" element={<StaffList />}></Route>
            <Route path="/roles" element={<Roles />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
