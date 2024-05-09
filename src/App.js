
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import NewsGrid from './components/NewsGrid';
import NewsItem from './components/NewsItem';
import './App.css'; // Import Tailwind CSS
import "tailwindcss/tailwind.css";

function App() {
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState("general");
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Function to toggle dark mode
    function toggleDarkMode() {
        setIsDarkMode(prevMode => !prevMode);
    }

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
            .then(res => res.json())
            .then(data => setItems(data.articles))
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <div className={`App ${isDarkMode ? "dark" : ""}`}>
            <header className="py-4 px-8 flex justify-between items-center">
                <h1 className="title text-center text-4xl font-bold py-20 px-30">See The Latest</h1>
                <button onClick={toggleDarkMode} className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <Router>
                <div className="container mx-auto">
                    <Menu active={active} setActive={setActive} setCategory={setCategory} darkMode={isDarkMode} />
                    <Routes>
                        <Route path="/" element={<NewsGrid items={items} />} />
                        <Route path="/:category" element={<NewsGrid items={items} />} />
                        <Route path="/news/:id" element={<NewsItem />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
