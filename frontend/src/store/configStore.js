import { configureStore } from "@reduxjs/toolkit";

import userInfoReducer from "./userInfoStore";

const configStore = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export default configStore;