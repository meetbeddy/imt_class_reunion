import { combineReducers } from "redux";

import posts from "./posts";
import authReducer from "./auth";

export const reducers = combineReducers({ posts });

const appReducer = combineReducers({
  posts,
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
export default rootReducer;
