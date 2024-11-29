import { createSlice } from "@reduxjs/toolkit";
import AdminActions from "../Action/AdminActions";
import toast from "react-hot-toast";


const categorySlice = createSlice({
    name:"categorySlice",
    initialState:{
        categoryList:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(AdminActions.getCategory.fulfilled,(state,action)=>{
          
                // toast.success(action?.payload?.data?.data?.message);
                // state.loading = false;
                state.categoryList = action?.payload?.data?.data;
             
        })
    }
})

export default categorySlice.reducer