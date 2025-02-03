import { api } from "../api/baseApi";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: (token) => ({
        url: `/books/get-all-books`,
      }),
      providesTags: ["book"],
    }),
    getBookById: builder.query({
      query: (id) => ({
        url: `/books/get-book-by-id/${id}`,
      }),
      providesTags: ["book"],
    }),
    addBook: builder.mutation({
      query: (data) => ({
        url: `/books/add-book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ data, id }) => ({
        url: `/books/update-book-by-id/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/delete-book-by-id/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useAddBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
  useGetBookByIdQuery,
  useUpdateBookMutation,
} = bookApi;
