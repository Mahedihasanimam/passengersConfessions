import { Button, Input } from 'antd';
import React, { useState } from 'react';
import detailimg from '../../assets/bookDetails.png'
import { LiaCcVisa } from 'react-icons/lia';
import { FaCcMastercard } from 'react-icons/fa';

import visa from '../../assets/visa.png'
import mastercard from '../../assets/master.png'
import PaySuccessModal from '../../components/util/paySuccessModal';
const PaymentProducer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handlePymentSuccess = () => {
        setIsModalOpen(true);
    };
    return (
        <div className='container mx-auto py-6'>
            <div className='flex items-center justify-between shadow-lg p-4 rounded-lg'>
            <div className=" lg:max-w-sm w-full mx-auto">
                    <img
                        src={detailimg} // Replace with actual image
                        alt="Immortal Chase"
                        className="w-full  rounded-lg mb-4"
                    />

                </div>


                <div className='w-full '>
                    <div className="flex-1 pl-6 ">
                        <h1 className="text-3xl font-bold mb-2">Sophi unconditional</h1>
                        <h2 className="text-gray-600 mb-4">Jason J Campbell</h2>
                        <p className="mb-4">
                            Lorem ipsum dolor sit amet consectetur. Amet tincidunt libero felis nunc sit. Sit lacinia proin etiam odio orci. Faucibus ut risus facilisi elit. Pellentesque eget vitae sed condimentum. Lorem ipsum dolor sit amet consectetur. Amet tincidunt libero felis nunc sit. Sit lacinia proin etiam odio orci. Faucibus ut risus facilisi elit. Pellentesque eget vitae sed condimentum. Sit lacinia proin etiam odio orci. Faucibus ut risus facilisi elit. Pellentesque eget vitae sed condimentum. Pellentesque eget vitae sed condimentum.
                        </p>


                        {/* <Button onClick={handleSubscribeClick} type="primary" style={{ backgroundColor: "#FF0048", color: "white", height: "35px", fontSize: '16px', fontWeight: 'bold' }} className="w-full border-none text-white px-6 py-2 rounded-lg">
                            Subscribe
                        </Button> */}
                    </div>
                </div>

            </div>

            <div className='shadow-lg p-4 rounded-lg'>
                <h2 className="text-3xl font-bold mb-2">Payment Details</h2>
                <p className="pb-1 text-sm font-semibold text-secondary ">Card Number</p>
                <Input  style={{height: "42px",backgroundColor: "#FFE5ED4D",border:'none',color:"#888888"}} type="text" placeholder="123 458 6548" className="mb-4" suffix={
                  <div className='flex items-center space-x-2'>
                    <LiaCcVisa style={{fontSize:"30px"}} />
                    <FaCcMastercard style={{fontSize:"25px"}} />
                    
                  </div>
                } />
                  <p className="pb-1 text-sm font-semibold text-secondary ">Expiration date</p>
                <Input style={{height: "42px",backgroundColor: "#FFE5ED4D",border:'none',color:"#888888"}} type="text" placeholder="Expiry Date" className="mb-4" />
                <p className="pb-1 text-sm font-semibold text-secondary ">Security code</p>
                <Input style={{height: "42px",backgroundColor: "#FFE5ED4D",border:'none',color:"#888888"}} type="text" placeholder="CVV" className="mb-4" />
                <div className='w-1/2 mx-auto'>
                <Button  onClick={handlePymentSuccess}  type="primary" style={{ backgroundColor: "#FF0048", color: "white", height: "44px", fontSize: '16px', fontWeight: 'bold' }} className="w-full mx-auto border-none text-white px-6 py-2 rounded-lg">
                Pay $50.00
                </Button>
                </div>


            </div>

            <PaySuccessModal onClose={() => setIsModalOpen(false)} isOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    );
};

export default PaymentProducer;