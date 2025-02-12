import { Button, Form, Input, Modal, message } from "antd";
import { useEffect, useState } from "react";

import { useDropzone } from "react-dropzone";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAddForumMutation } from "../../../redux/apiSlices/forumsApiSlices";

export const AddForumModal = ({ visible, onCancel }) => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [file, setFile] = useState(null); // Only one file is allowed
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0); // Progress tracking
  const [duration, setDuration] = useState(null); // For storing audio duration
  const maxFileSize = 5 * 1024 * 1024; // 5 MB size limit

  const maxFiles = 1; // Restrict to one file upload

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > maxFiles) {
      message.error(`You can only upload up to ${maxFiles} audio file.`);
      return;
    }

    const newFile = acceptedFiles[0];
    if (newFile.size > maxFileSize) {
      message.error("File size must be less than 5 MB.");
      return;
    }

    setFile(Object.assign(newFile, { preview: URL.createObjectURL(newFile) }));

    // Extract and set audio duration
    const audio = new Audio(URL.createObjectURL(newFile));
    audio.onloadedmetadata = () => {
      setDuration(audio.duration.toFixed(2)); // Duration in seconds
    };
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "audio/wav", // Restrict to .wav files
    maxFiles,
  });

  const [addNewForums] = useAddForumMutation();
  const user = useSelector((state) => state.user.user);
  // Handle form submission
  const handleFormSubmit = async (values) => {
    setUploading(true);
    if (!file) {
      message.error("Please select an audio file to upload.");
      return;
    }

    const formData = new FormData();

    formData.append("post", values.post);
    formData.append("audioFile", file);

    try {
      const response = await addNewForums(formData).unwrap();
      // console.log("Confession added:", response);
      if (response.success) {
        message.success("Confession added successfully!");
        setUploading(false);
        form.resetFields();
        setFile(null);
        onCancel && onCancel();
      }
    } catch (error) {
      setUploading(false);
      message.error(error.data.message);
      console.error("Error adding confession:", error);
    }
  };

  useEffect(() => {
    return () => {
      // Revoke preview URLs to avoid memory leaks
      if (file) {
        URL.revokeObjectURL(file.preview);
      }
    };
  }, [file]);

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      centered
      footer={null}
      className="lg:!w-[50vw] sm:!w=full "
      // width={800}
    >
      <div className="container mx-auto text-secondary">
        <div className="flex items-center justify-between py-6 ">
          <div>
            <h2 className="text-[24px] flex space-x-2 items-center font-bold">
              Add Post
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

            <Form.Item
              label="Upload Audio"
              rules={[
                {
                  validator: () =>
                    file
                      ? Promise.resolve()
                      : Promise.reject("File is required."),
                },
              ]}
            >
              <div
                {...getRootProps()}
                style={{
                  border: "2px dashed #7C7C7C",
                  borderRadius: "20px",
                  padding: "20px",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <input {...getInputProps()} />
                <p className="text-center text-[16px] font-medium text-secondary">
                  Drop your .wav file here, or{" "}
                  <span className="text-primary">browse</span>
                </p>
              </div>

              <div className="p-6 border text-secondary rounded-lg">
                {file && (
                  <div>
                    <ul className="text-secondary mb-4">
                      <li>
                        <strong>File Name:</strong> {file.name}
                      </li>
                      <li>
                        <strong>File Size:</strong>{" "}
                        {(file.size / 1024 / 1024).toFixed(2)} MB
                      </li>
                      <li>
                        <strong>Duration:</strong>{" "}
                        {duration ? `${duration} seconds` : "Loading..."}
                      </li>
                    </ul>
                    <audio controls src={file.preview} className="w-full">
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                )}
              </div>
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
                disabled={uploading || !file}
              >
                {uploading ? "Uploading..." : "Submit"}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </Modal>
  );
};
