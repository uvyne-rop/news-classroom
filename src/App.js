


import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsList from "./components/NewsList";
import LoginForm from "./components/LoginForm";
import Category from "./components/Category"; // Import Category component
import "./App.css";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      <div className={`App ${darkMode ? "dark" : "light"}`}>
        <nav className={`bg-gray-500 p-4 mb-4 ${darkMode ? "dark-nav" : ""}`}>
          <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="font-bold text-2xl">
              News App
            </Link>
            <div className="flex">
              <div className="dropdown mr-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Categories
                </button>
                <div className="dropdown-menu absolute hidden bg-white py-2 rounded-md shadow-md">
                  <Link to="/category/world" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleCategoryClick("world")}>
                    World
                  </Link>
                  <Link to="/category/business" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleCategoryClick("business")}>
                    Business
                  </Link>
                  <Link to="/category/technology" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleCategoryClick("technology")}>
                    Technology
                  </Link>
                  <Link to="/category/sports" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleCategoryClick("sports")}>
                    Sports
                  </Link>
                  <Link to="/category/entertainment" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left" onClick={() => handleCategoryClick("entertainment")}>
                    Entertainment
                  </Link>
                </div>
              </div>

              <form onSubmit={handleSearch} className="flex">
                <input
                  type="text"
                  placeholder="Search"
                  className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
                  name="search"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
                  Search
                </button>
              </form>
              <button onClick={toggleDarkMode} className="ml-4">
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </div>
        </nav>
        <Routes>
          <Route exact path="/" element={<NewsList category={category} searchTerm={searchTerm} />} />
          <Route path="/category/:categoryName" element={<Category />} /> {/* Include Category component */}
          <Route path="/login" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
