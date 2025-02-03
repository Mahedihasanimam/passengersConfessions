import { api } from "../api/baseApi";

const reviewRatingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: (token) => ({
        url: `/review/all-reviews`,
      }),
      providesTags: ["review"],
    }),
    getReviewById: builder.query({
      query: (id) => ({
        url: `/review/get-one-review/${id}`,
      }),
      providesTags: ["review"],
    }),

    getReviewByUser: builder.query({
      query: ({ page, limit, search }) => ({
        url: `/review/review-by-user`,
      }),
      providesTags: ["review"],
    }),
    addNewReview: builder.mutation({
      query: (data) => ({
        url: `/review/add-review`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    reviewUpdate: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/update-review/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["review"],
    }),
    deleteReview: builder.mutation({
      query: ({ data, id }) => ({
        url: `/review/update-review/${id}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddNewReviewMutation,
  useDeleteReviewMutation,
  useGetAllReviewsQuery,
  useGetReviewByIdQuery,
  useGetReviewByUserQuery,
  useReviewUpdateMutation,
} = reviewRatingApi;
