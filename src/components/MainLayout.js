
import React, { useState } from 'react';
import Menu from './Menu';

const MainLayout = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`flex flex-col min-h-screen ${darkMode ? "dark" : ""}`}>
            <div className="flex justify-end p-4">
                <button onClick={toggleDarkMode} className="px-4 py-2 rounded-lg bg-gray-300 hover:bg-gray-400">
                    {darkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
            <Menu darkMode={darkMode} />
        </div>
    );
};

export default MainLayout;
