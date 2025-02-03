import { api } from "../api/baseApi";

const notificationApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getNotification: builder.query({
      query: (data) => ({
        url: `/users/notifications-by-user`,
        method: "GET",
        body: data,
      }),
      providesTags: ["notification"],
    }),
    getAllNotifications: builder.query({
      query: (data) => ({
        url: `/users/all-notifications`,
        method: "GET",
        body: data,
      }),
      providesTags: ["notification"],
    }),
  }),
});

export const { useGetAllNotificationsQuery, useGetNotificationQuery } =
  notificationApi;
