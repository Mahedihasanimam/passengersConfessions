import React from "react";
import { imageUrl } from "../../../redux/api/baseApi";

const ReviewCard = ({ post }) => {
  return (
    <div
      key={post?._id}
      className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex"
    >
      <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
        {/* Placeholder for the profile image */}
        <img
          src={imageUrl + post?.user?.image} // Replace with actual image URL or asset path
          alt="Profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div>
        <h2 className="font-semibold text-secondary">{post?.user?.name}</h2>
        <p className="text-tertiary">{post?.post}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
