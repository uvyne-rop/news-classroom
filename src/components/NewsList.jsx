


import { useState } from "react";
import useNewsData from "../hooks/useNewsData";
import CustomPagination from "./CustomPagination";

const NewsList = (props) => {
  const { category, searchTerm } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);

  const { newsData, loading, error } = useNewsData(category, searchTerm);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentArticles?.map((article) => (
          <div key={article.url} className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={article.image} alt={article.title} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{article.title}</div>
              <p className="text-gray-700 text-base">{article.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a href={article.url} className="text-blue-500 font-semibold">Read More</a>
            </div>
          </div>
        ))}
      </div>

      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default NewsList;
