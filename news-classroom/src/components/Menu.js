
// import React from "react";

// function Menu({ active, setActive, setCategory }) {
//     const links = [
//         { id: 1, name: "General", value: "general" },
//         { id: 2, name: "Business", value: "business" },
//         { id: 3, name: "Entertainment", value: "entertainment" },
//         { id: 4, name: "Health", value: "health" },
//         { id: 5, name: "Science", value: "science" },
//         { id: 6, name: "Sports", value: "sports" },
//         { id: 7, name: "Technology", value: "technology" },
//     ];

//     function onClick(id, value) {
//         setActive(id);
//         setCategory(value);
//     }

//     return (
//         <nav className="menu">
//             <ul>
//                 {links.map((link) => (
//                     <li
//                         key={link.id}
//                         className={active === link.id ? "active" : "inactive"}
//                         onClick={() => onClick(link.id, link.value)}
//                     >
//                         {link.name}
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );
// }

// export default Menu;


import React from "react";

function Menu({ active, setActive, setCategory }) {
    const links = [
        { id: 1, name: "General", value: "general" },
        { id: 2, name: "Business", value: "business" },
        { id: 3, name: "Entertainment", value: "entertainment" },
        { id: 4, name: "Health", value: "health" },
        { id: 5, name: "Science", value: "science" },
        { id: 6, name: "Sports", value: "sports" },
        { id: 7, name: "Technology", value: "technology" },
    ];

    function onClick(id, value) {
        setActive(id);
        setCategory(value);
    }

    return (
        <nav className="menu flex justify-center">
            <ul className="flex space-x-4">
                {links.map((link) => (
                    <li
                        key={link.id}
                        className={`p-2 bg-red-300 rounded-full cursor-pointer transition duration-300 ${active === link.id ? "bg-gray-400 hover:bg-gray-500" : "bg-gray-400 hover:bg-gray-300"}`}
                        onClick={() => onClick(link.id, link.value)}
                    >
                        {link.name}
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Menu;
