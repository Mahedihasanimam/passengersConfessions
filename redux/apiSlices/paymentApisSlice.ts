import { api } from "../api/baseApi";

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllIntent: builder.query({
      query: ({ data, id }) => ({
        url: `/payment/get-all-payment-intents`,
      }),
    }),
    getAllTransactionsStatistics: builder.query({
      query: ({ monthly }) => ({
        url: `/payment/get-all-transactions?filter=monthly=${monthly}`,
      }),
    }),
    getAllTransactionsById: builder.query({
      query: (id) => ({
        url: `/payment/get-all-transactions-by-affiliate/${id}`,
      }),
    }),

    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: `/payment/create-payment-intent`,
        method: "POST",
        body: data,
      }),
    }),
    getAffiliateByCode: builder.query({
      query: (id) => ({
        url: `/payment/get-affiliate-by-code/${id}`,
      }),
    }),

    confirmPayment: builder.mutation({
      query: (data) => ({
        url: `/payment/confirm-payment`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useConfirmPaymentMutation,
  useGetAffiliateByCodeQuery,
  useLazyGetAffiliateByCodeQuery,
  useCreatePaymentIntentMutation,
  useGetAllIntentQuery,
  useGetAllTransactionsByIdQuery,
  useGetAllTransactionsStatisticsQuery,
} = paymentApi;
