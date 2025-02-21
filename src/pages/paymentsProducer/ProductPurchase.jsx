import { Button, Card, Input, Tag, Typography, message } from "antd";
import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";
import {
  useConfirmPaymentMutation,
  useCreatePaymentIntentMutation,
} from "../../../redux/apiSlices/paymentApisSlice";

import PaySuccessModal from "../../components/util/paySuccessModal";
import { imageUrl } from "../../../redux/api/baseApi";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";

// Load your Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_ADMIN_STRIPE_KEY);

const PaymentForm = ({ onPaymentSuccess, data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);

  const [createPaymentIntent] = useCreatePaymentIntentMutation();
  const [confirmPayment] = useConfirmPaymentMutation();

  //   console.log(import.meta.env.VITE_ADMIN_STRIPE_KEY);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (!stripe || !elements) {
        setLoading(false);
        return;
      }

      const cardElement = elements.getElement(CardElement);

      // Step 1: Call your backend to create a PaymentIntent
      const res = await createPaymentIntent({
        bookId: data?._id,
        paymentMethodId: "pm_card_visa", // Use actual card method ID
        amount: data?.price,
      }).unwrap();

      //   console.log(res);

      if (!res?.data?.client_secret) {
        message.error("Client secret is not found");
        setLoading(false);
        return;
      }

      // Step 2: Confirm the payment using the PaymentIntent's client secret
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        res?.data?.client_secret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: cardholderName,
              email,
            },
          },
        }
      );

      if (paymentIntent?.id) {
        const confirmData = await confirmPayment({
          paymentIntentId: paymentIntent.id,
          bookId: data?._id,
          price: data?.price,
        }).unwrap();
        if (confirmData?.success) {
          onPaymentSuccess();
          setLoading(false);
        }
      }

      // Step 3: Handle the response
      if (error) {
        console.error(error);
        setLoading(false);
        message.error(error.message);
      } else {
        // how to get input filt for refer code on useing useing sweet alter swl.fire()
        // console.log(paymentIntent);
      }
    } catch (error) {
      setLoading(false);
      message.error(error?.data?.message);
    }
  };
  //   console.log(data);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <Input
          placeholder="Cardholder Name"
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="p-2 rounded-lg border border-gray-300"
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 rounded-lg border border-gray-300"
        />
      </div>
      <div className="p-4 border rounded-lg shadow-md">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
            hidePostalCode: true, // Add this line to hide the postal code field
          }}
        />
      </div>
      <Button
        loading={loading}
        type="primary"
        htmlType="submit"
        style={{ backgroundColor: "#FF0048", color: "white", height: "44px" }}
        className="w-full"
      >
        Pay ${data?.price}
      </Button>
    </form>
  );
};
const { Title, Text } = Typography;
const ProductPurchase = () => {
  const { state } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  console.log(state);

  const handlePaymentSuccess = () => {
    setIsModalOpen(true);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6 min-h-[58vh] items-center">
        {/* Left Side */}
        <Card
          hoverable
          className="w-full h-80 col-span-2 flex max-w-4xl mx-auto shadow-lg rounded-lg overflow-hidden"
          cover={
            <img
              alt={state?.bookName}
              src={`${imageUrl + state?.bookCoverImage}`}
              className="h-80 object-cover"
            />
          }
        >
          <div className="p-4">
            <Title level={3} className="text-lg font-semibold">
              {state?.bookName}
            </Title>
            <Text strong className="block text-lg">
              Author: {state?.authorName}
            </Text>
            <Text className="block text-gray-600 mb-2">
              {state?.description}
            </Text>
            <Text strong className="text-lg">
              Price: <span className="text-green-600">${state?.price}</span>
            </Text>

            <div className="mt-3 flex space-x-2">
              {state?.languages?.map((lang) => (
                <Tag key={lang} color="blue">
                  {lang}
                </Tag>
              ))}
            </div>
          </div>
        </Card>

        {/* Center - Stripe Payment Form */}
        <div className="col-span-1">
          <div className="shadow-lg p-6 rounded-lg bg-white">
            <h2 className="text-2xl font-bold mb-4">Payment Details</h2>
            <PaymentForm onPaymentSuccess={handlePaymentSuccess} data={state} />
          </div>
        </div>
      </div>

      <PaySuccessModal
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </Elements>
  );
};

export default ProductPurchase;
