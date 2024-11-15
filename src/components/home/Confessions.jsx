import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import bookimage from '../../assets/confession.png'
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

const Confessions = () => {
  return (
    <div className="container mx-auto px-4 pb-[80px]">
      <div className='max-w-4xl mx-auto'>
      <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center mt-8 text-secondary pb-2 ">Confessionss</h1>
      <p className="text-center mt-2 mb-8 text-tertiary">
      Confession typically refers to the act of admitting or revealing something personal, often related to a wrongdoing, secret, or hidden truth. It can occur in various contexts, such as in religious practices, interpersonal relationships, or even in legal situations.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]">
            <img src={book.image} alt={book.title} className="w-full h-56 object-cover rounded-md mb-4" />
            <h2 className="text-[20px] font-semibold text-secondary max-w-[250px]">{book.title}</h2>
            <p className="text-tertiary">{book.author}</p>
          </div>
        ))}
      </div>
      <div className="w-1/2 mx-auto mt-20 ">
       <Link className='w-full  mx-auto' to="/Confession">
       <Button type="primary" style={{backgroundColor: "#FF0048", color: "white",height: "35px",fontSize:'16px',fontWeight:'bold'}}  className="w-full border-none text-white px-6 py-2 rounded-lg">
        Browse more
        </Button>
       </Link>
      </div>
    </div>
  );
};

export default Confessions;
