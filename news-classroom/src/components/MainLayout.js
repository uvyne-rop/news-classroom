// // // // MainLayout.js
// // // import React, { Suspense } from 'react';
// // // import 'antd/dist/antd.css';
// // // import { Layout } from 'antd';
// // // import { MenuUnfoldOutlined, MenuFoldOutlined, StockOutlined } from '@ant-design/icons';
// // // import { fetchSources } from '../api';
// // // import News from './News'; // Import the News component

// // // const { Header, Sider, Content } = Layout;

// // // class MainLayout extends React.Component {
// // //   state = {
// // //     collapsed: false,
// // //     sources: [],
// // //     homePage: true,
// // //     query: '',
// // //   };

// // //   toggle = () => {
// // //     this.setState({
// // //       collapsed: !this.state.collapsed,
// // //     });
// // //   };

// // //   async componentDidMount() {
// // //     const sources = await fetchSources();
// // //     this.setState({ sources });
// // //   }

// // //   loadNews(query) {
// // //     this.setState({
// // //       homePage: false,
// // //       query: query
// // //     });
// // //   }

// // //   render() {
// // //     return (
// // //       <Layout>
// // //         {/* Rest of the component code */}
// // //         <Content
// // //             className="site-layout-background"
// // //             style={{
// // //               margin: '24px 16px',
// // //               padding: 24,
// // //               paddingRight: 0,
// // //               minHeight: 280,
// // //             }}
// // //           >
// // //             <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>
// // //               {this.state.homePage === true ? <News /> : <NewsSection category='everything' query={'q=' + this.state.query} topHeading={this.state.query} results='100' />}
// // //             </Suspense>
// // //           </Content>
// // //         {/* Rest of the component code */}
// // //       </Layout>
// // //     );
// // //   }
// // // }

// // // export default MainLayout;


// // // MainLayout.js
// // import React, { Suspense } from 'react';
// // import 'antd/dist/antd.css';
// // import './Layout.css';
// // import { Layout, Menu } from 'antd';
// // import {
// //   MenuUnfoldOutlined,
// //   MenuFoldOutlined,
// //   StockOutlined,
// // } from '@ant-design/icons';
// // import { fetchSources } from '../api';

// // const NewsSection = React.lazy(() => import('./NewsSection'));
// // const News = React.lazy(() => import('./News'));

// // const { Header, Sider, Content } = Layout;

// // class MainLayout extends React.Component {
// //   state = {
// //     collapsed: false,
// //     sources: [],
// //     homePage: true,
// //     query: '',
// //   };

// //   toggle = () => {
// //     this.setState({
// //       collapsed: !this.state.collapsed,
// //     });
// //   };

// //   async componentDidMount() {
// //     const sources = await fetchSources();

// //     this.setState({ sources });
// //   }

// //   loadNews(query) {
// //     this.setState({
// //       homePage: false,
// //       query: query
// //     });
// //   }

// //   render() {
// //     return (
// //       <Layout>
// //         <Sider trigger={null} collapsible collapsed={!this.state.collapsed}>
// //           <div className="logo"><h2>{!this.state.collapsed ? 'N' : 'Newsio'}</h2></div>
// //           <Menu theme="dark" mode="inline" defaultSelectedKeys={['-1']}>
// //             <Menu.Item onClick={() => this.setState({ homePage: true })} key="-1" icon={<StockOutlined />}>
// //               Top News
// //             </Menu.Item>
// //             {this.state.sources.map((source) =>
// //               <Menu.Item onClick={() => this.loadNews(source.name)} key={source.name}>
// //                 {source.name}
// //               </Menu.Item>
// //             )}
// //           </Menu>
// //         </Sider>
// //         <Layout className="site-layout">
// //           <Header className="site-layout-background" style={{ padding: 0 }}>
// //             {React.createElement(!this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
// //               className: 'trigger',
// //               onClick: this.toggle,
// //             })}
// //           </Header>
// //           <Content
// //             className="site-layout-background"
// //             style={{
// //               margin: '24px 16px',
// //               padding: 24,
// //               paddingRight: 0,
// //               minHeight: 280,
// //             }}
// //           >
// //             <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>
// //               {this.state.homePage === true ? <News /> : <NewsSection category='everything' query={'q=' + this.state.query} topHeading={this.state.query} results='100' />}
// //             </Suspense>
// //           </Content>
// //         </Layout>
// //       </Layout>
// //     );
// //   }
// // }

