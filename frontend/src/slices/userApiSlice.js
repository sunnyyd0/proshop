import { apiSlice } from "./apiSlices";
import { USER_URL } from "../contstants.js";

const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (user) => ({
        url: `${USER_URL}/auth`,
        method: "POST",
        body: user,
      }),
    }),
    register: builder.mutation({
      query: (user) => ({
        url: `${USER_URL}`,
        method: "POST",
        body: user,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${USER_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});
export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
  userApiSlice;
