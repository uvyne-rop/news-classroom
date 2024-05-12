
// // import React from "react";
// // import { useState } from "react";
// // import { BrowserRouter as Router, Route, Link} from "react-router-dom";
// // import NewsList from "./components/NewsList";
// // import './App.css';

// // function App() {
// //   const [category, setCategory] = useState("");
// //   const [searchTerm, setSearchTerm] = useState("");

// //   const handleCategoryClick = (category) => {
// //     setCategory(category);
// //     setSearchTerm(""); 
// //   };

// //   const handleSearch = (event) => {
// //     event.preventDefault();
// //     setCategory("");
// //     setSearchTerm(event.target.search.value);
// //   };

// //   return (
// //     <Router>
// //       <div>
// //         <nav className="bg-gray-100 p-4 mb-4">
// //           <div className="container mx-auto flex justify-between items-center">
// //             <Link to="/" className="font-bold text-2xl">
// //               News App
// //             </Link>
// //             <div className="flex">
// //               <div className="dropdown mr-4">
// //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
// //                   Categories
// //                 </button>
// //                 <div className="dropdown-menu absolute hidden bg-white py-2 rounded-md shadow-md">
// //                   <button
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
// //                     onClick={() => handleCategoryClick("world")}
// //                   >
// //                     World
// //                   </button>
// //                   <button
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
// //                     onClick={() => handleCategoryClick("business")}
// //                   >
// //                     Business
// //                   </button>
// //                   <button
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
// //                     onClick={() => handleCategoryClick("technology")}
// //                   >
// //                     Technology
// //                   </button>
// //                   <button
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
// //                     onClick={() => handleCategoryClick("sports")}
// //                   >
// //                     Sports
// //                   </button>
// //                   <button
// //                     className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
// //                     onClick={() => handleCategoryClick("entertainment")}
// //                   >
// //                     Entertainment
// //                   </button>
// //                 </div>
// //               </div>

// //               <form onSubmit={handleSearch} className="flex">
// //                 <input
// //                   type="text"
// //                   placeholder="Search"
// //                   className="border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
// //                   name="search"
// //                 />
// //                 <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md">
// //                   Search
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </nav>
// //         <div className="container mx-auto">
// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //             <div>
// //               <h5 className="text-lg font-bold mb-2">Categories</h5>
// //               <ul className="space-y-2">
// //                 <li>
// //                   <Link to="/world" className="text-blue-500 hover:underline">
// //                     World
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/business" className="text-blue-500 hover:underline">
// //                     Business
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/technology" className="text-blue-500 hover:underline">
// //                     Technology
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/sports" className="text-blue-500 hover:underline">
// //                     Sports
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link to="/entertainment" className="text-blue-500 hover:underline">
// //                     Entertainment
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div className="col-span-2">
// //               <Routes>
// //                 <Route path="/:category" render={(props) => <NewsList {...props} searchTerm={searchTerm} />} />
// //                 <Route exact path="/" component={() => <h1>Welcome to News App</h1>} />
// //               </Routes>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </Router>
// //   );
// // }

// // export default App;

import { useState } from "react";
import NewsList from "./components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setSearchTerm("");
  };

  const handleSearch = (event) => {
    event.preventDefault();
    setCategory("");
    setSearchTerm(event.target.search.value);
  };

  return (
    <>
      <nav className="bg-gray-500 p-4 mb-4">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="font-bold text-2xl">
            News App
          </a>
          <div className="flex">
            <div className="dropdown mr-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Categories
              </button>
              <div className="dropdown-menu absolute hidden bg-white py-2 rounded-md shadow-md">
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleCategoryClick("world")}
                >
                  World
                </button>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleCategoryClick("business")}
                >
                  Business
                </button>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleCategoryClick("technology")}
                >
                  Technology
                </button>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleCategoryClick("sports")}
                >
                  Sports
                </button>
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
                  onClick={() => handleCategoryClick("entertainment")}
                >
                  Entertainment
                </button>
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
          </div>
        </div>
      </nav>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <h5 className="text-lg font-bold mb-2">Categories</h5>
            <ul className="space-y-2">
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleCategoryClick("world")}
                >
                  World
                </button>
              </li>
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleCategoryClick("business")}
                >
                  Business
                </button>
              </li>
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleCategoryClick("technology")}
                >
                  Technology
                </button>
              </li>
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleCategoryClick("sports")}
                >
                  Sports
                </button>
              </li>
              <li>
                <button
                  className="text-blue-500 hover:underline"
                  onClick={() => handleCategoryClick("entertainment")}
                >
                  Entertainment
                </button>
              </li>
            </ul>
          </div>
          <div className="col-span-2">
            <NewsList category={category} searchTerm={searchTerm} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
