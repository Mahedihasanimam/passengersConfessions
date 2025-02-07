import { Input, message } from "antd";
import React, { useState } from "react";
import {
  useAddForumMutation,
  useGetAllForumsQuery,
} from "../../../redux/apiSlices/forumsApiSlices";

import { useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/baseApi";
import ReviewCard from "./../../components/util/ReviewCard";

// Simulating fetching data from a JSON file

const ForumPage = () => {
  const { data: allForums } = useGetAllForumsQuery({});

  const [addNewForums] = useAddForumMutation();

  const user = useSelector((state) => state.user.user);

  // console.log(allForums);

  const [inputText, setInputText] = useState("");

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

  return (
    <div className="container mx-auto p-6 border border-[#E7E7E7s] rounded-lg mb-[80px]">
      <h1 className="text-xl font-semibold mb-2">People forum</h1>
      <p className="text-gray-600 mb-4">
        People can share their thoughts by using this public forum
      </p>
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allForums?.data?.result.map((post) => (
          <ReviewCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default ForumPage;
