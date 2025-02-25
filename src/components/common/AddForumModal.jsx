import { Button, Form, Input, Modal, message } from "antd";
import { useEffect, useState } from "react";
import {
  useAddForumMutation,
  useUpdateForumMutation,
} from "../../../redux/apiSlices/forumsApiSlices";

import { useDropzone } from "react-dropzone";
import { imageUrl } from "../../../redux/api/baseApi";

export const AddForumModal = ({ visible, onCancel, existingPost = null }) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null); // Audio file
  const [videoFile, setVideoFile] = useState(null); // Video file
  const [uploading, setUploading] = useState(false);
  const [duration, setDuration] = useState(null); // For storing audio duration
  const [videoDuration, setVideoDuration] = useState(null); // For storing video duration
  const maxFileSize = 100 * 1024 * 1024; // 100 MB size limit for both
  const maxFiles = 1; // Restrict to one file upload

  const [addNewForums] = useAddForumMutation();
  const [updateForum] = useUpdateForumMutation();

  // console.log(existingPost);

  // Prepopulate form when editing an existing post
  useEffect(() => {
    if (existingPost) {
      form.setFieldsValue({
        post: existingPost.post, // Prepopulate the form with existing post content
      });
      // Set existing audio and video files from the server
      if (existingPost.audioPost) {
        setFile(imageUrl + existingPost.audioPost);
      }
      if (existingPost.videoPost) {
        setVideoFile(imageUrl + existingPost.videoPost);
      }
    }
  }, [existingPost, form]);

  // Handle file drop for audio
  const onDropAudio = (acceptedFiles) => {
    if (acceptedFiles.length > maxFiles) {
      message.error(`You can only upload up to ${maxFiles} audio file.`);
      return;
    }

    const newFile = acceptedFiles[0];
    if (newFile.size > maxFileSize) {
      message.error("File size must be less than 100 MB.");
      return;
    }

    setFile(Object.assign(newFile, { preview: URL.createObjectURL(newFile) }));

    // Extract and set audio duration
    const audio = new Audio(URL.createObjectURL(newFile));
    audio.onloadedmetadata = () => {
      setDuration(audio.duration.toFixed(2)); // Duration in seconds
    };
  };

  // Handle file drop for video
  const onDropVideo = (acceptedFiles) => {
    if (acceptedFiles.length > maxFiles) {
      message.error(`You can only upload up to ${maxFiles} video file.`);
      return;
    }

    const newFile = acceptedFiles[0];
    if (newFile.size > maxFileSize) {
      message.error("File size must be less than 100 MB.");
      return;
    }

    setVideoFile(
      Object.assign(newFile, { preview: URL.createObjectURL(newFile) })
    );

    // Extract and set video duration
    const video = document.createElement("video");
    video.src = URL.createObjectURL(newFile);
    video.onloadedmetadata = () => {
      setVideoDuration(video.duration.toFixed(2)); // Duration in seconds
    };
  };

  const { getRootProps: getRootPropsAudio, getInputProps: getInputPropsAudio } =
    useDropzone({
      onDrop: onDropAudio,
      accept: "audio/wav", // Restrict to .wav files
      maxFiles,
    });

  const { getRootProps: getRootPropsVideo, getInputProps: getInputPropsVideo } =
    useDropzone({
      onDrop: onDropVideo,
      accept: "video/mp4", // Restrict to .mp4, .webm, .ogg files
      maxFiles,
    });

  // Handle form submission
  const handleFormSubmit = async (values) => {
    setUploading(true);

    const formData = new FormData();
    formData.append("post", values.post);
    if (file) formData.append("audioFile", file);
    if (videoFile) formData.append("videoFile", videoFile);

    try {
      if (existingPost) {
        // If editing an existing post, update it
        const response = await updateForum({
          id: existingPost._id,
          data: formData,
        }).unwrap();
        if (response.success) {
          message.success("Post updated successfully!");
        }
      } else {
        // If adding a new post
        const response = await addNewForums(formData).unwrap();
        if (response.success) {
          message.success("Post added successfully!");
        }
      }
      setUploading(false);
      form.resetFields();
      setFile(null);
      setVideoFile(null);
      onCancel && onCancel();
    } catch (error) {
      setUploading(false);
      message.error(error.data.message);

      console.error("Error submitting post:", error);
    }
  };

  const handleCancel = () => {
    form.resetFields();
    setFile(null);
    setVideoFile(null);
    onCancel && onCancel();
  };

  return (
    <Modal
      open={visible}
      onCancel={handleCancel}
      centered
      footer={null}
      className="lg:!w-[50vw] sm:!w=full"
    >
      <div className="container mx-auto text-secondary">
        <div className="flex items-center justify-between py-6 ">
          <div>
            <h2 className="text-[24px] flex space-x-2 items-center font-bold">
              {existingPost ? "Edit Post" : "Add Post"}
            </h2>
          </div>
        </div>

        <div>
          <Form
            form={form}
            onFinish={handleFormSubmit}
            className="w-full"
            layout="vertical"
          >
            <Form.Item
              label="Description"
              name="post"
              rules={[
                {
                  required: true,
                  message: "Please input your description!",
                },
                {
                  max: 500,
                  message: "Description cannot exceed 500 characters.",
                },
              ]}
            >
              <Input.TextArea
                placeholder="Description"
                rows={4}
                className="border-2 border-gray-300 rounded-md p-2 w-full"
              />
            </Form.Item>

            <Form.Item label="Upload Audio">
              <div
                {...getRootPropsAudio()}
                style={{
                  border: "2px dashed #7C7C7C",
                  borderRadius: "20px",
                  padding: "20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <input {...getInputPropsAudio()} />
                <p className="text-center text-[16px] font-medium text-secondary">
                  Drop your audio file here, or{" "}
                  <span className="text-primary">browse</span>
                </p>
              </div>
              {(existingPost?.audioPost || file) && (
                <div className="p-6 border text-secondary rounded-lg">
                  <audio
                    controls
                    src={
                      existingPost?.audioPost
                        ? imageUrl + existingPost?.audioPost
                        : file?.preview
                    }
                    className="w-full"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </Form.Item>

            <Form.Item label="Upload Video">
              <div
                {...getRootPropsVideo()}
                style={{
                  border: "2px dashed #7C7C7C",
                  borderRadius: "20px",
                  padding: "20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <input {...getInputPropsVideo()} />
                <p className="text-center text-[16px] font-medium text-secondary">
                  Drop your video file here, or{" "}
                  <span className="text-primary">browse</span>
                </p>
              </div>
              {(existingPost?.videoPost || videoFile) && (
                <div className="p-6 border text-secondary rounded-lg">
                  <video
                    controls
                    src={
                      existingPost?.videoPost
                        ? imageUrl + existingPost?.videoPost
                        : videoFile?.preview
                    }
                    className="w-full"
                  >
                    Your browser does not support the video element.
                  </video>
                </div>
              )}
            </Form.Item>

            <div className="py-4 flex justify-center">
              <Button
                type="primary"
                htmlType="submit"
                className="w-full border-none text-white px-6 py-2 rounded-lg"
                style={{
                  backgroundColor: "#FF0048",
                  color: "white",
                  height: "44px",
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
                disabled={uploading}
              >
                {uploading
                  ? "Uploading..."
                  : existingPost
                  ? "Update"
                  : "Submit"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
