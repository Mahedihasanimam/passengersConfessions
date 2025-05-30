import "tailwindcss/tailwind.css";

import React, { useState } from "react";

import { Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imageUrl } from "../../../redux/api/baseApi";
import { useLazyGetAllBooksQuery } from "../../../redux/apiSlices/bookApiSlice";
import GLoading from "../GLoading";

const BooksCollections = () => {
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const [getData, { isLoading, isFetching }] = useLazyGetAllBooksQuery({
    limit: 8,
    page,
  });

  const user = useSelector((state) => state.user.user);

  // Append new confessions when data is fetched
  React.useEffect(() => {
    getData({
      limit: 8,
      page: 1,
    }).then((res) => {
      setAllData(res.data?.data?.result);
    });
  }, [getData]);

  const handleLoadMore = () => {
    if (!isFetching && !isLoading && allData?.length) {
      setPage((prevPage) => prevPage + 1);
      getData({ limit: 8, page: page + 1 }).then((res) => {
        setAllData((pre) => [...pre, ...res.data.data.result]);
      });
    }
  };
  // console.log(book?.data?.result);
  return (
    <div className="container mx-auto px-4 pb-[80px]">
      <div className="pb-6">
        <h1 className="text-2xl font-bold  mt-8 text-secondary pb-2 ">
          Books Collections
        </h1>
        <p className=" mt-2 mb-8 text-tertiary font-normal">
          Here you can explore my book in various languages. My book invites you
          to dive deeper into a world where passion knows no boundaries.
        </p>
      </div>
      {isLoading ? (
        <GLoading />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {allData?.map((book) => (
            <div
              key={book.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
            >
              <img
                src={imageUrl + book.bookCoverImage}
                alt={book.bookName}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              {book?.languages?.map((language) => {
                if (language === "english") {
                  return (
                    <div
                      key={language}
                      className="flex items-center gap-2 pb-2"
                    >
                      <img
                        src={"/public/english.svg"} // Replace with actual image
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-gray-500 ">English</span>
                    </div>
                  );
                }
                if (language === "simplified_chinese") {
                  return (
                    <div
                      key={language}
                      className="flex items-center gap-2 pb-2"
                    >
                      <img
                        src={"/public/chinaa.svg"} // Replace with actual image
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-gray-500 ">
                        SIMPLIFIED CHINESE
                      </span>
                    </div>
                  );
                }
                if (language === "traditional_chinese") {
                  return (
                    <div
                      key={language}
                      className="flex items-center gap-2 pb-2"
                    >
                      <img
                        src={"/public/chinaa.svg"} // Replace with actual image
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-gray-500 ">
                        TRADITIONAL CHINESE
                      </span>
                    </div>
                  );
                }
                if (language === "spanish") {
                  return (
                    <div
                      key={language}
                      className="flex items-center gap-2 pb-2"
                    >
                      <img
                        src={"/public/spania.svg"} // Replace with actual image
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-gray-500 ">Spanish</span>
                    </div>
                  );
                }
                if (language === "french") {
                  return (
                    <div
                      key={language}
                      className="flex items-center gap-2 pb-2"
                    >
                      <img
                        src={"/public/france.svg"} // Replace with actual image
                        className="w-4 h-4"
                      />
                      <span className="text-xs text-gray-500 ">France</span>
                    </div>
                  );
                }
              })}
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
                    {user?.isBasicSubscribed || user?.isPremiumSubscribed
                      ? "Read Now"
                      : "Subscribe to read"}
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="flex justify-center mt-20">
        <Button
          onClick={handleLoadMore}
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
          {isFetching ? "Loading..." : "Load more"}
        </Button>
      </div>
    </div>
  );
};

export default BooksCollections;
