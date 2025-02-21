import { Button, Dropdown, Menu, Pagination, message } from "antd";
import React, { useEffect, useState } from "react";
import {
  useDeleteForumMutation,
  useGetForumUserByIdQuery,
} from "../../../redux/apiSlices/forumsApiSlices";

import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";
import { AddForumModal } from "../common/AddForumModal";
import ViewForumModal from "../common/ViewForumModal";

const MyForumList = () => {
  const user = useSelector((state) => state.user.user);
  const [visibleModal, setVisibleModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [viewModalData, setViewModalData] = useState(null);
  const [forums, setForums] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [editPost, setEditPost] = useState(null); // Track post being edited

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

  const [deletedForum] = useDeleteForumMutation();

  const handleDeleted = async (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const res = await deletedForum(id).unwrap();
          if (res.success) {
            message.success(res.message);
          }
        }
      });
    } catch (error) {
      message.error(error.data.message);
    }
  };

  const handleViewPost = (post) => {
    setViewModalData(post);
    setViewModal(true);
  };

  const handleEditPost = (post) => {
    setEditPost(post);
    setVisibleModal(true); // Show the modal in edit mode
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
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
          onClick={() => setVisibleModal(true)} // Show the modal in add mode
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
          <div
            className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex justify-between"
            key={post._id}
          >
            <div className="w-full flex-1">
              <div className="flex w-full">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                  <img
                    src={imageUrl + post?.user?.image}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="w-full">
                  <h2 className="font-semibold text-secondary text-wrap">
                    {post?.user?.name}
                  </h2>
                  <p className="text-tertiary">{post?.post}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2  px-3">
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item onClick={() => handleViewPost(post)}>
                      View
                    </Menu.Item>
                    <Menu.Item onClick={() => handleEditPost(post)}>
                      Edit
                    </Menu.Item>
                    <Menu.Item onClick={() => handleDeleted(post._id)} danger>
                      Delete
                    </Menu.Item>
                  </Menu>
                }
                trigger={["click"]}
              >
                <Button
                  size="small"
                  type="default"
                  style={{ backgroundColor: "#FF0048", color: "white" }}
                >
                  Actions
                </Button>
              </Dropdown>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={10}
          total={fetchedData?.data?.count || 0}
          onChange={handlePageChange}
        />
      </div>

      {/* Modals */}
      <AddForumModal
        visible={visibleModal}
        onCancel={() => {
          setVisibleModal(false);
          setEditPost(null);
        }}
        existingPost={editPost} // Pass existing post data when editing
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
