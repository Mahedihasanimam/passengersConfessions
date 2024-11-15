import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import bookimage from '../../assets/confession.png'
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

const Confessions = () => {
    return (
        <div className="container mx-auto px-4 pt-6 pb-[80px]">
            <div className='pb-6'>
               <div className='flex items-center justify-between'>
               <h1 className="text-2xl font-bold  mt-8 text-secondary pb-2 ">Confessions</h1>
               <Button type="primary" style={{backgroundColor: "#FF0048", color: "white",height: "35px",fontSize:'16px',fontWeight:'bold'}}  className="w-fit border-none text-white px-6 py-2 rounded-full">
               Add yours
        </Button>
               </div>
                <p className=" mt-2 mb-8 text-tertiary font-normal">
                    Confession typically refers to the act of admitting or revealing something personal, often related to a wrongdoing, secret, or hidden truth. It can occur in various contexts, such as in religious practices, interpersonal relationships, or even in legal situations.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {booksData.map((book) => (
                    <div key={book.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]">
                        <img src={book.image} alt={book.title} className="w-full h-56 object-cover rounded-md mb-4" />
                        <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">{book.title}</h2>
                        <p className="text-tertiary">{book.author}</p>

                        <Button type="primary" style={{ backgroundColor: "#FF0048", color: "white", height: "35px", fontSize: '16px', fontWeight: 'bold' }} className="w-full mt-2 border-none text-white px-6 py-2 rounded-lg">
                            <span className='pt-1'><svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8 5.63989V19.6399L19 12.6399L8 5.63989Z" fill="white" />
                            </svg>
                            </span>

                            play
                        </Button>
                    </div>
                ))}
            </div>
            <div className="flex justify-center mt-20">
                <Button type="primary" style={{ backgroundColor: "transparent", color: "#FF0048", height: "35px", fontSize: '16px', fontWeight: 'bold', border: "1px solid #FF0048" }} className="w-1/2 border-none text-white px-6 py-2 rounded-lg">
                    Load more
                </Button>
            </div>
        </div>
    );
};

export default Confessions;
