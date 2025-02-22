import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import Swal from "sweetalert2";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
  // timeout: 10000,
  prepareHeaders: async (headers, { getState }) => {
    // const token = localStorage.getItem("token");
    const token = localStorage.getItem("token");
    // console.log(token);
    if (token) {
      // console.log(token);
      headers.set("authorization", `Bearer ${token}`);
      // headers.getSetCookie()
    }
    return headers;
  },
});

const baseQueryWithRath: typeof baseQuery = async (args, api, extraOptions) => {
  // const socket = getSocket();
  // if (!socket){
  //   initiateSocket();
  // }

  let result = await baseQuery(args, api, extraOptions);
  // console.log(result);

  if (result?.error?.status) {
    if (result?.error?.status === 403) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Session Expired. Please Login Again",
        confirmButtonText: "Ok",
      });
    }
    // localStorage?.removeItem("token");
  }

  if (result?.error?.status === 401) {
    // Handle token refresh logic here if needed
    // For now, we'll log out the user
    // removeStorageRole();
    // Swal.fire({
    //   icon: "error",
    //   title: "Oops...",
    //   text: "Session Expired. Please Login Again",
    //   confirmButtonText: "Ok",
    // });
    localStorage?.removeItem("token");
  }

  return result;
};

export const api = createApi({
  reducerPath: "api",
  // keepUnusedDataFor: 0,
  baseQuery: baseQueryWithRath,

  endpoints: () => ({}),
  tagTypes: [
    "user",
    "book",
    "podCast",
    "confession",
    "payment",
    "review",
    "terms",
    "faq",
    "notification",
    "forum",
    "comment",
    "subscription",
    "about",
  ],
});

export const imageUrl = import.meta.env.VITE_BACKEND_URL;
