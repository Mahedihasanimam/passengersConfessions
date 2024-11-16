// import React, { useEffect, useState } from "react";
// import { MdOutlineChevronLeft } from "react-icons/md";
// import { Input, Form, Button, Progress, message } from "antd";
// import { useDropzone } from "react-dropzone";
// import { useNavigate } from "react-router-dom";

// const AddAConfession = () => {
//   const navigate = useNavigate();
//   const [form] = Form.useForm();
//   const [files, setFiles] = useState([]);
//   const [uploading, setUploading] = useState(false);
//   const [progress, setProgress] = useState(0);
//   const maxFiles = 4;

//   // Handle form submission
//   const handleFinish = (values) => {
//     const allValues = {
//       ...values,
//       files: files,
//     };

//     console.log("All form data with files:", allValues);
//     // Example of form submission:
//     // history.push("/proparty/finishandpublish");
//   };

//   // Handle file drop (via react-dropzone)
//   const onDrop = (acceptedFiles) => {
//     if (files.length + acceptedFiles.length > maxFiles) {
//       message.error(`You can only upload up to ${maxFiles} files.`);
//       return;
//     }
//     const newFiles = acceptedFiles.map((file) =>
//       Object.assign(file, { preview: URL.createObjectURL(file) })
//     );
//     setFiles((prevFiles) => [...prevFiles, ...newFiles]);
//   };

//   // Upload handler with progress tracking
//   const handleUpload = async () => {
//     if (files.length === 0) {
//       message.error("Please select files to upload.");
//       return;
//     }

//     setUploading(true);
//     const totalFiles = files.length;
//     let totalUploaded = 0;

//     for (const file of files) {
//       const formData = new FormData();
//       formData.append("file", file);
//         console.log(formData)
//     //   try {
//     //     const response = await fetch("/upload", {
//     //       method: "POST",
//     //       body: formData,
//     //     });

//     //     if (!response.ok) {
//     //       throw new Error("Upload failed.");
//     //     }

//     //     // Track upload progress
//     //     const reader = response.body.getReader();
//     //     const contentLength = response.headers.get("Content-Length");
//     //     let receivedLength = 0;

//     //     while (true) {
//     //       const { done, value } = await reader.read();
//     //       if (done) break;
//     //       receivedLength += value.length;
//     //       const percent = Math.floor((receivedLength / contentLength) * 100);
//     //       setProgress(
//     //         (totalUploaded / totalFiles) * 100 + percent / totalFiles
//     //       );
//     //     }

//     //     totalUploaded++;
//     //     message.success(`Upload successful for ${file.name}!`);
//     //   } catch (error) {
//     //     message.error(`Upload failed for ${file.name}.`);
//     //   }
//     }

//     // Reset after upload
//     setFiles([]);
//     setProgress(0);
//     setUploading(false);
//   };

//   const { getRootProps, getInputProps } = useDropzone({ onDrop });

//   return (
//     <div className="container mx-auto text-secondary">
//       <div className="flex items-center justify-between py-6 mt-12">
//         <div>
//           <h2 className="text-[24px] flex space-x-2 items-center font-bold">
//             <button onClick={() => navigate(-1)} className="focus:outline-none">
//               <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
//             </button>
//             Add Confessions
//           </h2>
//         </div>
//       </div>

//       <div>
//         <Form form={form} onFinish={handleFinish} className="w-full">
//           <div style={{ padding: "20px" }}>
//             <div
//               {...getRootProps()}
//               style={{
//                 border: "2px dashed #7C7C7C",
//                 borderRadius: "20px",
//                 padding: "20px",
//                 marginBottom: "10px",
//                 cursor: "pointer",
//               }}
//             >
//               <input {...getInputProps()} />
//               <div className="text-center">
//                 <div className="w-fit mx-auto pb-4">
//                   <svg
//                     width="92"
//                     height="118"
//                     viewBox="0 0 92 118"
//                     fill="none"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M37.875 102.498C41.411 102.498 44.3988 101.278 46.8385 98.8385C49.2782 96.3945 50.498 93.4067 50.498 89.875V64.005H68.2495V53.995H45.4995V80.5605C44.4768 79.4468 43.3285 78.617 42.0545 78.071C40.7848 77.525 39.3917 77.252 37.875 77.252C34.3433 77.252 31.3555 78.4718 28.9115 80.9115C26.4718 83.3555 25.252 86.3433 25.252 89.875C25.252 93.4067 26.4718 96.3945 28.9115 98.8385C31.3555 101.278 34.3433 102.498 37.875 102.498ZM11.004 117.5C8.00967 117.5 5.5115 116.499 3.5095 114.497C1.5075 112.495 0.504333 109.997 0.5 107.003V10.9975C0.5 8.0075 1.50317 5.5115 3.5095 3.5095C5.51583 1.5075 8.014 0.504333 11.004 0.5H62.25L91.5 29.75V107.003C91.5 109.993 90.499 112.491 88.497 114.497C86.495 116.503 83.9947 117.504 80.996 117.5H11.004ZM59 33H85L59 7V33Z"
//                       fill="#B0B0B0"
//                     />
//                   </svg>
//                 </div>
//                 <p className="text-[16px] font-medium text-secondary">
//                   Drop your audio file here, or{" "}
//                   <span className="text-primary">browse</span>
//                 </p>
//               </div>
//             </div>

//             {files.length > 0 && (
//               <div>
//                 <ul className="text-white">
//                   {files.map((file, index) => (
//                     <li key={index}>{file.name}</li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           {/* Progress Bar */}
//           <Progress
//             percent={progress}
//             status={progress === 100 ? "success" : "active"}
//           />

