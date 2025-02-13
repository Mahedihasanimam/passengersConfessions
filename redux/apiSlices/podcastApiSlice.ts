import { api } from "../api/baseApi";

const podCastApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllPodCast: builder.query({
      query: (token) => ({
        url: `/podcasts/get-all-podcasts`,
      }),
      providesTags: ["podCast"],
    }),
    getPodCastById: builder.query({
      query: (id) => ({
        url: `/podcasts/get-podcast-by-id/${id}`,
      }),
      providesTags: ["podCast"],
    }),
    addPodCast: builder.mutation({
      query: (data) => ({
        url: `/podcasts/add-podcast`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["podCast"],
    }),
    updatePodCast: builder.mutation({
      query: ({ data, id }) => ({
        url: `/podcasts/update-podcast-by-id/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["podCast"],
    }),
    deletePodCast: builder.mutation({
      query: (id) => ({
        url: `/podcasts/delete-podcast-by-id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["podCast"],
    }),
  }),
});

export const {
  useAddPodCastMutation,
  useDeletePodCastMutation,
  useGetAllPodCastQuery,
  useGetPodCastByIdQuery,
  useUpdatePodCastMutation,
} = podCastApi;
