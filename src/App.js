

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Menu from './components/Menu';
// import NewsGrid from './components/NewsGrid';
// import NewsItem from './components/NewsItem';
// // import MainLayout from './components/MainLayout';
// import "tailwindcss/tailwind.css"

// function App() {
//     const [items, setItems] = useState([]);
//     const [active, setActive] = useState(1);
//     const [category, setCategory] = useState("general");

//     useEffect(() => {
//         fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
//             .then(res => res.json())
//             .then(data => setItems(data.articles))
//             .catch(error => console.error('Error fetching data:', error));
//     }, [category]);

//     return (
//         <Router>
//             <div className="App">
//                 <h1 className="title text-center text-4xl text-bold py-20" >See The Latest</h1>
//                 <Menu active={active} setActive={setActive} setCategory={setCategory} />
                
//                 <Routes>
//                     <Route path="/" element={<NewsGrid items={items} />} />
//                     <Route path="/:category" element={<NewsGrid items={items} />} />
//                     <Route path="/news/:id" element={<NewsItem />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// }

// export default App;


// App.js
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

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
            .then(res => res.json())
            .then(data => setItems(data.articles))
            .catch(error => console.error('Error fetching data:', error));
    }, [category]);

    return (
        <Router>
            <div className="App">
                <h1 className="title text-center text-4xl font-bold py-20">See The Latest</h1>
                <Menu active={active} setActive={setActive} setCategory={setCategory} />
                
                <Routes>
                    <Route path="/" element={<NewsGrid items={items} />} />
                    <Route path="/:category" element={<NewsGrid items={items} />} />
                    <Route path="/news/:id" element={<NewsItem />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

