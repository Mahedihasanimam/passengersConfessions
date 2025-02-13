import { api } from "../api/baseApi";

const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    //=================== terms nad conditions ================
    getTermsAndCondition: builder.query({
      query: (data) => ({
        url: `/terms-of-service/get-terms-of-service`,
      }),
      providesTags: ["terms"],
    }),
    createTermsAndCondition: builder.mutation({
      query: (data) => ({
        url: `/terms-of-service/add-terms-of-service`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["terms"],
    }),
    //====================== faq apis =========================
    getAllFAQs: builder.query({
      query: () => ({
        url: `/faq/get-all-faqs`,
      }),
      providesTags: ["faq"],
    }),
    addNewFAQ: builder.mutation({
      query: (data) => ({
        url: `/faq/add-faq`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faq"],
    }),
    updateFAQ: builder.mutation({
      query: ({ data, id }) => ({
        url: `/faq/update-faq`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["faq"],
    }),
    deleteFAQ: builder.mutation({
      query: (id) => ({
        url: `/faq/delete-faq/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["faq"],
    }),
  }),
});

export const {
  useAddNewFAQMutation,
  useCreateTermsAndConditionMutation,
  useDeleteFAQMutation,
  useGetAllFAQsQuery,
  useGetTermsAndConditionQuery,
  useUpdateFAQMutation,
} = paymentApi;
