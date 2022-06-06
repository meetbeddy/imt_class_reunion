import axios from "axios";

let baseURL;

if (process.env.NODE_ENV === "production") {
  baseURL = "https://sleepy-brushlands-58149.herokuapp.com";
} else {
  baseURL = "http://localhost:5000";
}

const API = axios.create({ baseURL });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPost = (id) => API.get(`/user/posts/${id}`);
export const fetchPosts = (page) => API.get(`/user/getposts?page=${page}`);
export const fetchMyPosts = (page) => API.get(`/user/getmyposts?page=${page}`);
export const createPost = (newPost) => API.post("/user/createpost", newPost);
export const likePost = (id) => API.patch(`/user/post/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/user/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/user/deletepost/${id}`);
export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const forgotpassword = (email) =>
  API.post("/user/forgotpassword", email);
export const resetpassword = (formdata) =>
  API.patch("/user/resetpassword", formdata);
export const checklink = (token) => API.get(`/user/checklink/${token}`);
export const profileUpdate = (formData) =>
  API.patch(`/user/profileupdate`, formData);
export const imageUpdate = (formData) =>
  API.patch(`/user/profileimageupdate`, formData);
export const uploadCv = (formData) => API.post(`/user/uploadcv`, formData);
export const getCvFile = (id) => API.get(`/user/file/${id}`);
export const reunionreg = (formData) => API.post(`/user/reunion`, formData);
