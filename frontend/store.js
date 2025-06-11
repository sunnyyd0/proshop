import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./src/slices/apiSlices";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
// This is a placeholder for the store configuration.
