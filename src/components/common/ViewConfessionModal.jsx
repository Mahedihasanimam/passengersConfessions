import { Modal, Switch } from "antd";
import React, { useState } from "react";

import AudioPlayer from "react-h5-audio-player";
import { BiLoader } from "react-icons/bi";
import { imageUrl } from "../../../redux/api/baseApi";

const ViewConfessionModal = ({ confession, visible, onCancel }) => {
  const [isVideoMode, setIsVideoMode] = useState(false); // Toggle between audio and video mode

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      centered
      footer={null}
      className="lg:!w-[50vw] sm:!w-full my-3"
    >
      {!confession ? (
        <div className="h-[50vh] flex justify-center items-center">
          <span className="animate-spin">
            <BiLoader color="#FF0048" size={50} />
          </span>
        </div>
      ) : (
        <div className="p-4 border border-gray-200 rounded-lg flex flex-col justify-between bg-white shadow-sm relative">
          <div className="flex">
            {/* <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
              <img
                src={imageUrl + confession?.user?.image}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div> */}
            <div>
              <h2 className="font-semibold text-secondary">
                {confession?.title}
              </h2>
              <p className="text-tertiary">{confession?.description}</p>
            </div>
          </div>

          {/* Audio/Video Switch */}
          {confession?.confessionVideoUrl && (
            <div className="flex items-center mb-3">
              <span className="mr-2 font-semibold">Audio</span>
              <Switch
                checkedChildren="Audio"
                unCheckedChildren="Video"
                autoFocus
                style={{
                  backgroundColor: isVideoMode ? "#FF0048" : undefined,
                }}
                checked={isVideoMode}
                onChange={() => setIsVideoMode(!isVideoMode)}
              />
              <span className="ml-2 font-semibold">Video</span>
            </div>
          )}

          {/* Video or Audio Display */}
          {confession?.confessionVideoUrl && isVideoMode ? (
            <div className="w-full mt-3">
              <video
                className="w-full bg-primary custom-audio-player rounded-md"
                src={imageUrl + confession?.confessionVideoUrl}
                controls
              />
            </div>
          ) : (
            confession?.confessionAudioUrl && (
              <div className="w-full mt-3">
                <AudioPlayer
                  className="w-full bg-primary custom-audio-player"
                  src={imageUrl + confession?.confessionAudioUrl}
                  onPlay={(e) => console.log("onPlay")}
                />
              </div>
            )
          )}
        </div>
      )}
    </Modal>
  );
};

export default ViewConfessionModal;
