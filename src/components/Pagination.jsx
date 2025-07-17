import React from 'react';

function getPageNumbers(current, total, delta = 2) {
  const range = [];
  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }
  if (current - delta > 2) {
    range.unshift('...');
  }
  if (current + delta < total - 1) {
    range.push('...');
  }
  range.unshift(1);
  if (total > 1) range.push(total);
  return range;
}

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  if (totalPages <= 1) return null;
  const pageNumbers = getPageNumbers(currentPage, totalPages);

  return (
    <nav className="flex items-center gap-2 mt-4" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-1 rounded disabled:opacity-50 bg-yellow-200 hover:bg-yellow-300"
      >
        Prev
      </button>
      {pageNumbers.map((num, idx) =>
        num === '...' ? (
          <span key={idx} className="px-2">
            ...
          </span>
        ) : (
          <button
            key={num}
            onClick={() => onPageChange(num)}
            className={`px-2 py-1 rounded ${
              num === currentPage
                ? 'bg-yellow-400 text-white font-bold'
                : 'bg-yellow-100 hover:bg-yellow-300'
            }`}
            aria-current={num === currentPage ? 'page' : undefined}
          >
            {num}
          </button>
        )
      )}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-2 py-1 rounded disabled:opacity-50 bg-yellow-200 hover:bg-yellow-300"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
