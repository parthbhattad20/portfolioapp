import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <div className='shadow-lg shadow-[#040c16] rounded-md overflow-hidden'>
      <img src={blog.image} alt={blog.title} className='w-full h-60 object-cover' />
      <div className='p-4'>
        <h2 className='text-xl font-bold text-white'>{blog.title}</h2>
        <p className='text-gray-500'>{blog.date}</p>
        <p className='text-gray-700 mt-2'>{blog.excerpt}</p>
        <Link to={`/blog/${blog.id}`} className='text-blue-500 hover:underline mt-4 block'>Read more</Link>
      </div>
    </div>
  );
};

export default BlogCard;
