import React from "react";
 

function CustomPagination(props) {
  const { currentPage, totalPages, onPageChange } = props;

  const handlePageClick = (pageNumber) => {
    onPageChange(pageNumber);
  };

  const renderPageItems = () => {
    const pageItems = [];

    for (let i = 1; i <= totalPages; i++) {
      pageItems.push(
        <button
          key={i}
          className={`mx-1 px-3 py-1 rounded-full ${
            i === currentPage
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageItems;
  };

  return (
    <div className="flex justify-center">
      <div className="flex items-center">
        <button
          className="mx-1 px-3 py-1 rounded-full bg-gray-200 text-gray-700"
          disabled={currentPage === 1}
          onClick={() => handlePageClick(currentPage - 1)}
        >
          Prev
        </button>
        {renderPageItems()}
        <button
          className="mx-1 px-3 py-1 rounded-full bg-gray-200 text-gray-700"
          disabled={currentPage === totalPages}
          onClick={() => handlePageClick(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomPagination;
