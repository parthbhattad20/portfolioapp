import React from 'react';
import BlogCard from './BlogCard';
import { blogs } from '../data/Blogs';
import Navbar from './Navbar';

const BlogList = () => {
  return (
    <>
    <Navbar/>
    <div className='pt-[120px] h-screen max-w-full mx-auto p-4 bg-[#0a192f]'>
        <div className='m:text-right pb-8 pl-4 '>
      <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Blogs:-</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
    </>
  );
};

export default BlogList;
