


// import React from "react";

// function NewsItem({item}) {
//     const websiteUrl = item.url;
//     const website = websiteUrl.split('https://').pop().split('/')[0];
     
//     const date = item.publishedAt;
//     const formatDate = date.replace('T', '');
//     const formatTime = formatDate.replace('z', '');

//     return (
//         <a href={item.url} className="article bg-gray shadow-md rounded-xl overflow-hidden transition duration-300 transform hover:scale-105">
//             <div className="article-image overflow-hidden">
//                 <img src={item.urlToImage} alt={item.title} className="object-cover w-full h-48 transition duration-700 transform hover:scale-110" />
//             </div>
//             <div className="article-content flex flex-col justify-between p-4">
//                 <div className="article-source flex items-center gap-2">
//                     <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=16`} alt={item.source.id} />
//                     <span>{item.source.name}</span>
//                 </div> 
//                 <div className="article-title">
//                     <h2 className="text-lg font-semibold text-gray-500">{item.title}</h2>
//                 </div>
//                 <div>
//                     <p className="article-description text-sm text-gray-700">
//                         {item.description}
//                     </p>
//                     <div className="article-details text-xs text-red-600">
//                         <small><b>Published At:</b> {formatTime}</small>
//                     </div>
//                 </div> 
//             </div>
//         </a>
//     );
// }

// export default NewsItem;



// NewsItem.js
import React from "react";

const NewsItem = ({ item }) => {
    const websiteUrl = item.url;
    const website = websiteUrl.split('https://').pop().split('/')[0];
     
    const date = item.publishedAt;
    const formatDate = date.replace('T', '');
    const formatTime = formatDate.replace('z', '');

    return (
        <a href={item.url} className="article bg-gray shadow-md rounded-xl overflow-hidden transition duration-300 transform hover:scale-105">
            <div className="article-image overflow-hidden">
                <img src={item.urlToImage} alt={item.title} className="object-cover w-full h-48 transition duration-700 transform hover:scale-110" />
            </div>
            <div className="article-content flex flex-col justify-between p-4">
                <div className="article-source flex items-center gap-2">
                    <img src={`https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE%2CSIZE%2CURL&url=http://${website}&size=16`} alt={item.source.id} />
                    <span>{item.source.name}</span>
                </div> 
                <div className="article-title">
                    <h2 className="text-lg font-semibold text-gray-500">{item.title}</h2>
                </div>
                <div>
                    <p className="article-description text-sm text-gray-700">
                        {item.description}
                    </p>
                    <div className="article-details text-xs text-red-600">
                        <small><b>Published At:</b> {formatTime}</small>
                    </div>
                </div> 
            </div>
        </a>
    );
};

export default NewsItem;
