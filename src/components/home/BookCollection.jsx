import "tailwindcss/tailwind.css";

import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../redux/api/baseApi";
import { useGetAllBooksQuery } from "../../../redux/apiSlices/bookApiSlice";

const BookCollection = () => {
  const { data: book } = useGetAllBooksQuery({});
  // console.log(book?.data?.result);
  return (
    <div className="container mx-auto px-4 py-[80px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center mt-8 text-secondary pb-2 ">
          Books Collections
        </h1>
        <p className="text-center mt-2 mb-8 text-tertiary">
          Here you can explore all types of books in various languages. Explore
          our full library of provocative, bold, and steamy stories. Each book
          invites you to dive deeper into a world where passion knows no
          boundaries.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {book?.data?.result?.map((book) => (
          <Link
            to={`/booksDetails/${book?._id}`}
            key={book.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
          >
            <img
              src={imageUrl + book.bookCoverImage}
              alt={book.bookName}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold text-secondary max-w-[250px]">
              {book.bookName}
            </h2>
            <p className="text-tertiary">{book.authorName}</p>
          </Link>
        ))}
      </div>
      <div className="w-1/2 mx-auto mt-20 ">
        <Link className="w-full  mx-auto" to="/allBooksCollections">
          <Button
            type="primary"
            style={{
              backgroundColor: "#FF0048",
              color: "white",
              height: "35px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            className="w-full border-none text-white px-6 py-2 rounded-lg"
          >
            Browse more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default BookCollection;
