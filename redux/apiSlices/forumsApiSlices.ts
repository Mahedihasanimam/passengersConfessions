import { api } from "../api/baseApi";

const forumsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllForums: builder.query({
      query: ({ limit, page, search }) => ({
        url: `/forum/get-all-posts?limit=${limit}&page=${page}`,
      }),
      providesTags: ["forum"],
    }),
    getForumById: builder.query({
      query: (id) => ({
        url: `/forum/get-post-by-id/${id}`,
      }),
      providesTags: ["forum"],
    }),
    getForumUserById: builder.query({
      query: ({ id, limit, page, search }) => ({
        url: `/forum/get-post-by-user-id/${id}?limit=${limit}&page=${page}`,
      }),
      providesTags: ["forum"],
    }),
    addForum: builder.mutation({
      query: (data) => ({
        url: `/forum/add-post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["forum"],
    }),
    updateForum: builder.mutation({
      query: ({ data, id }) => ({
        url: `/forum/update-post-by-id/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["forum"],
    }),
    deleteForum: builder.mutation({
      query: (id) => ({
        url: `/forum/delete-post-by-id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["forum"],
    }),
  }),
});

export const {
  useAddForumMutation,
  useDeleteForumMutation,
  useGetAllForumsQuery,
  useGetForumByIdQuery,
  useGetForumUserByIdQuery,
  useUpdateForumMutation,
} = forumsApi;
