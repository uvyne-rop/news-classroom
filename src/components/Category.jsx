import React from "react";
import { useParams } from "react-router-dom"; // Import useParams hook
import NewsList from "./NewsList"; // Import NewsList component

function Category() {
  const params = useParams(); // Use useParams hook to get route parameters
  const { categoryName } = params;

  return (
    <div>
      <h2>{categoryName} Category</h2>
      
      <NewsList category={categoryName} />
    </div>
  );
}

export default Category;
