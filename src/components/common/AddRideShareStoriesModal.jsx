import { Button, Form, Input, Modal, message } from "antd";
import { useEffect, useState } from "react";
import {
  useAddStoriesMutation,
  useUpdateStoriesMutation,
} from "../../../redux/apiSlices/stroeisApiSlices";

import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { imageUrl } from "../../../redux/api/baseApi";

export const AddRideShareStoriesModal = ({
  visible,
  onCancel,
  existingConfession = null,
}) => {
  const [form] = Form.useForm();
  const [file, setFile] = useState(null); // Audio file
  const [videoFile, setVideoFile] = useState(null); // Video file
  const [uploading, setUploading] = useState(false);
  const [duration, setDuration] = useState(null); // For storing audio duration
  const [videoDuration, setVideoDuration] = useState(null); // For storing video duration
  const maxFileSize = 50 * 1024 * 1024; // 50 MB size limit for both
  const maxFiles = 1; // Restrict to one file upload

  const [addStories] = useAddStoriesMutation();
  const [updateStories] = useUpdateStoriesMutation();

  const user = useSelector((state) => state.user.user);

  // console.log(existingConfession);

  useEffect(() => {
    if (existingConfession) {
      form.setFieldsValue({
        title: existingConfession.title,
        description: existingConfession.description,
      });
      // Prepopulate existing audio/video files
      if (existingConfession.storyAudioUrl) {
        setFile(imageUrl + existingConfession.storyAudioUrl);
      }
      if (existingConfession.videoFile) {
        setVideoFile(imageUrl + existingConfession.videoFile);
      }
    }
  }, [existingConfession, form]);

  // Handle file drop for audio
  const onDropAudio = (acceptedFiles) => {
    if (acceptedFiles.length > maxFiles) {
      message.error(`You can only upload up to ${maxFiles} audio file.`);
      return;
    }

    const newFile = acceptedFiles[0];
    if (newFile.size > maxFileSize) {
      message.error("File size must be less than 50 MB.");
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
      message.error("File size must be less than 50 MB.");
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
      accept: "video/mp4", // Restrict to .mp4 files
      maxFiles,
    });

  // Handle form submission
  const handleFormSubmit = async (values) => {
    setUploading(true);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("description", values.description);
    formData.append("authorName", user?.name || "Unknown");

    if (file) formData.append("audioFile", file);
    if (videoFile) formData.append("videoFile", videoFile);

    try {
      if (existingConfession) {
        // If editing an existing confession, update it
        const response = await updateStories({
          id: existingConfession._id,
          data: formData,
        }).unwrap();
        if (response.success) {
          message.success("Stories updated successfully!");
        }
      } else {
        // If adding a new confession
        const response = await addStories(formData).unwrap();
        if (response.success) {
          message.success(
            "Stories added successfully!, Please wait for admin approval"
          );
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
      console.error("Error submitting confession:", error);
    }
  };

  const handleOnCancel = () => {
    form.resetFields();
    setFile(null);
    setVideoFile(null);
    onCancel && onCancel();
  };

  return (
    <Modal
      open={visible}
      onCancel={handleOnCancel}
      centered
      footer={null}
      className="lg:!w-[50vw] sm:!w=full "
    >
      <div className="container mx-auto text-secondary">
        <div className="flex items-center justify-between py-6 ">
          <div>
            <h2 className="text-[24px] flex space-x-2 items-center font-bold">
              {existingConfession ? "Edit Stories" : "Add Stories"}
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
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please input your title!",
                },
                {
                  max: 50,
                  message: "Title cannot exceed 50 characters.",
                },
              ]}
            >
              <Input
                placeholder="Title"
                className="border-2 border-gray-300 rounded-md p-2 w-full"
              />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
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
                  Drop your .wav file here, or{" "}
                  <span className="text-primary">browse</span>
                </p>
              </div>

              {(existingConfession?.storyAudioUrl || file) && (
                <div className="p-6 border text-secondary rounded-lg">
                  <audio
                    controls
                    src={
                      existingConfession?.storyAudioUrl
                        ? imageUrl + existingConfession?.storyAudioUrl
                        : file?.preview
                    }
                    className="w-full"
                  >
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </Form.Item>

            <Form.Item label="Upload Video (optional)">
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
                  Drop your .mp4 file here, or{" "}
                  <span className="text-primary">browse</span>
                </p>
              </div>

              {(existingConfession?.storyVideoUrl || videoFile) && (
                <div className="p-6 border text-secondary rounded-lg">
                  <video
                    controls
                    src={
                      existingConfession?.storyVideoUrl
                        ? imageUrl + existingConfession?.storyVideoUrl
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
                disabled={
                  uploading ||
                  (!file &&
                    !videoFile &&
                    !existingConfession?.audioFile &&
                    !existingConfession?.videoFile)
                }
              >
                {uploading
                  ? "Uploading..."
                  : existingConfession
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
