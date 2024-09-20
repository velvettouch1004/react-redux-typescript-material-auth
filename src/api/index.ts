import axios from "axios";

const token = localStorage.getItem("profile");

const API = axios.create({
  baseURL: "http://localhost:5000/auth",
  headers: {
    Authorization: `${token}`,
  },
});
// API.interceptors.request.use(
//   (config) => {
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(error);
//   }
// );
// // API.interceptors.response.use(response => {
//     return response;
//  }, error => {
//    if (error.response.status === 401) {
//         window.location.assign('/loginUser');
//    }
//    else if(error.response.status === 500) {
//        alert("Server error");
//    }
//    return error;

//  });
export const autoSignIn = () => API.get("/");
export const signIn = (formData: any) => API.post("/login", formData);
export const signUp = (formData: any) => API.post("/register", formData);
