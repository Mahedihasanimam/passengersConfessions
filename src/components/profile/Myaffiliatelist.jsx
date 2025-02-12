import "antd/dist/reset.css";

import { Button, Card, Col, Row, Statistic, Table, message } from "antd";
import React, { useState } from "react";

import { useSelector } from "react-redux";
import { useConnectToStripMutation } from "../../../redux/apiSlices/userApis";

const Myaffiliatelist = () => {
  const user = useSelector((state) => state?.user?.user);
  const [connectStipe] = useConnectToStripMutation();
  console.log(user);

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

  const handleConnectStrip = async () => {
    try {
      const res = await connectStipe({
        frontendURL: window.location.href,
      }).unwrap();
      if (res.success) {
        message.success(res.message);
        window.location.href = res?.data?.url;
      }
    } catch (error) {
      message.error(error?.data?.message);
    }
  };

  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">My affiliate</h1>

      <Row gutter={[16, 16]}>
        {/* 1st Box: Plan Purchased Status */}
        {!user?.affiliate?.stripeAccountId && (
          <Col span={8}>
            <Card title="Plan Purchased Status" bordered={true}>
              <p className="font-medium text-gray-400">
                Please Connect your stipe :
                <Button
                  onClick={handleConnectStrip}
                  size="small"
                  style={{ background: "#FF0048" }}
                  className="text-white font-semibold hover:!text-blue-800 hover:!bg-white"
                >
                  Connect Stripe
                </Button>
              </p>
            </Card>
          </Col>
        )}
        {user?.affiliate?.stripeAccountId && (
          <>
            {/* 2nd Box: Affiliate Earnings */}
            <Col span={8}>
              <Card title="Affiliate Earnings" bordered={true}>
                <Statistic
                  title="Total Earnings"
                  value={user?.balance}
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
                  Your referral code:{" "}
                  <strong>{user?.affiliate?.affiliateCode}</strong>
                </p>
                <p>Share this code to earn rewards!</p>
              </Card>
            </Col>
          </>
        )}
      </Row>
      {user?.affiliate?.stripeAccountId && (
        <>
          <Table
            columns={columns}
            dataSource={paginatedData}
            pagination={{
              pageSize: 10, // Number of rows per page
              //   showSizeChanger: true, // Allow users to change page size
            }}
            className="border rounded-md shadow-md mt-3"
          />
        </>
      )}
    </div>
  );
};

export default Myaffiliatelist;
