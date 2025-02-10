import { api } from "../api/baseApi";

const commentRatingApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodcastComment: builder.query({
      query: (token) => ({
        url: `/comment/get-all-podcast-comments`,
      }),
      providesTags: ["comment"],
    }),

    getCommentByPodcastId: builder.query({
      query: (id) => ({
        url: `/comment/get-all-podcast-comments-by-podcast-id/${id}`,
      }),
      providesTags: ["comment"],
    }),

    addCommentToPodcast: builder.mutation({
      query: (data) => ({
        url: `/comment/add-comment-to-podcast`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    podcastCommentUpdate: builder.mutation({
      query: ({ data, id }) => ({
        url: `/comment/update-comment/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),
    podcastDeleteComment: builder.mutation({
      query: ({ data, id }) => ({
        url: `/comment/delete-podcast-comment/${id}`,
        method: "DELETE",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddCommentToPodcastMutation,
  useGetAllPodcastCommentQuery,
  useGetCommentByPodcastIdQuery,
  usePodcastCommentUpdateMutation,
  usePodcastDeleteCommentMutation,
} = commentRatingApi;
