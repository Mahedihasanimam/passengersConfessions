import "tailwindcss/tailwind.css";

import { DeleteFilled, EditOutlined, EyeFilled } from "@ant-design/icons";
import { Button, Dropdown, Pagination, message } from "antd";
import React, { useState } from "react";
import {
  useDeleteStoriesMutation,
  useGetAllStoriesQuery,
} from "../../../redux/apiSlices/stroeisApiSlices";

import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";
import confessionImage from "../../assets/confession.webp";
import { AddRideShareStoriesModal } from "../common/AddRideShareStoriesModal";
import ViewStoryModal from "../common/ViewStoryModal";

const RideShareStoriesList = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedConfession, setSelectedConfession] = useState(null); // Track selected confession for editing
  const { data: confessionData } = useGetAllStoriesQuery({
    limit: 8,
    page: currentPage,
    status: "approved",
  });

  //   console.log(confessionData);

  const [deleteConfession] = useDeleteStoriesMutation();

  const handleEditConfession = (confession) => {
    setSelectedConfession(confession); // Set selected confession for editing
    setVisibleModal(true); // Show the modal in edit mode
  };

  const handleDeleteConfession = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#FF0048",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteConfession(id);
        message.success("Successfully deleted confession");
      }
    });
  };

  const handleViewModal = (confession) => {
    setSelectedConfession(confession);
    setViewModal(true);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto px-4 pb-[80px]">
      <div className="flex justify-end pb-8 ">
        <Button
          onClick={() => {
            setSelectedConfession(null); // Clear selected confession for new confession
            setVisibleModal(true); // Show modal for new confession
          }}
          type="primary"
          style={{
            backgroundColor: "#FF0048",
            color: "white",
            height: "35px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
          className="border-none text-white px-6 py-2 rounded-lg"
        >
          Add Story
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {confessionData?.data?.result?.map((confession) => (
          <div
            key={confession._id}
            className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]"
          >
            <div className="relative">
              {confession?.storyAudioUrl && !confession?.storyVideoUrl ? (
                <img
                  src={confessionImage}
                  alt={confession.title}
                  className="w-full h-56 object-cover rounded-md mb-4"
                />
              ) : (
                <>
                  {
                    <div className="flex mb-4 ">
                      <img
                        src={confessionImage}
                        alt={confession.title}
                        className="w-[50%] h-56 object-cover rounded-l-md "
                      />
                      <video
                        src={imageUrl + confession?.storyVideoUrl}
                        className="w-[50%] h-56 object-cover rounded-r-md "
                      />
                    </div>
                  }
                </>
              )}

              <div className="absolute top-[4px] right-[4px]">
                <Dropdown
                  menu={{
                    items: [
                      {
                        key: "1",
                        label: (
                          <Button
                            className="!w-full"
                            size="small"
                            style={{
                              // color: "white",
                              borderRadius: "5px",
                            }}
                            onClick={() => handleViewModal(confession)}
                            icon={<EyeFilled />}
                          >
                            View
                          </Button>
                        ),
                      },
                      {
                        key: "1",
                        label: (
                          <Button
                            className="!w-full"
                            size="small"
                            style={{
                              // color: "white",
                              borderRadius: "5px",
                            }}
                            onClick={() => handleEditConfession(confession)}
                            icon={<EditOutlined />}
                          >
                            Edit
                          </Button>
                        ),
                      },
                      {
                        key: "2",
                        label: (
                          <Button
                            size="small"
                            type="primary"
                            className="!w-full"
                            style={{
                              backgroundColor: "#FF0048",
                              color: "white",
                              borderRadius: "5px",
                            }}
                            onClick={() =>
                              handleDeleteConfession(confession._id)
                            }
                            icon={<DeleteFilled />}
                          >
                            Delete
                          </Button>
                        ),
                      },
                    ],
                  }}
                  placement="bottom"
                >
                  <button>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="20" fill="white" />
                      <path
                        d="M22.25 27.5C22.25 28.0967 22.0129 28.669 21.591 29.091C21.169 29.5129 20.5967 29.75 20 29.75C19.4033 29.75 18.831 29.5129 18.409 29.091C17.9871 28.669 17.75 28.0967 17.75 27.5C17.75 26.9033 17.9871 26.331 18.409 25.909C18.831 25.4871 19.4033 25.25 20 25.25C20.5967 25.25 21.169 25.4871 21.591 25.909C22.0129 26.331 22.25 26.9033 22.25 27.5ZM22.25 20C22.25 20.5967 22.0129 21.169 21.591 21.591C21.169 22.0129 20.5967 22.25 20 22.25C19.4033 22.25 18.831 22.0129 18.409 21.591C17.9871 21.169 17.75 20.5967 17.75 20C17.75 19.4033 17.9871 18.831 18.409 18.409C18.831 17.9871 19.4033 17.75 20 17.75C20.5967 17.75 21.169 17.9871 21.591 18.409C22.0129 18.831 22.25 19.4033 22.25 20ZM22.25 12.5C22.25 13.0967 22.0129 13.669 21.591 14.091C21.169 14.5129 20.5967 14.75 20 14.75C19.4033 14.75 18.831 14.5129 18.409 14.091C17.9871 13.669 17.75 13.0967 17.75 12.5C17.75 11.9033 17.9871 11.331 18.409 10.909C18.831 10.4871 19.4033 10.25 20 10.25C20.5967 10.25 21.169 10.4871 21.591 10.909C22.0129 11.331 22.25 11.9033 22.25 12.5Z"
                        fill="#FF0048"
                      />
                    </svg>
                  </button>
                </Dropdown>
              </div>
            </div>
            <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">
              {confession.title}
            </h2>
            <p className="text-tertiary">{confession.author}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center">
        <Pagination
          current={currentPage}
          pageSize={confessionData?.data?.limit || 0}
          total={confessionData?.data?.count || 0}
          onChange={handlePageChange}
        />
      </div>

      <AddRideShareStoriesModal
        visible={visibleModal}
        onCancel={() => {
          setVisibleModal(false);
          setSelectedConfession(null);
        }}
        existingConfession={selectedConfession} // Pass the selected confession for editing
      />
      {/* View Modal  */}
      <ViewStoryModal
        visible={viewModal}
        confession={selectedConfession}
        onCancel={() => {
          setViewModal(false);
          setSelectedConfession(null);
        }}
      />
    </div>
  );
};

export default RideShareStoriesList;
