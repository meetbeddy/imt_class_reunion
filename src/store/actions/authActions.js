import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", data });

    router("/dashboard");
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });

    router("/dashboard");
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const updateprofile = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.profileUpdate(formData);

    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
    dispatch({ type: "AUTH", data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const updateimage = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.imageUpdate(formData);

    dispatch({ type: "AUTH", data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const forgotpassword = (email) => async (dispatch) => {
  try {
    const { data } = await api.forgotpassword(email);

    dispatch({ type: "GET_SUCCESS_MSG", payload: data });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
  }
};

export const resetpassword = (formdata) => async (dispatch) => {
  try {
    const { data } = await api.resetpassword(formdata);

    dispatch({ type: "RESET_SUCCESS", payload: data });
  } catch (error) {
    dispatch({
      type: "RESET_ERROR",
      payload: error?.response?.data,
    });
  }
};

export const checkLink = (token) => async (dispatch) => {
  try {
    dispatch({ type: "START_FETCHING" });
    const { data } = await api.checklink(token);
    dispatch({ type: "GET_SUCCESS_MSG", payload: data });

    dispatch({ type: "STOP_FETCHING" });
  } catch (error) {
    dispatch({
      type: "GET_ERROR_MSG",
      payload: error?.response?.data,
    });
    dispatch({ type: "STOP_FETCHING" });
  }
};
