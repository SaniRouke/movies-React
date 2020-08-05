import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Alert } from 'antd';

export default function MoviesList({ children, className, currentPage, setPage }) {
  const alert = <Alert type="info" message="Movies not Found" style={{ paddingLeft: 50, fontSize: 30 }} />;
  const isDataEmpty = React.Children.count(children) > 0;
  return (
    <>
      {isDataEmpty ? <ul className={className}>{children}</ul> : alert}
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
