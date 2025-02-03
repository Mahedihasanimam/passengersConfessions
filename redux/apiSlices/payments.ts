import { api } from "../api/baseApi";

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    PaymentIntent: builder.mutation({
      query: (data) => ({
        url: `/payment/create-payment-intent`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["payment"],
    }),
    getPaymentById: builder.mutation({
      query: (id) => ({
        url: `/payment/get-payment-intent`,
        method: "POST",
        body: { paymentId: id },
      }),
    }),
    getAllIntent: builder.query({
      query: (data) => ({
        url: `/payment/get-all-payment-intents`,
      }),
      // providesTags: ["payment"],
    }),
  }),
});

export const {
  useGetAllIntentQuery,
  useGetPaymentByIdMutation,
  usePaymentIntentMutation,
} = paymentApi;
