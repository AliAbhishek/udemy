import { createSlice } from "@reduxjs/toolkit";
import AdminActions from "../Action/AdminActions";
import toast from "react-hot-toast";

const courseSlice = createSlice({
  name: "courseSlice",
  initialState: {
    loading: false,
    courseDetails: null,
    moduleDetails: null,
    courseList: [],
    moduleListSpecificToCourse: [],
    lessonList: [],
    moduleDetailById: null,
    lessonDetailById:null,
    quizById:null,
    quizList:null
  },
  extraReducers: (builder) => {
    builder.addCase(AdminActions.createCourse.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.expertDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.createCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.createCourse.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getCourseInfo.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        state.courseDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getCourseInfo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getCourseInfo.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.EditCourse.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.expertDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.EditCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.EditCourse.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getCourse.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;

        state.courseList = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getCourse.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.createModule.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.createModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.createModule.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(
      AdminActions.getModuleListSpecificToCourse.fulfilled,
      (state, action) => {
        console.log(action?.payload?.data, "action?.payload?.data");
        if (action?.payload?.data?.data?.status == 200) {
          // toast.success(action?.payload?.data?.data?.message);
          state.loading = false;

          state.moduleListSpecificToCourse = action?.payload?.data?.data;
        } else {
          toast.error(action?.payload?.data?.data?.message);
          state.loading = false;
        }
      }
    );
    builder.addCase(
      AdminActions.getModuleListSpecificToCourse.pending,
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addCase(
      AdminActions.getModuleListSpecificToCourse.rejected,
      (state, action) => {
        toast.error("Something went wrong");
        state.loading = false;
      }
    );

    builder.addCase(
      AdminActions.getLessonsPerModule.fulfilled,
      (state, action) => {
        console.log(action?.payload?.data, "action?.payload?.data");
        if (action?.payload?.data?.data?.status == 200) {
          // toast.success(action?.payload?.data?.data?.message);
          state.loading = false;

          state.lessonList = action?.payload?.data?.data;
        } else {
          toast.error(action?.payload?.data?.data?.message);
          state.loading = false;
        }
      }
    );
    builder.addCase(
      AdminActions.getLessonsPerModule.pending,
      (state, action) => {
        state.loading = true;
      }
    );
    builder.addCase(
      AdminActions.getLessonsPerModule.rejected,
      (state, action) => {
        toast.error("Something went wrong");
        state.loading = false;
      }
    );

    builder.addCase(AdminActions.getModuleById.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;

        state.moduleDetailById = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getModuleById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getModuleById.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.EditModule.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.EditModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.EditModule.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.addLessons.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.addLessons.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.addLessons.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getLessonById.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;

        state.lessonDetailById = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getLessonById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getLessonById.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.EditLesson.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.EditLesson.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.EditLesson.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.DeleteLesson.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.DeleteLesson.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.DeleteLesson.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.DeleteCourse.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.DeleteCourse.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.DeleteCourse.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.addQuiz.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.addQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.addQuiz.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getQuizById.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;

        state.quizById = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getQuizById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getQuizById.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getQuizPerModule.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;

        state.quizList = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getQuizPerModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getQuizPerModule.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.EditQuiz.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.EditQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.EditQuiz.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.DeleteQuiz.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.DeleteQuiz.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.DeleteQuiz.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.DeleteAdditionalFile.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.DeleteAdditionalFile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.DeleteAdditionalFile.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.DeleteModule.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        // state.moduleDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.DeleteModule.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.DeleteModule.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });
  },
});

export default courseSlice.reducer;
