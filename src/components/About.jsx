import React from 'react';
import Navbar from './Navbar';

const About = () => {
  return (
    <>
 
    <Navbar/>
  
    <div className='w-full h-screen bg-black text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Parth Bhattad, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>Hey there! I'am a dedicated MERN Stack Developer with experience in AWS and DevOps. I specialize in crafting intuitive web applications and optimizing backend processes for scalability and efficiency. Passionate about continuous learning and innovation, I thrive on turning ideas into impactful solutions. Let's build something amazing together!</p>  
            </div>
          </div>
      </div>
    </div>
    </>
  );
};

export default About;
