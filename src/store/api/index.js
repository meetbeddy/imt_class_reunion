import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

export const fetchPosts = () => API.get("/user/posts");
export const createPost = (newPost) => API.post("/user/posts", newPost);
export const likePost = (id) => API.patch(`/user/posts/${id}/likePost`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/user/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/user/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
