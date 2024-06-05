// src/components/Pagination.js
import React from "react";
interface IProps {
  page: number;
  totalPages: number;
  onPageChange: any;
}
const Pagination = ({ page, totalPages, onPageChange }: IProps) => {
  return (
    <div className="flex justify-center items-center mt-8">
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mr-2"
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-lg mx-2">
        {page} / {totalPages}
      </span>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 ml-2"
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
