import { Input, message } from "antd";
import React, { useState } from "react";
import {
  useAddForumMutation,
  useDeleteForumMutation,
  useGetAllForumsQuery,
  useUpdateForumMutation,
} from "../../../redux/apiSlices/forumsApiSlices";

import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { imageUrl } from "../../../redux/api/baseApi";
import MyForumCard from "./components/MyForumCard";

// Simulating fetching data from a JSON file

const MyForumList = () => {
  const { data: allForums } = useGetAllForumsQuery({});

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

  const [addNewForums] = useAddForumMutation();

  const user = useSelector((state) => state.user.user);

  // console.log(allForums);

  const [inputText, setInputText] = useState("");
  const [deletedForum] = useDeleteForumMutation();
  const [updatedForum] = useUpdateForumMutation();

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async () => {
    if (inputText.trim()) {
      try {
        const res = await addNewForums({
          post: inputText,
        }).unwrap();

        setInputText("");

        message.success(res.message);
      } catch (error) {
        message.error(error.data.message);
        // console.log(error);
      }
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
    <div className="container mx-auto p-6 border border-[#E7E7E7s] rounded-lg mb-[80px]">
      <h1 className="text-xl font-semibold mb-2">My posts</h1>
      <p className="text-gray-600 mb-4">Here you can see all of your status.</p>

      <div className="flex mb-6">
        <Input
          prefix={
            <div>
              <img
                src={(user?.image && imageUrl + user?.image) || ""}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </div>
          }
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter forum text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md rounded-r-none focus:outline-none text-tertiary text-[16px] font-bold"
        />
        <button
          onClick={handleSubmit}
          className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-primary"
        >
          Submit
        </button>
      </div>

      <div className="flex flex-col gap-4">
        {allForums?.data?.result.map((post) => (
          <MyForumCard post={post} key={post?._id} />
        ))}
      </div>
    </div>
  );
};

export default MyForumList;