// // export default MainLayout;




// // MainLayout.js
// import React, { useState, useEffect, Suspense } from 'react';
// import { Layout, Menu } from 'antd';
// import { MenuUnfoldOutlined, MenuFoldOutlined, StockOutlined } from '@ant-design/icons';
// // import { fetchSources } from '../api';
// // import './Layout.css';
// // import Menu from './components/Menu';
// import News from './components/News';
// // import tailwind from './tailwind.config.js'

// const { Header, Sider, Content } = Layout;

// const MainLayout = () => {
//     const [collapsed, setCollapsed] = useState(false);
//     const [sources, setSources] = useState([]);
//     const [homePage, setHomePage] = useState(true);
//     const [query, setQuery] = useState('');

//     useEffect(() => {
//         const fetchData = async () => {
//             const sourcesData = await fetchSources();
//             setSources(sourcesData);
//         };
//         fetchData();
//     }, []);

//     const toggleCollapsed = () => {
//         setCollapsed(!collapsed);
//     };

//     const loadNews = (query) => {
//         setHomePage(false);
//         setQuery(query);
//     };

//     return (
//         <Layout>
//             <Sider trigger={null} collapsible collapsed={collapsed}>
//                 <div className="logo">
//                     <h2>{collapsed ? 'Newsio' : 'N'}</h2>
//                 </div>
//                 <Menu theme="dark" mode="inline" defaultSelectedKeys={['-1']}>
//                     <Menu.Item onClick={() => setHomePage(true)} key="-1" icon={<StockOutlined />}>
//                         Top News
//                     </Menu.Item>
//                     {sources.map((source) => (
//                         <Menu.Item onClick={() => loadNews(source.name)} key={source.name}>
//                             {source.name}
//                         </Menu.Item>
//                     ))}
//                 </Menu>
//             </Sider>
//             <Layout className="site-layout">
//                 <Header className="site-layout-background" style={{ padding: 0 }}>
//                     {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
//                         className: 'trigger',
//                         onClick: toggleCollapsed,
//                     })}
//                 </Header>
//                 <Content
//                     className="site-layout-background"
//                     style={{
//                         margin: '24px 16px',
//                         padding: 24,
//                         paddingRight: 0,
//                         minHeight: 280,
//                     }}
//                 >
//                     <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>
//                         {homePage ? <News /> : <Menu category="everything" query={`q=${query}`} topHeading={query} results="100" />}
//                     </Suspense>
//                 </Content>
//             </Layout>
//         </Layout>
//     );
// };

// export default MainLayout;



import React, { useState, useEffect, Suspense } from 'react';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, StockOutlined } from '@ant-design/icons';
import axios from 'axios'; // Import Axios for making HTTP requests
import News from '../components/News';

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [sources, setSources] = useState([]);
    const [homePage, setHomePage] = useState(true);
    const [query, setQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f5b76f1dd5d44c80a5c586f7a9cb5090');
                setSources(response.data.sources);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    const loadNews = (query) => {
        setHomePage(false);
        setQuery(query);
    };

    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="flex items-center justify-center h-10 text-white">{collapsed ? 'Newsio' : 'N'}</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['-1']}>
                    <Menu.Item onClick={() => setHomePage(true)} key="-1" icon={<StockOutlined />}>
                        Top News
                    </Menu.Item>
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <div>Error: {error.message}</div>
                    ) : (
                        sources.map((source) => (
                            <Menu.Item onClick={() => loadNews(source.name)} key={source.name}>
                                {source.name}
                            </Menu.Item>
                        ))
                    )}
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: toggleCollapsed,
                    })}
                </Header>
                <Content className="site-layout-background p-4">
                    <Suspense fallback={<h1 style={{ fontSize: '30px' }}>Loading...</h1>}>
                        {homePage ? (
                            <News />
                        ) : (
                            <News category="everything" query={`q=${query}`} topHeading={query} results="100" />
                        )}
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    );
};

export default MainLayout;
