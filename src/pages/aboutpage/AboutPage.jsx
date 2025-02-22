import React from "react";
import { useGetAboutUsQuery } from "../../../redux/apiSlices/settingApiSlice";

const AboutPage = () => {
  const { data: AboutUs } = useGetAboutUsQuery({});

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Us</h1>

      <div dangerouslySetInnerHTML={{ __html: AboutUs?.data?.content }} />
    </div>
  );
};

export default AboutPage;
