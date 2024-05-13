

import React, { useState } from "react";

const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get("email");
    const password = formData.get("password");

    // Simulate login logic
    try {
      if (email === "example@example.com" && password === "password") {
        setLoggedIn(true);
        setError(null);
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="max-w-md w-full bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Login or Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none w-full"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none w-full"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Login
          </button>
          {error && <p className="text-red-500">{error}</p>}
          {loggedIn && <p className="text-green-500">Logged in successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
