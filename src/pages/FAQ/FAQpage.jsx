import { Collapse } from "antd";
import React from "react";
import { useGetAllFAQsQuery } from "../../../redux/apiSlices/settingApiSlice";

const { Panel } = Collapse;

const FAQPage = () => {
  const { data: FAQs } = useGetAllFAQsQuery({});
  return (
    <div className="container mx-auto my-10 p-4 bg-white rounded">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h2>
      <Collapse defaultActiveKey={["1"]} accordion>
        {FAQs?.data?.map((faq) => (
          <Panel
            className="text-gray-700 text-xl"
            header={faq.question}
            key={faq._id}
          >
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

export default FAQPage;