//           <div className="py-4 flex justify-center w-1/2 mx-auto">
//             <Button
//               onClick={handleUpload}
//               type="primary"
//               htmlType="submit"
//               style={{
//                 backgroundColor: "#FF0048",
//                 color: "white",
//                 height: "44px",
//                 fontSize: "16px",
//                 fontWeight: "bold",
//               }}
//               className="w-full border-none text-white px-6 py-2 rounded-lg"
//               disabled={uploading}
//             >
//               {uploading ? "Uploading..." : "Submit"}
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default AddAConfession;


import React, { useEffect, useState } from "react";
import { MdOutlineChevronLeft } from "react-icons/md";
import { Input, Form, Button, Progress, message } from "antd";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";

const AddAConfession = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [file, setFile] = useState(null);  // Only one file is allowed
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0); // Progress tracking
  const maxFiles = 1; // Only one file can be uploaded

  // Handle file drop
  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > maxFiles) {
      message.error(`You can only upload up to ${maxFiles} audio file.`);
      return;
    }
    const newFile = acceptedFiles[0];
    setFile(Object.assign(newFile, { preview: URL.createObjectURL(newFile) }));
  };

  // Simulate the file upload progress
  const handleUpload = async () => {
    if (!file) {
      message.error("Please select an audio file to upload.");
      return;
    }

    setUploading(true);
    setProgress(0);  // Reset progress bar

    // Simulate file upload (you can replace this with actual file upload logic)
    const formData = new FormData();
    formData.append("file", file);
   const interval = setInterval(() => {
        setProgress((prevProgress) => {
          if (prevProgress >= 100) {
            clearInterval(interval); // Stop when progress reaches 100%
            message.success("File uploaded successfully!");
            return 100;
          }
          return prevProgress + 10; // Increase progress by 10 every second
        });
      }, 500);
    // try {
    //   const response = await fetch("/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     throw new Error("Upload failed.");
    //   }

    //   // Simulate progress bar fill-up
    //   const interval = setInterval(() => {
    //     setProgress((prevProgress) => {
    //       if (prevProgress >= 100) {
    //         clearInterval(interval); // Stop when progress reaches 100%
    //         message.success("File uploaded successfully!");
    //         return 100;
    //       }
    //       return prevProgress + 10; // Increase progress by 10 every second
    //     });
    //   }, 500);

    // } catch (error) {
    //   message.error("Upload failed.");
    // } finally {
    //   setUploading(false);
    // }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: "audio/*" });

  return (
    <div className="container mx-auto text-secondary">
      <div className="flex items-center justify-between py-6 mt-12">
        <div>
          <h2 className="text-[24px] flex space-x-2 items-center font-bold">
            <button onClick={() => navigate(-1)} className="focus:outline-none">
              <MdOutlineChevronLeft className="text-4xl cursor-pointer" />
            </button>
            Add Confessions
          </h2>
        </div>
      </div>

      <div>
        <Form form={form} onFinish={handleUpload} className="w-full">
          <div style={{ padding: "20px" }}>
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
              <div className="text-center">
                <div className="w-fit mx-auto pb-4">
                  <svg width="92" height="118" viewBox="0 0 92 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M37.875 102.498C41.411 102.498 44.3988 101.278 46.8385 98.8385C49.2782 96.3945 50.498 93.4067 50.498 89.875V64.005H68.2495V53.995H45.4995V80.5605C44.4768 79.4468 43.3285 78.617 42.0545 78.071C40.7848 77.525 39.3917 77.252 37.875 77.252C34.3433 77.252 31.3555 78.4718 28.9115 80.9115C26.4718 83.3555 25.252 86.3433 25.252 89.875C25.252 93.4067 26.4718 96.3945 28.9115 98.8385C31.3555 101.278 34.3433 102.498 37.875 102.498ZM11.004 117.5C8.00967 117.5 5.5115 116.499 3.5095 114.497C1.5075 112.495 0.504333 109.997 0.5 107.003V10.9975C0.5 8.0075 1.50317 5.5115 3.5095 3.5095C5.51583 1.5075 8.014 0.504333 11.004 0.5H62.25L91.5 29.75V107.003C91.5 109.993 90.499 112.491 88.497 114.497C86.495 116.503 83.9947 117.504 80.996 117.5H11.004ZM59 33H85L59 7V33Z" fill="#B0B0B0"/>
                  </svg>
                </div>
                <p className="text-[16px] font-medium text-secondary">Drop your audio file here, or <span className="text-primary">browse</span></p>
              </div>
            </div>

          <div className="p-6 border text-secondary rounded-lg">
          {file && (
              <div>
                <ul className="text-white">
                  <li className="text-secondary">{file.name}</li>
                </ul>
              </div>
            )}
          <Progress className="mt-4" percent={progress} status={progress === 100 ? 'success' : 'active'} />
          </div>

          </div>

          <div className="py-4 flex justify-center w-1/2 mx-auto">
            <Button
              onClick={handleUpload}
              type="primary"
              htmlType="submit"
              style={{
                backgroundColor: "#FF0048",
                color: "white",
                height: "44px",
                fontSize: '16px',
                fontWeight: 'bold',
              }}
              className="w-full border-none text-white px-6 py-2 rounded-lg"
              disabled={uploading || !file}
            >
              {uploading ? 'Uploading...' : 'Submit'}
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddAConfession;
