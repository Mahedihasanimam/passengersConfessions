import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
// Import the styles
import "@react-pdf-viewer/core/lib/styles/index.css";

import { Button, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useAddNewBookReviewMutation,
  useGetReviewByBookIdQuery,
} from "../../../../redux/apiSlices/reviewRatingApiSlice";

import { LeftOutlined } from "@ant-design/icons";
import { imageUrl } from "../../../../redux/api/baseApi";
import { useGetBookByIdQuery } from "../../../../redux/apiSlices/bookApiSlice";
import { SubscriptionModal } from "../../common/SubsciptionModal";
import GLoading from "../../GLoading";
// Import the main component
import { useSelector } from "react-redux";

// Create new plugin instance
// const characterMap = {
//   isCompressed: true,
//   // The url has to end with "/"
//   url: "https://unpkg.com/pdfjs-dist@2.6.347/cmaps/",
// };

const BookDetails = () => {
  const navigate = useNavigate();
  const params = useParams();

  // Create custom plugin instance without download button

  const {
    data: Book,
    isLoading: bookIsLoading,
    isFetching: bookIsFetching,
  } = useGetBookByIdQuery(params.id);

  const {
    data: allReview,
    isFetching: reviewIsFetching,
    isLoading: reviewIsLoading,
  } = useGetReviewByBookIdQuery(params.id);

  const [addReview] = useAddNewBookReviewMutation({});
  const user = useSelector((state) => state.user.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setSubmitting(true);
      await addReview({
        ...values,
        bookId: params?.id,
      }).unwrap();
      message.success("Review submitted successfully!");
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

  console.log(Book?.data);

  return (
    <div className="container mx-auto p-6 rounded-lg min-h-[60vh]">
      {bookIsLoading ||
      bookIsFetching ||
      reviewIsFetching ||
      reviewIsLoading ? (
        <GLoading />
      ) : (
        <>
          <div className="flex items-center py-4 pb-6">
            <LeftOutlined
              onClick={() => navigate(-1)}
              className="text-2xl font-bold pr-1"
            />
            <h1 className="text-3xl font-bold mb-1">{Book?.data?.bookName}</h1>
          </div>
          <div className="lg:flex flex-row items-center justify-between gap-4">
            <div className="lg:max-w-sm w-full mx-auto">
              <img
                src={imageUrl + Book?.data?.bookCoverImage}
                alt="Book Cover"
                className="w-full rounded-lg mb-4"
              />
            </div>

            <div className="w-full">
              <div className="flex-1 pl-6">
                {Book?.data?.price &&
                  !user?.isBasicSubscribed &&
                  !user?.isPremiumSubscribed && (
                    <h1 className="text-3xl font-bold mb-2 text-primary">
                      ${Book?.data?.price}
                    </h1>
                  )}

                <h1 className="text-3xl font-bold mb-2">
                  {Book?.data?.bookName}
                </h1>
                <h2 className="text-gray-600 mb-4">{Book?.data?.authorName}</h2>
                <p className="mb-4">{Book?.data?.description}</p>

                {/* Preview PDF Button */}
                {!user?.isBasicSubscribed &&
                  !user?.isPremiumSubscribed &&
                  Book?.data?.previewPdfUrls?.length > 0 && (
                    <div className="mb-4">
                      <Button
                        onClick={() =>
                          navigate(`/read-mode`, {
                            state: imageUrl + Book?.data?.previewPdfUrls[0],
                          })
                        }
                        type="primary"
                        style={{
                          backgroundColor: "#000",
                          color: "white",
                          height: "35px",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                        className="w-full border-none text-white px-6 py-2 rounded-lg"
                      >
                        Preview PDF
                      </Button>
                    </div>
                  )}

                {/* PDF Preview Modal */}

                {(user?.isBasicSubscribed || user?.isPremiumSubscribed) && (
                  <div className="mb-4">
                    <Button
                      onClick={() =>
                        navigate(`/read-mode`, {
                          state: imageUrl + Book?.data?.pdfUrls[0],
                        })
                      }
                      type="primary"
                      style={{
                        backgroundColor: "#FF0048",
                        color: "white",
                        height: "35px",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                      className="w-full border-none text-white px-6 py-2 rounded-lg"
                    >
                      Read PDF
                    </Button>
                  </div>
                )}

                {!user?.isBasicSubscribed && !user?.isPremiumSubscribed && (
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button
                      onClick={() =>
                        navigate(`/product-payment/${params?.id}`, {
                          state: Book?.data,
                        })
                      }
                      type="primary"
                      style={{
                        backgroundColor: "#FF0048",
                        color: "white",
                        height: "35px",
                        fontSize: "16px",
                        fontWeight: "bold",
                      }}
                      className="w-full border-none text-white px-6 py-2 rounded-lg"
                    >
                      Buy
                    </Button>
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
                      className="w-full border-none text-white px-6 py-2 rounded-lg"
                    >
                      Subscribe
                    </Button>
                  </div>
                )}
              </div>
            </div>

            <div className="flex-shrink-0 w-fit">
              <h3 className="text-lg font-semibold mb-2">Language Option</h3>
              <div className="grid grid-cols-2 gap-2">
                {Book?.data?.languages?.length > 0 &&
                  Book?.data?.languages?.map((language) => {
                    if (language === "english") {
                      return (
                        <div
                          key={language}
                          className="flex items-center p-2 bg-gray-100 rounded-md gap-2"
                        >
                          <img
                            src={"/public/english.svg"}
                            className="w-6 h-6"
                          />
                          <span className="text-sm">English</span>
                        </div>
                      );
                    }
                    if (language === "simplified_chinese") {
                      return (
                        <div
                          key={language}
                          className="flex items-center p-2 bg-gray-100 rounded-md gap-2"
                        >
                          <img src={"/public/chinaa.svg"} className="w-6 h-6" />
                          <span className="text-sm">SIMPLIFIED CHINESE</span>
                        </div>
                      );
                    }
                    if (language === "traditional_chinese") {
                      return (
                        <div
                          key={language}
                          className="flex items-center p-2 bg-gray-100 rounded-md gap-2"
                        >
                          <img src={"/public/chinaa.svg"} className="w-6 h-6" />
                          <span className="text-sm">TRADITIONAL CHINESE</span>
                        </div>
                      );
                    }
                    if (language === "spanish") {
                      return (
                        <div
                          key={language}
                          className="flex items-center p-2 bg-gray-100 rounded-md gap-2"
                        >
                          <img src={"/public/spania.svg"} className="w-6 h-6" />
                          <span className="text-sm">Spanish</span>
                        </div>
                      );
                    }
                    if (language === "french") {
                      return (
                        <div
                          key={language}
                          className="flex items-center p-2 bg-gray-100 rounded-md gap-2"
                        >
                          <img src={"/public/france.svg"} className="w-6 h-6" />
                          <span className="text-sm">France</span>
                        </div>
                      );
                    }
                  })}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Customer Review</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              {allReview?.data?.map((review) => (
                <div
                  key={review?._id}
                  className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
                    <img
                      src={imageUrl + review?.user?.image}
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <h2 className="font-semibold text-secondary">
                      {review?.user?.name}
                    </h2>
                    <p className="text-tertiary mt-2">{review?.review}</p>
                  </div>
                </div>
              ))}
            </div>
            {user?._id && (
              <>
                {allReview?.data?.find(
                  (review) => review?.user?._id === user?._id
                ) ? (
                  <i className="text-tertiary mt-2 text-xs">
                    You have reviewed this book
                  </i>
                ) : (
                  <div className="p-4 border rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">
                      Add Your Review
                    </h3>

                    <Form form={form} layout="vertical" onFinish={handleSubmit}>
                      <Form.Item
                        name="review"
                        label="Your Review"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your review!",
                          },
                        ]}
                      >
                        <Input.TextArea
                          style={{
                            border: "none",
                            outline: "none",
                          }}
                          rows={4}
                          placeholder="Write your review here..."
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
                          Submit Review
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                )}
              </>
            )}
          </div>
        </>
      )}

      <SubscriptionModal onCancel={handleCloseModal} visible={isModalOpen} />
    </div>
  );
};

export default BookDetails;
