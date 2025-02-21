import { Button, Input, Modal, Pagination, Switch } from "antd";
import React, { useState } from "react";
import {
  useAddPostCommentMutation,
  useGetAllCommentByPostIdQuery,
} from "../../../redux/apiSlices/commentForumsApiSlices";

import AudioPlayer from "react-h5-audio-player";
import { BiLoader } from "react-icons/bi";
import { imageUrl } from "../../../redux/api/baseApi";

const { TextArea } = Input;

const ViewForumModal = ({ post, visible, onCancel }) => {
  const [newComment, setNewComment] = useState(""); // State for new comment input
  const [loading, setLoading] = useState(false); // Loading state for the comment submission
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const commentsPerPage = 4; // Number of comments per page
  const [isVideoMode, setIsVideoMode] = useState(false);
  const {
    data: allComments,
    isLoading,
    isFetching,
  } = useGetAllCommentByPostIdQuery({
    id: post?._id,
    page: currentPage,
    limit: commentsPerPage,
  });

  const [addComment] = useAddPostCommentMutation();

  const handleAddComment = async () => {
    if (!newComment.trim()) return; // Prevent empty comments
    setLoading(true);
    try {
      await addComment({
        id: post?._id,
        data: { comment: newComment.trim() },
      }).unwrap();
      setNewComment(""); // Clear the input field after successful submission
    } catch (error) {
      console.error("Failed to add comment:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      centered
      footer={null}
      className="lg:!w-[50vw] sm:!w-full my-3"
    >
      {isFetching || isLoading ? (
        <div className="h-[50vh] flex justify-center items-center">
          <span className="animate-spin">
            <BiLoader color="#FF0048" size={50} />
          </span>
        </div>
      ) : (
        <div
          key={post?._id}
          className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between bg-white shadow-sm relative"
        >
          <div className="flex">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
              <img
                src={imageUrl + post?.user?.image}
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
          {post?.videoPost && (
            <div className="flex items-center mb-3">
              <span className="mr-2 font-semibold">Audio</span>
              <Switch
                checkedChildren="Audio"
                unCheckedChildren="Video"
                autoFocus
                style={{ backgroundColor: isVideoMode ? "#FF0048" : undefined }}
                checked={isVideoMode}
                onChange={() => setIsVideoMode(!isVideoMode)}
              />
              <span className="ml-2 font-semibold">Video</span>
            </div>
          )}
          {post?.videoPost && isVideoMode ? (
            <div className="w-full mt-3">
              <video
                className="w-full bg-primary custom-audio-player rounded-md"
                src={imageUrl + post?.videoPost}
                controls
              />
            </div>
          ) : (
            <>
              {post?.audioPost && (
                <div className="w-full mt-3">
                  <AudioPlayer
                    className="w-full bg-primary custom-audio-player"
                    src={imageUrl + post?.audioPost}
                    onPlay={(e) => console.log("onPlay")}
                  />
                </div>
              )}
            </>
          )}

          <div className="border mt-5 rounded-md p-2">
            {/* Add new comment input box */}
            <div className="mt-4">
              <TextArea
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                rows={3}
                className="border !border-red-300"
              />
              <Button
                type="primary"
                style={{
                  background: "#FF0048",
                }}
                onClick={handleAddComment}
                loading={loading}
                className="mt-2 !text-white"
                disabled={!newComment.trim()}
              >
                Add Comment
              </Button>
            </div>

            {/* Display all comments */}
            <div className="flex flex-col gap-2 mt-2">
              {allComments?.data?.result?.map((comment) => (
                <div
                  key={comment?._id}
                  className="px-4 py-2 border border-gray-200 rounded-lg bg-white shadow-sm flex gap-2"
                >
                  <div className="w-6 h-6 rounded-full bg-gray-300 ">
                    <img
                      src={imageUrl + comment?.user?.image}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-xs text-secondary">
                      {comment?.user?.name}
                    </h2>
                    <p className="text-tertiary text-sm">{comment?.comment}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-4 flex justify-center">
              <Pagination
                current={currentPage}
                pageSize={commentsPerPage}
                total={allComments?.data?.count || 0}
                onChange={handlePageChange}
                showSizeChanger={false}
              />
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ViewForumModal;
