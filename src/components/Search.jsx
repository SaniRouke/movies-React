import React, { useState, useRef, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { Input } from 'antd';

export default function Search({ fetchData, disabled }) {
  const [searchValue, setSearchValue] = useState('');
  const input = useRef(null);

  useEffect(() => {
    input.current.focus();
  });

  const debFetchData = useMemo(() => debounce(fetchData, 400), [fetchData]);

  const handleSearchValue = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    debFetchData(value);
  };

  return (
    <Input
      className="Search"
      ref={input}
      placeholder="Type to search..."
      disabled={disabled}
      value={searchValue}
      onChange={handleSearchValue}
    />
  );
}

Search.propTypes = {
  fetchData: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
