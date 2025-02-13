import { Button, Pagination } from "antd";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/baseApi";
import { useGetAllForumsQuery } from "../../../redux/apiSlices/forumsApiSlices";
import { AddForumModal } from "../../components/common/AddForumModal";
import ViewForumModal from "../../components/common/ViewForumModal";

const ForumPage = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [forums, setForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: fetchedData, isFetching } = useGetAllForumsQuery({
    limit: 10,
    page: currentPage,
  });

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    if (fetchedData) {
      setForums(fetchedData.data.result);
    }
  }, [fetchedData]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-6 border border-[#E7E7E7] rounded-lg mb-[80px]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold mb-2">People Forum</h1>
          <p className="text-gray-600 mb-4">
            People can share their thoughts by using this public forum.
          </p>
        </div>
        <div>
          {user?._id && (
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
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {forums.map((post) => (
          <div
            key={post?._id}
            className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between bg-white shadow-sm relative"
          >
            <div className="flex">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                {/* Placeholder for the profile image */}
                <img
                  src={imageUrl + post?.user?.image} // Replace with actual image URL or asset path
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h2 className="font-semibold text-secondary">
                  {post?.user?.name}
                </h2>
                <p className="text-tertiary">{post?.post}</p>
              </div>
            </div>
            {/* {post?.audioPost && (
              <div className="w-full mt-3 ">
                <AudioPlayer
                  className="w-full bg-primary custom-audio-player"
                  src={imageUrl + post?.audioPost}
                  onPlay={(e) => console.log("onPlay")}
                />
              </div>
            )} */}

            <div
              onClick={() => {
                setViewModalData(post);
                setViewModal(true);
              }}
              className="absolute top-3 right-3 z-50 cursor-pointer "
            >
              <p
                className="text-white font-semibold  bg-red-500 px-2 py-1 rounded-md
              "
              >
                View
              </p>
            </div>
            {/* <p>comment {console.log(post?.forumComments)}</p> */}
          </div>
        ))}
        {isFetching && <p>Loading...</p>}
      </div>
      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={10}
          total={fetchedData?.data?.count || 0}
          onChange={handlePageChange}
        />
      </div>
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

export default ForumPage;
