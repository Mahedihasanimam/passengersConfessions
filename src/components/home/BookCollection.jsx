import React from 'react';
import { Button } from 'antd';
import 'tailwindcss/tailwind.css';
import bookimage from '../../assets/booksimage.png'
const booksData = [
  {
    id: 1,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 2,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 3,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 4,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 5,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 6,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 7,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  {
    id: 8,
    title: 'Book Name',
    author: 'Author name',
    image: bookimage,
  },
  // Add more book objects as needed
];

const BookCollection = () => {
  return (
    <div className="container mx-auto px-4 py-[80px]">
      <div className='max-w-4xl mx-auto'>
      <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-center mt-8 text-secondary pb-2 ">Books Collections</h1>
      <p className="text-center mt-2 mb-8 text-tertiary">
        Here you can explore all types of books in various languages. Explore our full library of provocative, bold, and steamy stories. Each book invites you to dive deeper into a world where passion knows no boundaries.
      </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {booksData.map((book) => (
          <div key={book.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg bg-[#C7C7C740]">
            <img src={book.image} alt={book.title} className="w-full h-56 object-cover rounded-md mb-4" />
            <h2 className="text-lg font-semibold text-secondary">{book.title}</h2>
            <p className="text-tertiary">{book.author}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Button type="primary" style={{backgroundColor: "#FF0048", color: "white",height: "35px",fontSize:'16px',fontWeight:'bold'}}  className="w-1/2 border-none text-white px-6 py-2 rounded-lg">
        Browse more
        </Button>
      </div>
    </div>
  );
};

export default BookCollection;
