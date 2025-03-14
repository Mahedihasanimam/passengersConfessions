import "react-h5-audio-player/lib/styles.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is imported

import { Button, Form, Input, message } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddCommentToPodcastMutation,
  useGetCommentByPodcastIdQuery,
} from "../../../../redux/apiSlices/commentPodcastApiSlice";

import { LeftOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../../redux/api/baseApi";
import { useGetPodCastByIdQuery } from "../../../../redux/apiSlices/podcastApiSlice";
import { SubscriptionModal } from "../../../components/common/SubsciptionModal";
import GLoading from "../../../components/GLoading";

const PodCastDetails = () => {
  const navigate = useNavigate();

  const params = useParams();

  const {
    data: Confession,
    isLoading: confessionIsLoading,
    isFetching: confessionIsFetching,
  } = useGetPodCastByIdQuery(params.id);

  const {
    data: allComments,
    isFetching: commentIsFetching,
    isLoading: commentIsLoading,
  } = useGetCommentByPodcastIdQuery(params.id);
  const [addComment] = useAddCommentToPodcastMutation();

  const user = useSelector((state) => state.user.user);

  const [isModalOpen, setIsModalOpen] = useState(false);

  // console.log(Confession);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      user?.isPremiumSubscribed && videoRef.current.play();
      user?.isPremiumSubscribed && setIsPlaying(true);
    }
  };

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      // console.log(values);
      setSubmitting(true);

      await addComment({
        ...values,
        podcastId: params.id,
      }).unwrap();
      message.success("comment added successfully!");
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

  // if (confessionIsLoading) {
  //   return <GLoading />;
  // }

  const videoSources = [
    {
      src: `${imageUrl + Confession?.data?.podcastVideo}`,
      type: "video/mp4",
    },
    // Add more video sources as needed
  ];

  // console.log(imageUrl + Confession?.data?.podcastVideo);
  // const videoProps = {
  //   theme: "city", // 'city', 'fantasy', 'forest', 'sea'
  //   height: 300,
  //   width: 500,
  //   autoPlay: false,

  //   loop: false,
  //   sources: videoSources,
  //   controlBar: {
  //     skipButtons: {
  //       forward: 5,
  //       backward: 5,
  //     },
  //   },
  //   playbackRates: [0.5, 1, 1.5, 2],
  //   disablePictureInPicture: false,

  //   onReady: () => {
  //     console.log("Video player is ready!");
  //   },
  // };

  return (
    <div className="container mx-auto p-6  rounded-lg  min-h-[60vh]">
      {confessionIsFetching ||
      commentIsFetching ||
      commentIsFetching ||
      commentIsLoading ? (
        <GLoading />
      ) : (
        <>
          <div className="flex items-center py-4 pb-6">
            <LeftOutlined
              onClick={() => navigate(-1)}
              className="text-2xl font-bold pr-1"
            />
            <h1 className="text-3xl font-bold mb-1">
              {Confession?.data?.podcastTitle}
            </h1>
          </div>
          <div className="lg:flex   flex-col items-center justify-between gap-4">
            {!user?.isPremiumSubscribed && user?.isBasicSubscribed && (
              <i>
                <span className="text-primary text-sm font-semibold  rounded px-2">
                  If you are want access on podcast then you need purchase to
                  Premium plan
                </span>
              </i>
            )}
            <div className=" w-[40vw]  aspect-video rounded-md">
              {/* <VideoPlayer {...videoProps} /> */}

              <video
                style={{
                  opacity: user?.isPremiumSubscribed ? 1 : 0.7,
                }}
                ref={videoRef}
                src={imageUrl + Confession?.data?.podcastVideo}
                controls={user?.isPremiumSubscribed}
                onPlay={() =>
                  user?.isPremiumSubscribed
                    ? setIsPlaying(true)
                    : setIsPlaying(false)
                }
                onPause={() => setIsPlaying(false)}
                className="w-[40vw]  aspect-video rounded-md"
                onClick={handlePlayPause}
              />
            </div>
            {!user?.isPremiumSubscribed && (
              <div className="w-full ">
                <div className="flex-1 pl-6 gap-4 ">
                  <h1 className="text-3xl font-bold mb-2">
                    {Confession?.data?.podcastTitle}
                  </h1>
                  <h2 className="text-gray-600 mb-4">
                    {Confession?.data?.authorName}
                  </h2>
                  <p className="mb-4">{Confession?.data?.description}</p>

                  <Button
                    onClick={handleSubscribeClick}
                    type="primary"
                    style={{
                      backgroundColor: "#FF0048",
                      color: "white",
                      height: "35px",
                      fontSize: "16px",
                      fontWeight: "bold",
                    }}
                    className="w-full mt-2 border-none text-white px-6 py-2 rounded-lg"
                  >
                    <span className="">
                      <svg
                        width="24"
                        height="25"
                        viewBox="0 0 24 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5.63989V19.6399L19 12.6399L8 5.63989Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    play
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Customer Comments</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {allComments?.data?.map((comment) => (
                <div
                  key={comment?._id}
                  className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                    {/* Placeholder for the profile image */}
                    <img
                      src={imageUrl + comment?.user?.image} // Replace with actual image URL or asset path
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
                      style={{
                        border: "none",
                        outline: "none",
                      }}
                      rows={4}
                      placeholder="Write your comment here..."
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      style={{
                        backgroundColor: "#FF0048",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                      type="primary"
                      htmlType="submit"
                      loading={submitting}
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

export default PodCastDetails;
