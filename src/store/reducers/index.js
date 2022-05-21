import { combineReducers } from "redux";

import posts from "./posts";
import authReducer from "./auth";
import notificationReducer from "./notificationReducer";

export const reducers = combineReducers({ posts });

const appReducer = combineReducers({
  posts,
  auth: authReducer,
  notification: notificationReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") return appReducer(undefined, action);
  return appReducer(state, action);
};
export default rootReducer;
