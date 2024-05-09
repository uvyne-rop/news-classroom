

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import NewsItem from './components/NewsItem';
import './App.css'; // Import Tailwind CSS
import "tailwindcss/tailwind.css";

function App() {
    
    const [items, setItems] = useState([]); // Initialize items as null
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState("general");
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    // Function to toggle dark mode
    function toggleDarkMode() {
        setIsDarkMode(prevMode => !prevMode);
    }

   
    useEffect(() => {
        setIsLoading(true); // Set loading state to true before fetching data
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(data => {
                setItems(data.articles);
                setIsLoading(false); // Set loading state to false after successful fetch
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false); // Set loading state to false if fetch fails
            });
    }, [category]);

    return (
        <div className={`App ${isDarkMode ? "dark" : ""}`}>
            <header className="py-4 px-8 flex justify-between items-center">
                <h1 className="text-4xl font-bold">See The Latest</h1>
                <button onClick={toggleDarkMode} className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <Router>
                <div className="container mx-auto">
                    <Menu active={active} setActive={setActive} setCategory={setCategory} darkMode={isDarkMode} />
                    
                    
                    {isLoading ? (
    <div className="spinner"></div> // Render spinner if data is loading
) : (
    <Routes>
        <Route path="/" element={<NewsGrid items={items} />} />
        <Route path="/:category" element={<NewsGrid items={items} />} />
        <Route path="/news/:id" element={<NewsItem />} />
    </Routes>
)}

                </div>
            </Router>
        </div>
    );
}
export default App;