import "antd/dist/reset.css";

import { Button, Card, Col, Row, Statistic, Table, message } from "antd";

import React from "react";
import { useSelector } from "react-redux";
import { useGetAllTransactionsByIdQuery } from "../../../redux/apiSlices/paymentApisSlice";
import { useConnectToStripMutation } from "../../../redux/apiSlices/userApis";

const Myaffiliatelist = () => {
  const user = useSelector((state) => state?.user?.user);

  // console.log(user);

  const { data: affiliateTransactions } = useGetAllTransactionsByIdQuery(
    user?.affiliate?._id
  );
  const [connectStipe] = useConnectToStripMutation();
  // console.log(affiliateTransactions, user);

  // Columns definition
  const columns = [
    {
      title: "Title",
      dataIndex: "subscription",
      key: "subscription",
      render: (text) => {
        // console.log(text);
        return (
          <span className="text-gray-900 font-semibold">{text?.name}</span>
        );
      },
    },

    {
      title: "Earnings",
      dataIndex: "subscription",
      key: "subscription",
      render: (text) => (
        <span className="text-green-500">${text?.affiliateComission}</span>
      ),
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
                  // value={user?.balance}
                  value={
                    affiliateTransactions?.data?.reduce(
                      (total, transaction) =>
                        total + transaction?.subscription?.affiliateComission,
                      0
                    ) || 0
                  }
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
            dataSource={affiliateTransactions?.data}
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
