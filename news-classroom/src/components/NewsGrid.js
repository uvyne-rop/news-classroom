
// import React from 'react';
// import NewsItem from './NewsItem';

// function NewsGrid({items}) {
//     return (
//         <div className="news-grid grid grid-cols-3 gap-8 justify-center max-w-5xl mx-auto px-8 py-10 bg-color-gray-700">
//             {items.map((item, i) => (
//                 <NewsItem key={i} item={item}/>
//             ))}
//         </div>
//     )
// }

// export default NewsGrid;



// NewsGrid.js
import React from 'react';
import NewsItem from './NewsItem';

const NewsGrid = ({items}) => {
    return (
        <div className="news-grid grid grid-cols-3 gap-8 justify-center max-w-5xl mx-auto px-8 py-10 bg-color-gray-700">
            {items.map((item, i) => (
                <NewsItem key={i} item={item}/>
            ))}
        </div>
    );
};

export default NewsGrid;
