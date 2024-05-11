

import React from 'react';

function Menu({ active, setActive, setSection, darkMode }) {
    const sections = ["Arts", "Entertainment", "Health", "Sports", "Science"];

    const handleSectionClick = (index, section) => {
        setActive(index);
        setSection(section.toLowerCase()); // Convert section to lowercase
    };

    return (
        <nav className={`menu ${darkMode ? "dark" : ""}`}>
            <ul>
                {sections.map((section, index) => (
                    <li key={index} className={active === index ? "active" : ""}>
                        <button onClick={() => handleSectionClick(index, section)}>
                            {section}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
