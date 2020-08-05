import React from 'react';
import PropTypes from 'prop-types';
import { Pagination, Alert } from 'antd';

export default function MoviesList({ error, children, className, currentPage, setPage }) {
  const isDataEmpty = React.Children.count(children) > 0;
  const alertEmpty = isDataEmpty ? null : (
    <Alert type="info" message="Movies not Found" style={{ paddingLeft: 50, fontSize: 30 }} />
  );
  const alertError = !error ? null : (
    <Alert type="error" message="The Internet may not be available" style={{ paddingLeft: 50, fontSize: 30 }} />
  );
  return (
    <>
      {alertError || alertEmpty || <ul className={className}>{children}</ul>}
      <Pagination className="Pagination" size="small" total={50} current={currentPage} onChange={setPage} />
    </>
  );
}
MoviesList.defaultProps = {
  error: null,
};

MoviesList.propTypes = {
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.any]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  className: PropTypes.string.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
