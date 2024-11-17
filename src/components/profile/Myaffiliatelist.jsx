import React, { useState } from "react";
import { Table, Button, Pagination } from "antd";
import "antd/dist/reset.css";

const Myaffiliatelist = () => {
  // Sample data to replicate the table
  const data = Array.from({ length: 100 }, (_, index) => ({
    key: index + 1,
    title: [
      "The Truth I've Been Hiding",
      "Secrets I never told ch...",
      "The love I never told you...",
      "What I have done never t...",
    ][index % 4],
    link: "http://search?245sca...",
    earnings: ["$240,000", "$9,999,900", "$2,000,000", "$3,000,000"][
      index % 4
    ],
    level: (index % 4) + 1,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  // Pagination handling
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Data for current page
  const paginatedData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // Columns definition
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <span className="text-gray-900 font-semibold">{text}</span>
      ),
    },
    {
      title: "Link",
      dataIndex: "link",
      key: "link",
      render: (text) => (
        <div className="flex items-center justify-between   rounded-lg border">
          <span className="text-[#1677FF] truncate p-[2px]">{text}</span>
          <Button
            size="small"
            type="primary"
            className="bg-primary "
            onClick={() => navigator.clipboard.writeText(text)}
          >
            Copy
          </Button>
        </div>
      ),
    },
    {
      title: "Earnings",
      dataIndex: "earnings",
      key: "earnings",
      render: (text) => <span className="text-green-500">{text}</span>,
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
      render: (text) => <span>{text}</span>,
    },
  ];

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My affiliate list</h1>
      <p className="text-gray-600 mb-6">
        Here you can see the all of your list of affiliate product & also see
        the earnings of each product.
      </p>
      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        className="border rounded-md shadow-md"
      />
      <div className="flex justify-between items-center mt-4">
        <Pagination
          current={currentPage}
          total={data.length}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default Myaffiliatelist;
