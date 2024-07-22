import React from 'react';


const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <ul className="pagination">
      {pageNumbers.map((pageNumber) => (
        <li
          key={pageNumber}
          className={pageNumber === currentPage ? 'active' : ''}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
    </ul>
  );
};

export default Pagination;