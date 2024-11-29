import axios from "axios";
import toast from "react-hot-toast";

const adminApi = axios.create({
  baseURL: process.env.REACT_APP_ADMIN_BASE_URL,
});

adminApi.interceptors.request.use((config) => {
  const token =
    sessionStorage.getItem("token") || localStorage.getItem("token");

  if (token) {
    config.headers.token = token;
  }

  return config;
}


);

adminApi.interceptors.response.use((response) => {
    console.log(response,"response")
    if(response?.data?.status== 501){
        console.log("first")
      
        sessionStorage.clear();
        localStorage.clear()
        toast.error(response?.data?.message)
      
  
        // toast.error(error?.response?.data?.message);
        setTimeout(()=>{
          window.location.href = "/"
        },3000)
      }

    return response;
}, (error) => {
    console.log(error,"error")
    if(error?.response?.data?.status== 501){
        console.log("first")
      
        sessionStorage.clear();
        localStorage.clear()
      
  
        toast.error(error?.response?.data?.message);
        setTimeout(()=>{
          window.location.href = "/"
        },3000)
      }
    return error.response;
});
export default adminApi;
