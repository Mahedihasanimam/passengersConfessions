import "tailwindcss/tailwind.css";

import React, { useState } from "react";

import { Button } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useLazyGetAllConfessionsQuery } from "../../../redux/apiSlices/confessionApiSlice";
import confession from "../../assets/confession.webp";
import { AddConfessionModal } from "../../components/common/AddConfessionModal";
import GLoading from "../../components/GLoading";

const Confessions = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [page, setPage] = useState(1);
  const [allData, setAllData] = useState([]);

  const [getData, { isLoading, isFetching }] = useLazyGetAllConfessionsQuery({
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
  return (
    <div className="container mx-auto px-4 pt-6 pb-[80px]">
      <div className="pb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold  mt-8 text-secondary pb-2 ">
            Confessions
          </h1>
          {user?._id && (
            <Button
              onClick={() => {
                setVisibleModal(true);
                // navigate("/addConfession")
              }}
              type="primary"
              style={{
                backgroundColor: "#FF0048",
                color: "white",
                height: "35px",
                fontSize: "16px",
                fontWeight: "bold",
              }}
              className="w-fit border-none text-white px-6 py-2 rounded-full"
            >
              Add yours
            </Button>
          )}
        </div>
        <p className=" mt-2 mb-8 text-tertiary font-normal">
          Confession typically refers to the act of admitting or revealing
          something personal, often related to a wrongdoing, secret, or hidden
          truth. It can occur in various contexts, such as in religious
          practices, interpersonal relationships, or even in legal situations.
        </p>
      </div>
      {isLoading ? (
        <GLoading />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {allData?.map((book) => (
              <div
                key={book.id}
                className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
              >
                <div className="relative">
                  <img
                    src={confession}
                    alt={book.title}
                    className="w-full h-56 object-cover rounded-md mb-4"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center rounded-md">
                    {/* <button className="text-white text-4xl" aria-label="Play Video">
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
                </button> */}
                  </div>
                </div>
                <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">
                  {book.title}
                </h2>
                <p className="text-tertiary">{book.author}</p>

                <Link to={`/confessionDetails/${book._id}`}>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "#FF0048",
                      color: "white",
                      height: "35px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    className="w-full mt-2 border-none text-white px-6 py-2 rounded-lg"
                  >
                    <span className="pt-1">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5.63989V19.6399L19 12.6399L8 5.63989Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    play
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </>
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

      <AddConfessionModal
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
      />
    </div>
  );
};

export default Confessions;
