import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

export default function MoviesList({ children, className, currentPage, setPage }) {
  return (
    <>
      <ul className={className}>{children}</ul>
      <Pagination className="Pagination" size="small" total={50} current={currentPage} onChange={setPage} />
    </>
  );
}
MoviesList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
