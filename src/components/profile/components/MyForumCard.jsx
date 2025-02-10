import { Button, Input, message } from "antd";
import React, { useState } from "react";
import {
  useDeleteForumMutation,
  useUpdateForumMutation,
} from "../../../../redux/apiSlices/forumsApiSlices";

import Swal from "sweetalert2";
import { imageUrl } from "../../../../redux/api/baseApi";

const MyForumCard = ({ post }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [editContent, setEditContent] = useState(post?.post);

  const [deletedForum] = useDeleteForumMutation();
  const [updatedForum] = useUpdateForumMutation();

  const handleEdit = async (id) => {
    try {
      const res = await updatedForum({
        id,
        post: editContent,
      }).unwrap();
      message.success(res.message);
    } catch (error) {
      message.error(error.data.message);
    }
  };

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

  return (
    <div className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex justify-between">
      <div className="flex">
        <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
          {/* Placeholder for the profile image */}
          <img
            src={imageUrl + post?.user?.image} // Replace with actual image URL or asset path
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <div className="flex-1">
          <h2 className="font-semibold text-secondary">{post?.user?.name}</h2>
          {isEdit ? (
            <Input.TextArea
              className=" lg:w-[60vw]"
              defaultValue={post?.post}
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
              disabled={!isEdit}
            />
          ) : (
            <p className="text-tertiary">{post?.post}</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        {isEdit ? (
          <>
            <Button
              type="default"
              onClick={() => {
                handleEdit(post?._id);
                setIsEdit(false);
              }}
              size="small"
            >
              Save
            </Button>
            <Button
              size="small"
              type="default"
              danger
              onClick={() => {
                setIsEdit(false);
              }}
            >
              Cancel
            </Button>
          </>
        ) : (
          <>
            <Button
              size="small"
              type="default"
              onClick={() => {
                setIsEdit(true);
              }}
            >
              Edit
            </Button>
            <Button
              size="small"
              type="primary"
              style={{ backgroundColor: "#FF0048" }}
              danger
              onClick={() => {
                handleDeleted(post?._id);
              }}
            >
              Delete
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default MyForumCard;
