import { useState } from 'react';
import logo from './assets/fb.png'; // Replace with actual logo if needed
import './App.css';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full max-w-5xl px-0 py-8">
        
        {/* Left Side */}
        <div className="text-center mt-11 md:text-left mb-10 md:mb-0 md:mr-16 max-w-md">
          <img src={logo} alt="Facebook" className="w-72  md:mx-0" />
          <h2 className="text-2xl font-sans md:text-3xl  font-stretch-condensed ml-2 text-gray-800">
            Facebook helps you connect and share with the people in your life.
          </h2>
        </div>

        {/* Right Side (Login Card) */}
        <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-sm space-y-4">
          <input
            type="text"
            placeholder="Email address or phone number"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 px-4 py-3 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold w-full py-3 rounded">
            Log in
          </button>
          <div className="text-center">
            <a
              href="https://www.facebook.com/recover/initiate"
              className="text-blue-600 text-sm hover:underline"
            >
              Forgotten password?
            </a>
          </div>
          <hr />
          <div className="text-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded">
              Create new account
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 w-full text-center text-sm text-gray-800">
        <span className="font-semibold">Create a Page</span> for a celebrity, brand or business.
      </div>
    </div>
  );
}

export default App;
