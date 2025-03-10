import React from "react";
import { useGetTermsAndConditionQuery } from "../../../redux/apiSlices/settingApiSlice";

const TermsAndConditions = () => {
  const { data: terms } = useGetTermsAndConditionQuery({});

  // console.log(terms?.data);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Terms and Conditions
      </h1>

      <div dangerouslySetInnerHTML={{ __html: terms?.data?.content }} />
    </div>
  );
};

export default TermsAndConditions;
