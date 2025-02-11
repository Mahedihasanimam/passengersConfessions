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
    getAllSubscriptions: builder.query({
      query: (id) => ({
        url: `/subscription/get-all-subscriptions`,
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
} = subscriptionApi;
