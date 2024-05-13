import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100" style={{backgroundImage: `url('https://images.pexels.com/photos/13348192/pexels-photo-13348192.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500')`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="max-w-4xl mx-auto flex-grow flex flex-col justify-center items-end">
        <h1 className="text-4xl font-bold mb-8">Welcome to News App</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Link to="category/world" className="border border-gray-300 rounded-lg p-4 hover:bg-gray-200">
            <h2 className="text-xl font-semibold mb-2">World News</h2>
            <p className="text-gray-600">Stay updated with the latest global news.</p>
          </Link>
          <Link to="category/business" className="border border-gray-300 rounded-lg p-4 hover:bg-gray-200">
            <h2 className="text-xl font-semibold mb-2">Business News</h2>
            <p className="text-gray-600">Get insights into the world of business and finance.</p>
          </Link>
          <Link to="category/technology" className="border border-gray-300 rounded-lg p-4 hover:bg-gray-200">
            <h2 className="text-xl font-semibold mb-2">Technology News</h2>
            <p className="text-gray-600">Explore the latest in tech innovations and trends.</p>
          </Link>
          <Link to="category/sports" className="border border-gray-300 rounded-lg p-4 hover:bg-gray-200">
            <h2 className="text-xl font-semibold mb-2">Sports News</h2>
            <p className="text-gray-600">Catch up with the thrilling world of sports.</p>
          </Link>
          <Link to="category/entertainment" className="border border-gray-300 rounded-lg p-4 hover:bg-gray-200">
            <h2 className="text-xl font-semibold mb-2">Entertainment News</h2>
            <p className="text-gray-600">Stay entertained with the latest celebrity news.</p>
          </Link>
        </div>
        <Link to="/login" className="mt-8 text-blue-500 hover:underline">Login</Link>
      </div>
    </div>
  );
};

export default HomePage;
