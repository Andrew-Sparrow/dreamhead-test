import React from "react";
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {

  const handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * props.perPage);

    this.setState({offset: offset}, () => {
      this.loadCommentsFromServer();
    });
  };

  return (
    <ReactPaginate
      previousLabel={'previous'}
      nextLabel={'next'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={3}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;

