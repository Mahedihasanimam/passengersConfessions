import { api } from "../api/baseApi";

const commentRatingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllConfessionComment: builder.query({
      query: (token) => ({
        url: `/comment/get-all-confession-comments`,
      }),
      providesTags: ["comment"],
    }),

    getCommentByConfessionId: builder.query({
      query: (id) => ({
        url: `/comment/get-all-confession-comments-by-confession-id/${id}`,
      }),
      providesTags: ["comment"],
    }),

    addCommentToConfession: builder.mutation({
      query: (data) => ({
        url: `/comment/add-comment-to-confession`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    confessionCommentUpdate: builder.mutation({
      query: ({ data, id }) => ({
        url: `/comment/update-comment/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    confessionDeleteComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `/comment/delete-confession-comment/${id}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddCommentToConfessionMutation,
  useConfessionCommentUpdateMutation,
  useConfessionDeleteCommentMutation,
  useGetAllConfessionCommentQuery,
  useGetCommentByConfessionIdQuery,
} = commentRatingApi;
