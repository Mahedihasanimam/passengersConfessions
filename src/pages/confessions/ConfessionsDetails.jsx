import "react-h5-audio-player/lib/styles.css";
import "tailwindcss/tailwind.css";

import { Button, Form, Input, Switch, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddCommentToConfessionMutation,
  useGetCommentByConfessionIdQuery,
} from "../../../redux/apiSlices/commentConfessionApiSlice";

import { LeftOutlined } from "@ant-design/icons";
import AudioPlayer from "react-h5-audio-player";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/baseApi";
import { useGetConfessionByIdQuery } from "../../../redux/apiSlices/confessionApiSlice";
import AudioImage from "../../assets/confession.webp";
import { SubscriptionModal } from "../../components/common/SubsciptionModal";
import GLoading from "../../components/GLoading";

const ConfessionsDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  const {
    data: Confession,
    isLoading,
    isFetching,
  } = useGetConfessionByIdQuery(params.id);
  const {
    data: allComments,
    isFetching: commentIsFetching,
    isLoading: commentIsLoading,
  } = useGetCommentByConfessionIdQuery(params.id);
  const [addComment] = useAddCommentToConfessionMutation();

  const user = useSelector((state) => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoMode, setIsVideoMode] = useState(false);
  const videoRef = useRef(null);
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubscribeClick = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      await addComment({ ...values, confessionId: params.id }).unwrap();
      message.success("Comment added successfully!");
      form.resetFields();
    } catch (error) {
      message.error(error.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto p-6 rounded-lg min-h-[60vh]">
      {isFetching || isLoading || commentIsFetching || commentIsLoading ? (
        <GLoading />
      ) : (
        <>
          <div className="flex items-center py-4 pb-6">
            <LeftOutlined
              onClick={() => navigate(-1)}
              className="text-2xl font-bold pr-1"
            />
            <h1 className="text-3xl font-bold mb-1">
              {Confession?.data?.title}
            </h1>
          </div>
          {Confession?.data?.confessionVideoUrl && (
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

          <div className="lg:flex flex-row items-center justify-between gap-4">
            <div className=" h-[40vh]">
              {isVideoMode ? (
                <video
                  ref={videoRef}
                  className="w-[40vw] aspect-video rounded-lg object-cover"
                  controls
                >
                  <source
                    src={imageUrl + Confession?.data?.confessionVideoUrl}
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={AudioImage}
                  alt="Confession"
                  className="rounded-lg mb-4 w-[30vw] h-full "
                />
              )}
            </div>

            <div className="w-full">
              <div className="flex-1 pl-6 gap-4">
                <h1 className="text-3xl font-bold mb-2">
                  {Confession?.data?.title}
                </h1>
                <h2 className="text-gray-600 mb-4">
                  {Confession?.data?.authorName}
                </h2>
                <p className="mb-4">{Confession?.data?.description}</p>

                {!user?.isPremiumSubscribed && (
                  <Button
                    onClick={handleSubscribeClick}
                    type="primary"
                    className="w-full mt-2 border-none text-white px-6 py-2 rounded-lg"
                    style={{ backgroundColor: "#FF0048" }}
                  >
                    Subscribe to Access
                  </Button>
                )}

                {user?.isPremiumSubscribed && (
                  <div className="w-full mt-3">
                    {!isVideoMode && (
                      <AudioPlayer
                        className="w-full bg-primary custom-audio-player"
                        src={imageUrl + Confession?.data?.confessionAudioUrl}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Comments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {allComments?.data?.map((comment) => (
                <div
                  key={comment?._id}
                  className="p-4 border rounded-lg bg-white shadow-sm flex"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                    <img
                      src={imageUrl + comment?.user?.image}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-secondary">
                      {comment?.user?.name}
                    </h2>
                    <p className="text-tertiary mt-2">{comment?.comment}</p>
                  </div>
                </div>
              ))}
            </div>
            {user?._id && (
              <div className="p-4 border rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-4">Add Your Comment</h3>
                <Form form={form} layout="vertical" onFinish={handleSubmit}>
                  <Form.Item
                    name="comment"
                    label="Your Comment"
                    rules={[
                      { required: true, message: "Please enter your comment!" },
                    ]}
                  >
                    <Input.TextArea
                      rows={4}
                      placeholder="Write your comment here..."
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={submitting}
                      style={{ backgroundColor: "#FF0048" }}
                    >
                      Submit Comment
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            )}
          </div>
        </>
      )}
      <SubscriptionModal onCancel={handleCloseModal} visible={isModalOpen} />
    </div>
  );
};

export default ConfessionsDetails;
