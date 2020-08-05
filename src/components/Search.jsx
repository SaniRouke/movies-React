import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Input } from 'antd';

export default function Search({ fetchData, disabled }) {
  const [searchValue, setSearchValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  });

  const handleSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const deb = debounce(fetchData, 400);
  return (
    <Input
      className="Search"
      ref={input}
      placeholder="Type to search..."
      disabled={disabled}
      value={searchValue}
      onChange={(event) => {
        handleSearchValue(event);
        deb(event.target.value);
      }}
    />
  );
}

Search.propTypes = {
  fetchData: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
