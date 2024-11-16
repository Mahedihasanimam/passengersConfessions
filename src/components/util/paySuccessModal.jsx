import React from 'react';
import { Link } from 'react-router-dom';

const PaySuccessModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Render nothing if modal is not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded shadow-lg max-w-[460px] w-full">
                <div className="text-2xl font-bold mb-4 max-w-xs text-center mx-auto">
                    <h1 className="text-8xl mb-2 text-center">🎉</h1>
                    <p className='text-2xl font-bold'>Congratulations!</p>
                    <p className='text-2xl font-bold'>Your purchase is done</p>
                </div>
                <p className='text-[16px] text-[#A8A8A8] text-center'>Your payment was completed successfully.</p>
                <Link to={'/'}>
                    <button
                        className='w-full rounded-xl mt-[40px]'
                        style={{ backgroundColor: "#FF0048", color: "white", height: "44px", fontSize: '16px', fontWeight: 'bold' }}
                        onClick={onClose}
                    >
                        Done
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PaySuccessModal;
