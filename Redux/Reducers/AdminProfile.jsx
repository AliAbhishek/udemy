import { createSlice } from "@reduxjs/toolkit";
import AdminActions from "../Action/AdminActions";

const adminProfile = createSlice({
  name: "adminProfile",
  initialState: {
    adminDetails: null,
  },
  extraReducers: (builder) => {
    builder.addCase(AdminActions.profile.fulfilled, (state, action) => {
      state.adminDetails = action?.payload?.data?.data;
    });
  },
});

export default adminProfile.reducer
