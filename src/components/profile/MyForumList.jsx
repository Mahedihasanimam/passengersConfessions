import React, { useState, useEffect } from 'react';
import profile from '../../assets/confession.png'
import { Input } from 'antd';
import ReviewCard from './../../components/util/ReviewCard';
// Simulating fetching data from a JSON file

const MyForumList = () => {

    const initialPostsData = [
        {
          id: 1,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 2,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 3,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 4,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 5,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 6,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 7,
          author: 'Md Hasan',
          text: 'Efficiently visualize backward-compatible action items before enterprise-wide total linkage. Progressively aggregate stand-alone sources after functionalized technologies. Monotonectally exploit excellent ideas for effective outsourcing. Professionally productize transparent resou',
          image: profile,
        },
        {
          id: 8,
          author: 'Md Hasan',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porttitor urna non interdum.',
          image: profile,
        },
      ];
      
  const [posts, setPosts] = useState([]);
  const [inputText, setInputText] = useState('');

  // Load initial posts from JSON data
  useEffect(() => {
    setPosts(initialPostsData);
  }, []);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText.trim()) {
      const newPost = { id: posts.length + 1, author: 'Md Hasan', text: inputText };
      setPosts([newPost, ...posts]);
      setInputText('');
    }
  };

  return (
    <div className="container mx-auto p-6 border border-[#E7E7E7s] rounded-lg mb-[80px]">
      <h1 className="text-xl font-semibold mb-2">My posts</h1>
      <p className="text-gray-600 mb-4">Here you can see all of your status.</p>
     
      <div className="grid grid-cols-1 gap-4">
        {posts.map((post) => (
         <ReviewCard key={post.id} post={post} />
        ))}
      </div>

      <div className="flex mt-6 ">
        <Input  prefix={
            <div>
                <img src={profile} alt="Profile" className="w-8 h-8 rounded-full" />
            </div>
        }

          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter forum text"
          className="flex-1 p-2 border border-gray-300 rounded-l-md rounded-r-none focus:outline-none text-tertiary text-[16px] font-bold"
        />
        <button
          onClick={handleSubmit}
          className="bg-primary text-white px-6 py-3 rounded-r-md hover:bg-primary"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default MyForumList;
