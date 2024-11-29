import { createAsyncThunk } from "@reduxjs/toolkit";
import adminApi from "../../Services/AdminApi";

const AdminActions = {
  login: createAsyncThunk("login", async (details) => {
    const data = await adminApi.post("/login", details);
    return { data };
  }),
  profile: createAsyncThunk("profile", async (details) => {
    const data = await adminApi.get("/profile", details);
    return { data };
  }),
  logout: createAsyncThunk("logout", async (details) => {
    const data = await adminApi.patch("/logout", details);
    return { data };
  }),
  createExpert: createAsyncThunk("user", async (details) => {
    const data = await adminApi.post("/user", details);
    return { data };
  }),
  getExpertProfile: createAsyncThunk("getExpertProfile", async (details) => {
    const data = await adminApi.get(`/user/${details}`);
    return { data };
  }),
  getExpertsList: createAsyncThunk("getExpertsList", async (details) => {
    const data = await adminApi.get(`/users`, {
      params: {
        role: details?.role,
        search: details?.search,
        pagination: details?.pagination,
        limit: details?.limit,
      },
    });
    return { data };
  }),
  EditExpertProfile: createAsyncThunk("EditExpertProfile", async (details) => {
    const data = await adminApi.put(`/user/${details?.id}`, details?.data);
    return { data };
  }),
  resetPassword: createAsyncThunk("resetPassword", async (details) => {
    const data = await adminApi.post(`/user/${details}/reset-password`);
    return { data };
  }),
  suspendAccount: createAsyncThunk("suspendAccount", async (details) => {
    const data = await adminApi.patch(`/user/${details}`);
    return { data };
  }),
  getCategory: createAsyncThunk("getCategory", async (details) => {
    const data = await adminApi.get(`/category`, {
      params: {
        search: details?.search,
        pagination: details?.pagination,
        limit: details?.limit,
      },
    });
    return { data };
  }),
  createCourse: createAsyncThunk("createCourse", async (details) => {
    const data = await adminApi.post(`/course`, details);
    return { data };
  }),
  getCourseInfo: createAsyncThunk("getCourseInfo", async (details) => {
    const data = await adminApi.get(`/course/${details}`);
    return { data };
  }),
  EditCourse: createAsyncThunk("EditCourse", async (details) => {
    const data = await adminApi.put(`/course/${details?.id}`, details?.data);
    return { data };
  }),
  getCourse: createAsyncThunk("courses", async (details) => {
    const data = await adminApi.get(`/courses`, {
      params: {
        search: details?.search,
        pagination: details?.pagination,
        limit: details?.limit,
      },
    });
    return { data };
  }),
  createModule: createAsyncThunk("module", async (details) => {
    const data = await adminApi.post(`/module`, details);
    return { data };
  }),
  getModuleListSpecificToCourse: createAsyncThunk(
    "getModuleListSpecificToCourse",
    async (details) => {
      const data = await adminApi.get(`/course/${details?.id}/modules`, {
        params: {
          pagination: details?.pagination,
          limit: details?.limit,
        },
      });
      return { data };
    }
  ),
  getLessonsPerModule: createAsyncThunk(
    "getLessonsPerModule",
    async (details) => {
      const data = await adminApi.get(`/module/${details?.id}/lessons`, {
        params: {
          pagination: details?.pagination,
          limit: details?.limit,
        },
      });
      return { data };
    }
  ),
  getModuleById: createAsyncThunk("getModuleById", async (details) => {
    const data = await adminApi.get(`/module/${details}`);
    return { data };
  }),
  EditModule: createAsyncThunk("EditModule", async (details) => {
    const data = await adminApi.put(`/module/${details?.id}`, details?.data);
    return { data };
  }),
  addLessons: createAsyncThunk("addLessons", async (details) => {
    const data = await adminApi.post(`/lesson`, details);
    return { data };
  }),
  getLessonById: createAsyncThunk("getLessonById", async (details) => {
    const data = await adminApi.get(`/lesson/${details}`);
    return { data };
  }),
  EditLesson: createAsyncThunk("EditLesson", async (details) => {
    const data = await adminApi.put(`/lesson/${details?.id}`, details?.data);
    return { data };
  }),
  DeleteLesson: createAsyncThunk("DeleteLesson", async (details) => {
    const data = await adminApi.delete(`/lesson/${details}`);
    return { data };
  }),
  DeleteCourse: createAsyncThunk("DeleteCourse", async (details) => {
    const data = await adminApi.delete(`/course/${details}`);
    return { data };
  }),
  DeleteModule: createAsyncThunk("DeleteModule", async (details) => {
    const data = await adminApi.delete(`/module/${details}`);
    return { data };
  }),
  addQuiz: createAsyncThunk("addQuiz", async (details) => {
    const data = await adminApi.post(`/quiz`, details);
    return { data };
  }),
  getQuizById: createAsyncThunk("getQuizById", async (details) => {
    const data = await adminApi.get(`/quiz/${details}`);
    return { data };
  }),
  getQuizPerModule: createAsyncThunk("getQuizPerModule", async (details) => {
    const data = await adminApi.get(`/module/${details?.id}/quiz`, {
      params: {
        pagination: details?.pagination,
        limit: details?.limit,
      },
    });
    return { data };
  }),
  EditQuiz: createAsyncThunk("EditQuiz", async (details) => {
    console.log(details, "details");
    const data = await adminApi.put(`/quiz/${details?.id}`, details?.data);
    return { data };
  }),
  DeleteQuiz: createAsyncThunk("DeleteQuiz", async (details) => {
    const data = await adminApi.delete(`/quiz/${details}`);
    return { data };
  }),
  DeleteAdditionalFile: createAsyncThunk(
    "DeleteAdditionalFile",
    async (details) => {
      const data = await adminApi.delete(`/additional-file/${details?.id}`, {
        params: { file_name: details?.file },
      });
      return { data };
    }
  ),
  publishUnpublishCourse: createAsyncThunk("publishUnpublishCourse", async (details) => {
    const data = await adminApi.patch(`/course/${details}`);
    return { data };
  }),
};

export default AdminActions;
