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
