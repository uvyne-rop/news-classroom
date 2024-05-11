






import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Menu from './components/Menu'; // Import Menu component
import NewsGrid from './components/NewsGrid';
import './App.css'; // Import Tailwind CSS
import "tailwindcss/tailwind.css";

function App() {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState("arts"); // Renamed from 'section'

    function toggleDarkMode() {
        setIsDarkMode(prevMode => !prevMode);
    }

    // Define setActive function
    const setActive = (index) => {
        setActiveSection(index);
    };

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://api.nytimes.com/svc/topstories/v2/${activeSection}.json?api-key=AWueMAGFIBxn3UB1wjBOXsHEHQhk2T3k`)
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                return res.json();
            })
            .then(data => {
                setItems(data.results);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setIsLoading(false);
            });
    }, [activeSection]);

    return (
        <div className={`App ${isDarkMode ? "dark" : ""}`}>
            <header className="py-4 px-8 flex justify-between items-center">
                <h1 className="text-4xl font-bold">See The Latest</h1>
                <button onClick={toggleDarkMode} className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </header>
            <Router>
                <MainLayout>
                    {/* Pass setActive function to Menu component */}
                    <Menu setActive={setActive} active={activeSection} setSection={setActiveSection} darkMode={isDarkMode} />
                    {isLoading ? (
                        <div className="spinner"></div>
                    ) : (
                        <Routes>
                            <Route path="/" element={<NewsGrid items={items} />} />
                        </Routes>
                    )}
                </MainLayout>
            </Router>
        </div>
    );
}

export default App;
