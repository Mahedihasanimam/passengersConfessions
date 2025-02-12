import { api } from "../api/baseApi";

const commentForumsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllCommentByPostId: builder.query({
      query: ({ id, limit, page }) => ({
        url: `/forum/get-all-comments-of-a-forum/${id}?page=${page}&limit=${limit}`,
      }),
      providesTags: ["comment"],
    }),

    AddPostComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `/forum/add-comment-to-forum/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const { useAddPostCommentMutation, useGetAllCommentByPostIdQuery } =
  commentForumsApi;
