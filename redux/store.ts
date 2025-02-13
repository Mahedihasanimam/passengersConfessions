import { api } from "./api/baseApi";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./apiSlices/userSlices";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
