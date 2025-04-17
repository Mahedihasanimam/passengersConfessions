import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, Input, message } from "antd";
import React, { useState } from "react";
import {
  useConfirmPaymentMutation,
  useCreatePaymentIntentMutation,
  useLazyGetAffiliateByCodeQuery,
} from "../../../redux/apiSlices/paymentApisSlice";

import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import PaySuccessModal from "../../components/util/paySuccessModal";

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
  const [checkAffiliateCode] = useLazyGetAffiliateByCodeQuery();

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
        subscriptionPlan: data?.name,
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
        const { value: referralCode } = await Swal.fire({
          title: "Enter Referral Code",
          input: "text", // Type of input (text, email, number, etc.)
          inputPlaceholder: "Enter your referral code here...",
          showCancelButton: true,
          confirmButtonText: "Submit",
          cancelButtonText: "Continue without referral",
          confirmButtonColor: "#17a2b8",
          cancelButtonColor: "#FF0048",
          inputValidator: async (value) => {
            if (!value) {
              return "Please enter a referral code!";
            }
            if (value) {
              const affiliateRes = await checkAffiliateCode(value);
              if (affiliateRes?.error?.data?.message) {
                return affiliateRes?.error?.data?.message;
              }
            }
          },
        });

        if (referralCode) {
          // Process the referral code
          console.log({
            paymentIntentId: paymentIntent.id,
            subscriptionPlan: data?.name,
            affiliateCode: referralCode,
            price: data?.price,
          });
          const res = await confirmPayment({
            paymentIntentId: paymentIntent.id,
            subscriptionPlan: data?.name,
            affiliateCode: referralCode,
            price: data?.price,
          }).unwrap();
          setLoading(false);
          if (res?.success) {
            onPaymentSuccess();
            setLoading(false);
          }
        } else {
          const confirmData = await confirmPayment({
            paymentIntentId: paymentIntent.id,
            subscriptionPlan: data?.name,
            affiliateCode: referralCode,
            price: data?.price,
          }).unwrap();
          if (confirmData?.success) {
            onPaymentSuccess();
            setLoading(false);
          }
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
  const isYearly = data?.duration === 365;
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* <Card className="rounded-lg shadow-lg border ">
        <h2 className="text-xl font-semibold text-gray-800 ">
          Plan: <span className="capitalize">{data?.name}</span>
        </h2>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-gray-700">Price: </span>
          <span className="text-gray-800 font-medium">{data?.price}</span>
        </p>
        <p className="text-lg text-gray-700">
          <span className="font-semibold text-gray-700">Duration: </span>
          <span>{isYearly ? "Yearly" : "Monthly"}</span>
        </p>
      </Card> */}
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

const PaymentProducer = () => {
  const { state } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePaymentSuccess = () => {
    setIsModalOpen(true);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="col-span-2 flex flex-col items-center space-y-4">
          <img
            src="/public/payment.svg"
            alt="Payment Methods"
            className="h-[50vh] aspect-square"
          />
        </div>

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

export default PaymentProducer;
