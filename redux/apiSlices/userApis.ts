import { api } from "../api/baseApi";

const userApis = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: (token) => ({
        url: `/users/profile`,
      }),
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
      invalidatesTags: ["user"],
    }),
    singUpAsAffiliate: builder.mutation({
      query: (data) => ({
        url: `/users/auth/signup-as-affiliate`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    singUpAsGoogle: builder.mutation({
      query: (data) => ({
        url: `/auth/google-signup`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: `/users/auth/create-admin`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    verifyEmail: builder.mutation({
      query: (data) => ({
        url: `/users/auth/verify-email`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: `/users/auth/forgot-password`,
        method: "POST",
        body: { email },
      }),
      invalidatesTags: ["user"],
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/users/auth/reset-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
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
} = userApis;
