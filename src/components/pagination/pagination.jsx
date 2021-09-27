import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const {pageCount, onPageNumberClick} = props;
  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={3}
      onPageChange={onPageNumberClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;
