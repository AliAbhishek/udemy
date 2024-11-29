import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationComponent = ({
  currentPage,
  totalCount,
  totalPages,
  onPageChange,
}) => {
  const getPageNumbers = () => {
    const delta = 2; // Number of pages to show on each side of the current page
    const range = [];
    const rangeWithDots = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        range.push(i);
      }
    }

    let l;
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  return (
    <Pagination>
      <Pagination.First
        onClick={() => onPageChange(0)}
        disabled={currentPage === 0}
      />
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 0}
      />
      {getPageNumbers().map((page, index) =>
        page === "..." ? (
          <Pagination.Ellipsis key={index} />
        ) : (
          <Pagination.Item
            key={index}
            active={page - 1 === currentPage}
            onClick={() => onPageChange(page - 1)}
            style={{ cursor: "pointer" }}
          >
            {page}
          </Pagination.Item>
        )
      )}
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages - 1}
      />
      <Pagination.Last
        onClick={() => onPageChange(totalPages - 1)}
        disabled={currentPage === totalPages - 1}
      />
    </Pagination>
  );
};

export default PaginationComponent;
