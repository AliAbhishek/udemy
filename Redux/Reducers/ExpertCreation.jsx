import { createSlice } from "@reduxjs/toolkit";
import AdminActions from "../Action/AdminActions";
import toast from "react-hot-toast";

const expertCreation = createSlice({
  name: "expertCreation",
  initialState: {
    expertDetails: null,
    loading: false,
    expertList:null,
    pageInRedux:null
  },
  reducers:{
       setCurretPage:(state,action)=>{
        state.pageInRedux = action.payload
       }
  },
  extraReducers: (builder) => {
    builder.addCase(AdminActions.createExpert.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        state.expertDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.createExpert.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.createExpert.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getExpertProfile.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        state.expertDetails = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getExpertProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getExpertProfile.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.getExpertsList.fulfilled, (state, action) => {
      console.log(action?.payload?.data, "action?.payload?.data");
      if (action?.payload?.data?.data?.status == 200) {
        // toast.success(action?.payload?.data?.data?.message);
        state.loading = false;
        state.expertList = action?.payload?.data?.data;
      } else {
        toast.error(action?.payload?.data?.data?.message);
        state.loading = false;
      }
    });
    builder.addCase(AdminActions.getExpertsList.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.getExpertsList.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });

    builder.addCase(AdminActions.EditExpertProfile.fulfilled, (state, action) => {
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
    builder.addCase(AdminActions.EditExpertProfile.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(AdminActions.EditExpertProfile.rejected, (state, action) => {
      toast.error("Something went wrong");
      state.loading = false;
    });
  },
});

export const { setCurretPage} = expertCreation.actions

export default expertCreation.reducer;
