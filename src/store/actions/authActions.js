import * as api from "../api/index.js";

export const signin = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);

    dispatch({ type: "AUTH", data });

    router("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);

    dispatch({ type: "AUTH", data });

    router("/dashboard");
  } catch (error) {
    console.log(error);
  }
};

export const updateprofile = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.profileUpdate(formData);

    dispatch({ type: "AUTH", data });
  } catch (error) {
    console.log(error);
  }
};

export const updateimage = (formData, router) => async (dispatch) => {
  try {
    const { data } = await api.imageUpdate(formData);

    dispatch({ type: "AUTH", data });
  } catch (error) {
    console.log(error);
  }
};
