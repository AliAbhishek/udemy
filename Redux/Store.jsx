import { configureStore } from "@reduxjs/toolkit";
import AdminProfile from "./Reducers/AdminProfile";
import ExpertCreation from "./Reducers/ExpertCreation";
import categorySlice from "./Reducers/categorySlice";
import CourseSlice from "./Reducers/CourseSlice";
import UserCreation from "./Reducers/UserCreation";




const Store = configureStore({
  reducer: {
    admin:AdminProfile,
    creation:ExpertCreation,
    category:categorySlice,
    course:CourseSlice,
    usercreation:UserCreation
  },
});

export default Store;
