import React from 'react';
import { useParams } from 'react-router-dom';
import { blogs } from '../data/Blogs';
import Navbar from './Navbar';

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  return (
    <div className='bg-[#0a192f] mb-10'>
    <Navbar />
    <div className='pt-[100px] max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg'>
      <h1 className='text-5xl font-extrabold text-gray-900 my-8 text-center'>
        {blog.title}
      </h1>
      <p className='text-gray-500 text-sm text-center mb-6'>
        {blog.date}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className='w-full h-96 object-cover my-6 rounded-lg shadow-md'
      />
      <div className='text-gray-800 leading-relaxed text-lg space-y-6'>
        {blog.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className='indent-8'>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  </div>
  
  
  
  );
};

export default BlogDetail;
