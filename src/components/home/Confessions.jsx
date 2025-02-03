import "tailwindcss/tailwind.css";

import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import bookimage from "../../assets/confession.png";
const booksData = [
  {
    id: 1,
    title: "The Truth I’ve Been Hiding",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 2,
    title: "The Truth I’ve Been Hiding",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 3,
    title: "The Truth I’ve Been Hiding",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 4,
    title: "The Truth I’ve Been Hiding",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 5,
    title: "The Truth I’ve Been Hiding",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 6,
    title: "What I’ve Never Told Anyone",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 7,
    title: "What I’ve Never Told Anyone",
    author: "Author name",
    image: bookimage,
  },
  {
    id: 8,
    title: "What I’ve Never Told Anyone",
    author: "Author name",
    image: bookimage,
  },
  // Add more book objects as needed
];

const Confessions = () => {
  return (
    <div className="container mx-auto px-4 pb-[80px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center mt-8 text-secondary pb-2 ">
          Confessions
        </h1>
        <p className="text-center mt-2 mb-8 text-tertiary">
          Confession typically refers to the act of admitting or revealing
          something personal, often related to a wrongdoing, secret, or hidden
          truth. It can occur in various contexts, such as in religious
          practices, interpersonal relationships, or even in legal situations.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <div
            key={book.id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740] "
          >
            <div className="relative">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-56 object-cover rounded-md mb-4"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-md">
                <button className="text-white text-4xl" aria-label="Play Video">
                  <svg
                    width="36"
                    height="46"
                    viewBox="0 0 36 46"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.875 39.73C16.235 39.73 17.3842 39.2608 18.3225 38.3225C19.2608 37.3825 19.73 36.2333 19.73 34.875V24.925H26.5575V21.075H17.8075V31.2925C17.4142 30.8642 16.9725 30.545 16.4825 30.335C15.9942 30.125 15.4583 30.02 14.875 30.02C13.5167 30.02 12.3675 30.4892 11.4275 31.4275C10.4892 32.3675 10.02 33.5167 10.02 34.875C10.02 36.2333 10.4892 37.3825 11.4275 38.3225C12.3675 39.2608 13.5167 39.73 14.875 39.73ZM4.54 45.5C3.38833 45.5 2.4275 45.115 1.6575 44.345C0.8875 43.575 0.501667 42.6142 0.5 41.4625V4.5375C0.5 3.3875 0.885833 2.4275 1.6575 1.6575C2.42917 0.8875 3.39 0.501667 4.54 0.5H24.25L35.5 11.75V41.4625C35.5 42.6125 35.115 43.5733 34.345 44.345C33.575 45.1167 32.6133 45.5017 31.46 45.5H4.54ZM23 13H33L23 3V13Z"
                      fill="#B0B0B0"
                      fill-opacity="0.8"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">
              {book.title}
            </h2>
            <p className="text-tertiary">{book.author}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 mx-auto mt-20 ">
        <Link className="w-full  mx-auto" to="/Confession">
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

export default Confessions;
