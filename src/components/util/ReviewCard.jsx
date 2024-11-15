import React from 'react';

const ReviewCard = ({post}) => {
    return (
      
             <div key={post.id} className="p-4 border border-gray-200 rounded-lg bg-white shadow-sm flex">
            <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 flex-shrink-0">
              {/* Placeholder for the profile image */}
              <img
                src={post.image} // Replace with actual image URL or asset path
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h2 className="font-semibold text-secondary">{post.author}</h2>
              <p className="text-tertiary">{post.text}</p>
            </div>
          </div>
    
    );
};

export default ReviewCard;