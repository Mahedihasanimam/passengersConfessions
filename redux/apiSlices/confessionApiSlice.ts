import { api } from "../api/baseApi";

const confessionsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllConfessions: builder.query({
      query: ({ limit, page, status }) => ({
        url: `/confessions/get-all-confessions?limit=${limit}&page=${page}&status=${status}`,
      }),
      providesTags: ["confession"],
    }),
    getAllStories: builder.query({
      query: ({ limit, page, status }) => ({
        url: `/stories/get-all-stories?limit=${limit}&page=${page}&status=${status}`,
      }),
      providesTags: ["confession"],
    }),
    getStoryById: builder.query({
      query: (id) => ({
        url: `/stories/get-story-by-id/${id}`,
      }),
      providesTags: ["confession"],
    }),
    getConfessionById: builder.query({
      query: (id) => ({
        url: `/confessions/get-confession-by-id/${id}`,
      }),
      providesTags: ["confession"],
    }),
    addConfession: builder.mutation({
      query: (data) => ({
        url: `/confessions/add-confession`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["confession"],
    }),
    updateConfession: builder.mutation({
      query: ({ data, id }) => ({
        url: `/confessions/update-confession-by-id/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["confession"],
    }),
    deleteConfession: builder.mutation({
      query: (id) => ({
        url: `/confessions/delete-confession-by-id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["confession"],
    }),
  }),
});

export const {
  useAddConfessionMutation,
  useDeleteConfessionMutation,
  useGetAllConfessionsQuery,
  useLazyGetAllConfessionsQuery,
  useGetConfessionByIdQuery,
  useUpdateConfessionMutation,
} = confessionsApi;
