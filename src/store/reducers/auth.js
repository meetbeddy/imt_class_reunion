const authReducer = (
  state = { authData: null, isLoading: true, success: {}, errors: {} },
  action
) => {
  switch (action.type) {
    case "START_FETCHING":
      return { ...state, isLoading: true };
    case "STOP_FETCHING":
      return { ...state, isLoading: false };
    case "AUTH":
      localStorage.setItem("profile", JSON.stringify({ ...action?.data }));

      return { ...state, authData: action.data, loading: false, errors: null };

    case "RESET_SUCCESS":
      return { ...state, success: action.payload };
    case "RESET_ERROR":
      return { ...state, errors: action.payload };

    case "LOGOUT":
      localStorage.removeItem("profile");

      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};

export default authReducer;
