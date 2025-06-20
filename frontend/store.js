import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./src/slices/apiSlices";
import cartSliceReducer from "./src/slices/cartSlice";
import userSliceRducer from "./src/slices/authSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartSliceReducer,
    auth: userSliceRducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
export default store;
// This is a placeholder for the store configuration.
