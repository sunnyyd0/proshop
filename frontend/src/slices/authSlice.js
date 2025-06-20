import { createSlice } from "@reduxjs/toolkit";
let userInfoFromStorage = null;

try {
  const stored = localStorage.getItem("userInfo");

  if (stored && stored !== "undefined") {
    userInfoFromStorage = JSON.parse(stored);
  }
} catch (error) {
  console.error("Invalid userInfo in localStorage:", error);
}
const initialState = {
  userInfo: userInfoFromStorage,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
