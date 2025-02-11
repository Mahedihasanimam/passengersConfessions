import "antd/dist/reset.css";

import { Card, Col, Pagination, Row, Statistic, Table } from "antd";
import React, { useState } from "react";

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
    earnings: ["$240,000", "$9,999,900", "$2,000,000", "$3,000,000"][index % 4],
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
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My affiliate</h1>

      <Row gutter={[16, 16]}>
        {/* 1st Box: Plan Purchased Status */}
        {/* <Col span={8}>
          <Card title="Plan Purchased Status" bordered={true}>
            <p>
              Your current plan: <strong>Premium</strong>
            </p>
            <p>
              Plan expiration: <strong>December 31, 2025</strong>
            </p>
          </Card>
        </Col> */}

        {/* 2nd Box: Affiliate Earnings */}
        <Col span={8}>
          <Card title="Affiliate Earnings" bordered={true}>
            <Statistic
              title="Total Earnings"
              value={1250.5}
              precision={2}
              prefix="$"
              valueStyle={{ color: "#3f8600" }}
            />
          </Card>
        </Col>

        {/* 3rd Box: Affiliate Referral Code */}
        <Col span={8}>
          <Card title="Affiliate Referral Code" bordered={true}>
            <p>
              Your referral code: <strong>ABC123</strong>
            </p>
            <p>Share this code to earn rewards!</p>
          </Card>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={paginatedData}
        pagination={false}
        className="border rounded-md shadow-md mt-3"
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
