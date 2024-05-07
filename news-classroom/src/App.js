

// // // // import React, { useState, useEffect } from 'react';
// // // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // // import Menu from './components/Menu';
// // // // import NewsGrid from './components/NewsGrid';
// // // // import NewsItem from './components/NewsItem';
// // // // import MainLayout from './components/MainLayout';
// // // // import "tailwindcss/tailwind.css"

// // // // function App() {
// // // //     const [items, setItems] = useState([]);
// // // //     const [active, setActive] = useState(1);
// // // //     const [category, setCategory] = useState("general");

// // // //     useEffect(() => {
// // // //         fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
// // // //             .then(res => res.json())
// // // //             .then(data => setItems(data.articles))
// // // //             .catch(error => console.error('Error fetching data:', error));
// // // //     }, [category]);

// // // //     return (
// // // //         <Router>
// // // //             <div className="App">
// // // //                 <h1 className="title text-center text-4xl text-bold py-20" >See The Latest</h1>
// // // //                 <Menu active={active} setActive={setActive} setCategory={setCategory} />
                
// // // //                 <Routes>
// // // //                     <Route path="/" element={<NewsGrid items={items} />} />
// // // //                     <Route path="/:category" element={<NewsGrid items={items} />} />
// // // //                     <Route path="/news/:id" element={<NewsItem />} />
// // // //                 </Routes>
// // // //             </div>
// // // //         </Router>
// // // //     );
// // // // }

// // // // export default App;



// // // import React, { useState, useEffect, Suspense } from 'react';
// // // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // // import Menu from './components/Menu';
// // // import NewsGrid from './components/NewsGrid';
// // // import NewsItem from './components/NewsItem';
// // // import MainLayout from './components/MainLayout';
// // // import "tailwindcss/tailwind.css"

// // // function App() {
// // //     const [items, setItems] = useState([]);
// // //     const [active, setActive] = useState(1);
// // //     const [category, setCategory] = useState("general");

// // //     useEffect(() => {
// // //         fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
// // //             .then(res => res.json())
// // //             .then(data => setItems(data.articles))
// // //             .catch(error => console.error('Error fetching data:', error));
// // //     }, [category]);

// // //     return (
// // //         <Router>
// // //             <MainLayout
// // //                 items={items}
// // //                 active={active}
// // //                 setActive={setActive}
// // //                 setCategory={setCategory}
// // //             />
// // //         </Router>
// // //     );
// // // }

// // // export default App;



// // import React, { useState, useEffect, Suspense } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// // import Menu from './components/Menu';
// // import NewsGrid from './components/NewsGrid';
// // import NewsItem from './components/NewsItem';
// // import "tailwindcss/tailwind.css";
// // import { Layout, Menu as AntMenu } from 'antd';
// // import { MenuUnfoldOutlined, MenuFoldOutlined, StockOutlined } from '@ant-design/icons';
// // import { fetchSources } from '../api';
// // import './Layout.css';

// // const NewsSection = React.lazy(() => import('./NewsSection'));
// // const News = React.lazy(() => import('./News'));

// // const { Header, Sider, Content } = Layout;

// // function App() {
// //     const [items, setItems] = useState([]);
// //     const [active, setActive] = useState(1);
// //     const [category, setCategory] = useState("general");
// //     const [collapsed, setCollapsed] = useState(false);
// //     const [sources, setSources] = useState([]);
// //     const [homePage, setHomePage] = useState(true);
// //     const [query, setQuery] = useState('');

// //     useEffect(() => {
// //         fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090`)
// //             .then(res => res.json())
// //             .then(data => setItems(data.articles))
// //             .catch(error => console.error('Error fetching data:', error));
// //     }, [category]);

// //     useEffect(() => {
// //         const fetchData = async () => {
// //             const sourcesData = await fetchSources();
// //             setSources(sourcesData);
// //         };
// //         fetchData();
// //     }, []);

// //     const toggleCollapsed = () => {
// //         setCollapsed(!collapsed);
// //     };

// //     const loadNews = (query) => {
// //         setHomePage(false);
// //         setQuery(query);
// //     };

// //     return (
// //         <Router>
// //             <Layout>
// //                 <Sider trigger={null} collapsible collapsed={collapsed}>
// //                     <div className="logo">
// //                         <h2>{collapsed ? 'Newsio' : 'N'}</h2>
// //                     </div>
// //                     <AntMenu theme="dark" mode="inline" defaultSelectedKeys={['-1']}>
// //                         <AntMenu.Item onClick={() => setHomePage(true)} key="-1" icon={<StockOutlined />}>
// //                             Top News
// //                         </AntMenu.Item>
// //                         {sources.map((source) => (
// //                             <AntMenu.Item onClick={() => loadNews(source.name)} key={source.name}>
// //                                 {source.name}
// //                             </AntMenu.Item>
// //                         ))}
// //                     </AntMenu>
// //                 </Sider>
// //                 <Layout className="site-layout">
// //                     <Header className="site-layout-background" style={{ padding: 0 }}>
// //                         {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
// //                             className: 'trigger',
// //                             onClick: toggleCollapsed,
// //                         })}
// //                     </Header>
// //                     <Content
// //                         className="site-layout-background"
// //                         style={{
// //                             margin: '24px 16px',
// //                             padding: 24,
// //                             paddingRight: 0,
// //                             minHeight: 280,
// //                         }}
// //                     >
// //                         <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>
// //                             {homePage ? <News /> : <NewsSection category="everything" query={`q=${query}`} topHeading={query} results="100" />}
// //                         </Suspense>
// //                     </Content>
// //                 </Layout>
// //             </Layout>
// //         </Router>
// //     );
// // }

// // export default App;



// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import AdvertLarge from './AdvertLarge';
// import Head from './components/Head';
// import MainLayout from './MainLayout';

// function App() {
//     return (
//         <Router>

//             <AdvertLarge />
//             <Head />
//             <MainLayout />
//         </Router>
//     );
// }

// export default App;


import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdvertLarge from './components/AdvertLarge'; // Corrected import path for AdvertLarge component
import Head from './components/Head'; // Corrected import path for Head component
import MainLayout from './components/MainLayout'; // Corrected import path for MainLayout component

function App() {
    return (
        <Router>
            <AdvertLarge />
            <Head />
            <MainLayout />
        </Router>
    );
}

export default App;
