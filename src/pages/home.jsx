import React from 'react'
import Navbar from '../components/navbar/navbar';

function Home() {
  return (
    <div className="bg-cover bg-center w-[100%] bg-black bg-opacity-50">
      <Navbar />
      <h1 className="text-[50px] font-bold text-white text-left  bg-black bg-opacity-50">We create your Idea </h1>

      <div className="min-h-screen flex items-center justify-center w-[100%] bg-black bg-opacity-50">
      
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to Tailwind CSS</h1>
          <p className="text-gray-600 mt-4">
            This is a sample page styled using Tailwind CSS in a React Vite project.
          </p>
          <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
  };

  export default Home;