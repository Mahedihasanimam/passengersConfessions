import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import bookimage from '../../assets/booksimage.png'
import { Link } from 'react-router-dom';
const booksData = [
    {
        id: 1,
        title: 'The Truth I’ve Been Hiding',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 2,
        title: 'The Truth I’ve Been Hiding',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 3,
        title: 'The Truth I’ve Been Hiding',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 4,
        title: 'The Truth I’ve Been Hiding',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 5,
        title: 'The Truth I’ve Been Hiding',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 6,
        title: 'What I’ve Never Told Anyone',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 7,
        title: 'What I’ve Never Told Anyone',
        author: 'Author name',
        image: bookimage,
    },
    {
        id: 8,
        title: 'What I’ve Never Told Anyone',
        author: 'Author name',
        image: bookimage,
    },
    // Add more book objects as needed
];

const ConfessionList = () => {
    return (
        <div className="container mx-auto px-4 pb-[80px]">

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {booksData.map((book) => (
                    <div key={book.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]  ">
                        <div className='relative'>
                            <img src={book.image} alt={book.title} className="w-full h-56 object-cover rounded-md mb-4" />
                            <div className='absolute top-[4px] right-[4px]'>
                                <button>
                                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="40" height="40" rx="20" fill="white" />
                                        <path d="M22.25 27.5C22.25 28.0967 22.0129 28.669 21.591 29.091C21.169 29.5129 20.5967 29.75 20 29.75C19.4033 29.75 18.831 29.5129 18.409 29.091C17.9871 28.669 17.75 28.0967 17.75 27.5C17.75 26.9033 17.9871 26.331 18.409 25.909C18.831 25.4871 19.4033 25.25 20 25.25C20.5967 25.25 21.169 25.4871 21.591 25.909C22.0129 26.331 22.25 26.9033 22.25 27.5ZM22.25 20C22.25 20.5967 22.0129 21.169 21.591 21.591C21.169 22.0129 20.5967 22.25 20 22.25C19.4033 22.25 18.831 22.0129 18.409 21.591C17.9871 21.169 17.75 20.5967 17.75 20C17.75 19.4033 17.9871 18.831 18.409 18.409C18.831 17.9871 19.4033 17.75 20 17.75C20.5967 17.75 21.169 17.9871 21.591 18.409C22.0129 18.831 22.25 19.4033 22.25 20ZM22.25 12.5C22.25 13.0967 22.0129 13.669 21.591 14.091C21.169 14.5129 20.5967 14.75 20 14.75C19.4033 14.75 18.831 14.5129 18.409 14.091C17.9871 13.669 17.75 13.0967 17.75 12.5C17.75 11.9033 17.9871 11.331 18.409 10.909C18.831 10.4871 19.4033 10.25 20 10.25C20.5967 10.25 21.169 10.4871 21.591 10.909C22.0129 11.331 22.25 11.9033 22.25 12.5Z" fill="#FF0048" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                        <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">{book.title}</h2>
                        <p className="text-tertiary">{book.author}</p>

                    </div>
                ))}
            </div>
            <div className="w-1/2 mx-auto mt-20 ">
                <Link className='w-full  mx-auto' to="/Confession">
                    <Button type="primary" style={{ backgroundColor: "#FF0048", color: "white", height: "35px", fontSize: '16px', fontWeight: 'bold' }} className="w-full border-none text-white px-6 py-2 rounded-lg">
                        Add confession
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default ConfessionList;
