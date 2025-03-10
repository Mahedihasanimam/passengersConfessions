import { api } from "../api/baseApi";

const storiesApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllStories: builder.query({
      query: ({ limit, page, status }) => ({
        url: `/stories/get-all-stories?limit=${limit}&page=${page}&status=${status}`,
      }),
      providesTags: ["stories"],
    }),
    getStoryById: builder.query({
      query: (id) => ({
        url: `/stories/get-story-by-id/${id}`,
      }),
      providesTags: ["stories"],
    }),

    addStories: builder.mutation({
      query: (data) => ({
        url: `/stories/add-story`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["stories"],
    }),
    updateStories: builder.mutation({
      query: ({ data, id }) => ({
        url: `/stories/update-story-by-id/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["stories"],
    }),
    deleteStories: builder.mutation({
      query: (id) => ({
        url: `/stories/delete-story-by-id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["stories"],
    }),
  }),
});

export const {
  useAddStoriesMutation,
  useDeleteStoriesMutation,
  useUpdateStoriesMutation,
  useGetAllStoriesQuery,
  useGetStoryByIdQuery,
  useLazyGetAllStoriesQuery,
  useLazyGetStoryByIdQuery,
} = storiesApi;
