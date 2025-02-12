import { api } from "../api/baseApi";
import { setUser } from "./userSlices";

const userApis = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (token) => ({
        url: `/users/profile`,
      }),
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // console.log(data?.data);
          // Dispatch an action to update the user slice
          dispatch(setUser(data?.data));
        } catch (error) {
          console.error("Error updating user slice:", error);
        }
      },
      providesTags: ["user"],
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/get-one-user/${id}`,
      }),
      providesTags: ["user"],
    }),

    allUser: builder.query({
      query: ({ page, limit, search }) => ({
        url: `/users`,
      }),
      providesTags: ["user"],
    }),

    updateUserProfile: builder.mutation({
      query: (data) => ({
        url: `/users/update-profile-by-user`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    updateUserProfileById: builder.mutation({
      query: ({ data, id }) => ({
        url: `/users/get-one-user/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    singUpUser: builder.mutation({
      query: (data) => ({
        url: `/users/auth/signup`,
        method: "POST",
        body: data,
      }),
    }),
    singUpAsAffiliate: builder.mutation({
      query: (data) => ({
        url: `/users/auth/signup-as-affiliate`,
        method: "POST",
        body: data,
      }),
    }),
    singUpAsGoogle: builder.mutation({
      query: (data) => ({
        url: `/auth/google-signup`,
        method: "POST",
        body: data,
      }),
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `/users/auth/create-admin`,
        method: "POST",
        body: data,
      }),
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/users/auth/verify-email`,
        method: "POST",
        body: data,
      }),
    }),
    sendOtpAgain: builder.mutation({
      query: (data) => ({
        url: `/users/auth/send-otp-again`,
        method: "POST",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `/users/auth/forgot-password`,
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/users/auth/reset-password`,
        method: "POST",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/users/auth/change-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    approveAffiliate: builder.mutation({
      query: (data) => ({
        url: `/users/auth/approve-affiliate`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    cancelAffiliate: builder.mutation({
      query: (data) => ({
        url: `/users/auth/cancel-affiliate`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `/users/auth/login`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    connectToStrip: builder.mutation({
      query: (data) => ({
        url: `/users/auth/connect-stripe-account`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAllUserQuery,
  useApproveAffiliateMutation,
  useCancelAffiliateMutation,
  useChangePasswordMutation,
  useCreateAdminMutation,
  useForgotPasswordMutation,
  useGetUserByIdQuery,
  useGetUserProfileQuery,
  useLoginMutation,
  useResetPasswordMutation,
  useSingUpAsAffiliateMutation,
  useSingUpAsGoogleMutation,
  useSingUpUserMutation,
  useUpdateUserProfileByIdMutation,
  useUpdateUserProfileMutation,
  useVerifyEmailMutation,
  useSendOtpAgainMutation,
  useConnectToStripMutation,
} = userApis;
