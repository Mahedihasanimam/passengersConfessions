import React, { useEffect, useState } from "react";

import { Button } from "antd";
import { useSelector } from "react-redux";
import { useGetForumUserByIdQuery } from "../../../redux/apiSlices/forumsApiSlices";
import { AddForumModal } from "../common/AddForumModal";
import ViewForumModal from "../common/ViewForumModal";
import MyForumCard from "./components/MyForumCard";

// Simulating fetching data from a JSON file

const MyForumList = () => {
  const user = useSelector((state) => state.user.user);
  const [visibleModal, setVisibleModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [forums, setForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: fetchedData, isFetching } = useGetForumUserByIdQuery({
    id: user?._id,
    limit: 10,
    page: currentPage,
  });

  useEffect(() => {
    if (fetchedData) {
      setForums(fetchedData.data.result);
    }
  }, [fetchedData]);

  const handleViewPost = (post) => {
    setViewModalData(post);
    setViewModal(true);
  };
  return (
    <div className="container mx-auto p-6 border border-[#E7E7E7s] rounded-lg mb-[80px]">
      <div className="flex mb-6 justify-between items-center">
        <div>
          <h1 className="text-xl font-semibold mb-2">My posts</h1>
          <p className="text-gray-600 mb-4">
            Here you can see all of your status.
          </p>
        </div>
        <Button
          onClick={() => setVisibleModal(true)}
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
      </div>

      <div className="flex flex-col gap-4">
        {forums.map((post) => (
          <MyForumCard
            post={post}
            key={post?._id}
            handleViewPost={handleViewPost}
          />
        ))}
        {isFetching && <p>Loading...</p>}
      </div>
      {/* <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={10}
          total={fetchedData?.data?.count || 0}
          onChange={handlePageChange}
        />
      </div> */}
      <AddForumModal
        visible={visibleModal}
        onCancel={() => setVisibleModal(false)}
      />
      <ViewForumModal
        post={viewModalData}
        visible={viewModal}
        onCancel={() => setViewModal(false)}
      />
    </div>
  );
};

export default MyForumList;
