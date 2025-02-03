import "tailwindcss/tailwind.css";

import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../redux/api/baseApi";
import { useGetAllBooksQuery } from "../../../redux/apiSlices/bookApiSlice";
import bookimage from "../../assets/booksimage.png";

const booksData = [
  {
    id: 1,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 2,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 3,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 4,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 5,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 6,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 7,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 8,
    title: "Book Name",
    author: "Author name",
    image: bookimage,
  },
  // Add more book objects as needed
];

const BooksCollections = () => {
  const { data: book } = useGetAllBooksQuery({});
  // console.log(book?.data?.result);
  return (
    <div className="container mx-auto px-4 pb-[80px]">
      <div className="pb-6">
        <h1 className="text-2xl font-bold  mt-8 text-secondary pb-2 ">
          Books Collections
        </h1>
        <p className=" mt-2 mb-8 text-tertiary font-normal">
          Here you can explore all types of books in various languages. Explore
          our full library of provocative, bold, and steamy stories. Each book
          invites you to dive deeper into a world where passion knows no
          boundaries.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {book?.data?.result?.map((book) => (
          <div
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
            <div className="mt-2 ">
              <Link to={`/booksDetails/${book._id}`}>
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
                  Subscribe
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-20">
        <Button
          type="primary"
          style={{
            backgroundColor: "transparent",
            color: "#FF0048",
            height: "35px",
            fontSize: "16px",
            fontWeight: "bold",
            border: "1px solid #FF0048",
          }}
          className="w-1/2 border-none text-white px-6 py-2 rounded-lg"
        >
          Load more
        </Button>
      </div>
    </div>
  );
};

export default BooksCollections;
