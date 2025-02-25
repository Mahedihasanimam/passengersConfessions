import { api } from "../api/baseApi";

const subscriptionApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateSubscription: builder.mutation({
      query: ({ data, id }) => ({
        url: `/subscription/update-subscription-by-id/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["subscription"],
    }),
    deleteSubscription: builder.mutation({
      query: (id) => ({
        url: `/subscription/delete-subscription-by-id/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["subscription"],
    }),
    deleteSubscriptionPlan: builder.mutation({
      query: (id) => ({
        url: `/subscription/delete-subscription-plan-by-id/${id}`,
        method: "PUT",
      }),
      invalidatesTags: ["subscription"],
    }),
    getAllSubscriptions: builder.query({
      query: (id) => ({
        url: `/subscription/get-all-subscriptions`,
      }),
      providesTags: ["subscription"],
    }),
    getAllSubscriptionsPlans: builder.query({
      query: (id) => ({
        url: `/subscription/get-all-subscription-plans`,
      }),
      providesTags: ["subscription"],
    }),
    getSubscriptionsById: builder.query({
      query: (id) => ({
        url: `/subscription/get-subscription-by-id/${id}`,
      }),
      providesTags: ["subscription"],
    }),
    getSubscriptionsByUserId: builder.query({
      query: (id) => ({
        url: `/subscription/get-subscription-by-id/${id}`,
      }),
      providesTags: ["subscription"],
    }),
    getSubscriptionTimeLeft: builder.query({
      query: (id) => ({
        url: `/subscription/get-subscription-time-left-of-a-user`,
      }),
      providesTags: ["subscription"],
    }),
    getAllUserSubscriptionTimeLeft: builder.query({
      query: (id) => ({
        url: `/subscription/get-subscription-time-left-of-all-users`,
      }),
      providesTags: ["subscription"],
    }),
    createSubscription: builder.mutation({
      query: (data) => ({
        url: `/subscription/create-subscription`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["subscription"],
    }),
  }),
});

export const {
  useCreateSubscriptionMutation,
  useDeleteSubscriptionMutation,
  useGetAllSubscriptionsQuery,
  useGetSubscriptionsByIdQuery,
  useGetSubscriptionsByUserIdQuery,
  useUpdateSubscriptionMutation,
  useGetAllSubscriptionsPlansQuery,
  useDeleteSubscriptionPlanMutation,
  useGetAllUserSubscriptionTimeLeftQuery,
  useGetSubscriptionTimeLeftQuery,
} = subscriptionApi;
