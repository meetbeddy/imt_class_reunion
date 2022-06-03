import * as api from "../api/index.js";

export const getPosts = (page) => async (dispatch) => {
  try {
    dispatch({ type: "START_LOADING" });
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchPosts(page);

    dispatch({
      type: "FETCH_ALL",
      payload: { data, currentPage, numberOfPages },
    });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    console.log(error);
  }
};

export const getMyPosts = (page) => async (dispatch) => {
  try {
    const {
      data: { data, currentPage, numberOfPages },
    } = await api.fetchMyPosts(page);

    dispatch({
      type: "FETCH_MY_POST",
      payload: { data, currentPage, numberOfPages },
    });
  } catch (error) {}
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: "CREATE", payload: data });
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: "LIKE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const uploadcv = (formdata) => async (dispatch) => {
  try {
    const { data } = await api.uploadCv(formdata);
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "AUTH", data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const getFile = (id) => async (dispatch) => {
  try {
    const { data } = await api.getCvFile(id);
    dispatch({ type: "START_LOADING" });

    dispatch({ type: "GET_USER_CV", payload: data });
    dispatch({ type: "END_LOADING" });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const reunionReg = (form) => async (dispatch) => {
  try {
    const { data } = await api.reunionreg(form);
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};
